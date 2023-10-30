export default function sanitizeISODateString(isoDateString) {
  return new Date(isoDateString).toLocaleDateString();
}