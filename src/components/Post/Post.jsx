// import "./style.css";
// import { Link } from "react-router-dom";

// export default function Post({ title, body, deleteClick, id }) {
//   return (
//     <div>
//       {" "}
//       <Link to={`/articles/${id}`} >
//         <div className="post--card">
//           <h2>{title}</h2>
//           <p>{body}</p>
//         </div>
//       </Link>
//       {/* <Link  to={`/edit/${id}`} >
//         <button>Edit</button>
//       </Link> */}

//       <button className="delete" onClick={deleteClick}>
//         Supprimer
//       </button>
//     </div>
//   );
// }

import "./style.css";

export default function Post({
  title,
  coverText,
  firstName,
  lastName,
  onClick,
  del,
  handleModify,
}) {
  return (
    <div className="post--card">
      <h2>{title}</h2>
      <p>{coverText}</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <button onClick={onClick}>details</button>
      <button onClick={del}>Supprimer</button>
      <button onClick={handleModify}>Modifier</button>
    </div>
  );
}
