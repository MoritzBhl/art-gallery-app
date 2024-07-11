import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <StyledListItem>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={300} height={300} />
      </Link>
      <p>{`"${title}" by ${artist}`}</p>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  list-style: none;
`;
