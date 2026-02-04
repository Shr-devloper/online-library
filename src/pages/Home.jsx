import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books);

  return (
    <div className="page">
      <h1>Welcome to Online Library</h1>

      <h3>Categories</h3>
      <Link to="/books/sci-fi">Sci-Fi</Link> |{" "}
      <Link to="/books/non-fiction">Non-Fiction</Link> |{" "}
      <Link to="/books/all">All</Link>

      <h3 style={{ marginTop: "20px" }}>Popular Books</h3>

      <div className="book-grid">
        {books.slice(0, 4).map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}

export default Home;
