import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function Slug({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  onCommentForm,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const artIndex = pieces.findIndex(({ slug: artSlug }) => artSlug === slug);
  const art = pieces[artIndex];

  const {
    artist,
    genre,
    imageSource: image,
    name: title,
    year,
    slug: artSlug,
  } = art;

  const isFavorite = artPiecesInfo.find(
    (piece) => piece.slug === artSlug
  )?.isFavorite;
  console.log("ArtSlug: ", artSlug);
  console.log("artPiecesInfo: ", artPiecesInfo);

  return (
    <ArtPieceDetails
      artist={artist}
      genre={genre}
      image={image}
      title={title}
      year={year}
      artSlug={artSlug}
      onToggleFavorite={() => onToggleFavorite(artSlug)}
      isFavorite={
        artPiecesInfo.find((piece) => piece.slug === artSlug)?.isFavorite
      }
      onCommentForm={onCommentForm}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
