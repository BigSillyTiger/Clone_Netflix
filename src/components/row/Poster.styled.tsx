import styled from "styled-components";

const StyledPost = styled.img`
    obeject-fit: contain;
    width: 100%;
    margin-right: 10px;
    max-height: 100px;
    transition: transform 450ms;

    :hover {
        transform: scale(1.08);
    }
`;

export default StyledPost;
