import { useEffect, useState } from 'react';
import axios from 'axios';
import FriendlyCaptcha from '../FriendlyCaptcha';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormStyled as Form, SuccessP } from './ContactForm.styled';

export default function ContactForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!state.name || !state.email || !state.subject || !state.message) {
      setResult({
        success: false,
        message: 'Please fill out all fields',
      });
    } else {
      axios
        .post('http://127.0.0.1:3001/send', { ...state })
        .then((response) => {
          setResult(response.data);
          setState({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => {
            setResult(null);
          }, 3000);
        })
        .catch(() => {
          setResult({
            success: false,
            message: 'Something went wrong. Try again later',
          });
        });
    }
  };

  useEffect(() => {
    let timeoutId;

    if (result) {
      timeoutId = setTimeout(() => {
        setResult(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [result]);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              key={result}
              style={{
                position: 'fixed',
                zIndex: 5000,
              }}
            >
              <SuccessP
                style={{
                  background: result.success ? '#35503580' : '#5c232380',
                }}
              >
                {result.message}
              </SuccessP>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Form>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={state.name}
            onChange={onInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={onInputChange}
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={state.subject}
            onChange={onInputChange}
          />
          <textarea
            placeholder="Message"
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            onChange={onInputChange}
          />
          <button type="submit">Send</button>
          <FriendlyCaptcha />
        </form>
      </Form>
    </>
  );
}
