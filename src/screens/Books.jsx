// <!--- Zone d'import  --->

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Post from "../components/Post/Post";
import "../App.css";
import { usePostStore } from "../lib/store/postStore";
import { connectToken } from "../utils/connectToken";

// <!--- Fin zone d'import  --->

// <!--- Zone de la fonction  --->

export default function Books() {
  // <!--- Zone des const  --->

  const { posts, setPosts, removePost, setCurrentPost } = usePostStore();
  const [filterPosts, setFilterPosts] = useState([]);
  const [nouveauUser] = useState(1);
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  // console.log(token, 'ouioui');

  const config = connectToken();

  useEffect(() => {
    if (posts.length > 0) return;
    axios.get("http://localhost:8000/api/books", config).then((response) => {
      setPosts(response.data);
      // console.log(response.data);
    });
  }, []);

  useEffect(() => {
    setFilterPosts(posts);
  }, [posts]);

  const handleChange = (event) => {
    const fltr = posts.filter((p) =>
      p.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setFilterPosts(fltr);
  };

  const handleClick = (id) => {
    navigate(`${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/books/${id}`, config)
      .then(function () {
        removePost(id);
      });
  };

  const handleModify = (post) => {
    axios
      .patch(
        `http://localhost:8000/api/books/${post.id}`,
        {
          title: post.title,
          coverText: post.coverText,
          idAuthor: 35,
        },
        config
      )
      .then(function () {
        setCurrentPost(post);
        navigate(`${post.id}/edit`);
      });
  };

  const handleAdd = (post) => {
    setCurrentPost(post);
    navigate(`Add`);
  };

  // <!--- Fin zone des const  --->

  // <!--- Zone du return  --->

  return (
    <div className="App">
      <h1>My blog posts</h1>
      <Link to="/">
        <img
          src="https://pepperyourcontent.com/wp-content/uploads/2022/01/a1a6d3956571442ed928ae41adcdbfc9.jpeg"
          alt="un mauvais même encore"
          className="imgarticles"
        />
      </Link>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      <div className="redirect">
        <Link to="add">Add</Link>
      </div>
      {filterPosts &&
        filterPosts.map((post) => {
          return (
            <div>
              <Post
                key={post.id}
                title={post.title}
                coverText={post.coverText}
                onClick={() => handleClick(post.id)}
                del={() => handleDelete(post.id)}
                handleModify={() => handleModify(post)}
              />
            </div>
          );
        })}
    </div>
  );

  // <!--- Fin du return  --->
}
// <!--- Fin zone de la fonction  --->
