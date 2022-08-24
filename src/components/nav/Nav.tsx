import React, { useEffect, useState } from "react";
import StyledNav from "./styled/Nav.styled";
import StyledLogo from "./styled/Logo.styled";

import { logo1, logo2 } from "../../config/request";

const Nav = () => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const handleNavBar = () => {
            window.scrollY > 100 ? setShow(true) : setShow(false);
        };
        window.addEventListener("scroll", handleNavBar, false);
        return () => window.removeEventListener("scroll", handleNavBar, false);
    });
    return (
        <StyledNav $show={show}>
            <StyledLogo {...logo1} />
            <StyledLogo {...logo2} avatar />
        </StyledNav>
    );
};

export default Nav;
