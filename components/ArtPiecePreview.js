import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteHeart from "/public/assets/heart.svg";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <StyledListItem>
      <FavoriteButton type="button" onClick={() => onToggleFavorite(slug)}>
        <StyledFavoriteHeart width={44} fill={isFavorite ? "red" : "black"} />
      </FavoriteButton>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={300} height={300} />
      </Link>
      <p>{`"${title}" by ${artist}`}</p>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  list-style: none;
  position: relative;
  display: inline;
  z-index: 0;
`;

const FavoriteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  bottom: 252px;
  left: 294px;
  width: 44px;
  padding: 0;
  height: 44px;
`;

const StyledFavoriteHeart = styled(FavoriteHeart)`
  width: 100%;
  height: 100%;
`;
