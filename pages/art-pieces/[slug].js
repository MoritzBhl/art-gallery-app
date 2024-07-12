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
    (piece) => piece.slug === slug
  )?.isFavorite;
  console.log(isFavorite);

  return (
    <ArtPieceDetails
      artist={artist}
      genre={genre}
      image={image}
      title={title}
      year={year}
      onToggleFavorite={() => onToggleFavorite(artSlug)}
      isFavorite={isFavorite}
      onCommentForm={onCommentForm}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
//Logik von ArtPieceDetails in slug und dann nach unten weiterreichen
