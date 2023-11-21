export default function PublishOffer() {
  return (
    <div className="content_publish_offer">
      <form action="">
        <div className="publish_form_input" action="">
          <div className="input_wrapper">
            <label htmlFor="name">Titre du poste *</label>
            <input type="text" />
          </div>

          <div className="input_wrapper">
            <label htmlFor="name"> Sélection Métier *</label>
            <select>
              <option value="">...</option>
            </select>
          </div>

          <div className="input_wrapper">
            <label htmlFor="name">Type de contrat *</label>
            <select>
              <option value="">...</option>
            </select>
          </div>

          <div className="input_wrapper">
            <label htmlFor="name">Localisation du poste *</label>
            <select>
              <option value="">...</option>
            </select>
          </div>
        </div>

        <div className="publish_form_label" action="">
          <label htmlFor="name">Qui sommes nous ? *</label>
          <textarea className="big_label" type="text" />
          <label htmlFor="name">Description du poste *</label>
          <textarea className="big_label" type="text" />
          <label htmlFor="name">Profil recherché *</label>
          <textarea className="big_label" type="text" />
          <button type="submit">Publier l'annonce</button>
        </div>
      </form>
    </div>
  );
}
