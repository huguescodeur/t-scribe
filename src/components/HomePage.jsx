// // src/components/HomePage.js

// import React from "react";

// const HomePage = () => {
//   return (
//     <main className="flex flex-col items-center mt-16">
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">
//         T-<span className="text-green-400">Scribe</span>
//       </h1>
//       <p className="text-lg text-gray-600 mb-8">
//         Source → Transcription → Traduction
//       </p>
//       <div className="flex flex-col items-center space-y-4">
//         <input
//           type="text"
//           placeholder="Lien vidéo YouTube"
//           className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//         />
//         <p className="text-gray-600">Or</p>
//         <div className="flex space-x-4">
//           <label className="cursor-pointer">
//             <input type="file" accept=".mp3" className="hidden" />
//             <span className="bg-green-400 text-white px-4 py-2 rounded-md">
//               Télécharger MP3
//             </span>
//           </label>
//           <label className="cursor-pointer">
//             <input type="file" accept="video/*" className="hidden" />
//             <span className="bg-green-400 text-white px-4 py-2 rounded-md">
//               Télécharger Vidéo
//             </span>
//           </label>
//         </div>
//       </div>
//       <p className="text-gray-600 mt-8">
//         T-<span className="text-green-400">Scribe</span> gratuit aujourd'hui,
//         gratuit à jamais.
//       </p>
//     </main>
//   );
// };

// export default HomePage;

// import React from "react";

// const HomePage = () => {
//   const handleLaunch = () => {
//     alert("Lancer la transcription");
//   };

//   return (
//     <main className="flex flex-col items-center mt-16">
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">
//         T-<span className="text-green-400">Scribe</span>
//       </h1>
//       <p className="text-lg text-gray-600 mb-8">
//         Source → Transcription → Traduction
//       </p>
//       <div className="flex flex-col items-center space-y-4">
//         <input
//           type="text"
//           placeholder="Lien vidéo YouTube"
//           className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//         />
//         <button
//           className="bg-green-400 text-white px-4 py-2 rounded-md"
//           onClick={handleLaunch}
//         >
//           Lancer
//         </button>
//         <p className="text-gray-600">Or</p>
//         <div className="flex space-x-4">
//           <label className="cursor-pointer">
//             <input type="file" accept=".mp3" className="hidden" />
//             <span className="bg-green-400 text-white px-4 py-2 rounded-md">
//               Télécharger MP3
//             </span>
//           </label>
//           <label className="cursor-pointer">
//             <input type="file" accept="video/*" className="hidden" />
//             <span className="bg-green-400 text-white px-4 py-2 rounded-md">
//               Télécharger Vidéo
//             </span>
//           </label>
//         </div>
//       </div>
//       <p className="text-gray-600 mt-8">
//         T-<span className="text-green-400">Scribe</span> gratuit aujourd'hui,
//         gratuit à jamais.
//       </p>
//     </main>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [transcription, setTranscription] = useState("");
  const [translation, setTranslation] = useState("");

  const handleLaunch = async () => {
    console.log("Video URL:", videoUrl);
    try {
      const response = await axios.post("http://localhost:5000/", {
        video_url: videoUrl,
      });
      console.log("Response:", response.data);
      setTranscription(response.data.transcription);
      setTranslation(response.data.translation);
    } catch (error) {
      console.error("Error fetching transcription and translation:", error);
    }
  };

  return (
    <main className="flex flex-col items-center mt-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        T-<span className="text-green-400">Scribe</span>
      </h1>
      <input
        type="text"
        placeholder="Lien vidéo YouTube"
        className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button
        className="bg-green-400 text-white px-4 py-2 rounded-md mt-4"
        onClick={handleLaunch}
      >
        Lancer
      </button>
      {transcription && (
        <div className="w-full p-4 border border-gray-300 rounded-md mt-4 text-center">
          <h2 className="text-xl font-bold mb-2">Transcription</h2>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="10"
            value={transcription}
            readOnly
          />
        </div>
      )}
      {translation && (
        <div className="w-full p-4 border border-gray-300 rounded-md mt-4 text-center">
          <h2 className="text-xl font-bold mb-2">Traduction</h2>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="10"
            value={translation}
            readOnly
          />
        </div>
      )}
      <p className="text-gray-600 mt-8">
        T-<span className="text-green-400">Scribe</span> gratuit aujourd'hui,
        gratuit à jamais.
      </p>
    </main>
  );
};

export default HomePage;
