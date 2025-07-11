export type TimeUnit = "day" | "week" | "month" | "year";

const unitMap: Record<TimeUnit, [string, string, string]> = {
  day: ["день", "дня", "дней"],
  week: ["неделя", "недели", "недель"],
  month: ["месяц", "месяца", "месяцев"],
  year: ["год", "года", "лет"],
};

export function pluralizeTime(value: number, unit: TimeUnit): string {
  const [one, few, many] = unitMap[unit];

  const absVal = Math.abs(value) % 100;
  const lastDigit = absVal % 10;

  if (absVal > 10 && absVal < 20) return `${value} ${many}`;
  if (lastDigit > 1 && lastDigit < 5) return `${value} ${few}`;
  if (lastDigit === 1) return `${value} ${one}`;
  return `${value} ${many}`;
}
