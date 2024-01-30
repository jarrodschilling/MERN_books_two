import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Display from "../components/Display";
import axios from 'axios';

const Home = (props) => {

    return(
        <div>
            <h1>Books</h1>
            <Link to="/create">Add New Book</Link>
            <Display />
        </div>
    )
}

export default Home