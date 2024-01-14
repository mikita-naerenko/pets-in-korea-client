import { SHELTERS } from "@/lib/shelters";

export const JSON_LD_LIST = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Перед тем как принять решение об усыновлении, следует ответить самому себе на следующие вопросы:",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Подготовили ли вы окружение и готовы ли вы к встрече с новым домочадцем?",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Готовы ли вы к ответственности за питомца, который проживет 10-15 лет и будет с вами даже при изменениях в семейной ситуации, таких как брак, беременность, поступление в учебное заведение или переезд?",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Есть ли согласие всех членов семьи на появление нового питомца?",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Возникнут ли проблемы с собственником вашей квартиры (если она съемная)?",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Есть ли опыт в уходе за домашними животными, и готовы ли вы учиться для обеспечения психологического и физического здоровья вашего питомца?",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Вы готовы предоставить подходящее лечение при болезни и решить вопрос о стерилизации (хирургической невозможности размножения)?",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Есть ли у вас желание и возможности взять на себя финансовые обязательства, связанные с уходом за животным?",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Вы обдумали, как новый питомец впишется в ваш домашний коллектив и сможет ли он хорошо ладить с другими вашими животными?",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "Есть ли у кого-либо из вашей семьи аллергия на животных? Если вы не можете уверенно ответить на этот вопрос, возможно стоит сдать кровь на выявление аллергенов.",
    },
  ],
};

export const JSON_LD_HOWTO = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как усыновить животное из приюта в Южной Корее",
  description: "Важные шаги для успешного усыновления питомца из приюта.",
  step: [
    {
      "@type": "HowToStep",
      name: "Определение расходов при усыновлении",
      text: "При усыновлении могут взиматься определенные расходы.",
    },
    {
      "@type": "HowToStep",
      name: "Условия усыновления для брошенных животных",
      text: "Если владелец не появляется в течение 10 дней после оглашения о найденном брошенном животном, оно может быть усыновлено обычными гражданами.",
    },
    {
      "@type": "HowToStep",
      name: "Контакт с приютом и резервирование времени",
      text: "Для усыновления свяжитесь с приютом заранее по телефону, зарезервируйте время для посещения в соответствии с указаниями сотрудников.",
    },
    {
      "@type": "HowToStep",
      name: "Подготовка документов и визит в приют",
      text: "Для усыновления подготовьте две копии удостоверения личности, необходимые вещи для нового питомца. Затем посетите приют и заполните договор об усыновлении.",
    },
    {
      "@type": "HowToStep",
      name: "Условия усыновления для несовершеннолетних",
      text: "Заявителю необходимо посетить приют лично. Усыновление не разрешено для лиц младше 18 лет. Если несовершеннолетний желает усыновить, ему необходимо получить разрешение от родителей и посетить приют вместе с ними.",
    },
  ],
};

// function generateJsonLdForTable(dataArray: any[]) {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "Table",
//     name: "Приюты для животных в Южной Корее",
//     about: "Список приютов для животных в различных городах и районах",
//     tableHead: {
//       "@type": "TableRow",
//       cell: [
//         {
//           "@type": "TableCell",
//           name: "Город/Район",
//           cssSelector: "sx={{ fontWeight: 700 }}",
//         },
//         {
//           "@type": "TableCell",
//           name: "Название Приюта",
//           align: "center",
//           cssSelector: "sx={{ fontWeight: 700 }}",
//         },
//         {
//           "@type": "TableCell",
//           name: "Телефон",
//           align: "center",
//           cssSelector: "sx={{ fontWeight: 700 }}",
//         },
//         {
//           "@type": "TableCell",
//           name: "Адрес",
//           align: "center",
//           cssSelector: "sx={{ fontWeight: 700 }}",
//         },
//       ],
//     },
//     tableBody: dataArray.map(
//       (entry: { district: any; name: any; phone: any; address: any }) => ({
//         "@type": "TableRow",
//         itemListElement: [
//           {
//             "@type": "TableCell",
//             text: entry.district,
//           },
//           {
//             "@type": "TableCell",
//             text: entry.name,
//             align: "center",
//           },
//           {
//             "@type": "TableCell",
//             text: entry.phone,
//             align: "center",
//           },
//           {
//             "@type": "TableCell",
//             text: entry.address,
//             align: "center",
//           },
//         ],
//       })
//     ),
//   };

//   return JSON.stringify(jsonLd, null, 2);
// }

// const generatedJsonLd = generateJsonLdForTable(SHELTERS);
// console.log(generatedJsonLd);

