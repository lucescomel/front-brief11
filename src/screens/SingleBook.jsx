// import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePostStore } from "../lib/store/postStore";

export default function SingleBook() {
  const { posts, currentPost, setCurrentPost } = usePostStore();
  const [isEditing, setIsEditing] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    const currPost = posts.find((post) => post.id === Number(postId));
    setCurrentPost(currPost);
  }, [postId, posts]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="single">
      <img
        src="https://i1.wp.com/alovelettertofood.com/wp-content/uploads/2019/01/e12e2e3948f722d05888a76a8100d642.gif"
        alt=""
      />
      {currentPost ? (
        <div>
          {isEditing ? (
            <>
              {/* Input fields for editing the post */}
              <input
                type="text"
                defaultValue={currentPost.title}
                onChange={(e) =>
                  setCurrentPost({ ...currentPost, title: e.target.value })
                }
              />
              <textarea
                defaultValue={currentPost.coverText}
                onChange={(e) =>
                  setCurrentPost({ ...currentPost, coverText: e.target.value })
                }
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <h2>{currentPost.title}</h2>
              <p>{currentPost.coverText}</p>
              <p>{currentPost.author.firstName}</p>
              <p>{currentPost.author.lastName}</p>
              <button onClick={handleEdit}>Modifier</button>
            </>
          )}
        </div>
      ) : (
        <div>
          <h2>erreur</h2>
          <Link to="/articles">Retour</Link>
        </div>
      )}
    </div>
  );
}
