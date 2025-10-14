import React, { useState } from "react";

export default function SmartInvest() {
  const [showCalc, setShowCalc] = useState(false);
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(R) || isNaN(T) || P <= 0 || R <= 0 || T <= 0) {
      setResult("⚠️ Please enter valid numbers.");
      return;
    }

    const A = P * Math.pow(1 + R / 100, T);
    setResult(`💰 Estimated Return: ₹${A.toFixed(2)}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Welcome to SmartInvest</h1>
        <button
          onClick={() => setShowCalc(true)}
          className="bg-blue-800 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
        >
          Open Investment Calculator
        </button>

        {showCalc && (
          <div className="mt-8 bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Investment Calculator
            </h2>

            <div className="flex flex-col space-y-3">
              <input
                type="number"
                placeholder="Principal"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <input
                type="number"
                placeholder="Rate (%)"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <input
                type="number"
                placeholder="Time (years)"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />

              <button
                onClick={handleCalculate}
                className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
              >
                Calculate
              </button>
            </div>

            {result && (
              <p className="mt-4 text-lg font-medium text-gray-700 text-center">{result}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
