import React from "react";

const DownloadSection = ({ onDownload }) => {
  return (
    <div className="w-full p-4 border border-gray-300 rounded-md mt-4 text-center">
      <h2 className="text-xl font-bold mb-2">Télécharger</h2>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-green-400 text-white px-4 py-2 rounded-md"
          onClick={() => onDownload("txt")}
        >
          Télécharger en TXT
        </button>
        <button
          className="bg-green-400 text-white px-4 py-2 rounded-md"
          onClick={() => onDownload("srt")}
        >
          Télécharger en SRT
        </button>
        <button
          className="bg-green-400 text-white px-4 py-2 rounded-md"
          onClick={() => onDownload("vtt")}
        >
          Télécharger en VTT
        </button>
      </div>
    </div>
  );
};

export default DownloadSection;
