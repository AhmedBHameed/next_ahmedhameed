export const clsx = (className: string | Array<string>) => {
  if (Array.isArray(className)) {
    return className.join(' ');
  }
  return `${className} `;
};
