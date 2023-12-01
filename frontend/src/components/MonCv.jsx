import React, { useState } from "react";

export default function MonCV() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      // eslint-disable-next-line no-alert
      alert("Please select a file to upload");
    }
  };

  return (
    <div className="mon-cv-container">
      <div className="mcontainer">
        <form onSubmit={handleSubmit}>
          <div className="file-input-container">
            <input
              type="text"
              placeholder="Nom du fichier *"
              className="file-name-input"
              required
            />
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input"
              required
            />
            <div className="buttonupload">
              <button type="button" className="btn_upload">
                Télécharger votre CV
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
