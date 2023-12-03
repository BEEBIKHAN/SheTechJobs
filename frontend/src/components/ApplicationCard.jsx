// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ApplicationCard() {
//   const [motivations, setMotivations] = useState("");
//   //   const [data, setData] = useState([]);

//   const handleChangeMotivations = (e) => {
//     setMotivations(e.target.value);
//   };

//   const addApplicationWithMotivations = () => {
//     axios
//       .post(`${import.meta.env.VITE_BACKEND_URL}/application-motivations`, {
//         motivations,
//       })
//       .then((response) => {
//         console.info("mes motivations", response);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   useEffect(() => {
//     addApplicationWithMotivations();
//   }, []);

//   return (
//     <div className="motivationText">
//       <h3>TechNova Solutions</h3>
//       <form action="/mycv">
//         <p id="offre">
//           Si cette offre vous intéresse, veuillez cliquer sur le bouton
//           ci-dessus. Vous augmenterez vos chances si vous écrivez ce qui vous
//           motive dans l’offre.
//         </p>
//         <p id="optionnel">Vos motivations (optionnel) :</p>
//         <textarea name="motivations" id="motivations" cols="50" rows="22" />
//         <br />
//         <input type="submit" onChange={handleChangeMotivations} />
//       </form>
//     </div>
//   );
// }
