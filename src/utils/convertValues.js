export const convertUsdEur = (e, from, to) => {
  return (e.target.value * from) / to
    ? ((e.target.value * from) / to).toFixed(2)
    : '';
};

export const convertToUah = (e, typeCurrency) => {
  return e.target.value * typeCurrency
    ? (e.target.value * typeCurrency).toFixed(2)
    : '';
};

export const convertUahTo = (e, typeCurrency) => {
  return e.target.value / typeCurrency
    ? (e.target.value / typeCurrency).toFixed(2)
    : '';
};
