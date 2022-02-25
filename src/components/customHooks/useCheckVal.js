// проверка значений на ограничения длины
export function useCheckVal (field, rule) {
  // если какие-то символы не учитываются
  if (rule.reg) {
    field = field.replace(rule.reg, "");
  }
  return field.length <= rule.length;
}