import Link from "next/link";
import styled from "styled-components";

const StyledLogo = styled.div`
  margin: 0.5rem 0 0 2rem;

  a {
    color: black;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Link href="/">
        <a>clics.</a>
      </Link>
    </StyledLogo>
  );
};
export default Logo;
