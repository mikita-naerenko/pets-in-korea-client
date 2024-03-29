import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import passport from "@/public/passport.jpg";
import chip from "@/public/chip.jpg";
import passportMobile from "@/public/passport-mobile.jpg";
import chipMobile from "@/public/chip-mobile.jpg";
import rusAntibody from "@/public/rusAntibody.jpg";
import rusAntibodyMobile from "@/public/rusAntibody-mobile.jpg";
import vaccine from "@/public/vaccine.jpg";
import vaccineMobile from "@/public/vaccine-mobile.jpg";
import { IMAGE_QUALITY } from "@/lib/image-quality";

export default function InnerStaticContent() {
  return (
    <>
      <div itemProp="articleSection">
        <h2 itemProp="headline">
          К путешествию в Южную Корею с домашним животным необходимо
          подготовиться заранее.
        </h2>
        <div>
          <h3 itemProp="headline">Порядок действий для вылета из России:</h3>
          <ul>
            <li>получить ветеринарный паспорт</li>
            <li>чипировать вашего питомца</li>
            <li>пройти комплексную вакцинацию</li>
            <li>привить его от бешенства</li>
            <li>
              провести серологическое исследование крови животного
              <em>наличие антител к бешенству</em>
              не ранее 30 дней и не позднее 24 месяцев после прививки
            </li>
            <li>получить одобрение на перевозку от авиакомпании</li>
            <li>
              в аккредитованной ветеринарной клинике получить разрешение
              <em>
                (<b>&quot;ветеринарное свидетельство формы №1&quot;</b>)
              </em>
              на перелет с животным (нужен номер рейса)
            </li>
            <li>
              прибыть в аэропорт не менее чем за 3 часа для вылета для
              прохождения ветеринарного контроля и обменять
              <em>
                (<b>&quot;ветеринарное свидетельство формы №1&quot;</b>)
              </em>
              на
              <em>
                (<b>сертификат международного образца формы 5a</b>)
              </em>
            </li>
          </ul>
        </div>
      </div>
      <div itemProp="articleSection">
        <dl itemScope itemType="https://schema.org/ItemList">
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <dt itemProp="name">Ветеринарный паспорт</dt>
            <dd itemProp="description">
              Ветеринарный паспорт выдается лицензированной ветеринарной
              клиникой после осмотра животного. В нем содержатся информация о
              породе, возрасте и прививках питомца. Также в паспорт вносится
              15-значный идентификационный код микрочипа, который вживляется под
              кожу животного.
            </dd>

            <Box
              sx={{
                display: { sm: "flex" },
                justifyContent: "space-between",
              }}
            >
              <picture style={{ width: "49%" }}>
                <source srcSet={passport.src} media="(min-width: 600px)" />
                <Image
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    marginBottom: "10px",
                  }}
                  src={passportMobile.src}
                  quality={IMAGE_QUALITY.innerStaticContent}
                  width={250}
                  height={300}
                  alt={`Обложка ветеринарного паспорта`}
                  itemProp="image"
                />
              </picture>
              <picture style={{ width: "49%" }}>
                <source srcSet={chip.src} media="(min-width: 600px)" />
                <Image
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                  src={chipMobile.src}
                  quality={IMAGE_QUALITY.innerStaticContent}
                  width={250}
                  height={300}
                  itemProp="image"
                  alt={`Страница ветеринарного паспорта с отметкой о чипе`}
                />
              </picture>
            </Box>
          </div>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <dt itemProp="name">Чипирование</dt>
            <dd itemProp="description">
              Микрочип должен работать по технологии HDX или FDX-B, а также
              отвечать требованиям международных стандартов ISO 11784 и ISO
              11785. Чипы старого образца менять не обязательно, но при себе
              нужно иметь считывающее устройство.
            </dd>
          </div>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <dt itemProp="name">Прививки</dt>
            <dd itemProp="description">
              По достижении возраста более 90 дней питомца необходимо
              вакцинировать. Для ввоза животного в Южную Корею также понадобится
              комплексная вакцинация от чумы, инфекционного гепатита,
              парагриппа, парвовирусного энтерита и др.
            </dd>
          </div>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <dt itemProp="name">Тест на титр антител к вирусу бешенства</dt>
            <Box
              sx={{
                display: { sm: "flex" },
                justifyContent: "space-between",
              }}
            >
              <picture style={{ width: "49%" }}>
                <source srcSet={rusAntibody.src} media="(min-width: 600px)" />
                <Image
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    marginBottom: "10px",
                  }}
                  src={rusAntibodyMobile.src}
                  quality={IMAGE_QUALITY.innerStaticContent}
                  width={250}
                  height={200}
                  alt={`Тест на антитела к бешенству для кошек`}
                  itemProp="image"
                />
              </picture>
              <picture style={{ width: "49%" }}>
                <source srcSet={vaccine.src} media="(min-width: 600px)" />
                <Image
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                  src={vaccineMobile.src}
                  quality={IMAGE_QUALITY.innerStaticContent}
                  width={250}
                  height={300}
                  alt={`Ветеринарный паспорт с отметкой о вакцинации`}
                  itemProp="image"
                />
              </picture>
            </Box>
            <dd itemProp="description">
              Сдать анализ крови можно минимум через 30 дней после вакцинации,
              поскольку прививка начинает действовать только через 21
              день.Серологическое исследование проводят только в аккредитованных
              антирабических лабораториях. Допустимая концентрация антител в
              крови животного – не менее 0,5 МЕ/мл. При меньших показателях
              требуется повторная вакцинация питомца.
            </dd>
          </div>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <dt itemProp="name">Ветеринарное свидетельство формы №1</dt>
            <dd itemProp="description">
              Перед поездкой, не ранее чем за 5 дней до отправки, необходимо
              оформить ветеринарное свидетельство формы №1, которое оформляется
              в районной Cтанции по борьбе с болезнями животных (СББЖ) по месту
              отправки животного в информационной системе «Меркурий» и далее
              распечатывается на бумажном носителе.
            </dd>
          </div>
        </dl>
      </div>
      <div itemProp="articleSection">
        <h2 itemProp="headline">
          Бронирование билетов для путешествия с животным
        </h2>
        <p itemProp="text">
          Прежде чем приобрести билеты, мы рекомендуем посетить веб-сайт
          выбранной авиакомпании и внимательно изучить все требования к
          перевозке животных, а также ознакомиться с размерами переноски и
          правилами транспортировки.
        </p>
        <p itemProp="text">
          Выбираем подходящую переноску для животного, соответствующую
          требованиям конкретной авиакомпании (такие требования могут
          различаться).
        </p>
        <p itemProp="text">
          После того как все критерии учтены, рекомендуется сначала связаться с
          авиакомпанией (у большинства есть служба поддержки на веб-сайте),
          уведомить их о планах перевозки животного, получив предварительное
          одобрение. Затем мы приобретаем билеты и подаем запрос на перевозку
          животного, получив письменное разрешение и оплатив соответствующую
          услугу.
        </p>
        <p itemProp="text">
          Получение согласия на перевозку животного является ключевым этапом,
          поскольку авиакомпания вправе отказать без объяснения причин. Были
          случаи, когда это произошло за сутки до вылета (в данном случае речь
          идет об Аэрофлоте, который в настоящее время не осуществляет рейсы в
          Южную Корею).
        </p>
      </div>

      <div itemProp="articleSection">
        <h2 itemProp="headline">Перелет и таможенный контроль</h2>
        <p itemProp="text">
          Прибыть в аэропорт следует минимум за 3 часа до вылета, чтобы обменять
          ветеринарное свидетельство на сертификат международного образца формы
          5a. Полный пакет документов нужно предъявить при регистрации на рейс,
          при необходимости сдав животное в багаж и оплатив сборы за
          транспортировку.
        </p>
        <p itemProp="text">
          Отнеситесь к заполнению документов ответственно! При несовпадении
          данных или некорректно заполненных документах вам могут отказать в
          посадке на борт.
        </p>
        <h2 itemProp="headline">В аэропорту Южной Кореи</h2>
        <p itemProp="text">
          Перед прохождением таможенного контроля необходимо предоставить
          ветеринарному инспектору сертификат международного образца формы 5a
          полученный в аэропорту отправления. В случае если документ не
          соответсвует требованиям Южной Кореи (например слишком низкий уровень
          антител) животное будет помещено на дополнительный карантин.
        </p>

        <h2 itemProp="headline">Когда нужно разрешение Россельхознадзора?</h2>
        <p itemProp="text">
          Вывезти постоянно проживающее с вами домашнее животное (собаку, кошку,
          хорька, кролика, попугая, хомячка и других, за некоторыми
          исключениями) можно без разрешения Россельхознадзора. Разрешение
          требуется, если вы везете животное для продажи.
        </p>
        <p itemProp="text">
          Также необходимо разрешение на вывоз, если животное вывозится без
          сопровождения владельцем.
        </p>
      </div>
    </>
  );
}
