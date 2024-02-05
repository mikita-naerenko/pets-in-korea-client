export default function HiddenSEOTitle({ title }: { title: string }) {
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
      {title}
    </h1>
  );
}
