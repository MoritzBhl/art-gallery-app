import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "@/components/FavoriteButton";
import { Fragment } from "react";

export default function Favorites({ artPiecesInfo, pieces, onToggleFavorite }) {
  console.log("artPieceInfo: ", artPiecesInfo);
  console.log("pieces: ", pieces);

  return (
    <>
      <Header>Favorites</Header>
      <ul>
        {artPiecesInfo.map((artPiece) => (
          <List key={artPiece.slug}>
            {artPiece.isFavorite
              ? pieces.map((piece) =>
                  piece.slug === artPiece.slug ? (
                    <Fragment key={piece.slug}>
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
                    </Fragment>
                  ) : null
                )
              : null}
          </List>
        ))}
      </ul>
    </>
  );
}

const Header = styled.h2`
  text-align: center;
`;

const FavoriteBodyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FavoriteCard = styled.div`
  margin: 1rem;
  padding: 1rem;
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
