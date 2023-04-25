import React, { useState } from "react";
import { usePostStore } from "../lib/store/postStore";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();
  const { currentPost, updatePost } = usePostStore();

  const [formValue, setFormValue] = useState({
    title: currentPost.title,
    coverText: currentPost.coverText,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const postUpdate = {
      ...currentPost,
      ...formValue,
    };
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
        updatePost(postUpdate);
        navigate(-1);
      });
  };

  const handleChange = (event) =>
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });

  return (
    <div className="Edit">
      <form onSubmit={handleFormSubmit}>
        <img src="https://i.imgflip.com/183th7.jpg" alt="" />

        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formValue.title}
        />
        <input
          type="text"
          name="coverText"
          onChange={handleChange}
          value={formValue.coverText}
        />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
