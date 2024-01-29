import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Display from "../components/Display";
import axios from 'axios';

const Home = (props) => {

    return(
        <div>
            <h1>Books</h1>
            <Display />
        </div>
    )
}

export default Home