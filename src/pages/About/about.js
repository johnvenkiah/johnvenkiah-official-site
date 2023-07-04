import { AboutWrapper, Card, AboutImage, Italics } from './About.styled';
import johnBlackClav from '../../images/background/john_black_clav.png';
import soloWinter from '../../images/solo_winter.jpg';
import trioKm from '../../images/trio_km.jpg';
import tingsek_kb from '../../images/tingsek_kb.jpeg';

export default function About() {
  return (
    <>
      <AboutWrapper>
        <Card>
          <Italics>
            "Among the best I've heard at Ystad Jazzcafé" “The trio is so
            responsive and close that they become a triangle.” “[John]
            complements as well as contrasts his romantic playing with his
            hoarser voice. Once again, 'For Stevie', listen, just listen! What a
            wonderful soul pop jazz ballad.”
          </Italics>
          <Italics>
            <b>- Bengt Eriksson, Lira Music magazine</b>
          </Italics>
          <Italics>
            “John Venkiah is one of the most talented jazz musicians I have come
            across during my time at the Malmö Academy of Music” -
          </Italics>
          <Italics>
            <b>- Jan Lundgren, renown swedish jazz pianist</b>
          </Italics>
        </Card>
        <p>
          Stockholm based John Venkiah was born in 1986 in London. He started to
          play the keyboard at 5 years of age, and moved to Sweden in 1998.
          Playing mostly by ear, John listened to records his mother played for
          him, and learnt a lot playing by ear.
        </p>
        <div>
          <AboutImage
            src={johnBlackClav}
            alt="John playing clavinet live"
          ></AboutImage>
        </div>
        <p>
          As he grew into his teens, musicianship became a bigger part of his
          life. John began writing his own music at the age of 14, experimenting
          with different influences, including soul, Motown and jazz. He began
          studying music at high school, where he met fellow musicians and
          started his first bands.
        </p>
        <div>
          <AboutImage
            src={soloWinter}
            alt="Closeup of John outdoors in winter"
          ></AboutImage>
        </div>
        <p>
          John took his Bachelor's degree in jazz piano at the Malmö Academy of
          Music in 2012, where he met and learned from renown Swedish pianist
          Jan Lundgren, who, apart from teaching him lots of fundamental things
          within jazz piano, helped him to move forward within the genre in many
          aspects. These including John Venkiah Trio's appearances at Ystad
          Sweden Jazz Festival, the recording of their debut album Things Change
          (2014, Volenza), not to mention continuous inspiration and coaching.
        </p>
        <div>
          <AboutImage
            src={trioKm}
            alt="John Venkiah Trio live with Karl-Martin Almqvist"
          ></AboutImage>
        </div>
        <p>
          John Venkiah's influences include Keith Jarrett, Brad Mehldau, Marvin
          Gaye, Frank Sinatra, Sam Cooke, Oscar Peterson, Ella Fitzgerald, Chick
          Corea, Chet Baker, Stevie Wonder, Michael Jackson, and many more.
        </p>
        <div>
          <AboutImage
            src={tingsek_kb}
            alt="Tingsek, live in Malmö"
          ></AboutImage>
        </div>

        <Card>
          <Italics>
            “Venkiah's fluent playing and his brilliant technique make a
            thousand harmonies bloom along with his soft, pleasant voice.
            Petersson's bass and Rostedt's drums blend in great solos and become
            indispensable for the entire production.”
          </Italics>
          <Italics>
            <b>- Lasse Seger, Orkester Journalen</b>
          </Italics>
          <Italics>
            “A firm grip on tradition, fresh, personal ideas, a brilliant
            technique, delicate touch, developed sense for harmonies and a
            phrasing with true authority - in John Venkiah we have a richly and
            thoroughly equipped young jazz pianist”
          </Italics>
          <Italics>
            <b>- Sven Bjerstedt, 5/5, Ystad Allehanda</b>
          </Italics>
        </Card>
      </AboutWrapper>
    </>
  );
}