const annonce = (req, res) => {
  res.status(200).json({
    id: "1",
    date_de_publication: "20/10/2023",
    description_entreprise:
      "Spécialisée dans la tech, la Wild Code School est une entreprise ou vous aurez les codes.",
    description_mission:
      "En tant que développeuse web full stack, au sein d'une équipe de 5 développeuse, vous serez amenée à réaliser une application web et web mobile pour l'un de nos clients.",
    profil_recherché: "Développeuse full stack, Javacript, React et HTML",
    entreprise_id: "1",
  });
};

module.exports = {
  annonce,
};
