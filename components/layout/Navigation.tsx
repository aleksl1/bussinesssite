import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  margin-top: 4rem;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    li {
      flex-basis: 100%;
      text-align: center;
      padding: 0.6rem 0;
      a {
        font-size: 1.5rem;
      }
    }
  }
`;

function Navigation() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link href="/features">
            <a>Features</a>
          </Link>
        </li>
        <li>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/resources">
            <a>Resources</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/jobs">
            <a>Jobs</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Navigation;
