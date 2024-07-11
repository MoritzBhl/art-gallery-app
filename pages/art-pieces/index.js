import ArtPiecePreview from "@/components/ArtPiecePreview";
import Image from "next/image";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      <h2>ART GALLERY</h2>
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
