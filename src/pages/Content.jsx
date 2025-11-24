import React, { useState } from "react";

export default  function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    queries: "",
  });
  const [status, setStatus] = useState({ message: "", color: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, queries } = formData;

    if (!name || !email || !queries) {
      setStatus({ message: "Please fill in all fields.", color: "text-red-500" });
      return;
    }

    if (!email.includes("@")) {
      setStatus({ message: "Please enter a valid email.", color: "text-red-500" });
      return;
    }

    setStatus({ message: "Message sent successfully!", color: "text-green-600" });
    setFormData({ name: "", phone: "", email: "", queries: "" });
  };

  return (
    <section className="min-h-screen bg-blue-50 py-16 px-4 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-3xl p-10 md:p-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="flex flex-col space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Phone Number:</label>
              <input
                type="text"
                name="phone"
                pattern="\d{10}"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your 10-digit phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col space-y-5">
            <div className="h-full">
              <label className="block text-gray-700 font-semibold mb-1">Queries:</label>
              <textarea
                name="queries"
                rows="8"
                value={formData.queries}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className="w-full h-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition duration-200"
            >
              Send Message
            </button>

            {status.message && (
              <p className={`text-center font-semibold mt-3 ${status.color}`}>
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
