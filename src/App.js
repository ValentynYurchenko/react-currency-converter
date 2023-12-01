import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [banksData, setBanksData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCurrency = async function () {
      try {
        const responseNbu = await fetch(
          'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
        );

        if (!responseNbu.ok)
          throw new Error(
            `Не має зв'язку з банком. Помилка ${responseNbu.status}`
          );

        const dataNbu = await responseNbu.json();

        const responseMono = await fetch(
          'https://api.monobank.ua/bank/currency'
        );

        if (!responseMono.ok)
          throw new Error(
            `Не має зв'язку з банком. Помилка ${responseMono.status}`
          );

        const dataMono = await responseMono.json();

        setBanksData([dataNbu, dataMono]);
      } catch (e) {
        setError(e.message);
      }
      setIsLoading(false);
    };

    getCurrency();
  }, []);

  if (error) {
    return <h1 className="error-message">Error: {error}</h1>;
  }

  return isLoading ? (
    <h1 className="loading-message">Loading...</h1>
  ) : (
    <div className="App">
      <Header dataNbu={banksData[0]} dataMono={banksData[1]} />
      <Main dataNbu={banksData[0]} />
    </div>
  );
}

export default App;
