'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.reason || !formData.message ){
      return (alert('All Fields Are Required'))
    }

    // Construct the mailto link
    const mailtoLink = `mailto:ikysmultiprojectltd@gmail.com?subject=${encodeURIComponent(
      formData.reason
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nReason: ${formData.reason}\nMessage: ${formData.message}`
    )}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className="bg-cyan-500 max-sm:h-auto pt-5 bg-cover bg-center sm:min-h-screen w-full">
        <div className="h-auto overflow-y-auto">
          <div className="flex flex-col text-black pt-5">
            <div className="flex justify-center text-xl max-sm:text-lg max-md:text-lg font-bold">
              Contact us here
            </div>

            <div>
              <div className="flex justify-center mt-1">
                <label className="lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-5 text-sm font-bold">
                  Write your name here
                </label>
              </div>
              <div className="flex justify-center">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 text-lg focus:outline p-1 rounded border border-black"
                />
              </div>

              <div className="flex justify-center">
                <label className="lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-2 text-sm font-bold">
                  Write your email here
                </label>
              </div>
              <div className="flex justify-center">
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 text-sm focus:outline p-1 rounded border border-black"
                />
              </div>

              <div className="flex justify-center">
                <label className="lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-2 text-sm font-bold">
                  Topic/reason
                </label>
              </div>
              <div className="flex mt-2 justify-center">
                <input
                  required
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 text-sm focus:outline p-1 rounded border border-black"
                />
              </div>

              <div className="flex justify-center">
                <label className="lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-2 text-sm font-bold">
                  Write your statements here
                </label>
              </div>
              <div className="flex justify-center">
                <textarea
                  required
                  id="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-40 text-sm focus:outline p-1 rounded border border-black"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="rounded bg-slate-950 w-80 max-sm:w-4/5 text-white h-7 mt-5 hover:bg-slate-800 mb-20"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
