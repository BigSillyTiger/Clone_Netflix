import styled from "styled-components";

const StyledBannerButton = styled.button`
    cusor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0.5rem 2rem;
    margin-right: 1rem;
    background-color: rgba(51, 51, 51, 0.5);

    :hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`;

export default StyledBannerButton;
