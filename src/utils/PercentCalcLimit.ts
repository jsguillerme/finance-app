export function PercentCalcLimit(limit: string, value: string) {

  if (limit === "1" || (value === "1" || value === "0")) {
    return 0;
  }

  let limit_number = Number(limit);
  let value_number = Number(value);

  const percentResult = value_number / (limit_number / 100);
  return percentResult;
}