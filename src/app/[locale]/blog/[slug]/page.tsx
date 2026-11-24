import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { requireLocale } from "@/i18n/locale";
import { hreflangLanguages, localeUrl } from "@/lib/i18n-format";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  BLOG_POSTS,
  blogCopy,
  getBlogPost,
} from "@/lib/blog-posts";
import { SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from "@/lib/site";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = requireLocale(rawLocale);
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = localeUrl(locale, `/blog/${post.slug}`);
  const title = blogCopy(post.title, locale);
  const description = blogCopy(post.description, locale);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: hreflangLanguages(`/blog/${post.slug}`),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated,
      images: [
        {
          url: `${SITE_ORIGIN}${post.image}`,
          width: 512,
          height: 512,
          alt: blogCopy(post.imageAlt, locale),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_ORIGIN}${post.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale = requireLocale(rawLocale);
  setRequestLocale(locale);

  const post = getBlogPost(slug);
  if (!post) notFound();

  const t = await getTranslations("Blog");
  const tn = await getTranslations("Nav");
  const pageUrl = localeUrl(locale, `/blog/${post.slug}`);
  const title = blogCopy(post.title, locale);
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: tn("home"),
            item: localeUrl(locale, "/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: tn("blog"),
            item: localeUrl(locale, "/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: title,
        description: blogCopy(post.description, locale),
        datePublished: post.published,
        dateModified: post.updated,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          email: SUPPORT_EMAIL,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_ORIGIN}/magic-brawl.webp`,
          },
        },
        image: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}${post.image}`,
          width: 512,
          height: 512,
          caption: blogCopy(post.imageAlt, locale),
          ...imageObjectLicensing,
        },
        mainEntityOfPage: pageUrl,
        keywords: post.keywords.join(", "),
        inLanguage: locale,
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((item) => ({
          "@type": "Question",
          name: blogCopy(item.q, locale),
          acceptedAnswer: {
            "@type": "Answer",
            text: blogCopy(item.a, locale),
          },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id={`blog-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: tn("home"), href: "/" },
            { label: tn("blog"), href: "/blog" },
            { label: title, href: `/blog/${post.slug}` as "/blog/magic-brawl-guvenli-mi" },
          ]}
        />

        <header className="mt-6 mb-8">
          <p className="text-sm text-slate-500 mb-3">
            {post.updated} · {post.readMinutes} {t("minRead")}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-ink mb-4">{title}</h1>
          <p className="text-muted text-lg leading-relaxed">
            {blogCopy(post.excerpt, locale)}
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src={post.image}
              alt={blogCopy(post.imageAlt, locale)}
              width={220}
              height={220}
              className="object-contain w-40 h-40 md:w-52 md:h-52"
              priority
            />
          </div>
        </header>

        <div className="space-y-10">
          {post.sections.map((section) => (
            <section key={blogCopy(section.heading, locale)}>
              <h2 className="text-2xl font-bold text-accent mb-4">
                {blogCopy(section.heading, locale)}
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                {section.paragraphs.map((p) => (
                  <p key={blogCopy(p, locale).slice(0, 40)}>{blogCopy(p, locale)}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {post.faqs.length > 0 && (
          <section className="mt-12 bg-secondary rounded-xl p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-accent mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              {post.faqs.map((item) => (
                <div key={blogCopy(item.q, locale)}>
                  <h3 className="font-semibold text-ink mb-1">
                    {blogCopy(item.q, locale)}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {blogCopy(item.a, locale)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <p className="mt-10 text-muted">
          <Link href="/download-magic-brawl" className="text-accent hover:underline font-semibold">
            {tn("download")}
          </Link>
          {" · "}
          <Link href="/magic-brawl-ios" className="text-accent hover:underline font-semibold">
            {tn("ios")}
          </Link>
          {" · "}
          <Link href="/blog" className="text-accent hover:underline font-semibold">
            {t("backToBlog")}
          </Link>
        </p>

        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-accent mb-6">{t("relatedTitle")}</h2>
          <ul className="space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/blog/${item.slug}` as "/blog/magic-brawl-guvenli-mi"}
                  className="text-ink hover:text-accent font-medium"
                >
                  {blogCopy(item.title, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
