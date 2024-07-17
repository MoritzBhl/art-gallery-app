import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import CommentForm from "./CommentForm";

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
  const comments = artPiecesInfo.find((piece) => piece.slug === slug)?.comments;

  const {
    artist,
    genre,
    imageSource: image,
    name: title,
    year,
    slug: artSlug,
  } = art;

  function handleSubmitComment() {}
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
      <CommentForm onSubmitComment={onSubmitComment} comments={comments} />
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
    color: lightsalmon;
  }
`;
