import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { uid } from "uid";
import FavoriteHeart from "/public/assets/heart.svg";

export default function ArtPieceDetails({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const [comments, setComments] = useState([]);

  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setComments([...comments, { ...data, id: uid() }]);
    event.target.reset();
    event.target.elements.comment.focus();
  }

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
    slug: cardSlug,
  } = art;

  const isFavorite = artPiecesInfo.find(
    (piece) => piece.slug === slug
  )?.isFavorite;

  return (
    <>
      <div>
        <FavoriteButton
          type="button"
          onClick={() => onToggleFavorite(cardSlug)}
        >
          <StyledFavoriteHeart width={44} fill={isFavorite ? "red" : "black"} />
        </FavoriteButton>
        <StyledLink href="/art-pieces">Back to Art Pieces</StyledLink>
        <br></br>
        <Image src={image} alt={title} width={300} height={300}></Image>
        <p>{`${artist}: ${title}, ${genre}, ${year}`}</p>
      </div>
      <ul>
        Comments:
        {comments.map((comment) => (
          <List key={comment.id}>{comment.comment}</List>
        ))}
      </ul>
      <Form onSubmit={handleForm}>
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

const FavoriteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  top: 50px;
  left: 250px;
  width: 44px;
  padding: 0;
  height: 44px;
`;

const StyledFavoriteHeart = styled(FavoriteHeart)`
  width: 100%;
  height: 100%;
`;

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
