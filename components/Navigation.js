import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <NavBar>
      <NavList>
        <ListItem>
          <StyledLink $isActive={"/"} href="/">
            Spotlight
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink $isActive href="/art-pieces">
            Art Pieces
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink $isActive href="/favorites">
            Favorites
          </StyledLink>
        </ListItem>
      </NavList>
    </NavBar>
  );
}

const NavBar = styled.nav`
  width: 100%;
  height: 7%;
  position: fixed;
  bottom: 0;
  display: flex;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ListItem = styled.li`
  list-style: none;
  width: 100%;
  border: 1px solid black;
  &:hover {
    background-color: lightsalmon;
  }
  background-color: ${({ $isActive }) => ($isActive ? "blue" : "lightgray")};
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
