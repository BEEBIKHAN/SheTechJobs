import React, { useState } from "react";
import axios from "axios";

export default function MonCV() {
  const [setFile] = useState(null);

  const addCv = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/moncv`)
      .then((response) => {
        setFile(response.data);
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="mon-cv-container">
      <div className="mcontainer">
        <form onSubmit={addCv}>
          <div className="file-input-container">
            <input
              type="text"
              placeholder="Nom du fichier *"
              className="file-name-input"
              required
            />
            <input
              type="file"
              onChange={(event) => handleFileChange(event.target.files[0])}
              className="file-input"
              required
            />
            <div className="buttonupload">
              <button type="submit">Télécharger votre CV</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
