"use client";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function Intro() {
  return (
    <Container disableGutters component={"section"}>
      <Typography variant="h4" component={"h1"} mb={2}>
        PETS IN COREA - Информационный портал для владельцев животных в Южной
        Корее
      </Typography>
      {/* <Typography variant="h3" component={"h2"}></Typography> */}
      <Typography variant="h5" component={"h2"} mb={1}>
        Прежде всего, хотелось бы ответить на один логичный вопрос, который
        может возникнуть: <b>для чего создан этот сайт</b>?
      </Typography>
      <Typography mb={2}>
        Многие думают, что информации много, и вообще, все всё знают. Но нет,
        это не так. На самом деле информации о жизни с животными в Южной Корее
        на русском языке крайне мало. И собирать её приходится по крупицам.
        Кроме того, информация может устаревать или становиться неактуальной.
      </Typography>
      <Typography variant="h5" component={"h2"} mb={3}>
        Этот ресурс создан для аккумулирования важной информации, которая
        поможет избежать множества проблем связанных с нашими питомцами.
      </Typography>
      <Typography component={"ul"} mb={2}>
        <Typography component={"li"} variant="subtitle1">
          Владелец квартиры не разрешает проживание с животными.
        </Typography>
        <Typography component={"li"} variant="subtitle1">
          Не собрали необходимые документы, и в аэропорту вы узнаете, что
          животное на борт не пустят.
        </Typography>
        <Typography component={"li"} variant="subtitle1">
          Собака выбежала из квартиры, и вы не знаете, что делать.
        </Typography>
        <Typography component={"li"} variant="subtitle1">
          Вы завели друга для всей семьи, а потом обнаружили, что у вашего
          ребенка аллергия.
        </Typography>
        <Typography component={"li"} variant="subtitle1">
          Пренебрегали прививками и регулярными визитами в ветклинику, а затем
          сожалели о невосполнимой утрате.
        </Typography>
      </Typography>
      <Typography mb={2}>
        Это всего лишь малая часть проблем, с которыми сталкиваются хозяева
        домашних животных в Корее. Большинство из них можно избежать, зная, как
        правильно себя вести и осознавая полную ответственность за вашего
        питомца.
      </Typography>

      <Typography variant="h5" component={"h2"} mb={3}>
        Этот сайт содержит
      </Typography>
      <Typography component={"ul"} mb={3}>
        <Typography component={"li"} variant="subtitle1">
          переведенные статьи с корейских ресурсов
        </Typography>
        <Typography component={"li"} variant="subtitle1">
          личный опыт хозяев домашних животных
        </Typography>
        <Typography component={"li"} variant="subtitle1">
          {" "}
          актуальные новости о законах и внутренней политике, касающихся
          животных в Южной Корее
        </Typography>
        <Typography component={"li"}>
          {" "}
          а также русско-корейские тематические разговорники.
        </Typography>
      </Typography>

      <Typography>
        Нашли неточную информацию или хотите дополнить имеющуюся? Всегда рады
        вашим предложениям!
        <Link href="#">
          <Button variant="contained">Воспользуйтесь формой для связи.</Button>
        </Link>
      </Typography>
    </Container>
  );
}
