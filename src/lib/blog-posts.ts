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
    slug: "magic-brawl-pin-voucher-rehberi",
    title: {
      tr: "Magic Brawl Ücretsiz Pin ve Voucher Nasıl Alınır?",
      en: "How to Claim Free Magic Brawl Pins and Vouchers",
    },
    excerpt: {
      tr: "Six Seven, Fumey Frog, Goblin Clock ve diğer ücretsiz Magic Brawl pinlerini almak için kurulum şartı ve adım adım claim rehberi.",
      en: "Step-by-step guide to claiming Six Seven, Fumey Frog, Goblin Clock, and other free Magic Brawl pins.",
    },
    description: {
      tr: "Magic Brawl ücretsiz pin / voucher claim: oyunu yükleyin, resmi kupon sayfalarını kullanın, Six Seven Pin, MBS Fumey, Goblin ve Cool Glass rozetlerini kaçırmayın.",
      en: "Claim free Magic Brawl pins and vouchers after installing the game—Six Seven, MBS Fumey, Goblin, Cool Glass, and more.",
    },
    image: "/pin-wizard-67.webp",
    imageAlt: {
      tr: "Magic Brawl Six Seven ücretsiz pin",
      en: "Magic Brawl Six Seven free pin",
    },
    published: "2026-11-15",
    updated: "2026-11-24",
    readMinutes: 6,
    keywords: ["magic brawl pin", "magic brawl voucher", "magic brawl ücretsiz rozet"],
    sections: [
      {
        heading: {
          tr: "Önce Magic Brawl kurulu olmalı",
          en: "Install Magic Brawl first",
        },
        paragraphs: [
          {
            tr: "Ücretsiz pin ve voucher kampanyaları genellikle oyunun cihazınızda kurulu olmasını ister. Android APK’yı indirip kurun, hesabınızı oluşturun, sonra claim bağlantılarına geçin. Kurulum yoksa kuponlar boşa gidebilir.",
            en: "Most free pin campaigns require Magic Brawl installed and an account created before claim links work.",
          },
        ],
      },
      {
        heading: {
          tr: "Hangi pinler öne çıkıyor?",
          en: "Which pins are featured?",
        },
        paragraphs: [
          {
            tr: "Toplulukta sık görülen ücretsiz rozetler: Six Seven Pin (sihirbaz), MBS Fumey takım pin’i, Fumey Frog, Goblin Clock, Goblin Pin ve Cool Glass Pin. Görseller magicbrawl.tr ana sayfasında da yer alır.",
            en: "Popular free pins include Six Seven, MBS Fumey, Fumey Frog, Goblin Clock, Goblin, and Cool Glass—also shown on the magicbrawl.tr homepage.",
          },
          {
            tr: "Claim işlemi resmi Magic Team voucher sayfalarından veya doğrulanmış kampanya linklerinden yapılır. Üçüncü taraf “bedava elmas generator” sitelerine itibar etmeyin; bunlar genelde dolandırıcılıktır.",
            en: "Use official Magic Team voucher pages. Ignore third-party “gem generator” sites—they are usually scams.",
          },
        ],
      },
      {
        heading: {
          tr: "Claim sonrası görünmüyorsa",
          en: "If the pin does not appear",
        },
        paragraphs: [
          {
            tr: "Oyunu tamamen kapatıp yeniden açın, internet bağlantısını kontrol edin ve doğru Magic Brawl hesabıyla giriş yaptığınızı doğrulayın. Hâlâ yoksa destek kanalına (Telegram / sitemizdeki iletişim) sürüm numaranızla yazın.",
            en: "Force-close the app, check connectivity, confirm the correct account, then contact support with your version number if needed.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: {
          tr: "Pinler gerçek para ister mi?",
          en: "Do pins cost real money?",
        },
        a: {
          tr: "Listelenen ücretsiz pin kampanyaları bağış mağazasından bağımsızdır. Bağış (donation) tamamen isteğe bağlıdır; pin claim için zorunlu ödeme yoktur.",
          en: "Featured free pin campaigns do not require payment. Donations are optional and separate.",
        },
      },
    ],
  },
  {
    slug: "magic-brawl-season-23-starr-toon",
    title: {
      tr: "Magic Brawl Sezon 23 Starr Toon Studios: Kit, Mico, Larry Rehberi",
      en: "Magic Brawl Season 23 Starr Toon Studios: Kit, Mico, Larry Guide",
    },
    excerpt: {
      tr: "v54.243 ile gelen Starr Toon Studios, Kit erken erişim, ücretsiz Mico, Larry & Lawrie ve Win Streak sistemi hakkında Türkçe güncelleme özeti.",
      en: "Turkish-friendly update notes for Starr Toon Studios, Kit early access, free Mico, Larry & Lawrie, and Win Streak on v54.243.",
    },
    description: {
      tr: "Magic Brawl Sezon 22–23 Starr Toon Studios içeriği: yeni karakterler, hediye haftaları, dişliler ve v54.243’te neler değişti.",
      en: "Magic Brawl Seasons 22–23 Starr Toon Studios: new characters, gift weeks, gears, and what changed in v54.243.",
    },
    image: "/fumey-frog-pin.webp",
    imageAlt: {
      tr: "Magic Brawl Sezon 23 Starr Toon içeriği",
      en: "Magic Brawl Season 23 Starr Toon content",
    },
    published: "2026-11-10",
    updated: "2026-11-24",
    readMinutes: 7,
    keywords: [
      "magic brawl sezon 23",
      "magic brawl starr toon",
      "magic brawl kit mico larry",
    ],
    sections: [
      {
        heading: {
          tr: "Starr Toon Studios ne getiriyor?",
          en: "What Starr Toon Studios adds",
        },
        paragraphs: [
          {
            tr: "Magic Brawl v54.243, Sezon 22 ve 23 Starr Toon Studios temasını özel sunucuya taşıyor. Oyuncular çevrimiçi savaşlarda güncel harita ve etkinlik ritmine yakın bir deneyim ararken sınırsız kaynak avantajını koruyor.",
            en: "v54.243 brings Seasons 22–23 Starr Toon Studios themes to the private server while keeping unlimited resources.",
          },
          {
            tr: "Öne çıkan karakterler: Kit (erken erişim), Mico (ücretsiz), Larry & Lawrie (sezon 23’te). Ayrıca yeni dişliler, karakter dişlileri ve genişletilmiş yıldız gücü / alet havuzu duyuruluyor.",
            en: "Highlights include Kit early access, free Mico, Larry & Lawrie in season 23, plus new gears and expanded star powers/gadgets.",
          },
        ],
      },
      {
        heading: {
          tr: "Win Streak ve Üç Hediye Haftası",
          en: "Win Streak and Three Gift Weeks",
        },
        paragraphs: [
          {
            tr: "Win Streak sistemi art arda galibiyetlerde ekstra kupa kazandırır; ladder tırmanışı daha ödüllendirici hissedilir. Üç Hediye Haftası’nda her gün giriş yaparak ödül toplayabilirsiniz—aktif sezonlarda kaçırmayın.",
            en: "Win Streak adds trophy bonuses for consecutive wins. Three Gift Weeks reward daily logins during active events.",
          },
        ],
      },
      {
        heading: {
          tr: "Nasıl güncellenir?",
          en: "How to update",
        },
        paragraphs: [
          {
            tr: "İlerlemeyi korumak için eski sürümü silmeden yeni APK’yı üzerine kurun. Detaylı Android adımları için Magic Brawl İndir sayfamıza, iPhone için iOS rehberine bakın.",
            en: "Install the new APK over the existing build to keep progress. See our Download and iOS guides for full steps.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: {
          tr: "Sezon 23 için sıfırdan hesap mı açmalıyım?",
          en: "Do I need a new account for Season 23?",
        },
        a: {
          tr: "Hayır. Mevcut Magic Brawl hesabınızla güncelleyebilirsiniz. Sorun olursa önbelleği temizleyip yeniden giriş deneyin.",
          en: "No—update on your existing Magic Brawl account. Clear cache and re-login if something sticks.",
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
