import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BookDetails = (props) => {
    const [book, setBook] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            console.log(res.data);
            setBook(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id])

    return(
        <div>
            <h1>{book.bookTitle}</h1>
            <h2>{book.bookAuthor}</h2>
            <p>Pages: {book.bookPages}</p>
            <p>Available:</p>
            {
                book.isAvailable? "yes": "no"
            }
        </div>
    )
}

export default BookDetails