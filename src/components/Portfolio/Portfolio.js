import { Link } from 'react-router-dom';
import portfFaela from '../../images/portfolio/portf_faela.jpg';
import portfFeelgood from '../../images/portfolio/portf_feelgood.jpg';
import portfInstru from '../../images/portfolio/portf_instru.jpg';
import portfStepUp from '../../images/portfolio/portf_stepup.jpeg';
import portfVenkiah from '../../images/portfolio/portf_venkiah.jpg';
import {
  PortfolioContainer,
  PortfolioImage,
  PortfolioItem,
} from './Portfolio.styled';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'johnvenkiah.com',
      url: '/',
      img: portfVenkiah,
      descr:
        'The website you are looking at, my official site, built with React',
    },
    {
      title: 'faela-band.com',
      url: 'https://faela-band.com/',
      img: portfFaela,
      descr: 'Homepage for the band Faela, built with React',
    },
    {
      title: 'StepUp Shoes',
      url: 'https://stepup-shoes.onrender.com',
      img: portfStepUp,
      descr: 'Fictional online shoestore built with Django and Stripe',
    },
    {
      title: 'Instru-mental',
      url: 'https://instru-mental.onrender.com',
      img: portfInstru,
      descr:
        'Fictional classified ads-site for musical instruments, built with Django',
    },
    {
      title: 'Feelgood-physio',
      url: 'https://feelgood-physio.onrender.com/',
      img: portfFeelgood,
      descr: 'Python-based fictional booking system for staff and patients',
    },
  ];

  const portfolioItemMarkup = portfolioItems.map((item, i) => (
    <PortfolioItem key={i} to={item.url} rel="norefferer" target="_blank">
      <h3>{item.title}</h3>
      <PortfolioImage src={item.img}></PortfolioImage>
      <p>{item.descr}</p>
    </PortfolioItem>
  ));

  return (
    <>
      <PortfolioContainer>
        <p>
          In February 2022, I received my Diploma in Full Stack Software
          Development, studying an intensive course at Code Institute, in which
          I passed with distinction.
        </p>
        <p>
          At the moment I am employed at IBM CIC as an IT Specialist aside from
          playing music, but am also interested in freelance work as a web
          developer. I am experienced in:
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>React</li>
          <li>Django</li>
          <li>SQL</li>
          <li>Git</li>
          <li>Heroku</li>
          <li>Jira</li>
        </ul>
        <p>
          Here are some of my portfolio projects as a web developer. More to
          come! <Link to="/">Contact me</Link> for a resumé.
        </p>
        {portfolioItemMarkup}
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
