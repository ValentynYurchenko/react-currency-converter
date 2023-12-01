import { useState } from 'react';
import handleCurrencyConverter from '../utils/handleCurrencyConverter';
import './Main.css';

const currencies = [
  { value: 'uah', title: 'UAH' },
  { value: 'usd', title: 'USD' },
  { value: 'eur', title: 'EUR' },
];

const Main = (props) => {
  const averageRateUsd = props.dataNbu[24]?.rate;
  const averageRateEur = props.dataNbu[31]?.rate;
  console.log(averageRateUsd, averageRateEur);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectValue1, setSelectValue1] = useState('uah');
  const [selectValue2, setSelectValue2] = useState('usd');

  return (
    <div className="main">
      <div className="input-group">
        <input
          type="text"
          value={inputValue1}
          onChange={(e) => {
            setInputValue1(e.target.value);
            handleCurrencyConverter(
              e,
              selectValue1,
              selectValue2,
              setInputValue2,
              averageRateUsd,
              averageRateEur
            );
          }}
        />
        <select
          value={selectValue1}
          onChange={(e) => {
            setSelectValue1(e.target.value);
            setInputValue1('');
            setInputValue2('');
          }}
        >
          {currencies.map((currency) => (
            <option key={currency.value} value={currency.value}>
              {currency.title}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <input
          type="text"
          value={inputValue2}
          onChange={(e) => {
            setInputValue2(e.target.value);
            handleCurrencyConverter(
              e,
              selectValue2,
              selectValue1,
              setInputValue1,
              averageRateUsd,
              averageRateEur
            );
          }}
        />
        <select
          value={selectValue2}
          onChange={(e) => {
            setSelectValue2(e.target.value);
            setInputValue1('');
            setInputValue2('');
          }}
        >
          {currencies.map((currency) => (
            <option key={currency.value} value={currency.value}>
              {currency.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Main;
