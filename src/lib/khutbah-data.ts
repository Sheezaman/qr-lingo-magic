// Khutbah source lines and translations — shared data module.

export type LangKey =
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

export const SOURCE_PHRASES = [
  "إِنَّ الْحَمْدَ لِلَّهِ نَحْمَدُهُ وَنَسْتَعِينُهُ وَنَسْتَغْفِرُهُ",
  "وَنَعُوذُ بِاللَّهِ مِنْ شُرُورِ أَنْفُسِنَا وَمِنْ سَيِّئَاتِ أَعْمَالِنَا",
  "مَنْ يَهْدِهِ اللَّهُ فَلَا مُضِلَّ لَهُ وَمَنْ يُضْلِلْ فَلَا هَادِيَ لَهُ",
  "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
  "وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
  "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُونَ",
];

export const TRANSLATIONS: Record<LangKey, string[]> = {
  english: [
    "All praise is due to Allah; we praise Him, seek His help, and seek His forgiveness.",
    "We seek refuge in Allah from the evil of our souls and from our bad deeds.",
    "Whoever Allah guides, none can mislead; and whoever He leaves astray, none can guide.",
    "I bear witness that there is no god but Allah alone, without any partner.",
    "And I bear witness that Muhammad is His servant and messenger.",
    "O you who believe, fear Allah as He should be feared, and do not die except as Muslims.",
  ],
  urdu: [
    "تمام تعریف اللہ کے لیے ہے؛ ہم اس کی حمد کرتے ہیں، اسی سے مدد مانگتے ہیں اور اسی سے مغفرت طلب کرتے ہیں۔",
    "ہم اپنے نفسوں کے شر اور اپنے برے اعمال سے اللہ کی پناہ مانگتے ہیں۔",
    "جسے اللہ ہدایت دے اسے کوئی گمراہ نہیں کر سکتا، اور جسے وہ گمراہی میں چھوڑ دے اسے کوئی ہدایت نہیں دے سکتا۔",
    "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔",
    "اور میں گواہی دیتا ہوں کہ محمد اس کے بندے اور رسول ہیں۔",
    "اے ایمان والو! اللہ سے ڈرو جیسے اس سے ڈرنا چاہیے، اور مسلمانوں کی حالت میں ہی مرنا۔",
  ],
  turkish: [
    "Hamd Allah'a mahsustur; O'na hamd eder, O'ndan yardım diler ve O'ndan bağışlanma dileriz.",
    "Nefislerimizin kötülüklerinden ve kötü amellerimizden Allah'a sığınırız.",
    "Allah kimi hidayete erdirirse onu kimse saptıramaz; kimi saptırırsa onu kimse hidayete erdiremez.",
    "Şahitlik ederim ki Allah'tan başka ilah yoktur; O birdir, ortağı yoktur.",
    "Ve şahitlik ederim ki Muhammed O'nun kulu ve elçisidir.",
    "Ey iman edenler! Allah'tan gerektiği gibi korkun ve ancak Müslümanlar olarak ölün.",
  ],
  hindi: [
    "सारी प्रशंसा अल्लाह के लिए है; हम उसकी प्रशंसा करते हैं, उसी से मदद माँगते हैं और उसी से क्षमा माँगते हैं।",
    "हम अपनी नफ़्सों की बुराइयों और अपने बुरे कर्मों से अल्लाह की शरण माँगते हैं।",
    "जिसे अल्लाह मार्गदर्शन दे, उसे कोई भटका नहीं सकता; और जिसे वह भटकाए, उसे कोई मार्ग नहीं दिखा सकता।",
    "मैं गवाही देता हूँ कि अल्लाह के सिवा कोई उपास्य नहीं; वह अकेला है, उसका कोई साझी नहीं।",
    "और मैं गवाही देता हूँ कि मुहम्मद उसके बंदे और रसूल हैं।",
    "ऐ ईमानवालो! अल्लाह से डरो जैसे उससे डरना चाहिए, और मुसलमानों की अवस्था में ही मरना।",
  ],
  malayalam: [
    "എല്ലാ പ്രശംസയും അല്ലാഹുവിനാണ്; ഞങ്ങൾ അവനെ സ്തുതിക്കുകയും അവന്റെ സഹായം തേടുകയും അവന്റെ ക്ഷമ അപേക്ഷിക്കുകയും ചെയ്യുന്നു.",
    "ഞങ്ങളുടെ ആത്മാക്കളുടെ ദോഷത്തിൽ നിന്നും ഞങ്ങളുടെ ചെയ്തികളുടെ തിന്മകളിൽ നിന്നും ഞങ്ങൾ അല്ലാഹുവിൽ അഭയം തേടുന്നു.",
    "അല്ലാഹു ആർക്ക് മാർഗ്ഗദർശനം നൽകുന്നുവോ അവനെ ആരും വഴിതെറ്റിക്കാനാവില്ല; ആരെ അവൻ വഴിപിഴപ്പിക്കുന്നുവോ അവനെ ആരും നേർവഴിയിലേക്ക് നടത്താനാവില്ല.",
    "അല്ലാഹുവല്ലാതെ ആരാധ്യനില്ലെന്നും അവൻ ഒറ്റനാണെന്നും അവന് കൂട്ടാളികളില്ലെന്നും ഞാൻ സാക്ഷ്യം വഹിക്കുന്നു.",
    "മുഹമ്മദ് അവന്റെ ദാസനും ദൂതനുമാണെന്നും ഞാൻ സാക്ഷ്യം വഹിക്കുന്നു.",
    "സത്യവിശ്വാസികളേ, അല്ലാഹുവിനെ അവനെ ഭയപ്പെടേണ്ടതുപോലെ ഭയപ്പെടുവിൻ; മുസ്ലിമുകളായിട്ടല്ലാതെ മരിക്കരുത്.",
  ],
  bangladeshi: [
    "সমস্ত প্রশংসা আল্লাহর; আমরা তাঁর প্রশংসা করি, তাঁর সাহায্য চাই এবং তাঁর ক্ষমা চাই।",
    "আমরা আমাদের অন্তরের অনিষ্ট ও মন্দ আমল থেকে আল্লাহর আশ্রয় চাই।",
    "আল্লাহ যাকে হেদায়েত দেন, তাকে কেউ বিপথগামী করতে পারে না; আর যাকে তিনি বিভ্রান্ত করেন, তাকে কেউ পথ দেখাতে পারে না।",
    "আমি সাক্ষ্য দিই যে, আল্লাহ ছাড়া কোনো ইলাহ নেই; তিনি একক, তাঁর কোনো শরিক নেই।",
    "এবং আমি সাক্ষ্য দিই যে, মুহাম্মদ তাঁর বান্দা ও রাসূল।",
    "হে মুমিনগণ! আল্লাহকে যথাযথভাবে ভয় করো এবং মুসলিম অবস্থায় ছাড়া মৃত্যুবরণ করো না।",
  ],
  farsi: [
    "تمام ستایش برای خداست؛ او را می‌ستاییم، از او یاری می‌جوییم و آمرزش او را می‌طلبیم.",
    "از شرّ نفس‌های خود و از کارهای بد خود به خدا پناه می‌بریم.",
    "هر کس را خدا هدایت کند، هیچ‌کس نمی‌تواند او را گمراه سازد؛ و هر کس را گمراه گذارد، هیچ‌کس نمی‌تواند او را هدایت کند.",
    "گواهی می‌دهم که نیست معبودی جز خدا، او یگانه است و شریکی ندارد.",
    "و گواهی می‌دهم که محمد بنده و فرستادهٔ اوست.",
    "ای کسانی که ایمان آورده‌اید! از خدا آن‌گونه که سزاوار اوست بترسید و جز به حالت مسلمانی نمیرید.",
  ],
  indonesian: [
    "Segala puji bagi Allah; kami memuji-Nya, meminta pertolongan-Nya, dan memohon ampunan-Nya.",
    "Kami berlindung kepada Allah dari kejahatan diri kami dan dari amal perbuatan kami yang buruk.",
    "Barang siapa diberi petunjuk oleh Allah, tidak ada yang dapat menyesatkannya; dan barang siapa disesatkan-Nya, tidak ada yang dapat memberinya petunjuk.",
    "Aku bersaksi bahwa tidak ada tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya.",
    "Dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya.",
    "Wahai orang-orang yang beriman, bertakwalah kepada Allah dengan sebenar-benar takwa, dan janganlah kamu mati kecuali dalam keadaan Muslim.",
  ],
  chinese: [
    "一切赞颂全归安拉;我们赞颂他,祈求他的援助,祈求他的饶恕。",
    "我们求安拉庇护,免遭我们自身的邪恶和恶劣行为的伤害。",
    "安拉引导谁,谁就不会迷误;他使谁迷误,谁也引导不了谁。",
    "我作证:除安拉外绝无应受崇拜的主宰,他是独一无二的,没有伙伴。",
    "我作证:穆罕默德是安拉的仆人和使者。",
    "信道的人们啊!你们应当真实地敬畏安拉,只应以顺服者的身份死亡。",
  ],
  spanish: [
    "Toda alabanza es para Alá; lo alabamos, le pedimos ayuda y le pedimos perdón.",
    "Nos refugiamos en Alá del mal de nuestras almas y de nuestras malas acciones.",
    "A quien Alá guía, nadie puede desviarlo; y a quien Él desvía, nadie puede guiarlo.",
    "Atestiguo que no hay dios más que Alá, Único, sin asociados.",
    "Y atestiguo que Mahoma es Su siervo y mensajero.",
    "¡Oh creyentes! Temed a Alá como debe ser temido y no muráis sino siendo musulmanes.",
  ],
  french: [
    "Louange à Allah ; nous Le louons, Lui demandons aide et Lui demandons pardon.",
    "Nous cherchons refuge auprès d'Allah contre le mal de nos âmes et contre nos mauvaises actions.",
    "Celui qu'Allah guide, nul ne peut l'égarer ; et celui qu'Il égare, nul ne peut le guider.",
    "J'atteste qu'il n'y a de dieu qu'Allah, Unique, sans associé.",
    "Et j'atteste que Muhammad est Son serviteur et Son messager.",
    "Ô vous qui croyez ! Craignez Allah comme Il doit être craint et ne mourez qu'en étant musulmans.",
  ],
  albanian: [
    "E gjithë lavdërimi i takon Allahut; Ne e lavdërojmë, prej Tij kërkojmë ndihmë dhe falje.",
    "I kërkojmë mbrojtje Allahut nga e keqja e shpirtrave tanë dhe nga veprat tona të këqija.",
    "Kë e udhëzon Allahu, askush s'mund ta humbasë; e kë e lë të humbur, askush s'mund ta udhëzojë.",
    "Dëshmoj se nuk ka zot tjetër përveç Allahut, i Vetmi, pa asnjë ortak.",
    "Dhe dëshmoj se Muhamedi është rob dhe i dërguar i Tij.",
    "O besimtarë! Frikësojani Allahut siç i takon dhe mos vdisni veçse si muslimanë.",
  ],
  russian: [
    "Вся хвала принадлежит Аллаху; мы восхваляем Его, просим у Него помощи и прощения.",
    "Мы ищем у Аллаха защиты от зла наших душ и от наших дурных дел.",
    "Кого Аллах ведёт прямым путём, того никто не собьёт; а кого Он оставит в заблуждении, того никто не наставит.",
    "Свидетельствую, что нет бога, кроме Аллаха, Единого, без сотоварищей.",
    "И свидетельствую, что Мухаммад — Его раб и посланник.",
    "О те, которые уверовали! Бойтесь Аллаха должным образом и умирайте только мусульманами.",
  ],
  malay: [
    "Segala puji bagi Allah; kami memuji-Nya, memohon pertolongan-Nya dan memohon ampun kepada-Nya.",
    "Kami berlindung kepada Allah daripada kejahatan diri kami dan daripada amalan buruk kami.",
    "Sesiapa yang diberi hidayah oleh Allah, tiada siapa dapat menyesatkannya; dan sesiapa yang disesatkan-Nya, tiada siapa dapat memberinya hidayah.",
    "Aku bersaksi bahawa tiada tuhan melainkan Allah, Yang Maha Esa, tiada sekutu bagi-Nya.",
    "Dan aku bersaksi bahawa Muhammad itu hamba dan utusan-Nya.",
    "Wahai orang-orang yang beriman! Bertakwalah kepada Allah dengan sebenar-benar takwa dan janganlah kamu mati melainkan dalam keadaan Islam.",
  ],
  pashto: [
    "ټوله ستاینه الله ته ده؛ موږ ده ستايو، تر ده مرسته غواړو او بښنه تر ده غواړو.",
    "موږ د خپلو نفسونو له شر او له خپلو بدو کړنو الله ته پناه وړو.",
    "چا ته چې الله لار ورکړي، هېڅوک يې نشي بېلارې کولی؛ او څوک چې هغه بېلارې پرېږدي، هېڅوک يې نشي لار ته راوړلی.",
    "زه ګواهي ورکوم چې له الله پرته بل هېڅ معبود نشته؛ هغه يو او بېشريک دی.",
    "او ګواهي ورکوم چې محمد د هغه بنده او استازي دی.",
    "ای مؤمنانو! له الله داسې ووېرېږئ لکه څنګه چې ده ته ورته سزا ده، او بیا له مسلمانۍ پرته مه مړ کېږئ.",
  ],
  dari: [
    "تمام ستایش برای خداوند است؛ ما او را می‌ستاییم، از او کمک می‌خواهیم و آمرزش او را می‌طلبیم.",
    "از بدی نفس‌های خود و از اعمال بد خود به خدا پناه می‌بریم.",
    "هر که را خداوند هدایت کند، کسی نمی‌تواند او را گمراه سازد؛ و هر که را گمراه گذارد، کسی نمی‌تواند او را راهنمایی کند.",
    "شهادت می‌دهم که معبودی جز خداوند نیست؛ او یگانه است و شریکی ندارد.",
    "و شهادت می‌دهم که محمد بنده و پیامبر اوست.",
    "ای کسانی که ایمان آورده‌اید! از خداوند آن‌گونه که باید پروا کنید و جز مسلمان نمیرید.",
  ],
};

export const RTL_LANGS: LangKey[] = ["urdu", "farsi", "pashto", "dari"];
