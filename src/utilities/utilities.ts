// de-slug the poem titles
export const poemTitle = (title: string): string => {
  const rmDashs = title.replace(/-/g, ' ');
  const result = rmDashs.charAt(0).toUpperCase() + rmDashs.substring(1);
  return result;
};