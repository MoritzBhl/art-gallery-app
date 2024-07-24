import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "@/components/FavoriteButton";

export default function Favorites({ artPiecesInfo, pieces, onToggleFavorite }) {
  console.log("artPieceInfo: ", artPiecesInfo);
  console.log("pieces: ", pieces);

  return (
    <>
      <h2>Favorites</h2>
      <ul>
        {artPiecesInfo.map((artPiece) => (
          <List key={artPiece.slug}>
            {artPiece.isFavorite
              ? pieces.map((piece) =>
                  piece.slug === artPiece.slug ? (
                    <>
                      <FavoriteBodyCard>
                        <FavoriteCard>
                          <FavoriteButton
                            onToggleFavorite={() =>
                              onToggleFavorite(piece.slug)
                            }
                            isFavorite={true}
                          />
                          <Image
                            src={piece.imageSource}
                            alt={piece.name}
                            width={300}
                            height={300}
                          ></Image>
                          <p>{`${piece.artist}: ${piece.name}`}</p>
                        </FavoriteCard>
                      </FavoriteBodyCard>
                    </>
                  ) : null
                )
              : null}
          </List>
        ))}
      </ul>
    </>
  );
}

const FavoriteBodyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FavoriteCard = styled.div`
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

const List = styled.li`
  list-style: none;
`;
