import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id == id);

  if (!book) {
    return <div className="page"><h2>Book not found</h2></div>;
  }

  return (
    <div className="page">
      <div className="details-container">
        {/* LEFT SECTION */}
        <div className="details-left">
          <div className="book-cover">
            📘
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="details-right">
          <h1>{book.title}</h1>
          <p className="author">by {book.author}</p>

          <div className="meta">
            <span>⭐ {book.rating}</span>
            <span>📄 {book.pages} pages</span>
            <span>📅 {book.publishedYear}</span>
          </div>

          <p className="description">{book.description}</p>

          <h3>Book Information</h3>
          <ul className="info-list">
            <li><strong>Category:</strong> {book.category}</li>
            <li><strong>Language:</strong> {book.language}</li>
            <li><strong>Publisher:</strong> {book.publisher}</li>
            <li><strong>ISBN:</strong> {book.isbn}</li>
          </ul>

          <h3>Key Highlights</h3>
          <ul className="highlights">
            {book.summaryPoints.map((point, index) => (
              <li key={index}>✔ {point}</li>
            ))}
          </ul>

          <Link to="/books/all" className="back-btn">
            ← Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
