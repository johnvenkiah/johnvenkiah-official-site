import IframeEmbed from '../../components/IframeEmbed';
import { VideosWrapper } from './Videos.styled';

export default function Videos() {
  const vidData = [
    {
      title: 'The Gospel of John',
      url: 'HGtTdz4Ec7k',
      text: 'John Venkiah Trio - Live at Fasching',
    },
    {
      title: "I Just Can't",
      url: 'ZxanNE7M_3Y',
      text: "Venkiah's debut single music video",
    },
    {
      title: 'Tingsek - Six Years',
      url: 'pk4UDn7pjv8',
      text: 'feat. Allen Stone: live from Malmöfestivalen, Sweden',
    },
    {
      title: 'Duo Concert with Carolina Almgren',
      url: 'ry9cr3D45N0',
      text: 'Live at Skissernas Museum, Lund, Sweden',
    },
    {
      title: "Everything's OK, Claudia Campagnol",
      url: 'jCqw382128s',
      text: 'Live from Arket Museum of Modern Art, Ishøj, Denmark',
    },
    {
      title: 'I Think My Body Likes It',
      url: 'E6udgcN1YW0',
      text: 'Venkiah - Music Video',
    },
    {
      title: 'Tingsek - Gas Station Gus',
      url: 'f44fVddQ170',
      text: 'Live att Ljupet',
    },
  ];

  return (
    <VideosWrapper>
      {vidData.map((item, i) => (
        <IframeEmbed
          key={i}
          embedId={item.url}
          title={item.title}
          text={item.text}
        />
      ))}
    </VideosWrapper>
  );
}

// import { VideosWrapper } from './Videos.styled';

// export default function Videos() {
//   const video_urls = [
//     {
//       title: 'Junio & Julia',
//       url: '4LGCXLC9Nyg',
//       description: 'Live at Moriskan, Malmö 2022',
//     },
//     {
//       title: 'Perro Fiel',
//       url: 'zOrhSgxerjs',
//       description: "Faela's new song with footage from Boa Vista, Cap Verde",
//     },
//     {
//       title: 'Samuelito',
//       url: 't7GJXdiU2KI',
//       description: "A tribute to Faela's old friend in Switzerland",
//     },
//     {
//       title: 'Efige Efige',
//       url: 'aTp9XAqkFS0',
//       description:
//         "Faela's take on a Greek tune by Stelios Kazantzidis from 1980",
//     },
//     {
//       title: 'Live from Hildesheim',
//       url: 'Ywgn4aaAXWU?start=633',
//       description: 'A live concert streamed from Germany, 2021',
//     },
//   ];
//   return (
//     <VideosWrapper id="videos">
//       <h1>Videos</h1>
//       <div className="videoContainer">
//         {video_urls.map((item) => (
//           <>
//             <div className="videoWrapper">
//               <h3>{item.title}</h3>
//               <div className="textWrapper">
//                 <iframe
//                   src={`https://www.youtube-nocookie.com/embed/${item.url}?wmode=transparent`}
//                   title={`YouTube video - ${item.title}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   wmode="opaque"
//                 ></iframe>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           </>
//         ))}
//       </div>
//     </VideosWrapper>
//   );
// }
