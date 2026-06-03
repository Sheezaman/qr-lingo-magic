import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import aalimLogo from "@/assets/aalim-logo.png.asset.json";

function BrandHeader() {
  return (
    <div className="mx-auto flex max-w-md items-center gap-2 px-5 pt-4 pb-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-border">
        <img src={aalimLogo.url} alt="Aalim logo" className="h-6 w-6 object-contain" />
      </div>
      <span className="text-lg font-bold tracking-tight text-foreground">Aalim</span>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Live Translation" },
      { name: "description", content: "Scan, choose your language, and follow along with a live translation." },
      { property: "og:title", content: "Live Translation" },
      { property: "og:description", content: "Scan, choose your language, and follow along with a live translation." },
    ],
  }),
  component: Index,
});

type LangKey =
  | "urdu"
  | "turkish"
  | "hindi"
  | "bangladeshi"
  | "indonesian"
  | "malayalam"
  | "chinese"
  | "farsi"
  | "kannada"
  | "spanish"
  | "french"
  | "albanian"
  | "russian"
  | "malay"
  | "pashto"
  | "dari";

const LANGUAGES: { key: LangKey; label: string; native: string; flag: string }[] = [
  { key: "urdu", label: "Urdu", native: "اردو", flag: "🇵🇰" },
  { key: "turkish", label: "Turkish", native: "Türkçe", flag: "🇹🇷" },
  { key: "hindi", label: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  { key: "bangladeshi", label: "Bangladeshi", native: "বাংলা", flag: "🇧🇩" },
  { key: "indonesian", label: "Indonesian", native: "Bahasa Indonesia", flag: "🇮🇩" },
  { key: "malayalam", label: "Malayalam", native: "മലയാളം", flag: "🇮🇳" },
  { key: "chinese", label: "Chinese", native: "中文", flag: "🇨🇳" },
  { key: "farsi", label: "Farsi", native: "فارسی", flag: "🇮🇷" },
  { key: "kannada", label: "Kannada", native: "ಕನ್ನಡ", flag: "🇮🇳" },
  { key: "spanish", label: "Spanish", native: "Español", flag: "🇪🇸" },
  { key: "french", label: "French", native: "Français", flag: "🇫🇷" },
  { key: "albanian", label: "Albanian", native: "Shqip", flag: "🇦🇱" },
  { key: "russian", label: "Russian", native: "Русский", flag: "🇷🇺" },
  { key: "malay", label: "Malaysian", native: "Bahasa Melayu", flag: "🇲🇾" },
  { key: "pashto", label: "Pashto", native: "پښتو", flag: "🇦🇫" },
  { key: "dari", label: "Dari", native: "دری", flag: "🇦🇫" },
];

// Source phrases (Arabic) with translations per language.
const SOURCE_PHRASES = [
  "وَقُلتُ نَفْسًا فَنَجَّينَاكَ مِنَ الْغَمِّ",
  "فَلَبِثْتَ سِنِينَ فِي أَهْلِ مَدْيَنَ",
  "ثُمَّ جِئْتَ عَلَىٰ قَدَرٍ يَا مُوسَىٰ",
  "وَاصْطَنَعْتُكَ لِنَفْسِي",
  "اذْهَبْ أَنتَ وَأَخُوكَ بِآيَاتِي",
  "وَلَا تَنِيَا فِي ذِكْرِي",
  "اذْهَبَا إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ",
  "فَقُولَا لَهُ قَوْلًا لَّيِّنًا لَّعَلَّهُ يَتَذَكَّرُ",
];

const TRANSLATIONS: Record<LangKey, string[]> = {
  urdu: [
    "اور تم نے ایک جان کو مار ڈالا تو ہم نے تمہیں غم سے نجات دی",
    "پھر تم کئی سال اہلِ مدین میں ٹھہرے رہے",
    "پھر اے موسیٰ تم مقررہ وقت پر آئے",
    "اور میں نے تمہیں اپنے لیے بنایا",
    "تم اور تمہارا بھائی میری نشانیاں لے کر جاؤ",
    "اور میرے ذکر میں سستی نہ کرو",
    "فرعون کے پاس جاؤ، بے شک وہ سرکش ہو گیا ہے",
    "اس سے نرمی سے بات کرو، شاید وہ نصیحت پکڑے",
  ],
  turkish: [
    "Bir cana kıymıştın da seni o tasadan kurtardık",
    "Sonra Medyen halkı arasında yıllarca kaldın",
    "Sonra takdir edilmiş bir vakitte geldin, ey Musa",
    "Ve seni kendim için seçtim",
    "Sen ve kardeşin ayetlerimle gidin",
    "Beni anmakta gevşeklik göstermeyin",
    "Firavun'a gidin, çünkü o azdı",
    "Ona yumuşak söz söyleyin, belki öğüt alır",
  ],
  hindi: [
    "और तुमने एक जान ले ली थी, फिर हमने तुम्हें ग़म से छुड़ाया",
    "फिर तुम मदयन वालों में कई बरस ठहरे",
    "फिर तुम तय समय पर आए, ऐ मूसा",
    "और मैंने तुम्हें अपने लिए चुन लिया",
    "तुम और तुम्हारा भाई मेरी निशानियाँ लेकर जाओ",
    "और मेरे ज़िक्र में सुस्ती मत करना",
    "फ़िरऔन के पास जाओ, वह सरकश हो गया है",
    "उससे नर्मी से बात करना, शायद वह नसीहत पकड़े",
  ],
  malayalam: [
    "നീ ഒരു ജീവനെ കൊല്ലുകയും ഞങ്ങൾ നിന്നെ ദുഃഖത്തിൽ നിന്ന് രക്ഷിക്കുകയും ചെയ്തു",
    "അവൻ മദ്‌യനിലെ ജനങ്ങളിൽ വർഷങ്ങളോളം താമസിച്ചു",
    "പിന്നെ നീ എന്റെ വിധിയിലേക്ക് വന്നു, ഹേ മൂസാ",
    "ഞാൻ നിന്നെ എനിക്കു വേണ്ടി തിരഞ്ഞെടുത്തു",
    "നീയും നിന്റെ സഹോദരനും എന്റെ ദൃഷ്ടാന്തങ്ങളുമായി പോകൂ",
    "എന്നെ ഓർക്കുന്നതിൽ അലസത കാണിക്കരുത്",
    "ഫിർഔനിന്റെ അടുത്തേക്ക് പോകൂ, അവൻ അതിക്രമം കാട്ടിയിരിക്കുന്നു",
    "അവനോട് മൃദുവായി സംസാരിക്കൂ, അവൻ ഉപദേശം സ്വീകരിച്ചേക്കാം",
  ],
  kannada: [
    "ನೀನು ಒಂದು ಜೀವವನ್ನು ಕೊಂದೆ, ನಾವು ನಿನ್ನನ್ನು ದುಃಖದಿಂದ ಪಾರು ಮಾಡಿದೆವು",
    "ಆಮೇಲೆ ನೀನು ಮದ್ಯನ್ ಜನರಲ್ಲಿ ಹಲವು ವರ್ಷ ಇದ್ದೆ",
    "ನಂತರ ನಿಗದಿತ ಸಮಯಕ್ಕೆ ಬಂದೆ, ಓ ಮೂಸಾ",
    "ನಾನು ನಿನ್ನನ್ನು ನನಗಾಗಿ ಆಯ್ಕೆ ಮಾಡಿಕೊಂಡೆ",
    "ನೀನು ಮತ್ತು ನಿನ್ನ ಸಹೋದರ ನನ್ನ ಸಂಕೇತಗಳೊಂದಿಗೆ ಹೋಗಿ",
    "ನನ್ನ ಸ್ಮರಣೆಯಲ್ಲಿ ಆಲಸ್ಯ ಬಿಡಬೇಡಿ",
    "ಫಿರ್ಔನನ ಬಳಿಗೆ ಹೋಗಿ, ಅವನು ಮಿತಿಮೀರಿದ್ದಾನೆ",
    "ಅವನೊಡನೆ ಮೃದುವಾಗಿ ಮಾತನಾಡಿ, ಬಹುಶಃ ಅವನು ಬೋಧನೆ ಪಡೆಯಬಹುದು",
  ],
  bangladeshi: [
    "তুমি একটি প্রাণ হত্যা করেছিলে, অতঃপর আমি তোমাকে দুঃখ থেকে মুক্তি দিয়েছিলাম",
    "অতঃপর তুমি মাদইয়ানবাসীদের মধ্যে বহু বছর অবস্থান করেছিলে",
    "এরপর হে মূসা, তুমি নির্ধারিত সময়ে এসেছ",
    "আমি তোমাকে আমার নিজের জন্য তৈরি করেছি",
    "তুমি ও তোমার ভাই আমার নিদর্শনাবলি নিয়ে যাও",
    "আমার স্মরণে শৈথিল্য করো না",
    "তোমরা উভয়ে ফিরআউনের কাছে যাও, সে সীমালঙ্ঘন করেছে",
    "তার সাথে নম্রভাবে কথা বলো, হয়তো সে উপদেশ গ্রহণ করবে",
  ],
  farsi: [
    "تو یک نفر را کشتی و ما تو را از اندوه نجات دادیم",
    "سپس سال‌ها در میان مردم مدین ماندی",
    "آن‌گاه در زمان مقدر آمدی، ای موسی",
    "و تو را برای خودم برگزیدم",
    "تو و برادرت با نشانه‌های من بروید",
    "و در یاد من سستی نکنید",
    "هر دو نزد فرعون بروید، که او سرکشی کرده است",
    "با او به نرمی سخن بگویید، شاید پند گیرد",
  ],
  indonesian: [
    "Kamu pernah membunuh seseorang, lalu Kami menyelamatkanmu dari kesusahan",
    "Kemudian kamu tinggal beberapa tahun di antara penduduk Madyan",
    "Lalu kamu datang menurut waktu yang ditetapkan, hai Musa",
    "Dan Aku telah memilihmu untuk diri-Ku",
    "Pergilah engkau dan saudaramu dengan membawa tanda-tanda-Ku",
    "Janganlah kamu berdua lalai dalam mengingat-Ku",
    "Pergilah kamu berdua kepada Fir'aun, sungguh dia telah melampaui batas",
    "Berbicaralah kepadanya dengan lemah lembut, mudah-mudahan dia ingat",
  ],
  chinese: [
    "你曾杀了一个人,我就解救你脱离忧愁",
    "你曾在麦德彦人中间逗留了许多年",
    "穆萨啊!然后你按预定的时刻来到这里",
    "我为自己拣选了你",
    "你和你的兄弟,带着我的迹象去吧",
    "你俩不要怠慢了记念我",
    "你俩到法老那里去,他确已暴虐",
    "你俩对他说温和的话,也许他会觉悟",
  ],
  spanish: [
    "Mataste a un hombre y te salvamos de la angustia",
    "Luego permaneciste varios años entre la gente de Madián",
    "Después viniste en el momento previsto, oh Moisés",
    "Y te he elegido para Mí",
    "Id tú y tu hermano con Mis signos",
    "Y no flaqueéis en Mi recuerdo",
    "Id ambos al Faraón, pues se ha excedido",
    "Habladle con suavidad, quizás recapacite",
  ],
  french: [
    "Tu as tué un homme et Nous t'avons sauvé de l'angoisse",
    "Puis tu es resté des années parmi les gens de Madyan",
    "Ensuite tu es venu au moment fixé, ô Moïse",
    "Et Je t'ai choisi pour Moi-même",
    "Pars, toi et ton frère, avec Mes signes",
    "Et ne négligez pas Mon rappel",
    "Allez tous deux vers Pharaon, car il s'est révolté",
    "Parlez-lui avec douceur, peut-être se rappellera-t-il",
  ],
};

function Index() {
  const [selected, setSelected] = useState<LangKey | null>(null);
  const [stopped, setStopped] = useState(false);

  return (
    <div className="min-h-screen bg-[hsl(150,20%,97%)]">
      <BrandHeader />
      {stopped ? (
        <StoppedView
          onHome={() => {
            setStopped(false);
            setSelected(null);
          }}
        />
      ) : selected ? (
        <TranslationView lang={selected} onStop={() => setStopped(true)} />
      ) : (
        <LanguagePicker onPick={setSelected} />
      )}
    </div>
  );
}

function StoppedView({ onHome }: { onHome: () => void }) {
  return (
    <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-md flex-col items-center px-5 pb-10">
      <img
        src={aalimLogo.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-30px] top-0 h-56 w-56 opacity-[0.07]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(160,55%,75%,0.35), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(160,55%,80%,0.3), transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-[34px] font-extrabold leading-tight tracking-tight text-[hsl(160,40%,12%)]">
          Translation Stopped
        </h1>
        <div className="mt-4 flex items-center gap-2">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(160,55%,40%)]/40" />
          <span className="text-[hsl(160,55%,40%)]">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(160,55%,40%)]/40" />
        </div>
        <p className="mt-8 text-[16px] leading-relaxed text-muted-foreground">
          Jazakallah for using <span className="font-semibold text-[hsl(160,40%,18%)]">Aalim</span>.
          <br />
          See you next time.
        </p>
      </div>

      <button
        onClick={onHome}
        className="relative z-10 mb-4 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[hsl(160,40%,15%)] shadow-[0_8px_24px_-10px_rgba(20,80,50,0.25)] ring-1 ring-black/5 transition active:scale-95"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(160,55%,35%)]">
          <path d="M3 12 12 3l9 9" />
          <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
        </svg>
        Go to Home
      </button>
    </div>
  );
}

