import React, { FC, useState, useEffect } from "react";
import axios from "../../config/axios";
import YouTube from "react-youtube";
import { img_url } from "../../config/request";

import StyledPost from "./styled/Poster.styled";
import StyledPostContainer from "./styled/PContainer.styled";
import StyledRow from "./styled/row.styled";

import { type_movie } from "../../config/ts_types";

import { youtube_opt } from "../../config/config";
import movieTrailer from "movie-trailer";
//const movieTrailer = require("movie-trailer");

interface props_row {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

const Row: FC<props_row> = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState<type_movie[]>([]);
    const [trailerUrl, setTrailerUrl] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        };

        fetchData();
    }, [fetchUrl]);

    const hancleClick = (movie: type_movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            const name =
                movie.name ||
                movie.original_name ||
                movie.title ||
                //movie.original_title ||
                "";
            console.log("-> movie: ", movie);
            console.log("-> name: ", name);
            movieTrailer(name)
                .then((url: string) => {
                    console.log("-> url: ", url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    if (urlParams != null) {
                        setTrailerUrl(urlParams.get("v") as string);
                    }
                })
                .catch((err: any) => console.log("err: ", err));
        }
    };

    //console.log(movies);
    // this feature works with Quokka extension
    //console.table(movies);

    return (
        <StyledRow>
            <h2>{title}</h2>
            <StyledPostContainer>
                {movies.map((movie: type_movie) => {
                    return (
                        <StyledPost
                            key={movie.id}
                            src={`${img_url}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            onClick={() => {
                                hancleClick(movie);
                            }}
                            alt={movie.name}
                            isLarge={Boolean(isLargeRow)}
                        />
                    );
                })}
            </StyledPostContainer>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={youtube_opt} />}
        </StyledRow>
    );
};

export default Row;
