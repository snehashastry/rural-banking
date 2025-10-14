import React, { useState } from "react";

export default function WealthCalculator() {
  const [assets, setAssets] = useState({
    cash: 0,
    investments: 0,
    realEstate: 0,
    otherAssets: 0,
  });

  const [liabilities, setLiabilities] = useState({
    mortgage: 0,
    carLoan: 0,
    studentLoan: 0,
    creditCard: 0,
    otherLiabilities: 0,
  });

  const [result, setResult] = useState(null);

  const handleAssetChange = (e) => {
    setAssets({ ...assets, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  const handleLiabilityChange = (e) => {
    setLiabilities({ ...liabilities, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  const calculateNetWorth = () => {
    const totalAssets = Object.values(assets).reduce((a, b) => a + b, 0);
    const totalLiabilities = Object.values(liabilities).reduce((a, b) => a + b, 0);
    const netWorth = totalAssets - totalLiabilities;
    setResult({ totalAssets, totalLiabilities, netWorth });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 w-full max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-8">
          Wealth Management Calculator
        </h2>

        {/* Assets Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Assets</h3>
          <div className="space-y-3">
            {["cash", "investments", "realEstate", "otherAssets"].map((field) => (
              <div key={field} className="flex flex-col">
                <label className="font-medium text-gray-600 capitalize mb-1">
                  {field.replace(/([A-Z])/g, " $1")}:
                </label>
                <input
                  type="number"
                  name={field}
                  value={assets[field]}
                  onChange={handleAssetChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Liabilities Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Liabilities</h3>
          <div className="space-y-3">
            {["mortgage", "carLoan", "studentLoan", "creditCard", "otherLiabilities"].map(
              (field) => (
                <div key={field} className="flex flex-col">
                  <label className="font-medium text-gray-600 capitalize mb-1">
                    {field.replace(/([A-Z])/g, " $1")}:
                  </label>
                  <input
                    type="number"
                    name={field}
                    value={liabilities[field]}
                    onChange={handleLiabilityChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateNetWorth}
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-200"
        >
          Calculate Net Worth
        </button>

        {/* Result Section */}
        {result && (
          <div className="mt-6 bg-green-50 p-4 rounded-xl text-center space-y-2">
            <div>
              <span className="font-semibold text-gray-700">Total Assets:</span> Rs.
              {result.totalAssets.toLocaleString()}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Total Liabilities:</span> Rs.
              {result.totalLiabilities.toLocaleString()}
            </div>
            <div className="font-bold text-green-700 text-lg">
              Net Worth: Rs.{result.netWorth.toLocaleString()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
