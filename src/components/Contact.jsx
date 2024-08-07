import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch('https://formspree.io/f/mblrobpe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your response has been submitted!');
        setFormData({ name: '', email: '', message: '' }); // Clear form data
      } else {
        toast.error('Submission failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-center">Contact Us</h2>
      <div className="max-w-2xl mx-auto p-8 rounded-lg shadow-xl border border-gray-200 bg-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-2">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Atmesh Pandey"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-2">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium text-gray-700 mb-2">
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 h-24"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
