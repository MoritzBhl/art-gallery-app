import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { uid } from "uid";

export default function ArtPieceDetails({ pieces }) {
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

  const { artist, genre, imageSource: image, name: title, year } = art;

  return (
    <>
      <Link href="/art-pieces">Back to Art Pieces</Link>
      <br></br>
      <div>
        <Image src={image} alt={title} width={300} height={300}></Image>
        <p>{`${artist}: ${title}, ${genre}, ${year}`}</p>
      </div>
      <ul>
        Comments:
        {comments.map((comment) => (
          <li key={comment.id}>{comment.comment}</li>
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
        <Button type="submit">Send</Button>
      </Form>
    </>
  );
}

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

const Button = styled.button`
  width: 30%;
  height: 3vh;
  border-radius: 5px;
  border: 1px solid black;
  background-color: orange;
  cursor: pointer;
`;
