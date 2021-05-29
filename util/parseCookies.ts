export function parseCookies(cookies: string) {
  const str = cookies.split('; ');
  const result = {};
  for (let i = 0; i < str.length; i += 1) {
    const cur = str[i].split('=');
    // eslint-disable-next-line prefer-destructuring
    result[cur[0]] = cur[1];
  }
  return result;
}
