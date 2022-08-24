import React, { FC, useState, useEffect } from "react";
import axios from "../../axios";
import { img_url } from "../../request";

import StyledPost from "./Poster.styled";
import StyledPostContainer from "./PContainer.styled";

type props_row = {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
};

type type_movie = {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

const Row: FC<props_row> = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState<type_movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        };

        fetchData();
    }, [fetchUrl]);

    //console.log(movies);
    // this feature works with Quokka extension
    //console.table(movies);

    return (
        <div>
            <h2>{title}</h2>
            <StyledPostContainer>
                {movies.map((movie) => {
                    return (
                        <StyledPost
                            key={movie.id}
                            src={`${img_url}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                    );
                })}
            </StyledPostContainer>
        </div>
    );
};

export default Row;
