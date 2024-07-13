import ArtPiecePreview from "@/components/ArtPiecePreview";
import Image from "next/image";

export default function SpotlightPage({ pieces }) {
  const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h2>SPOTLIGHT</h2>
      <ul>
        <Image
          src={randomPicture.imageSource}
          alt={randomPicture.name}
          width={300}
          height={300}
        />
        <p>{`"${randomPicture.name}" by ${randomPicture.artist}`}</p>
      </ul>
    </>
  );
}
