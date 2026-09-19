import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
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
  | "english"
  | "urdu"
  | "turkish"
  | "hindi"
  | "bangladeshi"
  | "indonesian"
  | "malayalam"
  | "chinese"
  | "farsi"
  
  | "spanish"
  | "french"
  | "albanian"
  | "russian"
  | "malay"
  | "pashto"
  | "dari";

const LANGUAGES: { key: LangKey; label: string; native: string; flag: string }[] = [
  { key: "english", label: "English", native: "English", flag: "🇬🇧" },
  { key: "urdu", label: "Urdu", native: "اردو", flag: "🇵🇰" },
  { key: "turkish", label: "Turkish", native: "Türkçe", flag: "🇹🇷" },
  { key: "hindi", label: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  { key: "bangladeshi", label: "Bangladeshi", native: "বাংলা", flag: "🇧🇩" },
  { key: "indonesian", label: "Indonesian", native: "Bahasa Indonesia", flag: "🇮🇩" },
  { key: "malayalam", label: "Malayalam", native: "മലയാളം", flag: "🇮🇳" },
  { key: "chinese", label: "Chinese", native: "中文", flag: "🇨🇳" },
  { key: "farsi", label: "Farsi", native: "فارسی", flag: "🇮🇷" },
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
  english: [
    "And you killed a soul, and We saved you from grief",
    "Then you stayed years among the people of Madyan",
    "Then you came at the appointed time, O Moses",
    "And I have chosen you for Myself",
    "Go, you and your brother, with My signs",
    "And do not be lax in My remembrance",
    "Go both of you to Pharaoh, indeed he has transgressed",
    "Speak to him gently, that perhaps he may take heed",
  ],
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
  albanian: [
    "Ti vrave një njeri dhe Ne të shpëtuam nga brengat",
    "Pastaj qëndrove vite të tëra ndër banorët e Medjenit",
    "Mandej erdhe në kohën e caktuar, o Musa",
    "Dhe Unë të zgjodha për Vete",
    "Shko ti dhe vëllai yt me shenjat e Mia",
    "Dhe mos u bëni të plogët në përmendjen Time",
    "Shkoni të dy te Faraoni, ai ka tejkaluar çdo kufi",
    "Flitini atij me fjalë të buta, ndoshta merr mësim",
  ],
  russian: [
    "Ты убил человека, и Мы спасли тебя от скорби",
    "Затем ты провёл годы среди жителей Мадьяна",
    "Потом ты пришёл в назначенный срок, о Муса",
    "И Я избрал тебя для Себя",
    "Ступайте ты и твой брат с Моими знамениями",
    "И не будьте нерадивы в поминании Меня",
    "Идите оба к Фараону, ибо он преступил границы",
    "Говорите с ним мягко, быть может, он образумится",
  ],
  malay: [
    "Kamu telah membunuh seseorang, lalu Kami menyelamatkanmu dari kesusahan",
    "Kemudian kamu tinggal beberapa tahun di kalangan penduduk Madyan",
    "Setelah itu kamu datang pada waktu yang ditetapkan, wahai Musa",
    "Dan Aku telah memilihmu untuk diri-Ku",
    "Pergilah kamu dan saudaramu membawa tanda-tanda-Ku",
    "Dan janganlah kamu berdua lalai dalam mengingati-Ku",
    "Pergilah kamu berdua kepada Firaun, sesungguhnya dia telah melampaui batas",
    "Bercakaplah kepadanya dengan lemah lembut, mudah-mudahan dia ingat",
  ],
  pashto: [
    "تا یو کس وواژه، نو موږ ته له غمه خلاص کړې",
    "بیا ته د مدین په خلکو کې کلونه پاتې شوې",
    "بیا ای موسی! په ټاکلې نېټه راغلې",
    "او ما ته د خپل ځان لپاره غوره کړې",
    "ته او ستا ورور زما د نښو سره لاړ شئ",
    "او زما په یاد کې سستي مه کوئ",
    "دواړه فرعون ته لاړ شئ، هغه سرکشي کړې ده",
    "ورته په نرمۍ خبرې وکړئ، ښایي پند واخلي",
  ],
  dari: [
    "تو یک نفر را کشتی و ما تو را از غم نجات دادیم",
    "سپس سال‌ها در میان مردم مدین زندگی کردی",
    "بعد ای موسی! در زمان مقرر آمدی",
    "و تو را برای خود برگزیدم",
    "تو و برادرت با نشانه‌های من بروید",
    "و در یاد من سستی نورزید",
    "هر دو نزد فرعون بروید، که او سرکشی کرده است",
    "با او به نرمی سخن بگویید، شاید پند بگیرد",
  ],
};

const HEADPHONE_PROMPT: Record<LangKey, string> = {
  english: "Please connect your headphones or earphones and start hearing the live voice translation.",
  urdu: "براہ کرم اپنے ہیڈ فون یا ائیرفون لگائیں اور لائیو صوتی ترجمہ سننا شروع کریں۔",
  turkish: "Lütfen kulaklığınızı takın ve canlı sesli çeviriyi dinlemeye başlayın.",
  hindi: "कृपया अपने हेडफ़ोन या ईयरफ़ोन कनेक्ट करें और लाइव वॉइस अनुवाद सुनना शुरू करें।",
  bangladeshi: "অনুগ্রহ করে আপনার হেডফোন বা ইয়ারফোন সংযুক্ত করুন এবং লাইভ ভয়েস অনুবাদ শোনা শুরু করুন।",
  indonesian: "Silakan sambungkan headphone atau earphone Anda dan mulai mendengarkan terjemahan suara langsung.",
  malayalam: "ദയവായി നിങ്ങളുടെ ഹെഡ്‌ഫോൺ അല്ലെങ്കിൽ ഇയർഫോൺ ബന്ധിപ്പിച്ച് തത്സമയ ശബ്ദ വിവർത്തനം കേൾക്കാൻ തുടങ്ങുക.",
  chinese: "请连接您的耳机,开始收听实时语音翻译。",
  farsi: "لطفاً هدفون یا ایرفون خود را وصل کنید و شنیدن ترجمه صوتی زنده را آغاز کنید.",
  spanish: "Por favor, conecta tus auriculares y comienza a escuchar la traducción de voz en vivo.",
  french: "Veuillez connecter vos écouteurs et commencer à écouter la traduction vocale en direct.",
  albanian: "Ju lutemi lidhni kufjet tuaja dhe filloni të dëgjoni përkthimin zanor live.",
  russian: "Пожалуйста, подключите наушники и начните слушать живой голосовой перевод.",
  malay: "Sila sambungkan fon kepala atau fon telinga anda dan mula mendengar terjemahan suara secara langsung.",
  pashto: "مهرباني وکړئ خپل هیډفون یا ایرفون ونښلوئ او ژوندۍ غږیزه ژباړه اورېدل پیل کړئ.",
  dari: "لطفاً هدفون یا ایرفون خود را وصل کنید و شنیدن ترجمه صوتی زنده را شروع کنید.",
};

const RTL_LANGS: LangKey[] = ["urdu", "farsi", "pashto", "dari"];

type Mode = "text" | "voice";

function Index() {
  const [selected, setSelected] = useState<LangKey | null>(null);
  const [mode, setMode] = useState<Mode | null>(null);
  const [voiceStarted, setVoiceStarted] = useState(false);
  const [stopped, setStopped] = useState(false);

  const reset = () => {
    setStopped(false);
    setSelected(null);
    setMode(null);
    setVoiceStarted(false);
  };

  let content: ReactNode;
  if (stopped) {
    content = <StoppedView onHome={reset} />;
  } else if (!selected) {
    content = <LanguagePicker onPick={setSelected} />;
  } else if (!mode) {
    content = <ModePicker lang={selected} onPick={setMode} onBack={reset} />;
  } else if (mode === "text") {
    content = <TranslationView lang={selected} onStop={() => setStopped(true)} />;
  } else if (!voiceStarted) {
    content = <VoiceIntro lang={selected} onStart={() => setVoiceStarted(true)} onBack={() => setMode(null)} />;
  } else {
    content = <VoiceTranslationView lang={selected} onStop={() => setStopped(true)} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[hsl(150,20%,97%)]">
      <BrandHeader />
      {content}
    </div>
  );
}

function ModePicker({ lang, onPick, onBack }: { lang: LangKey; onPick: (m: Mode) => void; onBack: () => void }) {
  const meta = LANGUAGES.find((l) => l.key === lang)!;
  return (
    <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-md flex-col px-5 pb-10">
      <div className="mt-10 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[hsl(160,55%,30%)] shadow-sm ring-1 ring-[hsl(160,55%,40%)]/15">
          <span>{meta.flag}</span>
          {meta.label}
        </div>
        <h1 className="mt-4 text-[32px] font-extrabold leading-tight tracking-tight text-[hsl(160,40%,12%)]">
          How would you like to follow?
        </h1>
        <p className="mt-3 text-[15px] text-muted-foreground">Choose text or voice translation</p>
      </div>

      <div className="mt-8 space-y-4">
        <button
          onClick={() => onPick("text")}
          className="flex w-full items-center gap-4 rounded-2xl bg-card px-5 py-5 text-left shadow-[0_2px_10px_-4px_rgba(20,40,30,0.08)] ring-1 ring-black/5 transition active:scale-[0.98]"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(160,55%,40%)]/10 text-[hsl(160,55%,35%)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h10" />
            </svg>
          </span>
          <span>
            <span className="block text-[16px] font-semibold text-foreground">Text translation</span>
            <span className="block text-xs text-muted-foreground">Read the translation live on screen</span>
          </span>
        </button>

        <button
          onClick={() => onPick("voice")}
          className="flex w-full items-center gap-4 rounded-2xl bg-card px-5 py-5 text-left shadow-[0_2px_10px_-4px_rgba(20,40,30,0.08)] ring-1 ring-black/5 transition active:scale-[0.98]"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(160,55%,40%)]/10 text-[hsl(160,55%,35%)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z" />
            </svg>
          </span>
          <span>
            <span className="block text-[16px] font-semibold text-foreground">Voice translation</span>
            <span className="block text-xs text-muted-foreground">Listen to the live translation with text</span>
          </span>
        </button>
      </div>

      <button onClick={onBack} className="mx-auto mt-auto pt-10 text-sm font-medium text-muted-foreground">
        Change language
      </button>
    </div>
  );
}

function VoiceIntro({ lang, onStart, onBack }: { lang: LangKey; onStart: () => void; onBack: () => void }) {
  const meta = LANGUAGES.find((l) => l.key === lang)!;
  const rtl = RTL_LANGS.includes(lang);
  return (
    <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-md flex-col items-center px-5 pb-10 text-center">
      <div className="mt-14 flex h-20 w-20 items-center justify-center rounded-full bg-[hsl(160,55%,40%)]/10 text-[hsl(160,55%,35%)]">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z" />
        </svg>
      </div>

      {lang !== "english" && (
        <p
          dir={rtl ? "rtl" : "ltr"}
          className="mt-8 text-[18px] font-semibold leading-relaxed text-[hsl(160,40%,14%)]"
        >
          {HEADPHONE_PROMPT[lang]}
        </p>
      )}
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        {HEADPHONE_PROMPT.english}
      </p>

      <button
        onClick={onStart}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-[hsl(160,55%,35%)] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_-10px_rgba(20,80,50,0.5)] transition active:scale-95"
      >
        Start voice translation
        <span className="text-xs opacity-80">{meta.flag}</span>
      </button>

      <button onClick={onBack} className="mt-auto pt-10 text-sm font-medium text-muted-foreground">
        Back
      </button>
    </div>
  );
}

