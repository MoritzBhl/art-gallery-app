import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <ArtPiecePreview
        image={randomPicture.imageSource}
        artist={randomPicture.artist}
        title={randomPicture.name}
      />
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
