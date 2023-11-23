import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the system requirements for the PC build?",
      answer:
        "The system requirements depend on the specific components you choose for your PC build. Generally, you should consider factors like the type of CPU, GPU, RAM, and storage. Ensure compatibility and check the power requirements of your components.",
    },
    {
      question: "How long does it take to assemble a PC?",
      answer:
        "The time it takes to assemble a PC varies based on your experience and the complexity of the build. For beginners, it might take a few hours. Experienced builders can complete a build in less time. Take your time, follow the instructions, and double-check your work.",
    },
    {
      question: "What maintenance is required for optimal PC performance?",
      answer:
        "To maintain optimal PC performance, regularly clean the dust from your components, update drivers, and ensure proper ventilation. Check for software updates, run antivirus scans, and monitor temperatures. Performing routine maintenance can extend the lifespan of your PC.",
    },
    {
      question: "Can I upgrade my PC components later?",
      answer:
        "Yes, you can upgrade various components of your PC, such as adding more RAM, upgrading the GPU, or replacing the storage. However, compatibility is crucial, and you should ensure that the new components are compatible with your existing hardware.",
    },
    {
      question: "What is overclocking, and is it safe?",
      answer:
        "Overclocking is the process of running a computer component at a higher clock rate than it was designed for. While it can provide performance benefits, it can also generate more heat and may void warranties. Proper cooling and careful adjustments are essential, and it may not be suitable for all users.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-5">
        <h2 className="text-4xl font-semibold text-black text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-sm font-medium text-gray-400 text-center">
          Most asked questions all in one place.
        </p>
      </div>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow">
            <input
              type="radio"
              name="accordion"
              id={`faq-${index}`}
              checked={activeIndex === index}
              onChange={() => toggleAccordion(index)}
            />
            <div
              className="collapse-title text-lg text-black font-bold"
              htmlFor={`faq-${index}`}
            >
              {faq.question}
            </div>
            <div
              className={`collapse-content ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
