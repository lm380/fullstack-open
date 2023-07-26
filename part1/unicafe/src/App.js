import { useState } from 'react';

const Header = ({ headerText }) => <h1>{headerText}</h1>;
const Button = ({ clickHanlder, btnText }) => (
  <button onClick={clickHanlder}>{btnText}</button>
);
const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statistics = ({ good, neutral, bad, total, average, positivePerc }) => (
  <>
    <Header headerText={'statistics'} />
    <StatisticLine text={'good'} value={good} />
    <StatisticLine text={'neutral'} value={neutral} />
    <StatisticLine text={'bad'} value={bad} />
    <StatisticLine text={'all'} value={total} />
    <StatisticLine text={'average'} value={average} />
    <StatisticLine text={'positive'} value={positivePerc + '%'} />
  </>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(good + neutral + bad);
  const [average, setAverage] = useState(total / 3);
  const [positivePerc, setPositivePerc] = useState(0);

  const updateStatistics = (newGood = good) => {
    const newTotal = total + 1;
    setTotal(newTotal);
    setAverage(newTotal / 3);
    setPositivePerc((newGood / newTotal) * 100);
  };

  const goodHandler = () => {
    const newGood = good + 1;
    setGood(newGood);
    updateStatistics(newGood);
  };

  const neutralHandler = () => {
    setNeutral(neutral + 1);
    updateStatistics();
  };

  const badHandler = () => {
    setBad(bad + 1);
    updateStatistics();
  };

  return (
    <div>
      <Header headerText={'give feedback'} />
      <br />
      <Button clickHanlder={goodHandler} btnText={'good'} />
      <Button clickHanlder={neutralHandler} btnText={'neutral'} />
      <Button clickHanlder={badHandler} btnText={'bad'} />
      <br />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positivePerc={positivePerc}
      />
      <br />
    </div>
  );
};

export default App;
