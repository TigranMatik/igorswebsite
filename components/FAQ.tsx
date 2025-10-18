'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What types of photography services do you offer?',
    answer: 'I specialize in commercial photography, product photography, event coverage, portraits, and social media content creation. Each project is tailored to meet your specific needs and brand vision.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Pricing varies based on the scope of the project, including factors like shoot duration, location, number of final images, and usage rights. Contact me for a custom quote tailored to your specific needs.',
  },
  {
    question: 'How long does it take to receive the final photos?',
    answer: 'Typical turnaround time is 1-2 weeks for most projects. Rush delivery is available upon request for an additional fee. You\'ll receive high-resolution edited images in your preferred format.',
  },
  {
    question: 'Do you provide video services as well?',
    answer: 'Yes! I offer video production services including promotional videos, social media content, event coverage, and behind-the-scenes footage. Video packages can be combined with photography for comprehensive media solutions.',
  },
  {
    question: 'What equipment do you use?',
    answer: 'I use professional-grade cameras, lenses, and lighting equipment to ensure the highest quality results. My gear includes full-frame cameras, a variety of prime and zoom lenses, studio lighting, and professional editing software.',
  },
  {
    question: 'Do you travel for shoots?',
    answer: 'Absolutely! I\'m available for local and destination shoots. Travel fees may apply depending on the location. Let\'s discuss your project location and I\'ll provide you with a comprehensive quote.',
  },
  {
    question: 'Can I request specific editing styles?',
    answer: 'Yes! I work closely with clients to understand their vision and preferred aesthetic. Whether you want natural, moody, bright and airy, or any other style, I\'ll tailor the editing to match your brand and preferences.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'I understand plans can change. Cancellations made 7+ days before the shoot date receive a full refund minus the deposit. Cancellations within 7 days may be subject to fees. Rescheduling is always welcome.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>

        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.question} ${openIndex === index ? styles.active : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`${styles.icon} ${openIndex === index ? styles.rotate : ''}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
