import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (Object.values(form).some(v => v === "")) {
      alert("Fill all fields");
      return;
    }

    dispatch(addBook({ ...form, id: Date.now() }));
    navigate("/books/all");
  };

  return (
    <div className="page">
      <h2>Add New Book</h2>

      <form onSubmit={submit}>
        <input placeholder="Title" onChange={(e)=>setForm({...form,title:e.target.value})} />
        <input placeholder="Author" onChange={(e)=>setForm({...form,author:e.target.value})} />
        <input placeholder="Category" onChange={(e)=>setForm({...form,category:e.target.value})} />
        <textarea placeholder="Description" onChange={(e)=>setForm({...form,description:e.target.value})} />
        <input placeholder="Rating" onChange={(e)=>setForm({...form,rating:e.target.value})} />
        <button>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
