const cv = (req, res) => {
  res.status(200).json({
    id: "1",
    titre: "Développeuse back-end",
    image_profil:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/330px-Rihanna_Fenty_2018.png",
    formation: "Développement Web Full Stack",
    formation_date_de_debut: "01/01/2019",
    formation_date_de_fin: "31/12/2019",
    experience: "Développeuse - Design UX/UI",
    experience_date_de_debut: "03-01-2020",
    experience_date_de_fin: "28-02-2023",
    competences_techniques: "Javascript, Express, Python",
    langues: "Anglais, Espagnol, Créole",
    loisirs: "Musique, Danse, Course",
    candidate_id: "1",
  });
};

module.exports = {
  cv,
};
