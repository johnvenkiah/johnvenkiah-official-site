import { useState } from 'react';
import axios from 'axios';
import { ContactFormStyled as Form, SuccessP } from './ContactForm.styled';
import FriendlyCaptcha from '../FriendlyCaptcha';

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

    axios
      .post('http://127.0.0.1:3001/send', { ...state })
      .then((response) => {
        setResult(response.data);
        setState({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later',
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <Form>
      {result && (
        <SuccessP
          style={{ background: result.success ? '#355035' : '#4c2323' }}
        >
          {result.message}
        </SuccessP>
      )}
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
  );
}
