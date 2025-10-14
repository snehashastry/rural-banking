import React, { useState, useRef, useEffect } from "react";


export default function RuralBank() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕ್ ಸಹಾಯಕಕ್ಕೆ ಸ್ವಾಗತ!",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [balance, setBalance] = useState(45250);
  const chatEnd = useRef(null);

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickButtons = [
    "ಬ್ಯಾಲೆನ್ಸ್ ನೋಡಿ",
    "ಹಣ ವರ್ಗಾಯಿಸಿ",
    "ಸಾಲಕ್ಕಾಗಿ ಅರ್ಜಿ",
    "ಬೆಳೆ ವಿಮೆ",
    "ಸರ್ಕಾರದ ಯೋಜನೆಗಳು",
  ];

  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("ಬ್ಯಾಲೆನ್ಸ್ ನೋಡಿ")) {
      return `ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಶೇಷವು ₹${balance.toLocaleString()} ಇದೆ`;
    }
    if (text.includes("ಹಣ ವರ್ಗಾಯಿಸಿ") || text.includes("send")) {
      return "ಹಣ ವರ್ಗಾಯಿಸಲು, ದಯವಿಟ್ಟು ಈ ಮಾಹಿತಿಯನ್ನು ನೀಡಿ: 1) ಖಾತೆ ಸಂಖ್ಯೆ 2) ಮೊತ್ತ 3) ಉದ್ದೇಶ";
    }
    if (text.includes("ಸಾಲಕ್ಕಾಗಿ ಅರ್ಜಿ")) {
      return "📄 ಲಭ್ಯವಿರುವ ಸಾಲಗಳು:\n• ಕೃಷಿ ಕ್ರೆಡಿಟ್: ₹3 ಲಕ್ಷ 4% ಬಡ್ಡಿದರ\n• ಟ್ರಾಕ್ಟರ್ ಸಾಲ: ₹10 ಲಕ್ಷ 7% ಬಡ್ಡಿದರ\n• ವ್ಯವಹಾರ ಸಾಲ: ₹5 ಲಕ್ಷ 8.5% ಬಡ್ಡಿದರ";
    }
    if (text.includes("ಬೆಳೆ ವಿಮೆ") || text.includes("crop")) {
      return "🌾 ಬೆಳೆ ವಿಮೆ:\n• ಪ್ರೀಮಿಯಂ: ಖರೀಫ್‌ಗೆ 2%\n• ವ್ಯಾಪ್ತಿ: ಸಂಪೂರ್ಣ ಬೆಳೆ ಮೌಲ್ಯ\n• ಕ್ಲೈಮ್ಸ್: ನೇರವಾಗಿ ಖಾತೆಗೆ";
    }
    if (text.includes("ಸರ್ಕಾರದ ಯೋಜನೆಗಳು") || text.includes("government")) {
      return "🏛️ ಸರ್ಕಾರದ ಯೋಜನೆಗಳು:\n• ಪಿಎಂ-ಕಿಸಾನ್: ₹6,000/ವರ್ಷ\n• ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್: ಉಚಿತ\n• ಯಂತ್ರೋಪಕರಣ ಸಬ್ಸಿಡಿ: 40-50% ರಿಯಾಯಿತಿ";
    }

    return "ನಾನು ಸಹಾಯ ಮಾಡಬಹುದು: ಶೇಷ, ಹಣ ವರ್ಗಾವಣೆ, ಸಾಲ, ವಿಮೆ ಮತ್ತು ಸರ್ಕಾರದ ಯೋಜನೆಗಳು. ನಿಮಗೆ ಯಾವ ಮಾಹಿತಿ ಬೇಕು?";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), text: input, isBot: false },
      { id: Date.now() + 1, text: getBotReply(input), isBot: true },
    ]);
    setInput("");
  };

  const quickAction = (action) => {
    setMessages([
      ...messages,
      { id: Date.now(), text: action, isBot: false },
      { id: Date.now() + 1, text: getBotReply(action), isBot: true },
    ]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl flex flex-col h-[600px] sm:h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 to-pink-500 text-white p-4 text-center rounded-t-2xl">
          <h1 className="text-xl font-bold">🏦 Rural Banking AI</h1>
          <p className="text-sm mt-1">Balance: ₹{balance.toLocaleString()}</p>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex mb-3 animate-fadeIn ${
                msg.isBot ? "justify-start" : "justify-end"
              }`}
            >
              {msg.isBot && (
                <div className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">
                  🤖
                </div>
              )}
              <div
                className={`p-3 rounded-xl whitespace-pre-wrap max-w-[70%] ${
                  msg.isBot
                    ? "bg-white border border-gray-200 text-gray-800"
                    : "bg-purple-700 text-white"
                }`}
              >
                {msg.text}
              </div>
              {!msg.isBot && (
                <div className="bg-emerald-500 text-white w-8 h-8 flex items-center justify-center rounded-full ml-2">
                  👤
                </div>
              )}
            </div>
          ))}
          <div ref={chatEnd} />
        </div>

        {/* Quick Buttons */}
        <div className="flex gap-2 p-3 bg-white border-t overflow-x-auto">
          {quickButtons.map((btn, i) => (
            <button
              key={i}
              onClick={() => quickAction(btn)}
              className="bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-700 font-medium px-3 py-1.5 rounded-full text-sm transition-transform duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <b>{btn}</b>
            </button>
          ))}
        </div>

        {/* Input Section */}
        <div className="p-3 bg-white border-t rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-full focus:border-purple-500 outline-none text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-gradient-to-r from-purple-700 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transform transition-all hover:-translate-y-0.5"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