export const JSON_LD_TABLE = {
  "@context": "https://schema.org",
  "@type": "Table",
  name: "Приюты для животных в Южной Корее",
  about: "Список приютов для животных в различных городах и районах",
  tableHead: {
    "@type": "TableRow",
    cell: [
      {
        "@type": "TableCell",
        name: "Город/Район",
        cssSelector: "sx={{ fontWeight: 700 }}",
      },
      {
        "@type": "TableCell",
        name: "Название Приюта",
        align: "center",
        cssSelector: "sx={{ fontWeight: 700 }}",
      },
      {
        "@type": "TableCell",
        name: "Телефон",
        align: "center",
        cssSelector: "sx={{ fontWeight: 700 }}",
      },
      {
        "@type": "TableCell",
        name: "Адрес",
        align: "center",
        cssSelector: "sx={{ fontWeight: 700 }}",
      },
    ],
  },
  tableBody: [
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 중구",
        },
        {
          "@type": "TableCell",
          text: "(사)대구시수의사회",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "053-764-3708",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 북구 호국로 229 (서변동) 대구경북수의사회관 6층",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 달성군",
        },
        {
          "@type": "TableCell",
          text: "119동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "070-8028-1195",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 달성군 다사읍 달구벌대로 893 (다사읍, 대실요양병원 장례식장) 다사읍 관할",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 부천시",
        },
        {
          "@type": "TableCell",
          text: "24시아이동물메디컬",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "032-677-5262",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 부천시 오정구 소사로 779 (원종동) 201호",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "서울특별시 마포구",
        },
        {
          "@type": "TableCell",
          text: "C.T종합동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "02-6375-0075",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "서울특별시 마포구 만리재로 74 (신공덕동, 신공덕2차삼성래미안) 삼성 래미안상가 117호",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "서울특별시 강동구",
        },
        {
          "@type": "TableCell",
          text: "GD동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "02-429-8822",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "서울특별시 강동구 상일로 13 (상일동) 1~2층 GD동물병원",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 부천시",
        },
        {
          "@type": "TableCell",
          text: "가나동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "032-665-0075",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 부천시 소사구 경인로 72 (송내동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "인천광역시 서구",
        },
        {
          "@type": "TableCell",
          text: "가정동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "032-575-0833",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "인천광역시 서구 가정로 346 (가정동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 가평군",
        },
        {
          "@type": "TableCell",
          text: "가평군유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-580-4794",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 가평군 가평읍 아랫마장길 59 (가평읍, 농업기술센터) 가평 유기동물 보호소(10:00~18:00)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "서울특별시 강동구",
        },
        {
          "@type": "TableCell",
          text: "강동구청 반려동물팀",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "02-3425-6015",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "서울특별시 강동구 성내로 25 (성내동, 강동구청) 강동구청",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "서울특별시 강동구",
        },
        {
          "@type": "TableCell",
          text: "강동리본센터(reborn)",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "070-4163-7350",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "서울특별시 강동구 양재대로81길 73 (성내동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "강원특별자치도 강릉시",
        },
        {
          "@type": "TableCell",
          text: "강릉시 동물사랑센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "033-641-7515",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "강원도 강릉시 성산면 내맬길 172",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "전라남도 강진군",
        },
        {
          "@type": "TableCell",
          text: "강진군 유기견 보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "061-430-3614",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "전라남도 강진군 강진읍 초지길 109-62 (강진읍, 강진군상하수도사업소)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "서울특별시 양천구",
        },
        {
          "@type": "TableCell",
          text: "강현림동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "02-2642-9159",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "서울특별시 양천구 등촌로 160 (목동) 1층",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상남도 거제시",
        },
        {
          "@type": "TableCell",
          text: "거제시유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "055-639-6368",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상남도 거제시 사등면 두동로1길 109 (사등면, 한국자원재생공사폐비닐적재장) 거제시유기동물보호소",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상남도 거창군",
        },
        {
          "@type": "TableCell",
          text: "거창유기동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "055-945-6500",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상남도 거창군 남상면 수남로 1934-12",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "인천광역시 중구",
        },
        {
          "@type": "TableCell",
          text: "경동동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "032-765-9988",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "인천광역시 중구 개항로 68 (경동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상북도 경주시",
        },
        {
          "@type": "TableCell",
          text: "경주동물사랑보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "***********",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상북도 경주시 천북면 천북로 8-4  경주시 동물사랑보호센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상남도 고성군",
        },
        {
          "@type": "TableCell",
          text: "고성군유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "055-670-4315",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상남도 고성군 고성읍 남해안대로 2829-60  고성군농업기술센터 동물보호센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 고양시",
        },
        {
          "@type": "TableCell",
          text: "고양시동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-962-3232",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 고양시 덕양구 고양대로 1695 (원흥동, 고양시 농업기술센터) 고양시동물보호센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상남도 통영시",
        },
        {
          "@type": "TableCell",
          text: "고양이보호분양센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "055-650-6250",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상남도 통영시 한산면 호두1길 351  공공형 고양이 보호분양센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "충청남도 공주시",
        },
        {
          "@type": "TableCell",
          text: "공주시 동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "041-840-3495",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "충청남도 공주시 우성면 내산목천길 52-15",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "전라남도 광양시",
        },
        {
          "@type": "TableCell",
          text: "광양시 임시보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "061-797-3386",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "전라남도 광양시 봉강면 인덕로 1169-20 (봉강면) 지곡리 864-24",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "광주광역시 동구",
        },
        {
          "@type": "TableCell",
          text: "광주 동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "062-571-2808",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "광주광역시 북구 본촌마을길 27 (본촌동) 광주광역시 동물보호소",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 광주시",
        },
        {
          "@type": "TableCell",
          text: "광주TNR동물병원송정",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-798-7583",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 광주시 경안천로 142 (송정동) 광주TNR동물병원",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 광주시",
        },
        {
          "@type": "TableCell",
          text: "광주TNR동물병원초월",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-798-7581",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 광주시 초월읍 현산로385번길 74-12 (초월읍)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 구리시",
        },
        {
          "@type": "TableCell",
          text: "구리반려동물문화센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-566-0059",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 구리시 동구릉로136번길 57 (인창동) 2층",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 군위군",
        },
        {
          "@type": "TableCell",
          text: "군위종합동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "010-5121-3193",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 군위군 군위읍 중앙1길 15  1층",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대전광역시 유성구",
        },
        {
          "@type": "TableCell",
          text: "금강유역환경청",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "042-865-0744",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대전광역시 유성구 대학로 417 (구성동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "충청남도 홍성군",
        },
        {
          "@type": "TableCell",
          text: "금일동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "041-634-5400",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "충청남도 홍성군 홍동면 충절로 625 (홍동면)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "전라남도 나주시",
        },
        {
          "@type": "TableCell",
          text: "나주유기동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "010-2331-7377",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "전라남도 나주시 산포면 내기3길 71-43 [*미고시]",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "서울특별시 노원구",
        },
        {
          "@type": "TableCell",
          text: "노원반려동물문화센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "02-933-8500",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "서울특별시 노원구 수락산로 258 (상계동, 호성빌딩) 1층",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "충청남도 논산시",
        },
        {
          "@type": "TableCell",
          text: "논산시 동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "041-746-8470",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "충청남도 논산시 계백로665번길 100 (등화동) 논산시 동물보호센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "충청북도 단양군",
        },
        {
          "@type": "TableCell",
          text: "단양군유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "043-420-2746",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "충청북도 단양군 매포읍 우덕리 910번지",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "충청남도 당진시",
        },
        {
          "@type": "TableCell",
          text: "당진시동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "041-356-8210",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "충청남도 당진시 고대면 연동로 30-6 (고대면)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 중구",
        },
        {
          "@type": "TableCell",
          text: "대구시수의사회(동산)",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "053-254-3366",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 중구 남성로 서성로 34 (남성로)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 중구",
        },
        {
          "@type": "TableCell",
          text: "대구시수의사회(동인)",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "070-4466-1575",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 중구 동인동4가 국채보상로 724",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 중구",
        },
        {
          "@type": "TableCell",
          text: "대구시수의사회(삼덕)",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "053-426-1731",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 중구 삼덕동1가 달구벌대로 2145",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 중구",
        },
        {
          "@type": "TableCell",
          text: "대구시수의사회(원)",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "053-255-8275",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 중구 동덕로8길 2 (대봉동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 북구",
        },
        {
          "@type": "TableCell",
          text: "대구유기동물보호협회",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "053-964-6258",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 동구 금강로 151-13 (금강동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대전광역시 동구",
        },
        {
          "@type": "TableCell",
          text: "대전동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "042-825-1118",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대전광역시 유성구 금남구즉로 1234 (금고동) 대전광역시 동물보호센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 달성군",
        },
        {
          "@type": "TableCell",
          text: "동인동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "053-424-4258",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 중구 동인동4가 국채보상로 724 (동인동4가) 가창면 관할",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "강원특별자치도 동해시",
        },
        {
          "@type": "TableCell",
          text: "동해시유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "033-522-2990",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "강원도 동해시 대동로 159-13 (송정동, 동해시유기동물보호소)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 달성군",
        },
        {
          "@type": "TableCell",
          text: "동행동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "053-636-8720",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 달서구 진천로 117 (대천동) 117,118 호",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "서울특별시 강동구",
        },
        {
          "@type": "TableCell",
          text: "둔촌동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "02-474-5100",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "서울특별시 강동구 양재대로 1385 (성내동) 둔촌동물병원",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상남도 창원시 마산합포회원구",
        },
        {
          "@type": "TableCell",
          text: "마산유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "055-225-5701",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상남도 창원시 마산합포구 진북면 지산2길 139-112 226-19",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "서울특별시 마포구",
        },
        {
          "@type": "TableCell",
          text: "마포구청",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "02-3153-8542",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "서울특별시 마포구 월드컵로 212 (성산동, 마포구청) 8층 경제진흥과",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 수성구",
        },
        {
          "@type": "TableCell",
          text: "멘토동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "053-291-7579",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 수성구 용학로 294 (범물동) 2층",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "전라남도 무안군",
        },
        {
          "@type": "TableCell",
          text: "무안군유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "061-450-4059",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "전라남도 무안군 무안읍 면주길 99",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "전라북도 무주군",
        },
        {
          "@type": "TableCell",
          text: "무주군",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "063-320-2829",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "전라북도 무주군 적상면 구억로 110-27",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "서울특별시 마포구",
        },
        {
          "@type": "TableCell",
          text: "박창석동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "02-6405-7582",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "서울특별시 마포구 도화길 42 (도화동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "충청북도 청주시",
        },
        {
          "@type": "TableCell",
          text: "반려동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "043-201-2298",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "충청북도 청주시 흥덕구 강내면 서부로 411-55 (강내면)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "전라남도 보성군",
        },
        {
          "@type": "TableCell",
          text: "보성유기동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "061-853-5405",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "전라남도 보성군 노동면 노동천동길 221",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상북도 봉화군",
        },
        {
          "@type": "TableCell",
          text: "봉화군유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "054-679-6868",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상북도 봉화군 봉성면 농업인길 24 (봉성면) 봉화군농업기술센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "부산광역시 동구",
        },
        {
          "@type": "TableCell",
          text: "부산동구청",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "051-440-4521",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "부산광역시 동구 구청로 1 (수정동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "부산광역시 북구",
        },
        {
          "@type": "TableCell",
          text: "부산동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "051-832-7119",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "부산광역시 강서구 맥도강변길 752-15 (대저2동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "전라북도 부안군",
        },
        {
          "@type": "TableCell",
          text: "부안군 동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "063-580-4499",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "전라북도 부안군 주산면 주산로 369 부안군 동물보호센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 부천시",
        },
        {
          "@type": "TableCell",
          text: "부천시수의사회",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "032-661-7575",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 부천시 원미구 중동로 100 (중동) 아이파크 상가동 213호",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "부산광역시 동구",
        },
        {
          "@type": "TableCell",
          text: "사단법인 하얀비둘기",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "051-293-9779",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "부산광역시 강서구 제도로 726 (강동동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "전라북도 전주시",
        },
        {
          "@type": "TableCell",
          text: "사랑플러스동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "063-211-0600",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "전라북도 전주시 덕진구 쪽구름2길 8 (여의동2가) 1층",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상남도 사천시",
        },
        {
          "@type": "TableCell",
          text: "사천시 동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "055-831-3768",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상남도 사천시 용현면 진삼로 902 사천시유기동물보호소",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "울산광역시 중구",
        },
        {
          "@type": "TableCell",
          text: "산타클라라동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "052-244-4296",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "울산광역시 중구 다운로 1 (다운동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "강원특별자치도 삼척시",
        },
        {
          "@type": "TableCell",
          text: "삼척시동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "033-571-2610",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "강원도 삼척시 미로면 동안로 86-45",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상북도 상주시",
        },
        {
          "@type": "TableCell",
          text: "상주시 동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "010-9270-1191",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상북도 상주시 청리면 남상주로 1205-59",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "충청남도 서산시",
        },
        {
          "@type": "TableCell",
          text: "서산시 동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "041-660-2040",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "충청남도 서산시 인지면 무학재1길 99",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "서울특별시 서초구",
        },
        {
          "@type": "TableCell",
          text: "서초동물사랑센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "02-6956-7980",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "서울특별시 서초구 양재천로19길 22 (양재동, 숨빌딩) 서초동물사랑센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "대구광역시 수성구",
        },
        {
          "@type": "TableCell",
          text: "세인트동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "053-744-8285",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "대구광역시 수성구 청호로 484 (만촌동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "강원특별자치도 속초시",
        },
        {
          "@type": "TableCell",
          text: "속초시유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "033-636-2519",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "강원도 속초시 하도문길 103 (대포동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 수원시",
        },
        {
          "@type": "TableCell",
          text: "수원시 동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-228-3557",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 수원시 영통구 광교호수로 234 (하동, 수원시 동물보호센터) 하동 40-10",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "전라남도 순천시",
        },
        {
          "@type": "TableCell",
          text: "순천시유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "061-749-8793",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "전라남도 순천시 승주읍 승주로 628 (승주읍, 농업기술센터) 순천시유기동물보호소",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 시흥시",
        },
        {
          "@type": "TableCell",
          text: "시흥동물누리보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-310-6945",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 시흥시 뒷방울길 218 (정왕동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "인천광역시 중구",
        },
        {
          "@type": "TableCell",
          text: "신공항동물병원",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "032-751-4598",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "인천광역시 중구 운남동로3번길 9 (운남동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "충청남도 아산시",
        },
        {
          "@type": "TableCell",
          text: "아산동물복지지원센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "041-530-6200",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "충청남도 아산시 환경공원로 158 (배미동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "강원특별자치도 양구군",
        },
        {
          "@type": "TableCell",
          text: "양구군유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "033-480-7785",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "강원도 양구군 국토정중앙면 삼팔선로 680  유기동물보호소",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상남도 양산시",
        },
        {
          "@type": "TableCell",
          text: "양산시 동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "055-392-5669",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상남도 양산시 동면 석산리 392 양산시농업기술센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "강원특별자치도 양양군",
        },
        {
          "@type": "TableCell",
          text: "양양군유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "033-670-2459",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "강원도 양양군 손양면 동막골길 115-35  .",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경기도 양평군",
        },
        {
          "@type": "TableCell",
          text: "양평군유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-770-2337",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 양평군 양평읍 농업기술센터길 59-1",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상북도 영덕군",
        },
        {
          "@type": "TableCell",
          text: "영덕유기동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "054-730-6286",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상북도 영덕군 영덕읍 구미2길 14-1 (영덕읍) 영덕군유기동물보호센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "경상북도 영양군",
        },
        {
          "@type": "TableCell",
          text: "영양군유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "070-7792-6660",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경상북도 영양군 영양읍 달구터길 85",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "강원특별자치도 영월군",
        },
        {
          "@type": "TableCell",
          text: "영월군 동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "033-370-1754",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "강원특별자치도 영월군 남면 갈골길 12  영월군 동물보호센터",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "광명시",
        },
        {
          "@type": "TableCell",
          text: "광명반함센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "02-2680-5001",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 광명시 오리로854번길 10 (철산동) 지하1층",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "안산시",
        },
        {
          "@type": "TableCell",
          text: "한국야생동물보호협회",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-296-0124",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 안산시 상록구 청곡길 50 (부곡동) (사)한국야생동물보호협회",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "용인시",
        },
        {
          "@type": "TableCell",
          text: "용인시 동물보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-324-3463",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 용인시 처인구 중부대로 1074-1 (삼가동, 용인시 동물보호센터)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "화성시",
        },
        {
          "@type": "TableCell",
          text: "남양유기견보호센터",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-356-2281",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 화성시 남양읍 화성로 1483-27 (남양읍)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "오산시",
        },
        {
          "@type": "TableCell",
          text: "오산시수의사회",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-372-9325",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 오산시 성호대로 36 (오산동)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "안산시",
        },
        {
          "@type": "TableCell",
          text: "스타캣츠",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-410-3777",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 안산시 단원구 한양대학로 208 (고잔동) 2층 스타캣츠",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "양주시",
        },
        {
          "@type": "TableCell",
          text: "한국동물구조관리협회",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-867-9119",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 양주시 남면 감악산로 63-37 (남면)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "가평군",
        },
        {
          "@type": "TableCell",
          text: "가평군유기동물보호소",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-580-4788",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 가평군 가평읍 아랫마장길 59 (가평읍, 농업기술센터) 가평 유기동물 보호소(10:00~18:00)",
          align: "center",
        },
      ],
    },
    {
      "@type": "TableRow",
      itemListElement: [
        {
          "@type": "TableCell",
          text: "남양주시",
        },
        {
          "@type": "TableCell",
          text: "남양주동물보호협회",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "031-591-7270",
          align: "center",
        },
        {
          "@type": "TableCell",
          text: "경기도 남양주시 금곡로 44 (금곡동, 성원빌딩) 1층",
          align: "center",
        },
      ],
    },
  ],
};
