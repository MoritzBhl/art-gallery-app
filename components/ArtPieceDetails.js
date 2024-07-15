import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import CommentForm from "./CommentForm";
import { uid } from "uid";
import { useId } from "react";

export default function ArtPieceDetails({
  onToggleFavorite,
  pieces,
  onSubmitComment,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const artIndex = pieces.findIndex(({ slug: artSlug }) => artSlug === slug);
  const art = pieces[artIndex];

  const {
    artist,
    genre,
    imageSource: image,
    name: title,
    year,
    slug: artSlug,
    colors,
  } = art;

  return (
    <>
      <div>
        <StyledLink href="/art-pieces">Back to Art Pieces</StyledLink>
        <br></br>
        <FavoriteButton
          onToggleFavorite={() => onToggleFavorite(artSlug)}
          isFavorite={
            artPiecesInfo.find((piece) => piece.slug === artSlug)?.isFavorite
          }
          slug={artSlug}
        />
        <Image src={image} alt={title} width={300} height={300}></Image>
        <p>{`${artist}: ${title}, ${genre}, ${year}`}</p>
      </div>
      <ul>
        This art consists of the following colors:
        {colors.map((color) => (
          <List key={uid()}>
            {color}
            <Square style={{ backgroundColor: color }}></Square>
          </List>
        ))}
      </ul>
      <CommentForm
        onSubmitComment={onSubmitComment}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}

const List = styled.li`
  list-style: none;
  margin: 1rem 0;
`;

const Square = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
    color: lightsalmon;
  }
`;
