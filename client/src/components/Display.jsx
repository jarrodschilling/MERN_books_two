import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Display = (props) => {
    const [books, setBooks] = useState([]);
    // const navigate = useNavigate()

    const deleteHandler = (idForDeletion) => {
        axios.delete(`http://localhost:8000/api/books/${idForDeletion}`)
            .then((res)=>{
                console.log(res.data)
                const filteredList = books.filter((book) => {
                    book._id !== idForDeletion
                })
                setBooks(filteredList)
            })
    }

    useEffect(()=> {
        axios.get("http://localhost:8000/api/books")
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [books])



    return(
        <div className="displayContainer">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => (
                            <tr key={index}>
                                <td><Link className="contLink" to={`/books/${book._id}/details`}>{book.bookTitle}</Link></td>
                                
                                <td>{book.bookAuthor}</td>
                                <td>{book.bookPages}</td>
                                <td>
                                {
                                    book.isAvailable? "Yes": "No"
                                }
                                </td>
                                <td><button onClick={(e)=>deleteHandler(book._id)}>Delete</button></td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Display