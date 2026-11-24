export type BlogLocaleCopy = {
  tr: string;
  en: string;
};

export type BlogPost = {
  slug: string;
  title: BlogLocaleCopy;
  excerpt: BlogLocaleCopy;
  description: BlogLocaleCopy;
  image: string;
  imageAlt: BlogLocaleCopy;
  published: string;
  updated: string;
  readMinutes: number;
  keywords: string[];
  sections: Array<{
    heading: BlogLocaleCopy;
    paragraphs: BlogLocaleCopy[];
  }>;
  faqs: Array<{ q: BlogLocaleCopy; a: BlogLocaleCopy }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "magic-brawl-guvenli-mi",
    title: {
      tr: "Magic Brawl Güvenli mi? APK İndirmeden Önce Bilmeniz Gerekenler",
      en: "Is Magic Brawl Safe? What to Know Before You Download the APK",
    },
    excerpt: {
      tr: "Magic Brawl özel sunucu mu, resmi mi? Yasak riski, hesap güvenliği ve güvenilir indirme kaynakları hakkında net Türkçe rehber.",
      en: "Clear guidance on Magic Brawl private-server safety, ban risk, account hygiene, and trusted download sources.",
    },
    description: {
      tr: "Magic Brawl güvenli mi diye merak edenler için: sideload riskleri, resmi Brawl Stars hesabını koruma, güvenilir APK kaynağı ve Türkiye oyuncuları için pratik güvenlik adımları.",
      en: "Is Magic Brawl safe? Sideload risks, protecting your official Brawl Stars account, trusted APK sources, and practical safety steps.",
    },
    image: "/magic-brawl.webp",
    imageAlt: {
      tr: "Magic Brawl güvenlik rehberi kapak görseli",
      en: "Magic Brawl safety guide cover art",
    },
    published: "2026-11-20",
    updated: "2026-11-24",
    readMinutes: 8,
    keywords: ["magic brawl güvenli mi", "magic brawl apk güvenlik", "magic brawl yasak"],
    sections: [
      {
        heading: {
          tr: "Magic Brawl nedir ve neden güvenlik sorusu çıkıyor?",
          en: "What Magic Brawl is and why safety comes up",
        },
        paragraphs: [
          {
            tr: "Magic Brawl, Magic Team tarafından geliştirilen Brawl Stars tarzı bir özel sunucu istemcisidir. Google Play’de resmi Brawl Stars olarak listelenmez; Android’de APK sideload veya iOS’ta IPA sideload ile kurulur. Bu yüzden Türkiye’de arama yapanlar sıkça “Magic Brawl güvenli mi?” diye sorar.",
            en: "Magic Brawl is a Brawl Stars-style private-server client by Magic Team. It is not listed as official Brawl Stars on Google Play, so players ask whether Magic Brawl is safe before sideloading.",
          },
          {
            tr: "Güvenlik iki ayrı konudur: dosyanın kendisi (zararlı yazılım riski) ve oyun hesabınızın korunması (resmi Supercell kimlik bilgilerini asla özel sunucuya yazmamak). magicbrawl.tr olarak indirme rehberlerinde her iki riski de açık yazarız.",
            en: "Safety splits into two topics: the file itself and protecting your official account. Never enter Supercell credentials into a private-server client.",
          },
        ],
      },
      {
        heading: {
          tr: "Güvenilir kaynaktan indirmek neden kritik?",
          en: "Why trusted download sources matter",
        },
        paragraphs: [
          {
            tr: "Aynı isimle dolaşan kopya APK’lar olabilir. En güvenli yol resmi Magic Team indirme bağlantısını kullanmak veya bu sitedeki yönlendirmeyi takip etmektir. Bilinmeyen kısaltılmış linklere, rastgele Telegram dosyalarına veya reklam cloaking’li “indir” butonlarına tıklamayın.",
            en: "Copycat APKs can reuse the same name. Prefer the official Magic Team download or our disclosed links—avoid cloaked ads and random Telegram files.",
          },
          {
            tr: "Kurulumdan sonra “Bilinmeyen uygulamalar” iznini yalnızca indirdiğiniz tarayıcı veya dosya yöneticisi için açın; iş bitince kapatın. Play Protect uyarısı özel sunucu paketlerinde normal olabilir; yine de dosyayı bilerek seçtiğinizden emin olun.",
            en: "Limit unknown-sources permission to the installer you used, then revoke it. Play Protect warnings are common for private-server packages.",
          },
        ],
      },
      {
        heading: {
          tr: "Resmi Brawl Stars hesabım risk altında mı?",
          en: "Is my official Brawl Stars account at risk?",
        },
        paragraphs: [
          {
            tr: "Magic Brawl kendi sunucu veritabanında ilerleme tutar. Resmi Brawl Stars hesabınız ayrıdır. Risk, aynı Supercell e-posta/şifresini özel sunucuya yazarsanız artar. Her zaman Magic Brawl için ayrı bir takma ad ve şifre oluşturun.",
            en: "Magic Brawl progress lives on its own server. Risk rises if you reuse official Supercell credentials—create a throwaway private-server login instead.",
          },
          {
            tr: "Özel sunucu kullanımı resmi oyunun kullanım şartlarına aykırı olabilir. Magic Brawl’da yasaklanmak resmi ladder profilinizi otomatik silmez; fakat resmi istemciye cheat/mod bağlamak ayrı bir konudur ve önerilmez.",
            en: "Private servers can conflict with official ToS. A private-server ban does not automatically wipe official ladder progress if accounts stay separate.",
          },
        ],
      },
      {
        heading: {
          tr: "Türkiye oyuncuları için pratik kontrol listesi",
          en: "Practical checklist for players",
        },
        paragraphs: [
          {
            tr: "1) magicbrawl.tr üzerinden sürüm bilgisini doğrulayın (şu an v54.243, ~471 MB). 2) APK’yı resmi kaynaktan alın. 3) Ayrı hesap açın. 4) SMS OTP / banka bilgisi istemeyen bir istemciye kişisel veri vermeyin. 5) Güncellemeleri üzerine kurulumla yapın; ilerleme kaybını azaltır.",
            en: "Verify version (v54.243, ~471 MB), download from a trusted source, use a separate account, never share banking OTPs, and update by installing over the existing build.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: {
          tr: "Magic Brawl virüs içerir mi?",
          en: "Does Magic Brawl contain viruses?",
        },
        a: {
          tr: "Resmi Magic Team paketleri toplulukta uzun süredir kullanılır; yine de her APK sideload’da risk vardır. Sadece güvendiğiniz kaynaktan indirin ve antivirüs taraması yapın.",
          en: "Community builds from Magic Team are widely used, but every sideload has residual risk—stick to trusted sources and scan the file.",
        },
      },
      {
        q: {
          tr: "Magic Brawl kullandığım için resmi hesabım ban yer mi?",
          en: "Can I get banned on official Brawl Stars for using Magic Brawl?",
        },
        a: {
          tr: "Hesapları ayırırsanız resmi profiliniz özel sunucu veritabanından etkilenmez. Resmi istemciye cheat yüklemek veya hesap bilgilerini karıştırmak riski yükseltir.",
          en: "Keeping logins separate protects the official profile. Mixing credentials or cheating on retail raises risk.",
        },
      },
    ],
  },
  {
    slug: "magic-brawl-vs-nulls-brawl",
    title: {
      tr: "Magic Brawl vs Null’s Brawl: Hangisi Daha İyi? Karşılaştırma",
      en: "Magic Brawl vs Null’s Brawl: Which Private Server Fits You?",
    },
    excerpt: {
      tr: "Sınırsız kaynak, güncelleme hızı, nostalji deneyimi ve topluluk açısından Magic Brawl ile Null’s Brawl farklarını Türkçe tabloyla inceleyin.",
      en: "Compare Magic Brawl and Null’s Brawl on resources, update cadence, nostalgia feel, and community.",
    },
    description: {
      tr: "Magic Brawl mi Null’s Brawl mi? Sezon 23 Starr Toon, benzersiz brawler’lar, Retro seçenekleri ve Türkiye oyuncuları için pratik seçim rehberi.",
      en: "Magic Brawl or Null’s Brawl? Season 23 Starr Toon, unique brawlers, Retro options, and a practical pick guide.",
    },
    image: "/fumey-team-pin.webp",
    imageAlt: {
      tr: "Magic Brawl ve Null’s Brawl karşılaştırma görseli",
      en: "Magic Brawl versus Null’s Brawl comparison art",
    },
    published: "2026-11-18",
    updated: "2026-11-24",
    readMinutes: 9,
    keywords: ["magic brawl vs nulls brawl", "magic brawl nulls fark", "nulls brawl alternatif"],
    sections: [
      {
        heading: {
          tr: "Kısa özet: iki özel sunucu, iki farklı his",
          en: "Quick take: two servers, two vibes",
        },
        paragraphs: [
          {
            tr: "Null’s Brawl genellikle “her şey açık, güncel Brawl Stars hissi” arayanlar için bilinen bir seçenek. Magic Brawl ise Magic Team’in altın çağ / özel içerik vurgusuyla öne çıkar: sınırsız elmas-altın, sezon içerikleri, ücretsiz pinler ve düzenli istemci güncellemeleri.",
            en: "Null’s Brawl often feels like an unlocked current Brawl Stars sandbox. Magic Brawl leans into Magic Team’s golden-era reboot, unlimited resources, free pins, and monthly client updates.",
          },
          {
            tr: "Türkiye SERP’inde her iki isim de yan yana aranır. Doğru seçim “hangisi daha güçlü” değil, “hangi deneyimi istiyorsunuz” sorusuna bağlıdır.",
            en: "Turkish searchers compare both brands side by side—the better pick depends on the experience you want.",
          },
        ],
      },
      {
        heading: {
          tr: "Özellik karşılaştırması",
          en: "Feature comparison",
        },
        paragraphs: [
          {
            tr: "Magic Brawl (v54.243): Starr Toon Studios Sezon 22–23, Kit / Mico / Larry & Lawrie erişimi, Win Streak kupaları, Üç Hediye Haftası, ücretsiz pin-voucher kampanyaları, Android + iOS + PC emülatör yolu.",
            en: "Magic Brawl (v54.243): Starr Toon Seasons 22–23, Kit/Mico/Larry & Lawrie, Win Streak trophies, Three Gift Weeks, free pin vouchers, Android + iOS + PC emulator path.",
          },
          {
            tr: "Null’s Brawl: genellikle daha yüksek sürüm numaraları ve “tüm brawler’lar + kostümler açık” vaadiyle listelenir. magicbrawl.app gibi siteler her iki projeyi de yan yana sunar; bu da oyuncuların karşılaştırma aramasını güçlendirir.",
            en: "Null’s Brawl listings often emphasize higher version numbers and full unlocks. Many hubs list both projects side by side.",
          },
          {
            tr: "Nostalji istiyorsanız aynı ekosistemde Retro Brawl (eski Brawl Stars hissi) seçeneği de konuşulur. Klasik 2018 deneyimi arıyorsanız Retro; modern sezon + Magic Team içerikleri için Magic Brawl mantıklıdır.",
            en: "Want nostalgia? Retro Brawl recreates early Brawl Stars. Prefer modern seasons plus Magic Team exclusives? Choose Magic Brawl.",
          },
        ],
      },
      {
        heading: {
          tr: "Kim Magic Brawl seçmeli?",
          en: "Who should choose Magic Brawl?",
        },
        paragraphs: [
          {
            tr: "Sezon temalı içerik, ücretsiz pin toplama, arkadaşlarla çevrimiçi maç ve Türkçe rehberlerle net kurulum isteyenler Magic Brawl’a yönelsin. PC’de BlueStacks ile oynamak veya iOS IPA denemek isteyenler için de net adımlar magicbrawl.tr’de hazır.",
            en: "Pick Magic Brawl for seasonal content, free pins, online friend battles, and clear Android/iOS/PC install guides on magicbrawl.tr.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: {
          tr: "Magic Brawl Null’s Brawl’dan daha mı iyi?",
          en: "Is Magic Brawl better than Null’s Brawl?",
        },
        a: {
          tr: "Objektif tek bir “en iyi” yok. Magic Brawl sezon + pin + Magic Team içeriğiyle; Null’s Brawl ise geniş unlock ve güncel sürüm algısıyla öne çıkar. Tercihinizi oynanış hedefinize göre yapın.",
          en: "There is no single winner—Magic Brawl shines on seasonal Magic Team content; Null’s often wins on broad unlocks. Match the server to your goal.",
        },
      },
      {
        q: {
          tr: "İkisini aynı telefona kurabilir miyim?",
          en: "Can I install both on one phone?",
        },
        a: {
          tr: "Paket adları farklı olsa da birden fazla özel sunucu istemcisi çakışma yaratabilir. Temiz kurulum için birini kaldırıp diğerini yüklemek daha az sorun çıkarır.",
          en: "Multiple private-server clients can conflict—uninstalling one before installing another is safer.",
        },
      },
    ],
  },
  {
    slug: "hileli-brawl-stars-2026",
    title: {
      tr: "Hileli Brawl Stars 2026: Magic Brawl Özel Sunucu Alternatifi",
      en: "Hileli Brawl Stars 2026: Magic Brawl Private Server Alternative",
    },
    excerpt: {
      tr: "Türkiye’de hileli Brawl Stars 2026 arayanlar için: resmi oyuna cheat yüklemek yerine Magic Brawl private server ile sınırsız kaynak nasıl çalışır?",
      en: "For Turkish searches of hileli Brawl Stars 2026: how Magic Brawl private server unlocks resources without cheating the official client.",
    },
    description: {
      tr: "Hileli Brawl Stars 2026 araması genelde sınırsız elmas/brawler ister. Magic Brawl APK indirerek ayrı özel sunucuda oyna; resmi hesabını karıştırma, güvenlik adımlarını uygula.",
      en: "Hileli Brawl Stars 2026 intent usually means unlimited resources. Use Magic Brawl as a separate private server—don’t mix official credentials.",
    },
    image: "/magic-brawl.webp",
    imageAlt: {
      tr: "Hileli Brawl Stars 2026 için Magic Brawl özel sunucu",
      en: "Magic Brawl private server for hileli Brawl Stars 2026 searches",
    },
    published: "2026-11-24",
    updated: "2026-11-24",
    readMinutes: 8,
    keywords: [
      "hileli brawl stars 2026",
      "hileli brawl stars",
      "magic brawl apk",
      "brawl stars private server",
    ],
    sections: [
      {
        heading: {
          tr: "“Hileli Brawl Stars” araması ne anlama geliyor?",
          en: "What hileli Brawl Stars searches usually mean",
        },
        paragraphs: [
          {
            tr: "Türkiye’de hileli Brawl Stars 2026 sorgusu çoğu zaman resmi istemciye cheat menüsü aramak değil; sınırsız elmas, açık brawler ve paywall’sız oynanış istemektir. Magic Brawl bu talebi Brawl Stars tarzı bir özel sunucu (private server) olarak karşılar.",
            en: "In Turkey, hileli Brawl Stars 2026 often means unlimited gems and unlocked brawlers—not injecting cheats into the retail client. Magic Brawl answers that as a private server.",
          },
          {
            tr: "Resmi Brawl Stars’a hile yüklemek hesap banı ve güvenlik riski taşır. Magic Brawl ise kendi sunucusuna bağlanan ayrı bir APK’dır; ladder ilerlemeniz resmi Supercell profilinizden ayrı tutulur.",
            en: "Cheating on official Brawl Stars risks bans. Magic Brawl is a separate APK talking to its own hosts, so retail progress stays isolated when logins stay separate.",
          },
        ],
      },
      {
        heading: {
          tr: "Magic Brawl neden bu aramaya uyuyor?",
          en: "Why Magic Brawl fits this intent",
        },
        paragraphs: [
          {
            tr: "Magic Brawl APK ile sınırsız kaynak, Sezon 22–23 içerikleri, çevrimiçi maçlar ve ücretsiz pin kampanyaları gelir. Bu, “hile menüsü” vaat eden şüpheli tool’lardan daha net bir ürün konumudur: indir, kur, özel sunucu hesabı aç, oyna.",
            en: "Magic Brawl APK brings unlimited resources, current seasons, online battles, and free pins—clearer than shady injectors: download, install, create a private-server account, play.",
          },
          {
            tr: "Türkçe kurulum için magicbrawl.tr ana sayfası ve Magic Brawl APK İndir rehberi adım adım sideload’u anlatır. Dosya Magic Team kaynağından (magicbrawl.gg) gelir.",
            en: "Turkish install steps live on magicbrawl.tr; the APK comes from Magic Team’s magicbrawl.gg link.",
          },
        ],
      },
      {
        heading: {
          tr: "Güvenli kullanım kontrol listesi",
          en: "Safe-use checklist",
        },
        paragraphs: [
          {
            tr: "1) Yalnızca güvendiğiniz indirme yolunu kullanın. 2) Resmi Supercell e-posta/şifresini Magic Brawl’a yazmayın. 3) Bilinmeyen kaynak iznini kurulumdan sonra kapatın. 4) “Elmas generator” sitelerinden uzak durun. Detay için Magic Brawl güvenli mi yazımıza bakın.",
            en: "Use trusted downloads, never reuse Supercell passwords, revoke unknown sources after install, skip gem-generator scams—see our safety article.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: {
          tr: "Hileli Brawl Stars APK ile Magic Brawl aynı şey mi?",
          en: "Is hileli Brawl Stars APK the same as Magic Brawl?",
        },
        a: {
          tr: "Piyasada birçok “hileli” APK ismi dolaşır. Magic Brawl, Magic Team’in bilinen özel sunucu markasıdır; rastgele Telegram dosyalarından ayırın.",
          en: "Many random “hileli” APKs circulate. Magic Brawl is Magic Team’s known private-server brand—don’t confuse it with random Telegram files.",
        },
      },
      {
        q: {
          tr: "2026’da hâlâ güncelleniyor mu?",
          en: "Is it still updated in 2026?",
        },
        a: {
          tr: "Evet. magicbrawl.tr’de listelenen sürüm (ör. v54.243) ve sezon notları güncel istemciyi takip eder.",
          en: "Yes—version and season notes on magicbrawl.tr track the current client.",
        },
      },
    ],
  },
  {
    slug: "eski-brawl-stars-apk",
    title: {
      tr: "Eski Brawl Stars APK vs Magic Brawl: Eski Sürüm mü, Güncel Özel Sunucu mu?",
      en: "Old Brawl Stars APK vs Magic Brawl: Nostalgia or Modern Private Server?",
    },
    excerpt: {
      tr: "Eski Brawl Stars APK ve Brawl Stars eski sürüm arayanlar için net ayrım: nostalji (Retro) ile Magic Brawl’ın güncel private server deneyimi.",
      en: "Clear split for old Brawl Stars APK seekers: Retro nostalgia vs Magic Brawl’s modern private server.",
    },
    description: {
      tr: "Eski Brawl Stars APK / eski sürüm mü istiyorsunuz, yoksa sınırsız kaynaklı güncel Magic Brawl mu? Türkiye arama niyetine göre doğru seçimi ve indirme yolunu anlatıyoruz.",
      en: "Want eski Brawl Stars APK nostalgia or modern unlimited Magic Brawl? Match the Turkish search intent to the right download path.",
    },
    image: "/goblin-clock-pin.webp",
    imageAlt: {
      tr: "Eski Brawl Stars APK ve Magic Brawl karşılaştırması",
      en: "Old Brawl Stars APK versus Magic Brawl",
    },
    published: "2026-11-24",
    updated: "2026-11-24",
    readMinutes: 7,
    keywords: [
      "eski brawl stars apk",
      "brawl stars eski sürüm",
      "magic brawl",
      "retro brawl",
    ],
    sections: [
      {
        heading: {
          tr: "Eski sürüm arayanlar ne istiyor?",
          en: "What old-version searchers want",
        },
        paragraphs: [
          {
            tr: "Eski Brawl Stars APK ve Brawl Stars eski sürüm sorguları genelde 2018 dönemini, klasik brawler setini ve nostaljik haritaları arar. Bu niyet dünyada “old brawl stars” / “retro brawl” ile örtüşür.",
            en: "Eski Brawl Stars APK searches usually want 2018-era nostalgia—same intent as old/retro Brawl Stars abroad.",
          },
          {
            tr: "Magic Brawl’ın ana vaadi nostalji değil: güncel sezona yakın içerik + sınırsız kaynaklı özel sunucu. Yanlış sayfada eski sürüm vaat etmek hem kullanıcıyı hem SEO’yu bozar.",
            en: "Magic Brawl’s promise is modern seasons plus unlimited resources—not classic 2018. Don’t fake an old-version download page.",
          },
        ],
      },
      {
        heading: {
          tr: "Ne zaman Magic Brawl, ne zaman eski/Retro?",
          en: "When to pick Magic Brawl vs old/Retro",
        },
        paragraphs: [
          {
            tr: "Magic Brawl’ı seçin: Sezon 23, Kit/Mico/Larry, Win Streak, çevrimiçi ladder, ücretsiz pinler ve “hileli / sınırsız” hissi istiyorsanız. APK indir rehberi magicbrawl.tr’de.",
            en: "Choose Magic Brawl for Season 23 content, unlimited resources, online ladder, and free pins.",
          },
          {
            tr: "Eski Brawl Stars APK / Retro hissi istiyorsanız: klasik UI ve erken brawler listesi ayrı bir üründür (Retro Brawl ekosisteminde konuşulur). magicbrawl.tr Magic Brawl’a odaklanır; sizi yanlışlıkla “eski sürüm” diye yanıltmayız.",
            en: "Want classic UI? That’s a Retro-style product—magicbrawl.tr stays honest and focuses on Magic Brawl.",
          },
        ],
      },
      {
        heading: {
          tr: "Güvenlik: rastgele eski APK tuzakları",
          en: "Safety: random old-APK traps",
        },
        paragraphs: [
          {
            tr: "“Eski sürüm” diye paylaşılan bilinmeyen APK’lar sıkça zararlı yazılım veya kimlik avı barındırır. Magic Brawl için bile yalnızca doğrulanmış indirme yolunu kullanın; resmi hesap şifrenizi üçüncü taraf istemcilere yazmayın.",
            en: "Random “old version” APKs are often malware. Even for Magic Brawl, use trusted links and never enter retail passwords.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: {
          tr: "Magic Brawl eski Brawl Stars APK mı?",
          en: "Is Magic Brawl an old Brawl Stars APK?",
        },
        a: {
          tr: "Hayır. Magic Brawl güncel özel sunucu istemcisidir; eski sürüm / Retro deneyiminden farklıdır.",
          en: "No—Magic Brawl is a modern private-server client, not an old-version rebuild.",
        },
      },
      {
        q: {
          tr: "Eski sürüm ararken Magic Brawl indirmeli miyim?",
          en: "Should I download Magic Brawl if I want the old version?",
        },
        a: {
          tr: "Yalnızca modern sınırsız özel sunucu istiyorsanız evet. Saf nostalji arıyorsanız Retro tarzı eski istemciye bakın; niyeti karıştırmayın.",
          en: "Only if you want a modern unlimited private server. Pure nostalgia needs a Retro-style client instead.",
        },
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Turkish-only site — always return Turkish copy. */
export function blogCopy<T extends BlogLocaleCopy>(
  copy: T,
  _locale?: string
): string {
  return copy.tr;
}
