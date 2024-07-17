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
  margin: 1rem 0;
  padding: 1rem 0;
  width: 50%;
  border-radius: 10px;
  box-shadow: 3px 3px, -3px -3px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledListItem = styled.li`
  list-style: none;
  display: inline;
`;
