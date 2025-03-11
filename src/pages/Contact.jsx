import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_rameucv",
        "template_cl5wxjs",
        form.current,
        "8Ksb1U-mDLW0DZrOJ"
      );

      console.log("Email sent successfully:", result);
      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error.text);
      alert("EmailJS failed! Trying alternate method...");

      try {
        const response = await fetch(
          "https://api.emailjs.com/api/v1.0/email/send-form",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              service_id: "service_rameucv",
              template_id: "template_gm2f8zp",
              user_id: "8Ksb1U-mDLW0DZrOJ",
              template_params: { ...formData },
            }),
          }
        );

        if (response.ok) {
          console.log("Fallback API: Email sent successfully:", await response.json());
          alert("Message Sent Successfully via API!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          form.current.reset();
        } else {
          console.error("Fallback API Error:", await response.text());
          alert("Both methods failed! Check console for details.");
        }
      } catch (fallbackError) {
        console.error("Network error:", fallbackError);
        alert("Network error! Please check your connection.");
      }
    }
  };

  return (
    <section className="py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 pt-4 max-w-full">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#FF671F] ">Contact Us</h2>
        <p className="text-center text-xl mb-12 text-[#FF671F]">
          Have questions or need assistance? We are just a message away.
        </p>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md">
              <div className="text-3xl text-[#FF671F] mr-4">
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <h5 className="font-bold text-lg">Visit Us</h5>
                <p className="text-lg">www.studyinindia.com</p>
              </div>
            </div>
            <div className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md">
              <div className="text-3xl text-[#FF671F] mr-4">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h5 className="font-bold text-lg">Call Us</h5>
                <p className="text-lg">+917306179310</p>
              </div>
            </div>
            <div className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md">
              <div className="text-3xl text-[#FF671F] mr-4">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h5 className="font-bold text-lg">Email Us</h5>
                <p className="text-lg">info@studyinindia.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl bg-opacity-80 backdrop-blur-md">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#06038D]  transition-all"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#06038D] transition-all"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="subject"
                className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#06038D] transition-all"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-yellow-500 transition-all"
                rows="4"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#FF671F] text-white text-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
