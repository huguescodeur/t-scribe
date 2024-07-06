import React from "react";

const TranslationSection = ({ translation, onTranslate }) => {
  return (
    <div className="w-full p-4 border-gray-300 rounded-md text-center">
      <h2 className="text-xl font-bold mb-2">Traduction</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none"
        rows="10"
        value={translation}
        readOnly
      />
      <button
        className="bg-green-400 text-white px-4 py-2 rounded-md"
        onClick={onTranslate}
      >
        Traduire
      </button>
    </div>
  );
};

export default TranslationSection;
