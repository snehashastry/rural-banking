import React, { useState } from "react";

export default function RetirementTracker() {
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [progress, setProgress] = useState(0);
  const [summary, setSummary] = useState("");

  const handleCalculate = () => {
    if (!currentAge || !retirementAge || currentAge >= retirementAge) {
      setSummary("Please enter valid ages.");
      setProgress(0);
      return;
    }
    const ageProgress = ((currentAge / retirementAge) * 100).toFixed(1);
    setProgress(ageProgress);
    setSummary(
      `You have completed ${ageProgress}% of your journey to retirement!`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-3xl p-8 md:p-12 w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          Retirement Planning Tracker
        </h2>

        {/* Input fields */}
        <div className="space-y-5">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Current Age
            </label>
            <input
              type="number"
              placeholder="e.g., 30"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Retirement Age Goal
            </label>
            <input
              type="number"
              placeholder="e.g., 65"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Calculate button */}
          <button
            onClick={handleCalculate}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-200"
          >
            Calculate
          </button>
        </div>

        {/* Progress bar */}
        {progress > 0 && (
          <div className="mt-8">
            <div className="text-gray-700 font-semibold mb-2 text-center">
              Progress to Retirement
            </div>
            <div className="w-full h-8 bg-gray-200 rounded-lg overflow-hidden">
              <div
                className="h-8 bg-teal-500 text-white font-bold text-center"
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>
          </div>
        )}

        {/* Summary */}
        {summary && (
          <div className="mt-6 text-center text-gray-800 font-semibold">
            {summary}
          </div>
        )}
      </div>
    </div>
  );
}
