export const purgeByName = (text: string, toReplace: string) => {
  return text.replace(toReplace, '*****');
};
