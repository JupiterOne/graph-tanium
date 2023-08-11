export default function formatKey(str: string) {
  return str.toLowerCase().split(' ').join('-');
}
