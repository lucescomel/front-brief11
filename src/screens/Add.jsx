import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../lib/store/postStore";

export default function AddPost() {
  const navigate = useNavigate();

  const { posts, addNewPost } = usePostStore();

  const [state, setstate] = useState({
    title: "",
    coverText: "",
    userId: 1,
    id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setstate((props) => ({
      ...props,
      [name]: value,
    }));
  };

  const handleSubmitAdd = (post) => {
    axios
    .post(
      `http://localhost:8000/api/books`,
      {
        title: post.title,
        coverText: post.coverText,
        idAuthor: 35,
      },
      config
    )
    .then(function () {
      addNewPost(state);
      navigate(-1);
    });
  };

  return (
    <div className="Add">
      <h1>Créer un nouveau post</h1>
      <img
        src="https://c.tenor.com/cIx3TwnGuvQAAAAC/retard-drooling.gif"
        alt=""
      />
      <button onClick={() => navigate(-1)}>Go Back Home</button>
      <form onSubmit={handleSubmitAdd}>
        <div>
          <label htmlFor="title">Titre:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="coverText">Contenu :</label>
          <input
            type="text"
            name="coverText"
            id="coverText"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
