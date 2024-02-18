type AnyFunction = (...args: any[]) => void;

export function debounce<T extends AnyFunction>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

//
// const allArticles = await await getArticles({});
// const allNews = await await getNews({});
// const a = allArticles.map((item) => {
//   return {
//     url: `https://pets-in-korea.com/${item.id}`,
//     lastModified: item.updatedAt,
//     changeFrequency: "yearly",
//     priority: 0.5,
//   };
// });
// const n = allNews.map((item) => {
//   return {
//     url: `https://pets-in-korea.com/news/${item.id}`,
//     lastModified: item.updatedAt,
//     changeFrequency: "yearly",
//     priority: 0.5,
//   };
// });

// const result = [...a, ...n];
// console.log(result);
