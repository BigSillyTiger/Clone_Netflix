import styled from "styled-components";

interface logoProps {
    src: string;
    alt: string;
    avatar?: boolean;
}

const SImg = styled.img``;

const StyledLogo = styled(SImg).attrs<logoProps>(({ src, alt }) => ({
    src,
    alt,
}))<logoProps>`
    ${({ avatar }) =>
        avatar
            ? `
            position: fixed;
            width: 30px;
            right: 20px;
        `
            : `
            position: fixed;
            left: 20px;
            width: 80px;`};
    object-fit: contain;
`;

export default StyledLogo;
