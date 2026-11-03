export function getLabel(value: any, labels: any) {
  if (!value) return "";
  if (Object.prototype.hasOwnProperty.call(labels, value)) return labels[value];
  return String(value).replace(/[-_]/g, " ").toUpperCase();
}