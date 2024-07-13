import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  //Toggle Button für ArtPieces Page
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const [comments, setComments] = useState([]);

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    );
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) =>
          piece.slug === slug
            ? { isFavorite: !piece.isFavorite, slug: piece.slug }
            : piece
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  //Art-Data fetched from API
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const URL = "https://example-apis.vercel.app/api/art";

  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  //DetailsPage Form

  function handleCommentForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setComments([...comments, { ...data, id: uid() }]);
    event.target.reset();
    event.target.elements.comment.focus();
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={pieces}
          comments={comments}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
          onCommentForm={handleCommentForm}
        />
      </Layout>
    </>
  );
}
