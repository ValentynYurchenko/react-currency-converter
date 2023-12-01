import './Header.css';

const date = new Date();
const formatDate = new Intl.DateTimeFormat('uk-Uk').format(date);

const Header = (props) => {
  const averageRateUsd = props.dataNbu[24];
  const averageRateEur = props.dataNbu[31];
  const marketRateUsd = props.dataMono[0];
  const marketRateEur = props.dataMono[1];

  return (
    <div className="header">
      <h4>Курс валют станом на {formatDate}</h4>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Купівля</th>
            <th>Продаж</th>
            <th>НБУ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{averageRateUsd?.cc}</td>
            <td>{marketRateUsd?.rateBuy}</td>
            <td>{marketRateUsd?.rateSell}</td>
            <td>{averageRateUsd?.rate}</td>
          </tr>
          <tr>
            <td>{averageRateEur?.cc}</td>
            <td>{marketRateEur?.rateBuy}</td>
            <td>{marketRateEur?.rateSell}</td>
            <td>{averageRateEur?.rate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;