function LanguagePicker({ onPick }: { onPick: (l: LangKey) => void }) {
  return (
    <div className="relative mx-auto flex max-w-md flex-col px-5 pt-2 pb-8">
      {/* Faded mosque silhouette in top-right */}
      <img
        src={aalimLogo.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-40px] top-2 h-56 w-56 opacity-[0.06]"
      />
      {/* Soft green arc bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(160,55%,75%,0.35), transparent 70%)" }}
      />

      <div className="relative mb-6 mt-6 text-center">
        <div className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[hsl(160,55%,30%)] shadow-sm ring-1 ring-[hsl(160,55%,40%)]/15">
          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(160,55%,40%)]" />
          Live Translation
        </div>
        <h1 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-tight text-[hsl(160,40%,12%)]">
          Live Translation
        </h1>
        <p className="mt-3 text-[15px] text-muted-foreground">Choose your language to begin</p>
      </div>

      <div className="relative flex-1 space-y-3">
        {LANGUAGES.map((l) => (
          <button
            key={l.key}
            onClick={() => onPick(l.key)}
            className="flex w-full items-center justify-between rounded-2xl bg-card px-4 py-3.5 text-left shadow-[0_2px_10px_-4px_rgba(20,40,30,0.08)] ring-1 ring-black/5 transition-all active:scale-[0.98] hover:ring-[hsl(160,55%,40%)]/40"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full text-2xl leading-none ring-1 ring-black/5 bg-muted">
                {l.flag}
              </span>
              <div>
                <div className="text-[15px] font-semibold text-foreground">{l.label}</div>
                <div className="text-xs text-muted-foreground">{l.native}</div>
              </div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[hsl(160,55%,40%)]">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}

function TranslationView({ lang, onStop }: { lang: LangKey; onStop: () => void }) {
  const meta = LANGUAGES.find((l) => l.key === lang)!;
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index >= SOURCE_PHRASES.length) return;
    const t = setTimeout(() => setIndex((i) => i + 1), 2600);
    return () => clearTimeout(t);
  }, [index]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [index]);

  const pairs = SOURCE_PHRASES.slice(0, index).map((src, i) => ({
    src,
    tr: TRANSLATIONS[lang][i],
  }));
  const current = index > 0 ? TRANSLATIONS[lang][index - 1] : null;

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col">
      <header className="sticky top-0 z-10 border-b border-border/60 bg-[hsl(150,20%,97%)]/90 px-5 py-3 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(160,55%,40%)] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(160,55%,40%)]" />
            </span>
            <span className="text-sm font-medium text-foreground">Listening…</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-card px-2.5 py-1 text-xs font-medium text-foreground shadow-sm">
            <span>{meta.flag}</span>
            <span>{meta.label}</span>
          </div>
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 pt-4 pb-40">
        {pairs.length === 0 ? (
          <div className="flex h-[60vh] items-center justify-center px-6 text-center text-sm text-muted-foreground">
            Connecting to the live audio… the translation will appear here.
          </div>
        ) : (
          <div className="space-y-2.5">
            {pairs.slice(0, -1).map((p, i) => (
              <div key={i} className="rounded-2xl bg-card px-4 py-3 shadow-sm">
                <p dir="rtl" className="text-right text-[15px] leading-relaxed text-muted-foreground/80 font-arabic">
                  {p.src}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground">{p.tr}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {current && (
        <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md px-4 pb-5 pt-2">
          <div className="rounded-2xl border-l-4 border-[hsl(160,55%,40%)] bg-card p-4 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.1)]">
            <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-[hsl(160,55%,35%)]">
              {meta.label}
            </div>
            <p className="text-base font-semibold leading-snug text-foreground">{current}</p>
          </div>

          <div className="mt-3 flex justify-center">
            <button
              onClick={onStop}
              className="rounded-full bg-[hsl(0,80%,96%)] px-8 py-3 text-sm font-semibold text-[hsl(0,75%,50%)] shadow-sm transition active:scale-95"
            >
              Stop Translating
            </button>
          </div>
        </div>
      )}

      {!current && (
        <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md px-4 pb-5">
          <div className="flex justify-center">
            <button
              onClick={onStop}
              className="rounded-full bg-[hsl(0,80%,96%)] px-8 py-3 text-sm font-semibold text-[hsl(0,75%,50%)] shadow-sm transition active:scale-95"
            >
              Stop Translating
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
