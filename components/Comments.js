import styled from "styled-components";

export default function Comment({ artPiecesInfo }) {
  return (
    <ul>
      Comments:
      {artPiecesInfo.map((comment) => (
        <List key={comment.id}>
          {comment.comment} - {new Date().toLocaleString()}
        </List>
      ))}
    </ul>
  );
}

const List = styled.li`
  list-style: none;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 3px 3px gray;
  width: 90%;
  padding: 1rem;
  margin: 10px 0;
`;
