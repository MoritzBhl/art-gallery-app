import styled from "styled-components";
import FavoriteHeart from "/public/assets/heart.svg";

export default function FavoriteButton({ onToggleFavorite, isFavorite }) {
  return (
    <StyledFavoriteButton type="button" onClick={onToggleFavorite}>
      <StyledFavoriteHeart width={44} fill={isFavorite ? "red" : "black"} />
    </StyledFavoriteButton>
  );
}

const StyledFavoriteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 44px;
  padding: 0;
  height: 44px;
`;

const StyledFavoriteHeart = styled(FavoriteHeart)`
  width: 100%;
  height: 100%;
`;
