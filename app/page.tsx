'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Moon, Sun, Phone } from 'lucide-react';

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white">

        {/* Animated Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            className="absolute w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl top-[-200px] left-[-200px]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
            className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl bottom-[-200px] right-[-200px]"
          />
        </div>

        {/* Navbar */}
        <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-black/40 shadow-sm z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="font-bold text-lg">Krishna Kumar Singh</h1>
            <div className="flex items-center gap-6">
              <button onClick={() => setDark(!dark)}>
                {dark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="#contact" className="text-sm font-medium hover:text-purple-600">Contact</a>
            </div>
          </div>
        </nav>

        <div className="pt-24 px-6 md:px-12">

          {/* Hero Section */}
          <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-20">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-6"
              >
                AI & Automation Business Analyst
              </motion.h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Translating business needs into structured AI systems, automation workflows, and scalable technology solutions.
              </p>
            </div>
            <motion.img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI"
              className="rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </section>

          {/* Services */}
          <section className="max-w-6xl mx-auto py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Services</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Documentation (BRD / FRD)",
                  desc: "Clear and structured requirement documentation for AI-driven systems to align stakeholders and developers."
                },
                {
                  title: "Chatbot & AI Agent Architecture",
                  desc: "Designing intelligent workflows, prompt structures, and scalable AI agent logic."
                },
                {
                  title: "Workflow Automation",
                  desc: "Mapping business processes and creating automation strategies to improve operational efficiency."
                },
                {
                  title: "API Integration Analysis",
                  desc: "Defining API structures, integration logic, and seamless system connectivity."
                },
                {
                  title: "Process Optimization",
                  desc: "Identifying gaps and proposing AI-powered improvements to reduce cost and increase productivity."
                },
                {
                  title: "UAT Planning & Validation",
                  desc: "Structured test cases and validation planning for smooth project delivery."
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Impact Metrics */}
          <section className="max-w-5xl mx-auto py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Impact Metrics</h2>
            {[{ label: 'Automation Efficiency', width: '90%' },
              { label: 'Client Satisfaction', width: '95%' },
              { label: 'Process Optimization', width: '85%' }].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>{item.label}</span>
                  <span>{item.width}</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    transition={{ duration: 1 }}
                    className="h-4 rounded-full bg-black dark:bg-white"
                  />
                </div>
              </div>
            ))}
          </section>

          {/* Contact Section */}
          <section id="contact" className="max-w-4xl mx-auto py-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>

            <form className="max-w-xl mx-auto space-y-4 mb-10">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border dark:bg-gray-800" />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border dark:bg-gray-800" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg border dark:bg-gray-800"></textarea>
              <button type="submit" className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition">
                Send Message
              </button>
            </form>

            <div className="flex flex-col items-center gap-4">
              <a href="mailto:kishansingh20907@gmail.com" className="flex items-center gap-2 hover:text-purple-600">
                <Mail size={20} />
                kishansingh20907@gmail.com
              </a>

              <a href="tel:+918317006944" className="flex items-center gap-2 hover:text-purple-600">
                <Phone size={20} />
                +91 8317006944
              </a>

              <a
                href="https://www.linkedin.com/in/krishnasingh006/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <Linkedin size={20} />
                linkedin.com/in/krishnasingh006
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-8">
            © {new Date().getFullYear()} Krishna Kumar Singh. All rights reserved.
          </footer>
        </div>

        {/* Floating Buttons */}
        <a
          href="https://wa.me/918317006944"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition z-50"
        >
          WhatsApp
        </a>

        <a
          href="#contact"
          className="fixed bottom-6 left-6 bg-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition z-50"
        >
          Contact
        </a>

      </div>
    </div>
  );
}
