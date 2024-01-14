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