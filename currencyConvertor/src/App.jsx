import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  }

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  }  

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full h-screen md:h-[60vh] flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center">
          <div
            className="bg-cover bg-no-repeat w-[80%] h-[80%] rounded-md"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3635539/pexels-photo-3635539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
          ></div>
        </div>

        <div className="w-full md:w-1/2 h-1/2 md:h-full mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 flex justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
