import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../components/Form";

const AddBook = (props) => {

    return(
        <div>
            <h1>Books</h1>
            <Form />
        </div>
    )
}

export default AddBook