import axios from "axios";
import { usePostStore } from "../lib/store/postStore";
import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Post from "../components/Post/Post";

export default function Home() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { post, setPosts, removePosts, setCurrentPost } = usePostStore();
  const [toSearch, setToSearch] = useState("");
  const [filterPosts, setFilterPosts] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((props) => ({
      ...props,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "https://pco-back-luc.projets.lecoledunumerique.fr/api/login_check",
      data: {
        username: state.username,
        password: state.password,
      },
    }).then(function (response) {
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate(`books`);
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      {/* <img
        src="https://c.tenor.com/cIx3TwnGuvQAAAAC/retard-drooling.gif"
        alt=""
      /> */}
      {/* <button onClick={() => navigate(-1)}>Go Back Home</button> */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">connect</button>
      </form>
    </div>
  );
}
