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
      <button type="button" onClick={() => onToggleFavorite(slug)}>
        <FavoriteHeart width={44} fill={isFavorite ? "red" : "black"} />
      </button>
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

// const StyledFavoriteHeart = styled(FavoriteHeart)`
//   position: absolute;
//   left: 240px;
//   top: -270px;
//   z-index: 2;
//   fill: white;
//   stroke: black;
//   cursor: pointer;
// `;
