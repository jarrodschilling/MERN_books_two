import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Form = (props) => {
    // const [bookState, setBookState] = useState({
    //     bookTitle: "",
    //     bookAuthor: "",
    //     bookPages: 0,
    //     isAvailable: false
    // })
    const [bookTitle, setBookTitle] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookPages, setBookPages] = useState(0)
    const [isAvailable, setIsAvailable] = useState(false)

    const navigate = useNavigate()

    // const handleChange = (e) => {
    //     let newValue = e.target.value

    //     setBookState((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: newValue
    //     }))
    // }

    const handleTitle = (e) => {
        setBookTitle(e.target.value)
    }

    const handleAuthor = (e) => {
        setBookAuthor(e.target.value)
    }
    const handlePages = (e) => {
        setBookPages(e.target.value)
    }
    const handleAvailable = (e) => {
        setIsAvailable(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/books/add", {
            bookTitle,
            bookAuthor,
            bookPages,
            isAvailable
        })
            .then(res => {
            console.log(res)
            console.log(res.data)
            navigate("/")
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return(
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label htmlFor="bookTitle">Title</label>
                <input type="text" name="bookTitle" id="bookTitle" value={bookTitle} onChange={handleTitle}/>
                <label htmlFor="bookAuthor">Author</label>
                <input type="text" name="bookAuthor" id="bookAuthor" value={bookAuthor} onChange={handleAuthor}/>
                <label htmlFor="bookPages">Page Count</label>
                <input type="number" name="bookPages" id="bookPages" value={bookPages} onChange={handlePages}/>
                <div className="available">
                    <label htmlFor="isAvailable">Is Available?     </label>
                    <input type="checkbox" name="isAvailable" id="isAvailable" checked={isAvailable} onChange={handleAvailable}/>
                </div>
                <button className="addBook">Add Book</button>
            </form>
        </div>
    )
}

export default Form