import { useState } from "react";

const App = () => {
  const [rollOne, setRollOne] = useState(0);
  const [rollTwo, setRollTwo] = useState(0);
  const [rollThree, setRollThree] = useState(0);
  const [rollFour, setRollFour] = useState(0);
  const [rollFive, setRollFive] = useState(0);
  const [moneyBall, setMoneyBall] = useState(0);

  const handleSpin = (min, max, moneyBallMin, moneyBallMax) => {
    let rollOneNumber = Math.floor(Math.random() * (max - min) + min);
    let rollTwoNumber = Math.floor(Math.random() * (max - min) + min);
    let rollThreeNumber = Math.floor(Math.random() * (max - min) + min);
    let rollFourNumber = Math.floor(Math.random() * (max - min) + min);
    let rollFiveNumber = Math.floor(Math.random() * (max - min) + min);
    let moneyBallNumber = Math.floor(
      Math.random() * (moneyBallMax - moneyBallMin) + moneyBallMin
    );

    setRollOne(rollOneNumber);
    setRollTwo(rollTwoNumber);
    setRollThree(rollThreeNumber);
    setRollFour(rollFourNumber);
    setRollFive(rollFiveNumber);
    setMoneyBall(moneyBallNumber);
  };

  return (
    <div className="flex flex-col h-screen items-center bg-black text-white">
      <div className="text-3xl h-1/5 font-bold flex items-center underline underline-offset-1">
        <h1>Lucky Day</h1>
      </div>
      {rollOne === 0 ? (
        <div className="h-1/3"></div>
      ) : (
        <section className="flex justify-center h-1/3 items-center">
          <div className="p-2 m-2 text-2xl text-blue-500 font-bold border-2 border-blue-400 bg-red-300 w-12 h-12 text-center ">
            {rollOne}
          </div>
          <div className="p-2 m-2 text-2xl text-blue-500 font-bold border-2 border-blue-400 bg-red-300 w-12 h-12 text-center ">
            {rollTwo}
          </div>
          <div className="p-2 m-2 text-2xl text-blue-500 font-bold border-2 border-blue-400 bg-red-300 w-12 h-12 text-center ">
            {rollThree}
          </div>
          <div className="p-2 m-2 text-2xl text-blue-500 font-bold border-2 border-blue-400 bg-red-300 w-12 h-12 text-center ">
            {rollFour}
          </div>
          <div className="p-2 m-2 text-2xl text-blue-500 font-bold border-2 border-blue-400 bg-red-300 w-12 h-12 text-center ">
            {rollFive}
          </div>
          <div className="p-2 m-2 text-2xl text-orange-500 font-bold  border-2 border-orange-400 bg-yellow-400 w-12 h-12 text-center">
            {moneyBall}
          </div>
        </section>
      )}
      <div>
        <button
          className="text-yellow-400 hover: font-boldtext-white border border-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-400"
          onClick={() => handleSpin(1, 70, 1, 25)}
        >
          Get Numbers
        </button>
      </div>
    </div>
  );
};

export default App;
