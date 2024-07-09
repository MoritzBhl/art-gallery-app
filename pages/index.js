import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function SpotlightPage({ pieces }) {
  const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];
  return (
    <ul>
      <ArtPiecePreview
        image={randomPicture.imageSource}
        artist={randomPicture.artist}
        title={randomPicture.name}
      />
    </ul>
  );
}
