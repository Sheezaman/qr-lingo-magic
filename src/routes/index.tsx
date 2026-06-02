import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

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
  | "malayalam"
  | "kannada"
  | "spanish"
  | "french"
  | "sundanese"
  | "indonesian"
  | "chinese";

const LANGUAGES: { key: LangKey; label: string; native: string; flag: string }[] = [
  { key: "urdu", label: "Urdu", native: "اردو", flag: "🇵🇰" },
  { key: "turkish", label: "Turkish", native: "Türkçe", flag: "🇹🇷" },
  { key: "hindi", label: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  { key: "malayalam", label: "Malayalam", native: "മലയാളം", flag: "🇮🇳" },
  { key: "kannada", label: "Kannada", native: "ಕನ್ನಡ", flag: "🇮🇳" },
  { key: "spanish", label: "Spanish", native: "Español", flag: "🇪🇸" },
  { key: "french", label: "French", native: "Français", flag: "🇫🇷" },
  { key: "sundanese", label: "Sundanese", native: "Basa Sunda", flag: "🇮🇩" },
  { key: "indonesian", label: "Indonesian", native: "Bahasa Indonesia", flag: "🇮🇩" },
  { key: "chinese", label: "Chinese", native: "中文", flag: "🇨🇳" },
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
  spanish: [
    "Mataste a un alma, y te salvamos de la angustia",
    "Permaneciste años entre la gente de Madián",
    "Luego viniste en el momento decretado, oh Moisés",
    "Y te he elegido para Mí mismo",
    "Id tú y tu hermano con Mis signos",
    "Y no flaqueéis en recordarme",
    "Id ambos al Faraón, en verdad se ha excedido",
    "Habladle con palabras suaves, quizá recapacite",
  ],
  french: [
    "Tu avais tué un homme, et Nous t'avons sauvé du chagrin",
    "Tu es resté des années parmi les habitants de Madyan",
    "Puis tu es venu, ô Moïse, selon un décret",
    "Et Je t'ai choisi pour Moi-Même",
    "Pars, toi et ton frère, avec Mes signes",
    "Et ne négligez pas Mon rappel",
    "Allez tous deux vers Pharaon, il a vraiment dépassé les bornes",
    "Parlez-lui avec douceur, peut-être se souviendra-t-il",
  ],
  sundanese: [
    "Anjeun parantos maéhan hiji jalma, sareng Kami nyalametkeun anjeun tina kasedih",
    "Anjeun cicing mangtaun-taun di antara warga Madyan",
    "Teras anjeun sumping dina waktosna, nun Musa",
    "Sareng Kuring milih anjeun pikeun diri Kuring",
    "Angkat anjeun sareng dulur anjeun nyandak tanda-tanda Kuring",
    "Tong lalawora dina nyebut Kuring",
    "Angkat duaan ka Fir'aun, anjeunna parantos ngalangkungan wates",
    "Carioskeun ka anjeunna kalayan lemes, sugan anjeunna émut",
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
};

function Index() {
  const [selected, setSelected] = useState<LangKey | null>(null);

  return (
    <div className="min-h-screen bg-[hsl(150,20%,97%)]">
      {selected ? (
        <TranslationView lang={selected} onStop={() => setSelected(null)} />
      ) : (
        <LanguagePicker onPick={setSelected} />
      )}
    </div>
  );
}

function LanguagePicker({ onPick }: { onPick: (l: LangKey) => void }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pt-10 pb-8">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(160,55%,40%)] text-white shadow-lg">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Live Translation</h1>
        <p className="mt-1 text-sm text-muted-foreground">Choose your language to begin</p>
      </div>

      <div className="flex-1 space-y-2.5">
        {LANGUAGES.map((l) => (
          <button
            key={l.key}
            onClick={() => onPick(l.key)}
            className="flex w-full items-center justify-between rounded-2xl border border-border bg-card px-4 py-3.5 text-left shadow-sm transition-all active:scale-[0.98] hover:border-[hsl(160,55%,40%)]"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl leading-none">{l.flag}</span>
              <div>
                <div className="text-sm font-medium text-foreground">{l.label}</div>
                <div className="text-xs text-muted-foreground">{l.native}</div>
              </div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
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
