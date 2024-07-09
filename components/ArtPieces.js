import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => {
          const { imageSource: image, name: title, artist, slug } = piece;
          return (
            <ArtPiecePreview
              key={slug}
              image={image}
              title={title}
              artist={artist}
            />
          );
        })}
      </ul>
    </>
  );
}
