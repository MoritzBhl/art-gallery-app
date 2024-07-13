import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function Slug({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  onSubmitComment,
}) {
  return (
    <ArtPieceDetails
      onToggleFavorite={onToggleFavorite}
      pieces={pieces}
      onSubmitComment={onSubmitComment}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
