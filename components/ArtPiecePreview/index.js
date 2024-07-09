import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <StyledListItem>
      <Image src={image} alt="Art Picture" width={300} height={300} />
      <p>{`"${title}" by ${artist}`}</p>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  list-style: none;
`;
