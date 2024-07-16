import styled from "styled-components";
import Comment from "./Comments";

export default function CommentForm({ onSubmitComment, comments }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    onSubmitComment(comment.value);
    event.target.reset();
  }

  return (
    <>
      {comments && <Comment comments={comments} />}
      <Form onSubmit={handleSubmit}>
        <label htmlFor="comment"></label>
        <Textarea
          id="comment"
          name="comment"
          className="comment"
          type="text"
          placeholder=" Add comment"
          minLength={5}
          maxLength={30}
        ></Textarea>
        <SubmitButton type="submit">Send</SubmitButton>
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

const SubmitButton = styled.button`
  width: 30%;
  height: 3vh;
  border-radius: 5px;
  border: 1px solid black;
  background-color: orange;
  cursor: pointer;
`;
