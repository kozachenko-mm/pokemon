export const TextTransformName = (str: string) => {
  const capitalize = str.charAt(0).toUpperCase() + str.slice(1);
  const result = capitalize.split('-').join(' ');
  return result;
};
