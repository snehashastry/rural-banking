import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountNumber: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("account");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful! Redirecting...");
    navigate("/main");
  };

  const handleBiometricLogin = () => {
    alert("Biometric authentication activated!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4 font-kannada">
      <div className="bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 w-full max-w-5xl overflow-hidden">
        {/* Left side */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-10">
          <div className="text-center">
            <div className="text-5xl mb-4">🏦</div>
            <h1 className="text-3xl font-bold">ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕಿಂಗ್</h1>
            <p className="text-sm opacity-90 mb-8">
              ವಿಕೇಂದ್ರೀಕೃತ • ಸುರಕ್ಷಿತ • ಸಬಲಗೊಳಿಸುವುದು
            </p>
            <div className="space-y-6 text-left">
              <div className="flex gap-4 items-start">
                <span className="text-2xl">🔐</span>
                <div>
                  <h3 className="font-semibold">ವಿಕೇಂದ್ರೀಕೃತ ದಾಖಲೆ ವ್ಯವಸ್ಥೆ</h3>
                  <p className="text-sm opacity-90">
                    ಸೈನಿಕ-ಮಟ್ಟದ ಎನ್‌ಕ್ರಿಪ್ಷನ್
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="font-semibold">ಹಣಕಾಸಿನ ಸೇರಿಕೆ ಸೇವೆಗಳು</h3>
                  <p className="text-sm opacity-90">
                    ಸಸ್ತಾದ ಮತ್ತು ಸುಲಭವಾಗಿ ಲಭ್ಯವಿರುವ ಹಣಕಾಸಿನ ಉತ್ಪನ್ನಗಳು
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">🤖</span>
                <div>
                  <h3 className="font-semibold">ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಸಹಾಯಕ</h3>
                  <p className="text-sm opacity-90">24/7 ಸ್ಮಾರ್ಟ್ ಬೆಂಬಲ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center p-10">
          <div className="max-w-sm mx-auto w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              ಸುಸ್ವಾಗತ!!
            </h2>
            <p className="text-gray-500 mb-6 text-center">
              ನಿಮ್ಮ ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ
            </p>

            {/* Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                className={`flex-1 py-2 rounded-md font-semibold transition ${
                  loginMethod === "account"
                    ? "bg-white text-indigo-500 shadow"
                    : "text-gray-500"
                }`}
                onClick={() => setLoginMethod("account")}
              >
                ಖಾತೆ ಲಾಗಿನ್
              </button>
              <button
                className={`flex-1 py-2 rounded-md font-semibold transition ${
                  loginMethod === "biometric"
                    ? "bg-white text-indigo-500 shadow"
                    : "text-gray-500"
                }`}
                onClick={() => setLoginMethod("biometric")}
              >
                ಬಯೋಮೆಟ್ರಿಕ್
              </button>
            </div>

            {loginMethod === "account" ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Account number */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    ಖಾತೆ ಸಂಖ್ಯೆ
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    placeholder="ನಿಮ್ಮ ಖಾತೆ ಸಂಖ್ಯೆಯನ್ನು"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    ಪಾಸ್ವರ್ಡ್
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                      placeholder="ನಿಮ್ಮ ಗುಪ್ತಪದವನ್ನು ನಮೂ"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xl"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>

                {/* Options */}
                <div className="flex justify-between text-sm text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-indigo-500" />
                    ನನ್ನನ್ನು ನೆನಪಿಡಿ
                  </label>
                  <a href="#" className="text-indigo-500 hover:underline">
                    ಪಾಸ್ವರ್ಡ್ ಮರೆತಿದ್ದಾರೆ?
                  </a>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold rounded-md shadow-lg hover:scale-[1.02] transition"
                >
                  ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-xl font-semibold mb-2">
                  ಬಯೋಮೆಟ್ರಿಕ್ ದೃಢೀಕರಣ
                </h3>
                <p className="text-gray-500 mb-6">
                  ಸುರಕ್ಷಿತವಾಗಿ ಲಾಗಿನ್ ಆಗಲು ನಿಮ್ಮ ಮುಖ ID ಬಳಸಿ
                </p>
                <button
  onClick={() => navigate("/biometric-login")}
   className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:scale-105 transition"
>
  ಪ್ರಮಾಣೀಕರಿಸಿ
</button>


              </div>
            )}

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-3 text-gray-400 text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Link to="/services"
                className="flex justify-center items-center gap-2 border border-gray-300 rounded-md py-2 font-semibold hover:bg-gray-50 transition"
              >
                🔴 ನಮ್ಮ ಸೇವೆಗಳು
              </Link>
              <Link to="/calculator" className="flex justify-center items-center gap-2 border border-gray-300 rounded-md py-2 font-semibold hover:bg-gray-50 transition">
                📱 ಹೂಡಿಕೆ ಕ್ಯಾಲ್ಕುಲೇಟರ್
              </Link>
            </div>

            {/* Register */}
            <p className="text-center text-sm text-gray-600 mb-2">
              ಖಾತೆ ಇಲ್ಲವೇ?{" "}
              <Link to="/contact" className="text-indigo-500 font-semibold hover:underline">
                ಈಗಲೇ ನೋಂದಾಯಿಸಿ
              </Link>
            </p>

            <p className="text-center text-sm text-gray-500">
              <a href="#" className="text-indigo-500 hover:underline">
                ಸಹಾಯಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
