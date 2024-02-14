export const TITLE = "Как увезти домашнее животное из Южной Кореи";
export const DESCRIPTION =
  "Жизнь бывает непредсказуема, и иногда возникает острая необходимость по тем или иным причинам покинуть Южную Корею. Подготовка всех необходимых документов для путешествия вместе с животным занимает время, и к решению этого вопроса мы рекомендуем приступать заблаговременно.";

export const JSON_LD_HOWTO = {
  "@context": "https://schema.org/",
  "@type": "HowTo",
  name: "Как вывезти кошку, собаку или другое животное из Южной Кореи",
  description:
    "Список документов, необходимых для вывоза животных в страны, входящие в Евразийский экономический союз (ЕАЭС):",
  image:
    "https://pets-in-korea-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrive-main.d6ae9dd4.png&w=640&q=80",
  step: [
    {
      "@type": "HowToStep",
      text: "Ветеринарный паспорт с отметками о всех необходимых прививках",
    },
    {
      "@type": "HowToStep",
      text: "Справка от 농림축산검역본부 사무실 не позднее трех дней до вылета (можно получить в аэропорту или в местном филиале)",
      image:
        "https://pets-in-korea-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDocument3days.9f2662eb.jpeg&w=640&q=90",
      name: "검역증명서",
    },
    {
      "@type": "HowToStep",
      text: "Справка о клиническом осмотре ветеринаром не позднее 10 дней",
      image:
        "https://pets-in-korea-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10-days.4734944f.jpeg&w=640&q=90",
      name: "예방접종증명서 및 건강증명서",
    },
    {
      "@type": "HowToStep",
      text: "Авиабилеты для животного и сопровождающего (если животное летит в салоне)",
    },
    {
      "@type": "HowToStep",
      text: "Согласие авиакомпании на перевозку (не все авиакомпании дают согласие)",
    },
  ],
};

export const JSON_LD_ARTICLE = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pets-in-korea-client.vercel.app/departure",
  },
  headline: "Как увезти домашнее животное из Южной Кореи",
  description:
    "Жизнь бывает непредсказуема, и иногда возникает острая необходимость по тем или иным причинам покинуть Южную Корею. Подготовка всех необходимых документов для путешествия вместе с животным занимает время, и к решению этого вопроса мы рекомендуем приступать заблаговременно.",
  image:
    "https://pets-in-korea-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrive-main.d6ae9dd4.png&w=640&q=80",
  author: {
    "@type": "Person",
    name: "Mikita",
    url: "https://www.facebook.com/profile.php?id=100005551905918",
  },
  publisher: {
    "@type": "Organization",
    name: "",
    logo: {
      "@type": "ImageObject",
      url: "https://pets-in-korea-client.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-desktop.6efbd13e.png&w=384&q=75",
    },
  },
  datePublished: "",
};

export const JSON_LD_LIST = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Необходимые прививки для ввоза домащнего животного в Россию:",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Прививка от бешенства/광견병 예방 접종, сделанная в течение года, но не позднее, чем за 30 дней до дня вылета(для всех видов животных)",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Собакам – против чумы плотоядных, гепатита, парвовирусных инфекций и аденовирусных инфекций, лептоспироза (если не были обработаны с профилактической целью дегидрострептомицином или веществом, зарегистрированным в стране-экспортере, дающим эквивалентный эффект). Комплексная прививка/종합백신",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Кошкам – против панлейкопении, или комплексная прививка/FevRCP-C 백신",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Кроликам – против миксоматоза и вирусной геморрагической болезни, а также по требованию уполномоченного органа государства – члена ЕАЭС, на территорию которого осуществляется ввоз, на другие инфекционные болезни",
    },
  ],
};
