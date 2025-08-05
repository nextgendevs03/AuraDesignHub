

// ///   original file: src/components/Login.tsx////


// import React, { useState } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import emailjs from 'emailjs-com';

// emailjs.init("Xf89sj3y10pHX5Sry");
// interface LoginProps {
//   className?: string;
// }

// const Login: React.FC<LoginProps> = ({ className = '' }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
    
//   });

//   const [validPhone, setValidPhone] = useState(true);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handlePhoneChange = (value: string, data: { dialCode: string }) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       phone: value,
//     }));

//     const phoneNumber = value.substring(data.dialCode.length);
//     setValidPhone(/^\d{10}$/.test(phoneNumber));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!validPhone) {
//       alert('Please enter a valid 10-digit phone number.');
//       return;
//     }

//     console.log('Submitted Data:', formData);
//     alert('Form Submitted!');
//   };

//   return (
//     <div className={`${className}`}>
//       <form 
//         onSubmit={handleSubmit}
//         className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-1xl w-full max-w-xs"
//       >
//         <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">
//           Talk to an Interior Designer
//         </h2>

//         <div className="mb-3">
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="email" 
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
//           />
//         </div>

//         <div className="mb-4">
//           <PhoneInput
//             country={'in'}
//             value={formData.phone}
//             onChange={handlePhoneChange}
//             inputProps={{
//               name: 'phone',
//               id: 'phone',
//               required: true,
//               className: 'w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300',
//               placeholder: 'Mobile / Whatsapp No.',
//             }}
//             containerClass="phone-input-container"
//             inputClass="phone-input"
//             buttonClass="phone-input-button"
//           />
//         </div>

//         {!validPhone && (
//           <p className="text-red-600 text-sm mb-4">
//             Invalid phone number. Please enter a 10-digit number.
//           </p>
//         )}
//    <button
//           type="submit"
//           className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50"
//         >
//           GET A QUOTE
//         </button>

//       </form>
//     </div>
//   );
// };

// export default Login;



 
// // 2nd file //

// // import React, { useState } from 'react';
// // import './Login.css';
// // import PhoneInput from 'react-phone-input-2';
// // import 'react-phone-input-2/lib/style.css';
// // import emailjs from 'emailjs-com';

// // // Initialize EmailJS (Public Key/User ID from your EmailJS account)
// // emailjs.init("Xf89sj3y10pHX5Sry"); // Replace this with your actual public key

// // const Login: React.FC = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //   });

// //   const [validPhone, setValidPhone] = useState(true);
// //   const [successMessage, setSuccessMessage] = useState<string | null>(null);
// //   const [errorMessage, setErrorMessage] = useState<string | null>(null);

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //     setSuccessMessage(null);
// //     setErrorMessage(null);
// //   };

// //   const handlePhoneChange = (value: string) => {
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       phone: value,
// //     }));

