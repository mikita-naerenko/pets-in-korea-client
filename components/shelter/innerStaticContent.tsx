import React from "react";

export default function InnerStaticContent() {
  return (
    <section itemProp="articleSection">
      <div itemScope itemType="https://schema.org/ItemList">
        <h2 itemProp="name">
          Перед тем как принять решение об усыновлении, следует следует ответить
          самому себе на следующие вопросы:
        </h2>
        <ul>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Подготовили ли вы окружение и готовы ли вы к встрече с новым
            домочадцем?
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Готовы ли вы к ответственности за питомца, который проживет 10-15
            лет и будет с вами даже при изменениях в семейной ситуации, таких
            как брак, беременность, поступление в учебное заведение или переезд?
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Есть ли согласие всех членов семьи на появление нового питомца?
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Возникнут ли проблемы с собственником вашей квартиры (если она
            съемная)?
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Есть ли опыт в уходе за домашними животными, и готовы ли вы учиться
            для обеспечения психологического и физического здоровья вашего
            питомца?
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Вы готовы предоставить подходящее лечение при болезни и решить
            вопрос о стерилизации (хирургической невозможности размножения)?
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Есть ли у вас желание и возможности взять на себя финансовые
            обязательства, связанные с уходом за животным?
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Вы обдумали, как новый питомец впишется в ваш домашний коллектив и
            сможет ли он хорошо ладить с другими вашими животными?
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Есть ли у кого-либо из вашей семьи аллергия на животных? Если вы не
            можете уверенно ответить на этот вопрос, возможно стоит сдать кровь
            на выявление аллергенов.
          </li>
        </ul>
      </div>
      <div itemScope itemType="https://schema.org/ItemList">
        <h2 itemProp="name">
          Если вы решили взять кошку, собаку или другое животное из приюта в
          Южной Корее, важно помнить:
        </h2>
        <ul>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            При усыновлении могут взиматься определенные расходы.
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Если владелец не появляется в течение 10 дней после оглашения о
            найденном брошенном животном, оно может быть усыновлено обычными
            гражданами.
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Для усыновления свяжитесь с приютом заранее по телефону,
            зарезервируйте время для посещения в соответствии с указаниями
            сотрудников.
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Для усыновления подготовьте две копии удостоверения личности,
            необходимые вещи для нового питомца. Затем посетите приют и
            заполните договор об усыновлении.
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            Заявителю необходимо посетить приют лично. Усыновление не разрешено
            для лиц младше 18 лет. Если несовершеннолетний желает усыновить, ему
            необходимо получить разрешение от родителей и посетить приют вместе
            с ними.
          </li>
        </ul>
        <h3>Ссылки:</h3>
        <ul>
          <li>
            <a href="https://www.animal.go.kr/front/index.do">
              Национальная информационная система защиты животных Южной Кореи
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
