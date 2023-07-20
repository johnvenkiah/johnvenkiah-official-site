import standardsCover from '../../images/venkiah_nyvall_standards.jpg';
import jvt3Small from '../../images/jvt3-small.jpeg';
import faelaLab from '../../images/cover_faela_lab.jpg';
import shirin22 from '../../images/shirin-22.png';
import iJustCant from '../../images/venkiah-i-just-cant.jpeg';
import kaalm from '../../images/kaalm.jpg';
import jvt2_small from '../../images/jvt2-small.png';
import tingsek_ljupet from '../../images/tingsek-ljupet.jpg';

const albumData = [
  {
    id: 'latin_animal_beats',
    img_url: faelaLab,
    alt_attr: 'Faela Latin Animal Beats Cover',
    title: 'Faela - Latin Animal Beats (2023)',
    spotify_url:
      'https://open.spotify.com/album/0mwzwuxBWgSku8TAt4MDNf?si=MAdyp3EqS426pvJr0m8UNA',
    apple_url: 'https://music.apple.com/us/album/latin-animal-beats/1679545427',
    tidal_url: 'https://tidal.com/browse/album/285802621',
    deezer_url: 'https://deezer.page.link/ZUEqoMfovCs78WsV6',
    buy_link:
      'https://www.havtornrecords.com/store/faela-latin-animal-beats-cd',
  },
  {
    id: 'standards',
    img_url: standardsCover,
    alt_attr: 'Album cover: John Venkiah and Rasmus Nyvall - "Standards"',
    title: 'John Venkiah & Rasmus Nyvall - Standards (2022)',
    spotify_url:
      'https://open.spotify.com/album/7xzKnB8eRTmfu47DzCMB1t?si=XoEYN2DOSdKCJ1nac5iKzg',
    apple_url: 'https://music.apple.com/us/album/standards/1640103549',
    tidal_url: 'https://listen.tidal.com/album/243383494',
    deezer_url: 'https://www.deezer.com/en/album/347278807',
    buy_link:
      'https://www.havtornrecords.com/store/john-venkiah-rasmus-nyvall-standards-lp',
  },
  {
    id: 'jvt_3',
    img_url: jvt3Small,
    alt_attr: 'Album cover: John Venkiah Trio - "On to Something Good"',
    title: 'John Venkiah Trio - On to Something Good (2021)',
    spotify_url:
      'https://open.spotify.com/album/45nFMsq34mgAppXfaP9FJl?si=0WmBK5EXRw285Bj_rJuKuQ',
    apple_url:
      'https://music.apple.com/us/album/on-to-something-good/1559823273',
    tidal_url: 'https://listen.tidal.com/album/178241000',
    deezer_url: 'https://www.deezer.com/en/album/217121042',
    buy_link: 'http://www.imogena.se/catalogue/cd.php?catid=IGCD%20256',
  },
  {
    id: 'i_just_cant',
    img_url: iJustCant,
    alt_attr: 'Album cover: Venkiah - "I Just Can\'t"',
    title: "Single: Venkiah - I Just Can't (2019)",
    spotify_url:
      'https://open.spotify.com/track/7ciuAVS8ITOxWB8KQkmUHV?si=796c781d2f78454a',
    apple_url: 'https://music.apple.com/se/album/i-just-cant-single/1470167311',
    tidal_url: 'https://tidal.com/browse/album/108982559',
    deezer_url: 'https://deezer.page.link/cYuFkMntdE2NFovE6',
    buy_link:
      'https://music.apple.com/se/album/i-just-cant-single/1470167311?l=en-GB',
  },
  {
    id: 'shirin_22',
    img_url: shirin22,
    alt_attr: 'Album cover: Shirin - "22"',
    title: 'Single: Shirin - 22 (2019)',
    spotify_url:
      'https://open.spotify.com/album/5iUSH5m8b16R7Vw3vYy24I?si=tJL9p0GxQf2sj8n6_PN_Bg',
    apple_url: 'https://music.apple.com/us/album/22/1563136581',
    tidal_url: 'https://listen.tidal.com/album/179057227',
    deezer_url: 'https://www.deezer.com/en/album/218585872',
    buy_link: 'https://music.apple.com/se/album/22-single/1449234054?l=en-GB',
  },
  {
    id: 'jvt_2',
    img_url: jvt2_small,
    alt_attr: 'Album cover: John Venkiah Trio - "Elevation"',
    title: 'John Venkiah Trio - Elevation (2017)',
    spotify_url:
      'https://open.spotify.com/album/6hdzCoSdouHfyhbZvQF4qC?si=HcSBPYhLSmu1UJMw-4edag',
    apple_url: 'https://music.apple.com/us/album/elevation/1559814926',
    tidal_url: 'https://listen.tidal.com/album/178239803',
    deezer_url: 'https://www.deezer.com/en/album/217116512',
    buy_link: 'http://www.imogena.se/catalogue/cd.php?catid=IGCD%20228',
  },
  {
    id: 'kaalm',
    img_url: kaalm,
    alt_attr: 'Album cover: Kaalm - "Everything"',
    title: 'EP: Kaalm - Everything (2017)',
    spotify_url:
      'https://open.spotify.com/album/5LhQqoxpUqMjGzj3tKvwGA?si=_x-6a0ZgSfmQPbUTw2dJ9Q',
    apple_url: 'https://music.apple.com/us/album/everything/1557307111',
    tidal_url: 'https://listen.tidal.com/album/176887626',
    deezer_url: 'https://www.deezer.com/en/album/210065482',
    buy_link:
      'https://music.apple.com/se/album/everything-ep/1502947738?l=en-GB',
  },
  {
    id: 'tingsek_ljupet',
    img_url: tingsek_ljupet,
    alt_attr: 'Album cover: Tingsek - "Live at Ljupet: Sessions 2016"',
    title: 'EP: Tingsek - Live at Ljupet (2016)',
    spotify_url:
      'https://open.spotify.com/album/00v2cymj8HJWJL9B5ltC3F?si=zyXpNE3rSpSwNtxm4A5Qig',
    apple_url:
      'https://music.apple.com/us/album/live-at-ljupet-sessions-2016/1193743632',
    tidal_url: 'https://listen.tidal.com/album/67899961',
    deezer_url: 'https://www.deezer.com/en/album/14625830',
    buy_link:
      'https://music.apple.com/se/album/live-at-ljupet-sessions-2016-single/1364427600?l=en-GB',
  },
];

export default albumData;
