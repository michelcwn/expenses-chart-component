import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

function Header() {
  return (
    <header className="header">
      <div className="header__balance balance">
        <p className="balance__title">My balance</p>
        <h2 className="balance__amount">$921.48</h2>
      </div>
      <img className="header__logo" src="/images/logo.svg" alt="Logo" />
    </header>
  );
}

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Spending - Last 7 days</h1>
      <Chart />
      <Expense />
    </main>
  );
}

function Chart() {
  const maxAmount = Math.max(...data.map((item) => item.amount));
  const [hovered, setHovered] = useState(null); // État pour contrôler l'élément survolé

  return (
    <div className="chart">
      {data.map((item, index) => (
        <div
          key={item.day}
          className={`chart__bar chart__bar--${item.day} ${
            item.day === "wed" ? "chart__bar--selected" : ""
          }`}
          style={{ height: `${(item.amount / maxAmount) * 100}%` }}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {hovered === index && (
            <span className="chart__expense">${item.amount.toFixed(2)}</span>
          )}
          <span className="chart__label">{item.day}</span>
        </div>
      ))}
    </div>
  );
}

function Expense() {
  return (
    <div className="expense">
      <div className="expense__total total">
        <p className="total__label">Total this month</p>
        <h2 className="total__amount">$478.33</h2>
      </div>
      <div className="expense__percentage percentage">
        <p className="percentage__value">
          <b> +2.4% </b>
        </p>
        <p className="percentage__description">from last month</p>
      </div>
    </div>
  );
}
