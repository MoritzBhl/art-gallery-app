import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";

export default function ArtPieceDetails({
  onToggleFavorite,
  pieces,
  onCommentForm,
  artPiecesInfo,
  comments,
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
        Comments:
        {comments.map((comment) => (
          <List key={comment.id}>{comment.comment}</List>
        ))}
      </ul>
      <Form onSubmit={onCommentForm}>
        <label htmlFor="comment"></label>
        <Textarea
          id="comment"
          name="comment"
          className="comment"
          type="text"
          placeholder=" Add comment"
        ></Textarea>
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
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

const List = styled.li`
  list-style: none;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 3px 3px gray;
  width: 90%;
  padding: 1rem;
  margin: 10px 0;
`;

const Form = styled.form`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  width: 30%;
  height: 3vh;
  border-radius: 5px;
  border: 1px solid black;
  background-color: orange;
  cursor: pointer;
`;
