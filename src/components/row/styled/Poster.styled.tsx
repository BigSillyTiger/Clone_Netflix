import styled from "styled-components";

interface styleProps {
    isLarge: boolean;
}

const StyledPost = styled.img<styleProps>`
    obeject-fit: contain;
    width: 100%;
    margin-right: 10px;
    max-height: 100px;
    transition: transform 450ms;

    :hover {
        transform: scale(1.08);
    }

    ${({ isLarge }) =>
        isLarge &&
        `
        max-height: 250px;
    `}
`;

export default StyledPost;
