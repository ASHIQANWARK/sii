import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the general admission requirements for Indian universities?",
      answer: "Admission requirements vary by institution and course. Typically, students must have completed their 12th grade (or equivalent) for undergraduate courses, or a bachelor’s degree for postgraduate courses. Specific entrance exams and minimum marks may be required."
    },
    {
      question: "How can I apply for admission to universities in India?",
      answer: "You can apply through the official websites of universities or colleges. Most institutions offer online applications. Some courses require entrance exams, while others are based on merit."
    },
    {
      question: "Are there any entrance exams for admission to courses in India?",
      answer: "Yes, many courses, especially in fields like engineering (JEE), medicine (NEET), law (CLAT), and management (CAT/MAT), require entrance exams. Each university or course may have its own entrance exam."
    },
    {
      question: "What is the eligibility for undergraduate courses in India?",
      answer: "Eligibility for undergraduate courses typically requires completion of the 12th grade with specific subject requirements. For example, medical courses generally require a background in Biology, while engineering courses require Physics, Chemistry, and Mathematics."
    },
    {
      question: "What are the documents required for admission to Indian universities?",
      answer: "Common documents include: 12th-grade mark sheet, passport-sized photographs, proof of identity, entrance exam scorecards (if applicable), caste/category certificate (if applicable), transfer and migration certificates."
    },
    {
      question: "What is the admission process for foreign students?",
      answer: "Foreign students usually need to provide a valid passport, student visa, and academic transcripts. They may also need to meet the institution’s specific requirements and take entrance exams depending on the course."
    },
    {
      question: "What are the different types of courses available after 12th in India?",
      answer: "After 12th, students can choose from courses in engineering, medical sciences, commerce, arts, law, design, fashion, hospitality, animation, and more. Detailed information on each course can be found on the respective university websites."
    }
  ];

  return (
    <section className="py-16 bg-white font-serif">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
        Frequently Asked Questions on Indian Admission
      </h2>
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-xl shadow-xl overflow-hidden bg-[#FF671F] transform transition-all duration-300 ease-in-out hover:scale-105">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left font-semibold text-lg text-white py-6 px-8 bg-[#FF671F] focus:outline-none transition-all duration-300 ease-in-out"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="py-4 px-8 text-gray-600 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
