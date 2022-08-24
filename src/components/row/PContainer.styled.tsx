import styled from "styled-components";

const StyledPostContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 20px;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export default StyledPostContainer;
