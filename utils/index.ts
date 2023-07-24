export const minifyString = (str: string, len?: number): string => {
  if (str == null) return ''
  if (str.length <= len) return str
  return str.substring(0, len || 10) + '...'
}