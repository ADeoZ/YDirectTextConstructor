// проверка суммы длин значений в группе полей
export function useCheckSum (field, ruleGroup, returnSum = false) {
  // какие поля суммируем по данной группе
  const sumFields = ruleGroup.fields;

  const fieldsSum = sumFields.name.reduce((sum, item) => {
    // суммы по массивам полей (callout, sitelink)
    if (sumFields.index) {
      sumFields.index.forEach((i) => {
        sum += field.length;
      });
    }
    // суммы по простым полям
    else {
      sum += field.length;
    }
    return sum;
  }, 0);
  // возвращаем или сумму, или boolean
  return returnSum ? fieldsSum : fieldsSum <= sumFields.sum;
};