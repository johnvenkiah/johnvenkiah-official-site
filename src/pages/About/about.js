import {
  Card,
  AboutImage,
  Italics,
  AboutContainer,
  SectionContainer,
  SectionWrapper,
  SectionWrapperRow,
  ImageWrapper,
} from './About.styled';
import soloWinter from '../../images/solo_winter.jpg';
import trioKm from '../../images/trio_km.jpg';
import faelaPennabilli from '../../images/lorenzo_sbrenna_faela.jpg';
import heltOff from '../../images/heltoff_malmofestivalen.png';

export default function About() {
  return (
    <>
      <AboutContainer>
        <Card>
          <Italics>
            “John Venkiah is one of the most talented jazz musicians I have come
            across during my time at the Malmö Academy of Music” -
          </Italics>
          <Italics>
            <b>- Jan Lundgren, renown swedish jazz pianist</b>
          </Italics>
        </Card>
        <SectionContainer>
          <ImageWrapper>
            <AboutImage
              src={soloWinter}
              alt="Closeup of John outdoors in winter"
            ></AboutImage>
            <small>Photo: Niclas Tilosius</small>
          </ImageWrapper>
          <SectionWrapper>
            <p>
              Stockholm based John Venkiah was born in 1986 in London. He
              started to play the piano at 5 years of age, and moved to Sweden
              in 1998. As he grew into his teens, musicianship became a bigger
              part of his life. John began writing his own music at the age of
              14, experimenting with different influences, including soul,
              Motown and jazz. He began studying music at high school, where he
              met fellow musicians and started his first bands.
            </p>
          </SectionWrapper>
        </SectionContainer>
        <SectionWrapper>
          <p>
            John took his Bachelor's degree in jazz piano at the Malmö Academy
            of Music in 2012, where he met and learned from renown Swedish
            pianist Jan Lundgren. Since then he has worked as a freelancing
            musician, playing in different constellations and genres, on big
            stages and small, in Sweden and around Europe.
          </p>
        </SectionWrapper>
        <SectionWrapperRow>
          <ImageWrapper>
            <AboutImage
              src={faelaPennabilli}
              alt="Faela live in Pennabilli, Italy"
            ></AboutImage>
            <small>
              Faela live in Pennabilli, 2016. Photo: Lorenzo Sbrenna
            </small>
          </ImageWrapper>
          <ImageWrapper>
            <AboutImage
              src={heltOff}
              alt="Helt Off, live at Malmöfestivalen 2016"
            ></AboutImage>
            <small>
              Helt Off, live at Malmöfestivalen 2016. Photo credit: Helt Off
            </small>
          </ImageWrapper>
        </SectionWrapperRow>
        <SectionContainer>
          <p>
            John Venkiah plays regularly with several groups and artists, for
            example Shirin and Faela, and has released three albums with his
            trio John Venkiah Trio. John has also shared the stage with the
            likes of Malmö Symphony Orchestra, Tingsek, Carola, Allen Stone,
            Timbuktu, Sam Ryder, Helt Off, Sarah Dawn Finer and many more.
          </p>
          <p>
            Influences include Keith Jarrett, Brad Mehldau, Marvin Gaye, Frank
            Sinatra, Sam Cooke, Oscar Peterson, Ella Fitzgerald, Chick Corea,
            Chet Baker, Stevie Wonder, Michael Jackson, and many more.
          </p>
          <p>
            John received the Ystad Sweden Jazz Award "Next Generation" in 2020
            and the Treklang Grant for his trio in 2018.
          </p>
          <ImageWrapper>
            <AboutImage
              src={trioKm}
              alt="John Venkiah Trio live with Karl-Martin Almqvist"
            ></AboutImage>
            <small>
              John Venkiah Trio live with Karl-Martin Almqvist, Palladium, Malmö
              2021. Photo: Tobias Annerfeldt
            </small>
          </ImageWrapper>
        </SectionContainer>
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
      </AboutContainer>
    </>
  );
}
