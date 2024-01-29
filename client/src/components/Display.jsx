import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Display = (props) => {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/books")
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])


    return(
        <div>
            {
                books.map((book, index) => (
                    <div key={index}>
                        {/* <p>Title: {book.bookTitle} {book._id}</p> */}
                        <Link to={`/books/${book._id}/details`}>Title:{book.bookTitle}</Link>
                        <p>Author:{book.bookAuthor}</p>
                        <p>Pages:{book.bookPages}</p>
                        <p>Available:
                        {
                            book.isAvailable? "Yes": "No"
                        }
                        </p>
                        <button>Delete</button>
                    </div>
                )
            )}
        </div>
    )
}

export default Display