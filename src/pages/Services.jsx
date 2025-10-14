import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, TrendingUp, PiggyBank } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "ಆಸ್ತಿ ನಿರ್ವಹಣೆ (Wealth Management)",
      icon: <Briefcase className="w-10 h-10 text-blue-700 mb-3" />,
      description:
        "ನಿಮ್ಮ ಗುರಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಹೂಡಿಕೆ ಯೋಜನೆಗಳ ಮೂಲಕ ನಿಮ್ಮ ಆಸ್ತಿಯನ್ನು ನಿರ್ಮಿಸಿ, ವೃದ್ಧಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.",
      link: "/wealth-calculator",
    },
    {
      title: "ಶೇರು ಸಲಹೆ (Stock Advisory)",
      icon: <TrendingUp className="w-10 h-10 text-green-600 mb-3" />,
      description:
        "ತಜ್ಞರ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಡೇಟಾ ಆಧಾರಿತ ಶೇರು ಶಿಫಾರಸುಗಳ ಮೂಲಕ ವಿವೇಕಬುದ್ಧಿಯ ಹೂಡಿಕೆ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ.",
      link: "/stock-calculator",
    },
    {
      title: "ನಿವೃತ್ತಿ ಯೋಜನೆ (Retirement Planning)",
      icon: <PiggyBank className="w-10 h-10 text-yellow-500 mb-3" />,
      description:
        "ತಂತ್ರಬದ್ಧ ಆರ್ಥಿಕ ಯೋಜನೆಗಳ ಮೂಲಕ ನಿಮ್ಮ ಭವಿಷ್ಯವನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಿ ಮತ್ತು ನಿರಾಳ ನಿವೃತ್ತಿ ಜೀವನವನ್ನು ಆನಂದಿಸಿ.",
      link: "/retirement",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
          ನಮ್ಮ ಸೇವೆಗಳು
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          ನಾವು ನಿಮಗೆ ದೀರ್ಘಾವಧಿಯ ಆರ್ಥಿಕ ಗುರಿಗಳನ್ನು ಸಾಧಿಸಲು ತಜ್ಞ ಆರ್ಥಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು
          ಹೂಡಿಕೆ ತಂತ್ರಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white shadow-lg rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl border-t-4 border-blue-700"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
