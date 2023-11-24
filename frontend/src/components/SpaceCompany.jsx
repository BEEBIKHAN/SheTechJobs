export default function SpaceCompany() {
  return (
    <div className="contentspacecompany">
      <form action="">
        <div className="publish_form_input">
          <div className="input_wrapper">
            <label htmlFor="name">Nom de l'entreprise *</label>
            <input type="text" />
          </div>
          <div className="input_wrapper">
            <label htmlFor="name">Numéro de Siret*</label>
            <input type="text" />
          </div>
          <button type="submit" className="btnSpaceCompany">
            Enregister les modifications
          </button>
        </div>
      </form>
    </div>
  );
}
