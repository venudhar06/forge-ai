import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQSection() {
  const faqs = [
    {
      question: "Is Forge AI free to use?",
      answer:
        "Yes. Forge AI offers a free plan for students and developers to analyze public repositories.",
    },
    {
      question: "Can I upload ZIP files?",
      answer:
        "Yes. You can either upload a ZIP file or connect your GitHub repository directly.",
    },
    {
      question: "Does Forge AI support private repositories?",
      answer:
        "Yes. Private repository support will be available after GitHub authentication.",
    },
    {
      question: "Which AI model powers Forge AI?",
      answer:
        "Forge AI is designed to integrate with modern LLMs for repository understanding, documentation, and code assistance.",
    },
    {
      question: "Is my source code secure?",
      answer:
        "Absolutely. Repository data is securely processed and is never shared with other users.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="bg-[#030712] px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-400">
            Everything you need to know about Forge AI.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#111827]"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-blue-400"
                      : "text-gray-400"
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 leading-7">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FAQSection;