// src/components/ResultsPage.js

import React, { useState } from "react";
import TranscriptionSection from "./TranscriptionSection";
import TranslationSection from "./TranslationSection";
import DownloadSection from "./DonwloadSection";

const ResultsPage = () => {
  const [transcription, setTranscription] = useState(
    "Voici un exemple de transcription..."
  );
  const [translation, setTranslation] = useState(
    "Voici un exemple de traduction..."
  );

  const handleEdit = () => {
    // Logic for editing transcription
    alert("Modifier la transcription");
  };

  const handleTranslate = () => {
    // Logic for translating transcription
    alert("Traduire la transcription");
  };

  const handleDownload = (format) => {
    // Logic for downloading transcription and/or translation
    alert(`Télécharger en format ${format}`);
  };

  return (
    <main className="flex flex-col items-center mt-16 p-4 space-y-8">
      <div className="flex justify-between w-full">
        <TranscriptionSection
          transcription={transcription}
          onEdit={handleEdit}
        />
        <TranslationSection
          translation={translation}
          onTranslate={handleTranslate}
        />
      </div>
      <DownloadSection onDownload={handleDownload} />
    </main>
  );
};

export default ResultsPage;
