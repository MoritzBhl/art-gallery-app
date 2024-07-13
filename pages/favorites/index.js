import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "@/components/FavoriteButton";

export default function Favorites({
  artPiecesInfo,
  pieces,
  onToggleFavorite,
  isFavorite,
}) {
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
                      <FavoriteButton
                        onToggleFavorite={() => onToggleFavorite(piece.slug)}
                        isFavorite={true}
                      />
                      <Image
                        src={piece.imageSource}
                        alt={piece.name}
                        width={300}
                        height={300}
                      ></Image>
                      <p>{`${piece.artist}: ${piece.name}`}</p>
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

const List = styled.li`
  list-style: none;
`;
