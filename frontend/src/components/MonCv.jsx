import React, { useState } from "react";

function MonCV() {
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
    // const formData = new FormData();
    // formData.append("cv", file);

    // try {
    // const response = await fetch("/api/upload-cv", {
    // method: "POST",
    // body: formData,
    // });
    // if (response.ok) {
    // eslint-disable-next-line no-alert
    // alert("CV uploaded successfully");
    // } else {
    // eslint-disable-next-line no-alert
    // alert("Failed to upload CV");
    // }
    // } catch (error) {
    // eslint-disable-next-line no-alert
    // alert("Error while uploading CV");
    // console.error(error);
    // }
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
            <div className="buttoncv">
              <button type="submit" className="btn_cv">
                Enregistrer les modifications
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MonCV;
