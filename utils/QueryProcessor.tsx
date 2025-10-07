export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrewid")) {
    return "alejande";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "alejande";
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return "alejande";
  }  

  const largestNumberPattern = /which of the following numbers is the largest:/i;

  if (largestNumberPattern.test(query)) {
    const numberListMatch = query.match(/:\s*([^?]+)\s*\?/);

    if (numberListMatch && numberListMatch[1]) {
      const numberString = numberListMatch[1];

      const numbers = numberString
        .split(',')
        .map(s => parseInt(s.trim()))
        .filter(n => !isNaN(n));

      if (numbers.length > 0) {
        const largest = Math.max(...numbers);
        return largest.toString();
      }
    }
  }

  return "";
}
