
import React, { useState } from 'react';
import './Login.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [validPhone, setValidPhone] = useState(true);

  // Handle name & email input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle phone input changes
  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));

    setValidPhone(/^\d{10}$/.test(value));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validPhone) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    console.log('Submitted Data:', formData);
    alert('Form Submitted!');
  };

  return (
    <section className="login">
      <form onSubmit={handleSubmit}>
        <h2>Talk to an Interior Designer</h2>

        <div className="input_box">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            className="field"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input_box">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            className="field"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input_box">
          <label htmlFor="phone"></label>
          <PhoneInput
            country={'in'}
            value={formData.phone}
            onChange={handlePhoneChange}
          
            inputProps={{
              name: 'phone',
              id: 'phone',
              required: true,
              className: 'field',
               placeholder: 'Mobile / Whatsapp No.'
            }}
          />
        </div>

        {!validPhone && (
          <p style={{ color: 'red', fontSize: '14px' }}>
            Invalid phone number. Please enter a 10-digit number.
          </p>
        )}

        <button type="submit" className="btn">GET A QUOTE</button>
      </form>
    </section>
  );
}

export default Login;

