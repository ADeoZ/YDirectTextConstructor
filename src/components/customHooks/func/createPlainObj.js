// преобразование в "плоский" объект
export function createPlainObj(nested, path = '') {
  return Object.entries(nested).reduce((obj, [k, v]) => {
    // вложенные объекты преобразуем в ключ с разделителем
    const newPath = `${path}${path ? '_' : ''}${k}`;
    return Object.assign(obj, v instanceof Object
      ? createPlainObj(v, newPath)
      : { [newPath]: v }
    );
  }, {});
}