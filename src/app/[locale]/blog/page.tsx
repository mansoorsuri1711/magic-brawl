import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { requireLocale } from "@/i18n/locale";
import { hreflangLanguages, localeUrl } from "@/lib/i18n-format";
import { BLOG_POSTS, blogCopy } from "@/lib/blog-posts";
import { SITE_NAME } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "Meta" });
  const url = localeUrl(locale, "/blog");

  return {
    title: t("blogTitle"),
    description: t("blogDescription"),
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/blog"),
    },
    openGraph: {
      title: t("blogTitle"),
      description: t("blogDescription"),
      url,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}

export default async function BlogIndexPage({ params }: PageProps) {
  const locale = requireLocale((await params).locale);
  setRequestLocale(locale);

  const t = await getTranslations("Blog");
  const tn = await getTranslations("Nav");

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("blog"), href: "/blog" },
        ]}
      />

      <header className="mt-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">{t("h1")}</h1>
        <p className="text-muted text-lg max-w-3xl leading-relaxed">{t("intro")}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:border-accent/40 transition-colors"
          >
            <Link href={`/blog/${post.slug}` as "/blog/magic-brawl-guvenli-mi"}>
              <div className="flex gap-5 p-5">
                <Image
                  src={post.image}
                  alt={blogCopy(post.imageAlt, locale)}
                  width={112}
                  height={112}
                  className="object-contain w-24 h-24 flex-shrink-0"
                />
                <div>
                  <h2 className="text-xl font-semibold text-ink mb-2">
                    {blogCopy(post.title, locale)}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    {blogCopy(post.excerpt, locale)}
                  </p>
                  <span className="text-accent text-sm font-semibold">
                    {t("readMore")} · {post.readMinutes} {t("minRead")}
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
