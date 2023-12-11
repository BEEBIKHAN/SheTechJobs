import React, { useState, useContext } from "react";
import axios from "axios";
import ExportContext from "../contexts/Context";

export default function MonCV() {
  const [file, setFile] = useState(null);
  const { info } = useContext(ExportContext.Context);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("cvLink", file);
    formData.append("id", info.id);

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
