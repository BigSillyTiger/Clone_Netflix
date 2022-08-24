import styled from "styled-components";

interface navProps {
    $show: boolean;
}

const StyledNav = styled.div<navProps>`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    height: 30px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    transition: all 0.4s;

    ${({ $show }) => ($show ? `background-color: #111;` : ``)}
`;

export default StyledNav;
