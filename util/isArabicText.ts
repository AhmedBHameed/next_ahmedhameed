export const isArabic = (text: string) => {
  const arabic = /[\u0600-\u06FF]/;
  return arabic.test(text);
};
