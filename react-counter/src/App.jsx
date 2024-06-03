import React, { useState } from "react";
import Counter from "./Counter";
import Box from "./Box";

const App = (props) => {
  const faqs = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "Our return policy allows you to return items within 30 days of purchase. The items must be in original condition and packaging. Please contact our customer service to initiate a return.",
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 5-7 business days for standard delivery. Expedited shipping options are available at checkout for faster delivery.",
    },
    {
      id: 3,
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship internationally to most countries. International shipping rates and delivery times vary depending on the destination.",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number on our website or the carrier's website to track your order.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit cards, debit cards, PayPal, and Apple Pay. All payments are processed securely.",
    },
  ];
  return (
    <div>
      {faqs.map((faq) => (
        <Box key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default App;