// //     const onlyDigits = value.replace(/\D/g, '');
// //     setValidPhone(onlyDigits.length === 10);
// //     setSuccessMessage(null);
// //     setErrorMessage(null);
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (!formData.name || !formData.email || !formData.phone) {
// //       setErrorMessage('Please fill in all fields.');
// //       return;
// //     }

// //     if (!validPhone) {
// //       setErrorMessage('Please enter a valid 10-digit phone number.');
// //       return;
// //     }

// //     try {
// //       await emailjs.send('service_ysx2slf', 'template_turqzvb', {
// //         name: formData.name,
// //         email: formData.email,
// //         phone: formData.phone,
// //       });

// //       setSuccessMessage('Form submitted and email sent successfully!');
// //       setFormData({ name: '', email: '', phone: '' });
// //     } catch (error) {
// //       console.error('EmailJS Error:', error);
// //       setErrorMessage('Failed to send email. Please try again.');
// //     }
// //   };

// //   return (
// //     <section className="login">
// //       <form onSubmit={handleSubmit}>
// //         <h2>Talk to an Interior Designer</h2>

// //         <div className="input_box">
// //           <label htmlFor="name"></label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             className="field"
// //             placeholder="Enter your name"
// //             value={formData.name}
// //             onChange={handleInputChange}
// //             required
// //           />
// //         </div>

// //         <div className="input_box">
// //           <label htmlFor="email"></label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             className="field"
// //             placeholder="Enter your email"
// //             value={formData.email}
// //             onChange={handleInputChange}
// //             required
// //           />
// //         </div>

// //         <div className="input_box">
// //           <label htmlFor="phone"></label>
// //           <PhoneInput
// //             country={'in'}
// //             value={formData.phone}
// //             onChange={handlePhoneChange}
// //             inputProps={{
// //               name: 'phone',
// //               id: 'phone',
// //               required: true,
// //               className: 'field',
// //               placeholder: 'Mobile / Whatsapp No.',
// //             }}
// //           />
// //         </div>

// //         {!validPhone && (
// //           <p style={{ color: 'red', fontSize: '14px' }}>
// //             Invalid phone number. Please enter a 10-digit number.
// //           </p>
// //         )}

// //         {successMessage && (
// //           <p style={{ color: 'green', fontSize: '14px' }}>{successMessage}</p>
// //         )}

// //         {errorMessage && (
// //           <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>
// //         )}

// //         <button type="submit" className="btn">GET A QUOTE</button>
// //       </form>
// //     </section>
// //   );
// // };

// // export default Login;



// // 3rd code 

// import React, { useState } from 'react';
// import './Login.css';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import emailjs from 'emailjs-com';

// emailjs.init('Xf89sj3y10pHX5Sry');

// const Login: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   const [validPhone, setValidPhone] = useState(true);
//   const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhoneChange = (value: string, data: { dialCode: string }) => {
//     const phoneNumber = value.substring(data.dialCode.length);
//     setValidPhone(/^\d{10}$/.test(phoneNumber));
//     setFormData((prev) => ({ ...prev, phone: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validPhone) {
//       setMessage({ type: 'error', text: 'Please enter a valid 10-digit phone number.' });
//       return;
//     }

//     try {
//       await emailjs.send('service_ysx2slf', 'template_turqzvb', {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//       });

//       setMessage({ type: 'success', text: 'Form submitted successfully! We’ll contact you soon.' });
//       setFormData({ name: '', email: '', phone: '' });
//     } catch (err) {
//       console.error(err);
//       setMessage({ type: 'error', text: 'Failed to send. Please try again later.' });
//     }
//   };

//   return (
//     <section className="login">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm mx-auto">
//         <h2 className="text-xl font-semibold text-center mb-4">Talk to an Interior Designer</h2>

//         <div className="input_box mb-3">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="field w-full border border-gray-300 rounded px-3 py-2"
//             required
//           />
//         </div>

//         <div className="input_box mb-3">
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="field w-full border border-gray-300 rounded px-3 py-2"
//             required
//           />
//         </div>

//         <div className="input_box mb-3">
//           <PhoneInput
//             country={'in'}
//             value={formData.phone}
//             onChange={handlePhoneChange}
//             inputProps={{
//               name: 'phone',
//               required: true,
//               className: 'field w-full border border-gray-300 rounded px-3 py-2',
//               placeholder: 'Mobile / Whatsapp No.',
//             }}
//             containerClass="phone-input-container"
//             inputClass="phone-input"
//             buttonClass="phone-input-button"
//           />
//         </div>

//         {!validPhone && (
//           <p className="text-red-500 text-sm mb-2">Invalid phone number. Please enter a 10-digit number.</p>
//         )}

//         {message && (
//           <p className={`text-sm mb-2 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
//             {message.text}
//           </p>
//         )}

//         <button
//           type="submit"
//           className="btn bg-red-600 hover:bg-red-700 text-white py-2 px-4 w-full rounded shadow"
//         >
//           GET A QUOTE
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Login;


// 4th code //

// import React, { useState } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import emailjs from 'emailjs-com';



// emailjs.init("Xf89sj3y10pHX5Sry");
// interface LoginProps {
//   className?: string;
// }

// const Login: React.FC<LoginProps> = ({ className = '' }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
    
//   });


//   const [validPhone, setValidPhone] = useState(true);

// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handlePhoneChange = (value: string, data: { dialCode: string }) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       phone: value,
//     }));

//     const phoneNumber = value.substring(data.dialCode.length);
//     setValidPhone(/^\d{10}$/.test(phoneNumber));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!validPhone) {
//       alert('Please enter a valid 10-digit phone number.');
//       return;
//     }

//     console.log('Submitted Data:', formData);
//     alert('Form Submitted!');
//   }; 

//   return (
//     <div className={`${className}`}>
//       <form 
//         onSubmit={handleSubmit}
//         className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-1xl w-full max-w-xs"
//       >
//         <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">
//           Talk to an Interior Designer
//         </h2>

//         <div className="mb-3">
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="email" 
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
//           />
//         </div>

//         <div className="mb-4">
//           <PhoneInput
//             country={'in'}
//             value={formData.phone}
//             onChange={handlePhoneChange}
//             inputProps={{
//               name: 'phone',
//               id: 'phone',
//               required: true,
//               className: 'w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300',
//               placeholder: 'Mobile / Whatsapp No.',
//             }}
//             containerClass="phone-input-container"
//             inputClass="phone-input"
//             buttonClass="phone-input-button"
//           />
//         </div>

//         {!validPhone && (
//           <p className="text-red-600 text-sm mb-4">
//             Invalid phone number. Please enter a 10-digit number.
//           </p>
//         )}
//    <button
//           type="submit"
//           className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50"
//         >
//           GET A QUOTE
//         </button>

//       </form>
//     </div>
//   );
// };


// export default Login;


//5th code :

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from 'emailjs-com';

emailjs.init('Xf89sj3y10pHX5Sry');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validPhone) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      await emailjs.send('service_ysx2slf', 'template_turqzvb', formData, 'Xf89sj3y10pHX5Sry');
      alert('Form Submitted and Email Sent!');
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send email. Please try again.');
    }
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
              className:
                'w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300',
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


