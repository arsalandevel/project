import React, { useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import axios from 'axios';
import  Model from '../Model/Model'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // Show/Hide Modal

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required.';
    }
    if (!email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }
    if (!message.trim()) {
      errors.message = 'Message is required.';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await axios.post(
        'https://669296b9346eeafcf46d7877.mockapi.io/contact',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.status === 201) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again later.');
    } finally {
      setShowModal(true); // Show modal with status message
    }
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mdarsalansaleem@gmail.com</h5>
            <a href="mailto:mdarsalansaleem@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Arsalan Saleem</h5>
            <a href="https://m.me/marsalan.saleem.18" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+923152579132" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
       {/* Form */}
       <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="7"
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>

        {showModal && (
          <Model
            message={status}
            onClose={() => setShowModal(false)} // Hide modal on close
          />
        )}
      </div>
    </section>
  );
};

export default Contact;
