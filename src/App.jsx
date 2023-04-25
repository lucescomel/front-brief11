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
