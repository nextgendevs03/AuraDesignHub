

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface LoginProps {
  className?: string;
}

const Login: React.FC<LoginProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [validPhone, setValidPhone] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string, data: { dialCode: string }) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));

    const phoneNumber = value.substring(data.dialCode.length);
    setValidPhone(/^\d{10}$/.test(phoneNumber));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validPhone) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    console.log('Submitted Data:', formData);
    alert('Form Submitted!');
  };

  return (
    <div className={`${className}`}>
      <form 
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-1xl w-full max-w-xs"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">
          Talk to an Interior Designer
        </h2>

        <div className="mb-3">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
          />
        </div>

        <div className="mb-3">
          <input
            type="email" 
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
          />
        </div>

        <div className="mb-4">
          <PhoneInput
            country={'in'}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputProps={{
              name: 'phone',
              id: 'phone',
              required: true,
              className: 'w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300',
              placeholder: 'Mobile / Whatsapp No.',
            }}
            containerClass="phone-input-container"
            inputClass="phone-input"
            buttonClass="phone-input-button"
          />
        </div>

        {!validPhone && (
          <p className="text-red-600 text-sm mb-4">
            Invalid phone number. Please enter a 10-digit number.
          </p>
        )}

       

   <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50"
        >
          GET A QUOTE
        </button>

      </form>
    </div>
  );
};

export default Login;




