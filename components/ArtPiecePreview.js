import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

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
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(slug)}
        isFavorite={isFavorite}
        slug={slug}
      />
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
`;
