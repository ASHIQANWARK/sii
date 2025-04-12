import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    academicBackground: "",
    preferredCategory: "",
    specificCourse: "",
    preferredLocation: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();

    const whatsappMessage =
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Academic Background: ${formData.academicBackground}\n` +
      `Preferred Course Category: ${formData.preferredCategory}\n` +
      `Specific Course: ${formData.specificCourse}\n` +
      `Preferred Location: ${formData.preferredLocation}\n` +
      `Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/+971545162699?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-16 bg-[#003B31]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Find the Right College for You
        </h2>
        <p className="text-center text-xl mb-12 text-gray-300">
          Share your preferences and we’ll help match you with the best colleges in India.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: "fas fa-globe",
                title: "Visit Us",
                detail: "www.thestudyinindia.com",
              },
              {
                icon: "fas fa-phone-alt",
                title: "Call Us",
                detail: "+971545162699",
              },
              {
                icon: "fas fa-envelope-open-text",
                title: "Email Us",
                detail: "info@studyinindia.com",
              },
            ].map(({ icon, title, detail }, index) => (
              <div
                key={index}
                className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md"
              >
                <div className="text-3xl text-[#003B31] mr-4">
                  <i className={icon}></i>
                </div>
                <div>
                  <h5 className="font-bold text-lg">{title}</h5>
                  <p className="text-lg">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-xl bg-opacity-90 backdrop-blur-md border border-gray-300">
              <form onSubmit={sendWhatsAppMessage} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B31]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B31]"
                  />
                </div>

                <input
                  type="text"
                  name="academicBackground"
                  placeholder="Academic Background (e.g. 12th, IB, etc.)"
                  required
                  value={formData.academicBackground}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B31]"
                />

                <select
                  name="preferredCategory"
                  required
                  value={formData.preferredCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B31]"
                >
                  <option value="">Select Course Category</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Medical/Health Sciences">Medical/Health Sciences</option>
                  <option value="Business/Commerce">Business/Commerce</option>
                  <option value="Arts & Humanities">Arts & Humanities</option>
                  <option value="Science">Science</option>
                  <option value="Law">Law</option>
                  <option value="Other">Other</option>
                </select>

                <input
                  type="text"
                  name="specificCourse"
                  placeholder="Specific Course (e.g. B.Tech CSE, BBA)"
                  required
                  value={formData.specificCourse}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B31]"
                />

                <input
                  type="text"
                  name="preferredLocation"
                  placeholder="Preferred Study Location (optional)"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B31]"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Additional Notes or Questions"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B31]"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#003B31] text-white text-lg font-semibold hover:bg-[#005446] transition-colors"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
