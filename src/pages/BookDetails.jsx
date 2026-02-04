import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id == id);

  if (!book) return <p>Book not found</p>;

  return (
    <div className="page">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>

      <Link to="/books/all">⬅ Back</Link>
    </div>
  );
}

export default BookDetails;
