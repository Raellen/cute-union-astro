export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-TW").format(date);
}
