import ArtPiecePreview from "@/components/ArtPiecePreview";
import { useRouter } from "next/router";

export default function SpotlightPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  console.log(onToggleFavorite);
  const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];

  const router = useRouter();
  const { slug } = router.query;

  const isFavorite = artPiecesInfo.find(
    (piece) => piece.slug === slug
  )?.isFavorite;

  return (
    <>
      <h2>SPOTLIGHT</h2>
      <ul>
        <ArtPiecePreview
          image={randomPicture.imageSource}
          artist={randomPicture.artist}
          title={randomPicture.name}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        />
      </ul>
    </>
  );
}
