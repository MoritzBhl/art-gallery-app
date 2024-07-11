import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function Slug({ pieces }) {
  const { imageSource: image, name: title, artist, year, genre } = pieces;

  return <ArtPieceDetails pieces={pieces} />;
}
