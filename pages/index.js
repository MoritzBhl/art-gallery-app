import ArtPiecePreview from "@/components/ArtPiecePreview";
import Image from "next/image";
import styled from "styled-components";

export default function SpotlightPage({ pieces }) {
  const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <Header>SPOTLIGHT</Header>
      <SpotlightBody>
        <SpotlightCard>
          <StyledUl>
            <Image
              src={randomPicture.imageSource}
              alt={randomPicture.name}
              height={300}
              width={300}
            />
          </StyledUl>
          <p>{`"${randomPicture.name}" by ${randomPicture.artist}`}</p>
        </SpotlightCard>
      </SpotlightBody>
    </>
  );
}

const Header = styled.h2`
  text-align: center;
`;

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
  min-width: 300px;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;
