import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import helpQuestionIcon from '@/assets/help-question-icon.png';

export function HelpSection() {
  const { t } = useLanguage();

  const faqItems = [
    {
      question: t('help.faq1.question'),
      answer: t('help.faq1.answer')
    },
    {
      question: t('help.faq2.question'),
      answer: t('help.faq2.answer')
    },
    {
      question: t('help.faq3.question'),
      answer: t('help.faq3.answer')
    },
  ];

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/* 3D Question Mark Icon */}
          <motion.img
            src={helpQuestionIcon}
            alt="Help"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 drop-shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          />
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            {t('help.title')}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t('help.subtitle')}
          </p>
          <Link
            to="/help"
            className="inline-flex items-center gap-2 btn-pathe"
          >
            {t('help.goToHelp')}
          </Link>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 hover:bg-secondary/50 transition-colors cursor-pointer group"
            >
              <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                {item.question}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {item.answer}
              </p>
              <Link to="/help" className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                {t('help.learnMore')}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
