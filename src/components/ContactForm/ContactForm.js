import { ContactFormStyled as Form } from './ContactForm.styled';

export default function ContactForm() {
  return (
    <Form>
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </Form>
  );
}
