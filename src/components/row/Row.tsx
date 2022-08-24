import React, { FC, useState, useEffect } from "react";
import axios from "../../config/axios";
import { img_url } from "../../config/request";

import StyledPost from "./styled/Poster.styled";
import StyledPostContainer from "./styled/PContainer.styled";
import StyledRow from "./styled/row.styled";

import { type_movie } from "../../config/ts_types";

type props_row = {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
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
        <StyledRow>
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
                            isLarge={Boolean(isLargeRow)}
                        />
                    );
                })}
            </StyledPostContainer>
        </StyledRow>
    );
};

export default Row;
