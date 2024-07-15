import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  //Toggle Button für ArtPieces Page
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState([], {
    defaultValue: [],
  });

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    );
    console.log(artPiece, artPiecesInfo, slug);
    if (artPiece) {
      console.log("test");
      setArtPiecesInfo(
        [...artPiecesInfo].map((piece) =>
          piece.slug === slug
            ? { isFavorite: !piece.isFavorite, slug: piece.slug }
            : piece
        )
      );
    } else {
      console.log("2");
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

  function handleSubmitComment(event) {
    console.log("caled!");
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setArtPiecesInfo([...artPiecesInfo, { ...data, id: uid() }]);
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
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
          onSubmitComment={handleSubmitComment}
        />
      </Layout>
    </>
  );
}
