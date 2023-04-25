// import { useState, useEffect } from 'react';
// import './App.css';
// import axios from 'axios';
// import Post from './components/Post/Post';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
//       setPosts(res.data);
//     });
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredPosts = posts.filter((post) =>
//     post.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="App">
//       <h1>My posts</h1>
//       <input type="text" placeholder="Recherche donc ton post" onChange={handleSearch} />
//       <button onClick={() => console.log('Search')}>Search</button>
//       {filteredPosts &&
//         filteredPosts.map((post) => {
//           return <Post title={post.title} body={post.body} />;
//         })}
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import Books from "./screens/Books";
import SingleBook from "./screens/SingleBook";
import Edit from "./screens/Edit";
import Add from "./screens/Add";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:postId" element={<SingleBook />} />
        <Route path="books/:postId/edit" element={<Edit />} />
        <Route path="books/add" element={<Add />} />
      </Routes>
    </div>
  );
}
