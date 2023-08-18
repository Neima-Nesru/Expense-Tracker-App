import Expenses from './component/Expenses/Expenses';
import React from 'react'
const App = () => {
  const expenses = [
    {
      title: 'School Fee',
      date: new Date(2023, 1, 1),
      amount: '4893 ETB'
    }
    , {
      title: 'Transport',
      date: new Date(2023, 10, 21),
      amount: '893 ETB'
    }
    , {
      title: 'House Rent',
      date: new Date(2022, 2, 7),
      amount: '9893 ETB'
    }
  ];

  // alternative way to jsx
  // return React.createElement('div', {}, React.createElement('h1', {}, 'Expense Tracker'), React.createElement(Expenses, { items: expenses }))
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
