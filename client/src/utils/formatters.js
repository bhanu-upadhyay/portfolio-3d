/**
 * Format ISO date string into readable Month Year
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}

/**
 * Truncate long text with ellipsis
 */
export function truncate(text, length = 120) {
  if (!text || text.length <= length) return text;
  return `${text.slice(0, length)}...`;
}
