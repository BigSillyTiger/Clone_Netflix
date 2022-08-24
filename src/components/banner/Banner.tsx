import React, { FC, useEffect, useState } from "react";
import axios from "../../config/axios";
import requests from "../../config/request";

import StyledBanner from "./styled/Banner.styled";
import StyledContent from "./styled/Content.styled";
import StyledButton from "./styled/Button.styled";
import StyledTitle from "./styled/Title.styled";

import { type_movie } from "../../config/ts_types";
import StyledDes from "./styled/Description.styled";
import StyledBottom from "./styled/Bottom.styled";

const Banner: FC = () => {
    const [movie, setMovie] = useState<type_movie>();
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        };
        fetchData();
    }, []);

    return (
        <>
            {movie ? (
                <StyledBanner bg_path={movie.backdrop_path}>
                    <StyledContent>
                        {/* title */}
                        <StyledTitle>
                            {movie.title || movie.name || movie.original_name}
                        </StyledTitle>
                        {/* div > 2 buttons */}
                        <div>
                            <StyledButton>Play</StyledButton>
                            <StyledButton>My List</StyledButton>
                        </div>
                        {/* description */}
                        <StyledDes>{movie.overview}</StyledDes>
                    </StyledContent>
                    <StyledBottom />
                </StyledBanner>
            ) : null}
        </>
    );
};

export default Banner;
