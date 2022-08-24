import styled from "styled-components";
import { img_url } from "../../../config/request";
import { type_movie } from "../../../config/ts_types";

interface styleProps {
    bg_path: string | undefined;
}

const StyledBanner = styled.header<styleProps>`
    color: white;
    object-fit: contain;
    height: 448px;

    background-size: "cover";
    background-image: ${(props) => `url(${img_url}${props.bg_path})`};
    background-position: "center center";
`;

export default StyledBanner;
