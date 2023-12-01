import { convertUsdEur, convertToUah, convertUahTo } from './convertValues';

const handleCurrencyConverter = (
  e,
  select1,
  select2,
  setInput,
  rateUsd,
  rateEur
) => {
  if (select1 === select2) {
    setInput(e.target.value);
  }
  if (select1 === 'uah' && select2 === 'usd') {
    setInput(convertUahTo(e, rateUsd));
  }
  if (select1 === 'uah' && select2 === 'eur') {
    setInput(convertUahTo(e, rateEur));
  }
  if (select1 === 'usd' && select2 === 'uah') {
    setInput(convertToUah(e, rateUsd));
  }
  if (select1 === 'usd' && select2 === 'eur') {
    setInput(convertUsdEur(e, rateUsd, rateEur));
  }
  if (select1 === 'eur' && select2 === 'uah') {
    setInput(convertToUah(e, rateEur));
  }
  if (select1 === 'eur' && select2 === 'usd') {
    setInput(convertUsdEur(e, rateEur, rateUsd));
  }
};

export default handleCurrencyConverter;
