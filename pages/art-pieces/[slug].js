import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function Slug({ pieces, onToggleFavorite, artPiecesInfo }) {
  console.log("Slug: ", pieces);

  return (
    <ArtPieceDetails
      pieces={pieces}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
