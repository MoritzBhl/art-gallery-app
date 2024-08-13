import ArtPiecePreview from "@/components/ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      <Header>ART GALLERY</Header>
      <ul>
        {pieces.map(({ imageSource: image, name: title, artist, slug }) => {
          return (
            <ArtPiecePreview
              key={slug}
              image={image}
              title={title}
              artist={artist}
              slug={slug}
              onToggleFavorite={onToggleFavorite}
              isFavorite={
                artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite
              }
            ></ArtPiecePreview>
          );
        })}
      </ul>
    </>
  );
}

const Header = styled.h2`
  text-align: center;
`;
