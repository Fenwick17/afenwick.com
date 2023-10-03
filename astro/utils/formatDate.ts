export const formatDate = (date: string): string => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString('en-GB', options);
  return formattedDate;
};
