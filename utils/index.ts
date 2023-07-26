export const minifyString = (str: string, len?: number): string => {
  if (str == null) return ''
  if (str.length <= len) return str
  return str.substring(0, len || 10) + '...'
}

export const convertDateFormat = (inputDate: string): string => {
  let date = new Date(inputDate);

  // Extract the day, month, and year
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;  // Months are zero-indexed in JS
  let year = date.getUTCFullYear().toString().substr(-2);  // Get last two digits of the year

  // Format the date
  let formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
}