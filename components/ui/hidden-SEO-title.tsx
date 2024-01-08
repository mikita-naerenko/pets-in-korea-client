export default function HiddenSEOTitle() {
  return (
    <h1
      aria-hidden="true"
      title="Информационный ресурс для владельцев домашних животных в Корее"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        clip: "rect(1px, 1px, 1px, 1px)",
        whiteSpace: "nowrap",
      }}
    >
      Информационный портал для русскоязычных владельцев домашних животных в
      Южной Корее. Советы по перевозке, правила и документы.
    </h1>
  );
}
