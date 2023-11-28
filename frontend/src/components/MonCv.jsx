import React, { useState } from "react";
import axios from "axios";

export default function MonCV() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("cvLink", file);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/moncv`, formData)
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
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
              <button type="submit">Télécharger votre CV</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
