export function calculateMatchCount(ticket, winning, numbersPerTicket = 6) {
  const uniqueNumbers = new Set([...ticket, ...winning]);
  return numbersPerTicket * 2 - uniqueNumbers.size;
}