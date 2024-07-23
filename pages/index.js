import ArtPiecePreview from "@/components/ArtPiecePreview";
import Image from "next/image";
import styled from "styled-components";

export default function SpotlightPage({ pieces }) {
  const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h2>SPOTLIGHT</h2>
      <SpotlightBody>
        <SpotlightCard>
          <ul>
            <Image
              src={randomPicture.imageSource}
              alt={randomPicture.name}
              height={300}
              width={300}
            />
          </ul>
          <p>{`"${randomPicture.name}" by ${randomPicture.artist}`}</p>
        </SpotlightCard>
      </SpotlightBody>
    </>
  );
}

const SpotlightBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpotlightCard = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
  width: 50%;
  border-radius: 10px;
  box-shadow: 3px 3px, -3px -3px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
