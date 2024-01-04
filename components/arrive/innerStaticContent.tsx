import Box from "@mui/material/Box";
import Image from "next/image";
import Document10days from "../../public/10-days.jpeg";
import Document3days from "../../public/Document3days.jpeg";
import Relax from "../../public/relax.png";
import antibodyTest from "../../public/antibody-test.png";

export default function InnerStaticContent() {
  return (
    <>
      <h3>
        Список документов, необходимых для вывоза животных в страны, входящие в
        Евразийский экономический союз (ЕАЭС):
      </h3>
      <ul>
        <li>Ветеринарный паспорт с отметками о всех необходимых прививках</li>
        <li>
          Справка от 농림축산검역본부 사무실 не позднее трех дней до вылета
          (можно получить в аэропорту или в местном филиале)
        </li>
        <li>Справка о клиническом осмотре ветеринаром не позднее 10 дней</li>
        <li>
          Авиабилеты для животного и сопровождающего (если животное летит в
          салоне)
        </li>
        <li>
          Согласие авиакомпании на перевозку (не все авиакомпании дают согласие)
        </li>
      </ul>
      <h3>Теперь разберем по порядку последовательность ваших действий.</h3>
      <h2>Ветеринарный паспорт с отметками о всех необходимых прививках.</h2>
      <p>
        Ваш питомец прибыл в Южную Корею из-за границы вместе с вами? Значит,
        животное уже имеет паспорт и чипировано. Обзавелись питомцем в Корее?
        Направляемся в любую ветеринарную клинику, обследуем животное и получаем
        паспорт. Обязательно чипируем вашего питомца (это требование местного
        закона). На всякий случай напоминаем врачу, что животному предстоит
        авиаперелет в другую страну и необходимо пройти комплексную вакцинацию и
        обработку от паразитов. Заблаговременно уточните о необходимых прививках
        для страны, в которую собираетесь полететь.
      </p>
      Для стран ЕАЭС это:
      <ul>
        <li>
          Прививка от бешенства/광견병 예방 접종, сделанная в течение года, но
          не позднее, чем за 30 дней до дня вылета(для всех видов животных)
        </li>
        <li>
          Собакам – против чумы плотоядных, гепатита, парвовирусных инфекций и
          аденовирусных инфекций, лептоспироза (если не были обработаны с
          профилактической целью дегидрострептомицином или веществом,
          зарегистрированным в стране-экспортере, дающим эквивалентный эффект).
          Комплексная прививка/종합백신
        </li>
        <li>
          Кошкам – против панлейкопении, или комплексная прививка/FevRCP-C 백신
        </li>
        <li>
          Кроликам – против миксоматоза и вирусной геморрагической болезни, а
          также по требованию уполномоченного органа государства – члена ЕАЭС,
          на территорию которого осуществляется ввоз, на другие инфекционные
          болезни
        </li>
      </ul>
      <h2>Справка о клиническом осмотре ветеринаром не позднее 10 дней</h2>
      <Box sx={{ display: { md: "flex" } }}>
        <Box sx={{ width: { md: "60%" } }}>
          <p>
            До перелета остается менее 10 дней? Отправляемся к ветеринару вместе
            с животным и объясняем, куда и когда летим. Нужно пройти осмотр и
            получить одобрение на перелет. Название справки на корейском -{" "}
            <b>
              <em>예방접종증명서 및 건강증명서.</em>
            </b>
          </p>
        </Box>

        <Box sx={{ width: { md: "40%" } }}>
          <Image
            style={{ display: "block", width: "100%", height: "100%" }}
            src={Document10days.src}
            quality={90}
            width={250}
            height={300}
            alt={`dd `}
          />
        </Box>
      </Box>
      <h2>Справка от 농림축산검역본부 사무실 не позднее трех дней до вылета</h2>
      <Box sx={{ display: { md: "flex" } }}>
        <Box sx={{ width: { md: "60%" } }}>
          <p>
            Вместе с животным, ветеринарным паспортом и справкой от ветеринара
            예방접종증명서 및 건강증명서 отправляемся в 농림축산검역본부 사무실
            (один из офисов находится в аэропорту Инчхона) не раньше чем за три
            дня до вылета. Проходим осмотр, платим госпошлину 10 000 вон и
            получаем{" "}
            <b>
              <em>검역증명서.</em>
            </b>
          </p>
        </Box>

        <Box sx={{ width: { md: "40%" } }}>
          <Image
            style={{ display: "block", width: "100%", height: "100%" }}
            src={Document3days.src}
            quality={90}
            width={250}
            height={300}
            alt={`dd `}
          />
        </Box>
      </Box>
      <h2>Авиабилеты для животного и сопровождающего</h2>
      <p>
        Перед покупкой авиабилетов заходим на веб-сайт авиакомпании и подробно
        изучаем все требования к перевозке животных, габариты переноски и
        правила транспортировки.
      </p>
      <p>
        Приобретаем переноску для животых подходящую под требования
        авиакомпании(они могут отличаться)
      </p>
      <p>
        {" "}
        Если все критерии выполнены, рекомендуется сначала связаться с
        авиакомпанией (у большинства есть служба поддержки на веб-сайте),
        сообщить о том, что собираетесь лететь с животным, получив одобрение,
        покупаем авиабилеты и делаем запрос на перевозку животного, получаем
        письменное одобрение и оплачиваем перевозку животного.
      </p>
      <p>
        {" "}
        Согласие на перевозку животного – это один из самых важных этапов, так
        как авиакомпания имеет право отказать без объяснения причин, и бывали
        случаи, когда это происходило за сутки до рейса (речь про Аэрофлот,
        который в настоящее время не совершает рейсы в Южную Корею).
      </p>
      <h2>На борту самолета</h2>
      <Box sx={{ display: { md: "flex" } }}>
        <Box sx={{ width: { md: "60%" } }}>
          <p>
            Для животного авиаперелет – это большой стресс, и чтобы сгладить
            его, можно за пару недель до вылета обратиться к ветеринару за
            успокоительными на растительной основе и давать их своему питомцу
            согласно инструкции. Такие препараты, как правило, имеют
            накопительный эффект, и начинать их прием следует за несколько
            недель до рейса.
          </p>
        </Box>

        <Box sx={{ width: { md: "40%" } }}>
          <Image
            style={{ display: "block", width: "100%", height: "100%" }}
            src={Relax.src}
            quality={90}
            width={250}
            height={300}
            alt={`dd `}
          />
        </Box>
      </Box>
      <h2>Возвращение в Южную Корею</h2>
      <Box sx={{ display: { md: "flex" } }}>
        <Box sx={{ width: { md: "60%" } }}>
          <p>
            Если вы планируете вернуться в Южную Корею в течение следующих 12
            месяцев, помните, что для провоза вашего питомца потребуется:
          </p>
          <ul>
            <li>проведение серологического исследования крови животного</li>
            <li>
              и оформление ветеринарного сертификата международного образца
            </li>
          </ul>
          <p>
            В странах ЕАЭС ощущается острая нехватка клиник, предоставляющих
            необходимые сертификаты. Вы можете избежать множества проблем и
            избыточного стресса, оформив необходимые документы, находясь в Южной
            Корее.
          </p>
        </Box>

        <Box sx={{ width: { md: "40%" } }}>
          <Image
            style={{ display: "block", width: "100%", height: "100%" }}
            src={antibodyTest.src}
            quality={90}
            width={250}
            height={300}
            alt={`dd `}
          />
        </Box>
      </Box>
      <h2>Заключение</h2>
      <p>
        Как можно судить из инструкции выше, перелет с домашним питомцем требует
        времени и дополнительных усилий на подготовку, и приступать к ней
        следует минимум за 30 дней, если вы регулярно посещаете ветеринара. Если
        вы покидаете страну на непродолжительный период, то возможно, более
        оптимальным решением будет воспользоваться услугами отелей для домашних
        животных. Инструкцию и личный опыт вы можете найти в разделе &quot;ОТЕЛИ
        ДЛЯ ДОМАШНИХ ЖИВОТНЫХ В ЮЖНОЙ КОРЕЕ&quot;.
      </p>
      <h3>Важные замечания</h3>
      <p>
        В ЕАЭС допускается ввоз собак и кошек, перевозимых для личного
        пользования, в количестве не более двух голов, без разрешения
        Россельхознадзора, предварительного карантинирования, по международному
        ветеринарному паспорту.
      </p>
      <p>
        Если вы планируете ввезти в Россию собак или кошек в количестве более
        двух голов или если ввоз собак и кошек осуществляется без сопровождения
        владельцем вам понадобится разрешение Россельхознадзора.
      </p>
      <p>
        Эти разрешения размещены на официальном{" "}
        <a href="https://fsvps.gov.ru/jeksport-import/veterinarno-sanitarnye-trebovanija-pri-importe-v-rossijskuju-federaciju/">
          сайте Россельхознадзора
        </a>
      </p>
      <h3>Ссылки:</h3>
      <ul>
        <li>
          <a href="https://fsvps.gov.ru/puteshestvujushhim-s-pitomcami-vvoz-vyvo/instrukcija-kak-vvezti-domashnee-zhivotnoe-v-rossiju/">
            Россельхознадзор
          </a>
        </li>
        <li>
          <a href="https://www.qia.go.kr/livestock/qua/livestock_outforeign_hygiene_inf.jsp">
            Штаб сельского и лесного хозяйства Южной Кореи
          </a>
        </li>
      </ul>
    </>
  );
}
