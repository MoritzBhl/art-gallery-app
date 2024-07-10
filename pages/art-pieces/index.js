import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log("page art-pieces", pieces);
  return (
    <>
      <h2>ART GALLERY</h2>
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
