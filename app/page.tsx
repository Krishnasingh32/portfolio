'use client';

import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Moon, Sun, Phone } from 'lucide-react';


export default function Portfolio() {
  const [dark, setDark] = useState(false);
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
   const [aiText, setAiText] = useState("");

const generateAI = () => {
  setAiText("Booting neural analysis core...");

  setTimeout(() => {
    setAiText("Mapping workflow graph topology...");
  }, 1000);

  setTimeout(() => {
    setAiText("Detecting bottlenecks via heuristic modeling...");
  }, 2000);

  setTimeout(() => {
    setAiText("Running multi-layer optimization protocol...");
  }, 3000);

  setTimeout(() => {
    const improvement = Math.floor(Math.random() * 20) + 30;

    setAiText(
      `Optimization complete → ${improvement}% efficiency gain achieved 🚀`
    );
  }, 4500);
};
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };


  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white">
        <div className="fixed inset-0 -z-10 overflow-hidden">
  <div className="absolute w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse" />
  <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl bottom-[-200px] right-[-200px] animate-pulse" />
</div>
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
        <motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
></motion.section>
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
></motion.section>
<Particles
  options={{
    background: { color: "transparent" },
    particles: {
      number: { value: 60 },
      size: { value: 3 },
      move: { speed: 1 },
      links: { enable: true, opacity: 0.2 },
    },
  }}
  className="absolute inset-0 -z-10"
/>

        {/* Navbar */}
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/40 dark:bg-black/30 border-b border-gray-200 dark:border-gray-700 z-50">
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
          
<section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-24">
  <div>
   <motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
>
  AI-Powered Business Intelligence Architect
</motion.h1>
    <p className="text-xl text-blue-600 font-medium mb-4">
      AI & Automation Business Analyst
    </p>

    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
      Transforming business requirements into scalable AI systems,
      automation workflows, and structured technical documentation.
    </p>
