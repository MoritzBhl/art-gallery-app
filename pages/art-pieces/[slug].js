import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function Slug({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  comments,
  onCommentForm,
}) {
  return (
    <ArtPieceDetails
      onToggleFavorite={onToggleFavorite}
      pieces={pieces}
      onCommentForm={onCommentForm}
      artPiecesInfo={artPiecesInfo}
      comments={comments}
    />
  );
}
