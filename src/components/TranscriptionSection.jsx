import React from "react";

const TranscriptionSection = ({ transcription, onEdit }) => {
  return (
    <div className="w-full p-4  border-gray-300 rounded-md text-center">
      <h2 className="text-xl font-bold mb-2">Transcription</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        rows="10"
        value={transcription}
        readOnly
      />
      <button
        className="bg-green-400 text-white px-4 py-2 rounded-md"
        onClick={onEdit}
      >
        Modifier la transcription
      </button>
    </div>
  );
};

export default TranscriptionSection;