function VoiceTranslationView({ lang, onStop }: { lang: LangKey; onStop: () => void }) {
  const meta = LANGUAGES.find((l) => l.key === lang)!;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pausedRef = useRef(false);
  const liveStartRef = useRef(Date.now());

  const goLive = () => {
    const liveIdx = Math.min(
      Math.floor((Date.now() - liveStartRef.current) / 2600),
      SOURCE_PHRASES.length
    );
    setPaused(false);
    setIndex(liveIdx);
  };

  useEffect(() => {
    pausedRef.current = paused;
    const audio = audioRef.current;
    if (!audio) return;
    if (paused) audio.pause();
    else void audio.play().catch(() => {});
  }, [paused]);

  useEffect(() => {
    if (index >= SOURCE_PHRASES.length) return;
    let cancelled = false;
    let url: string | null = null;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: TRANSLATIONS[lang][index] }),
        });
        if (!res.ok) throw new Error(await res.text().catch(() => "Voice failed"));
        const blob = await res.blob();
        if (cancelled) return;
        url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audioRef.current = audio;
        audio.onended = () => setIndex((i) => i + 1);
        setLoading(false);
        if (!pausedRef.current) await audio.play().catch(() => {});
      } catch (e) {
        if (cancelled) return;
        setLoading(false);
        setError("Could not play the voice translation. Please try again.");
      }
    })();

    return () => {
      cancelled = true;
      audioRef.current?.pause();
      audioRef.current = null;
      if (url) URL.revokeObjectURL(url);
    };
  }, [index, lang]);

  const finished = index >= SOURCE_PHRASES.length;
  const currentIdx = Math.min(index, SOURCE_PHRASES.length - 1);
  const rtl = RTL_LANGS.includes(lang);

  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-md flex-col">
      <header className="sticky top-0 z-10 border-b border-border/60 bg-[hsl(150,20%,97%)]/90 px-5 py-3 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              {!paused && !finished && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(160,55%,40%)] opacity-60" />
              )}
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(160,55%,40%)]" />
            </span>
            <span className="text-sm font-medium text-foreground">
              {finished ? "Finished" : paused ? "Paused" : loading ? "Preparing audio…" : "Speaking…"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setPaused(false);
                setIndex(0);
              }}
              aria-label="Start from the beginning"
              title="Start from the beginning"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[hsl(160,55%,35%)] shadow-sm ring-1 ring-black/5 transition active:scale-95"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 4v5h5" />
              </svg>
            </button>
            <button
              onClick={() => setPaused((p) => !p)}
              disabled={finished}
              aria-label={paused ? "Play" : "Pause"}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(160,55%,35%)] text-white shadow-sm transition active:scale-95 disabled:opacity-40"
            >
              {paused ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
              )}
            </button>
            <button
              onClick={goLive}
              disabled={finished}
              aria-label="Go to live translation"
              title="Go to live translation"
              className="flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-[hsl(160,55%,35%)] shadow-sm ring-1 ring-black/5 transition active:scale-95 disabled:opacity-40"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
              </svg>
              Live
            </button>
            <div className="flex items-center gap-1.5 rounded-full bg-card px-2.5 py-1 text-xs font-medium text-foreground shadow-sm">
              <span>{meta.flag}</span>
              <span>{meta.label}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center px-5 pb-32 pt-8 text-center">
        <div className="mb-6 flex items-end gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-[hsl(160,55%,40%)]"
              style={{
                height: paused || finished ? 10 : 14 + ((i * 11) % 26),
                opacity: paused || finished ? 0.35 : 0.9,
                transition: "height 300ms ease",
              }}
            />
          ))}
        </div>

        <p dir="rtl" className="font-arabic text-[17px] leading-relaxed text-muted-foreground/80">
          {SOURCE_PHRASES[currentIdx]}
        </p>
        <p
          dir={rtl ? "rtl" : "ltr"}
          className="mt-4 text-[20px] font-semibold leading-snug text-foreground"
        >
          {TRANSLATIONS[lang][currentIdx]}
        </p>

        {error && <p className="mt-6 text-sm text-destructive">{error}</p>}
        {finished && <p className="mt-6 text-sm text-muted-foreground">The live session has ended.</p>}
      </div>

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
    <div className="relative mx-auto flex max-w-md flex-col overflow-hidden px-5 pt-2 pb-8">
      {/* Faded mosque silhouette in top-right */}
      <img
        src={aalimLogo.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-2 h-56 w-56 opacity-[0.06]"
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
