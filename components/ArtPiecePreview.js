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
    <ArtBody>
      <ArtCard>
        <StyledListItem>
          <FavoriteButton
            onToggleFavorite={() => onToggleFavorite(slug)}
            isFavorite={isFavorite}
            slug={slug}
          />
          <Link href={`/art-pieces/${slug}`}>
            <Image src={image} alt={title} width={300} height={300} />
          </Link>
        </StyledListItem>
        <p>{`"${title}" by ${artist}`}</p>
      </ArtCard>
    </ArtBody>
  );
}

const ArtBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtCard = styled.div`
  margin: 1rem;
  padding: 1rem;
  width: 50%;
  border-radius: 10px;
  box-shadow: 3px 3px, -3px -3px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 300px;
`;

const StyledListItem = styled.li`
  list-style: none;
  display: inline;
`;
