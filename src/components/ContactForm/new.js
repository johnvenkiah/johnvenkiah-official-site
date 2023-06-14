// import { useRef, useState } from 'react';
// import axios from 'axios';
// import { recaptchaenterprise } from '@google-cloud/recaptcha-enterprise';
// import { ContactFormStyled as Form, SuccessP } from './ContactForm.styled';

// const reCaptchaClient =
//   new recaptchaenterprise.RecaptchaEnterpriseServiceClient();

// export default function ContactForm() {
//   const [state, setState] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [result, setResult] = useState(null);

//   const onInputChange = (event) => {
//     const { name, value } = event.target;

//     setState({
//       ...state,
//       [name]: value,
//     });
//   };

//   const recaptchaRef = useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const reCaptchaToken = recaptchaRef.current;

//     reCaptchaClient
//       .createAssessment({
//         parent: 'projects/your-project-id',
//         assessment: {
//           event: {
//             siteKey: 'your-site-key',
//             token: reCaptchaToken,
//           },
//         },
//       })
//       .then((response) => {
//         const { riskAnalysis } = response;

//         if (riskAnalysis && riskAnalysis.score >= 0.5) {
//           axios
//             .post('http://localhost:3001/send', { ...state })
//             .then((response) => {
//               setResult(response.data);
//               setState({ name: '', email: '', subject: '', message: '' });
//             })
//             .catch(() => {
//               setResult({
//                 success: false,
//                 message: 'Something went wrong. Try again later',
//               });
//             });
//         } else {
//           setResult({
//             success: false,
//             message: 'reCAPTCHA validation failed.',
//           });
//         }
//       })
//       .catch(() => {
//         setResult({
//           success: false,
//           message: 'reCAPTCHA validation failed.',
//         });
//       });
//   };

//   // ...

//   const onRecaptchaLoaded = () => {
//     // Initialize reCAPTCHA Enterprise
//     window.grecaptcha.enterprise.ready(() => {
//       window.grecaptcha.enterprise.render(recaptchaRef.current, {
//         sitekey: 'your-site-key',
//         size: 'invisible',
//         callback: handleSubmit,
//       });
//     });
//   };

//   // ...

//   return (
//     <Form>
//       {result && (
//         <SuccessP
//           style={{ background: result.success ? '#41854166' : '#932d2d66' }}
//         >
//           {result.message}
//         </SuccessP>
//       )}
//       <h2>Contact Me</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           value={state.name}
//           onChange={onInputChange}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={state.email}
//           onChange={onInputChange}
//         />
//         <input
//           type="text"
//           placeholder="Subject"
//           name="subject"
//           value={state.subject}
//           onChange={onInputChange}
//         />
//         <textarea
//           placeholder="Message"
//           as="textarea"
//           name="message"
//           value={state.message}
//           rows="3"
//           onChange={onInputChange}
//         />
//         <button
//           type="submit"
//           onClick={() => window.grecaptcha.enterprise.execute()}
//         >
//           Send
//         </button>
//         <div ref={recaptchaRef} onLoad={onRecaptchaLoaded}></div>
//       </form>
//     </Form>
//   );
// }