<div className="text-xl font-semibold text-purple-600">
  <TypeAnimation
    sequence={[
      "AI Systems Architect",
      2000,
      "Automation Strategist",
      2000,
      "Business Intelligence Engineer",
      2000,
      "AI Workflow Designer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>
    <div className="flex gap-4">
      <a
        href="#contact"
        className="px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition"
      >
        Hire Me
      </a>

      <a
        href="#projects"
        className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        View Projects
      </a>
    </div>
  </div>

  <motion.img
    src="/krishna.jpg"
    alt="Krishna Kumar Singh"
    className="rounded-3xl shadow-2xl w-80 h-80 object-cover mx-auto border-4 border-white dark:border-gray-700"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  />
</section>
{/* Expertise Section */}
<section className="max-w-6xl mx-auto py-20 text-center">
  <h2 className="text-4xl font-bold mb-12">Core Expertise</h2>

  <div className="flex flex-wrap justify-center gap-4">
    {[
      "AI Requirement Engineering",
      "BRD / FRD Documentation",
      "Automation Strategy",
      "Prompt Engineering",
      "API Architecture",
      "Process Optimization",
      "CRM Workflow Design",
      "UAT & Deployment Strategy",
      "Stakeholder Management",
      "Business Intelligence"
    ].map((skill, index) => (
      <motion.span
        key={index}
        whileHover={{ scale: 1.1 }}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-gray-300 dark:border-gray-700 text-sm font-medium shadow-md backdrop-blur-md"
      >
        {skill}
      </motion.span>
    ))}
  </div>
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
          <section className="max-w-5xl mx-auto py-24 text-center">
  <h2 className="text-4xl font-bold mb-10">
    AI Workflow Simulation
  </h2>

  <button
    onClick={generateAI}
    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg hover:scale-105 transition"
  >
    Run AI Simulation
  </button>

  <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
    {aiText}
  </p>
</section>

{/* Experience Section */}
<section className="max-w-6xl mx-auto py-24">
  <h2 className="text-4xl font-bold text-center mb-16">
    Professional Experience
  </h2>

  <motion.div
    whileHover={{ scale: 1.02 }}
    className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 p-10 rounded-3xl shadow-2xl"
  >
    <h3 className="text-2xl font-semibold mb-2">
      Business Analyst – Study India Services
    </h3>
    <p className="text-gray-500 mb-6">
      Student Admission & International Counseling Operations
    </p>

    <ul className="space-y-4 text-gray-700 dark:text-gray-300">
      <li>• Created BRD / FRD documentation for admission CRM systems.</li>
      <li>• Designed lead lifecycle workflows handling 500+ students/month.</li>
      <li>• Implemented automation logic reducing manual work by 30%.</li>
      <li>• Conducted stakeholder meetings & requirement elicitation sessions.</li>
      <li>• Managed UAT planning and structured validation cases.</li>
    </ul>
  </motion.div>
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

{/* AI Projects Section */}
<section id="projects" className="max-w-6xl mx-auto py-24">
  <h2 className="text-4xl font-bold text-center mb-16">
    Featured Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    <motion.div whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <h3 className="text-2xl font-semibold mb-4">
        AI Lead Qualification System
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Designed intelligent filtering workflows to prioritize high-value
        student leads using structured qualification logic.
      </p>
    </motion.div>

    <motion.div whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <h3 className="text-2xl font-semibold mb-4">
        Student Admission CRM Architecture
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Structured requirement documentation and system flow for
        end-to-end admission tracking and conversion analytics.
      </p>
    </motion.div>

    <motion.div whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <h3 className="text-2xl font-semibold mb-4">
        Automation Workflow Mapping
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Designed process maps and automation triggers improving
        operational efficiency and reducing repetitive tasks.
      </p>
    </motion.div>

    <motion.div whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <h3 className="text-2xl font-semibold mb-4">
        UAT & Deployment Framework
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Developed structured UAT templates and validation strategy
        ensuring smooth production releases.
      </p>
    </motion.div>

  </div>
</section>
{/* Tech Stack */}
<section className="max-w-6xl mx-auto py-24">
  <h2 className="text-4xl font-bold text-center mb-16">
    AI & Technology Stack
  </h2>

  <div className="grid md:grid-cols-4 gap-8 text-center">

    {[
      "OpenAI API",
      "Chatbot Architecture",
      "Next.js",
      "React",
      "Workflow Automation",
      "REST APIs",
      "Data Analytics",
      "System Design"
    ].map((tech, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -10 }}
        className="p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl shadow-xl border border-gray-200 dark:border-gray-700"
      >
        <h3 className="font-semibold text-lg">{tech}</h3>
      </motion.div>
    ))}

  </div>
</section>

{/* Achievements */}
<section className="max-w-5xl mx-auto py-24 text-center">
  <h2 className="text-4xl font-bold mb-16">Key Achievements</h2>

  <div className="grid md:grid-cols-3 gap-10">

    <div>
      <h3 className="text-5xl font-bold text-purple-600">500+</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Student Leads Managed
      </p>
    </div>

    <div>
      <h3 className="text-5xl font-bold text-blue-600">30%</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Workflow Efficiency Boost
      </p>
    </div>

    <div>
      <h3 className="text-5xl font-bold text-green-600">95%</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Client Satisfaction Rate
      </p>
    </div>

  </div>
</section>

          {/* Contact Section */}
          <section id="contact" className="max-w-4xl mx-auto py-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>

            <form
  onSubmit={handleSubmit}
  className="max-w-xl mx-auto space-y-4 mb-10"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    required
    className="w-full p-3 rounded-lg border dark:bg-gray-800"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full p-3 rounded-lg border dark:bg-gray-800"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={4}
    value={formData.message}
    onChange={handleChange}
    required
    className="w-full p-3 rounded-lg border dark:bg-gray-800"
  />

  <button
    type="submit"
    className="w-full bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition"
  >
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
