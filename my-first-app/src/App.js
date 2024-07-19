import React from "react";
import { useEffect } from "react";
const API_URL = 'http://www.omdbapi.com?apikey=8ccf2cd1'
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.search);
    }
    useEffect(() => {
        searchMovies('spiderman');  
    }, []);
    return(
        <h1>Hello! World</h1>
    );
};
export default App; 