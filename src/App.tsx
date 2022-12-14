import React from "react";

import "./App.css";
import requests from "./config/request";
import Row from "./components/row/Row";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import StyledApp from "./components/global/App.style";

const App = () => {
    return (
        <StyledApp>
            {/* Nav */}
            <Nav />
            {/* Banner */}
            <Banner />

            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </StyledApp>
    );
};

export default App;
