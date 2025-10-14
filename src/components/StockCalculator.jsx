import React, { useState } from "react";

export default function StockCalculator() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [shares, setShares] = useState("");
  const [fees, setFees] = useState("");
  const [result, setResult] = useState(null);

  const calculateStockProfit = () => {
    const buy = parseFloat(buyPrice) || 0;
    const sell = parseFloat(sellPrice) || 0;
    const numShares = parseInt(shares) || 0;
    const brokerage = parseFloat(fees) || 0;

    const totalBuy = buy * numShares + brokerage;
    const totalSell = sell * numShares - brokerage;
    const profitLoss = totalSell - totalBuy;
    const percentage = totalBuy !== 0 ? (profitLoss / totalBuy) * 100 : 0;

    setResult({ totalBuy, totalSell, profitLoss, percentage });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          Stock Market Calculator
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Buy Price per Share
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="e.g., 100"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Sell Price per Share
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="e.g., 120"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Number of Shares
            </label>
            <input
              type="number"
              placeholder="e.g., 50"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Brokerage Fees (optional)
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="e.g., 10"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            onClick={calculateStockProfit}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-200"
          >
            Calculate
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-gray-100 p-4 rounded-xl text-center space-y-2">
            <div>
              <span className="font-semibold text-gray-700">Total Buy Value:</span>{" "}
              Rs.{result.totalBuy.toFixed(2)}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Total Sell Value:</span>{" "}
              Rs.{result.totalSell.toFixed(2)}
            </div>
            <div
              className={`font-bold ${
                result.profitLoss >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {result.profitLoss >= 0 ? "Profit" : "Loss"}: Rs.
              {result.profitLoss.toFixed(2)} ({result.percentage.toFixed(2)}%)
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
