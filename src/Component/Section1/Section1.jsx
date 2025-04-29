import { motion } from 'framer-motion';
import React from 'react';
import { BsBoxes } from 'react-icons/bs';
import { FaBoxOpen } from 'react-icons/fa';
import { GiBoxUnpacking } from 'react-icons/gi';
import { PiCodesandboxLogoLight } from 'react-icons/pi';

const features = [
  {
    icon: <PiCodesandboxLogoLight />,
    title: "Starting From 1000 Quantity",
    description: "All kinds of paper-based packaging solutions.",
  },
  {
    icon: <BsBoxes />,
    title: "Custom Design & Size",
    description: "Get cardboard boxes tailored to your exact specifications.",
  },
  {
    icon: <GiBoxUnpacking />,
    title: "Competitive Price",
    description: "High-quality boxes at budget-friendly prices.",
  },
  {
    icon: <FaBoxOpen />,
    title: "High-Quality Assurance",
    description: "Secure and reliable packaging you can count on.",
  },
];

const Section1 = () => {
  return (
    <section className="w-11/12 mx-auto py-10 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white border border-blue-400 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="text-4xl text-[#e69f06] mb-4 mx-auto">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm lg:text-base">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section1;
