import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import CommentForm from "./CommentForm";
import { FaArrowLeftLong } from "react-icons/fa6";

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
    colors,
  } = art;

  const handleSubmit = (newComment) => {
    onSubmitComment(newComment);
  };

  return (
    <>
      <DetailBody>
        <StyledLink href="/art-pieces">
          <FaArrowLeftLong />
          Back to Art Pieces
        </StyledLink>
        <DetailCard>
          <FavoriteButton
            onToggleFavorite={() => onToggleFavorite(artSlug)}
            isFavorite={
              artPiecesInfo.find((piece) => piece.slug === artSlug)?.isFavorite
            }
            slug={artSlug}
          />
          <Image src={image} alt={title} width={300} height={300}></Image>
          <p>{`${artist}: ${title}, ${genre}, ${year}`}</p>
        </DetailCard>
      </DetailBody>
      <CommentForm onSubmitComment={onSubmitComment} comments={comments} />
    </>
  );
}

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const DetailCard = styled.div`
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;
