export const FIELDS_PARAMS = {
  header: { length: 56 },
  extraheader: { length: 30, reg: /[.,"!;:]/g },
  headers: { fields: { sum: 56, name: ["header", "extraheader"] } },
  text: { length: 81, reg: /[.,"!;:]/g },
  url: { length: 1024 },
  showurl: {
    length: 20,
    forbidden: {
      reg: /[^a-zа-я0-9-№#/%]/i,
      error: 'Допускаются только буквы, цифры и символы "-", "№", "/", "%", "#".',
    },
  },
  callout: {
    length: 25,
    forbidden: {
      reg: /[!?]/g,
      error: 'Нельзя использовать "!", "?".',
    },
  },
  callouts: { fields: { sum: 66, name: ["callout"], index: [0, 1, 2, 3] } },
  sitelink: {
    name: {
      length: 30,
      forbidden: {
        reg: /[!?[\]]/g,
        error: 'Нельзя использовать "!", "?", "[", "]".',
      },
    },
    descr: {
      length: 60,
      forbidden: {
        reg: /[!?[\]]/g,
        error: 'Нельзя использовать "!", "?", "[", "]".',
      },
    },
    link: { length: 1016 },
  },
  sitelinks1: { fields: { sum: 66, name: ["sitelink"], index: [0, 1, 2, 3], subfield: "name" } },
  sitelinks2: { fields: { sum: 66, name: ["sitelink"], index: [4, 5, 6, 7], subfield: "name" } },
};
