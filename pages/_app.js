import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  //Toggle Button für ArtPieces Page
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    {
      defaultValue: [],
    }
  );
  const router = useRouter();
  const { slug } = router.query;
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

  function handleSubmitComment(newComment) {
    console.log(newComment, slug);
    const currentArt = artPiecesInfo.find((p) => p.slug === slug);
    if (currentArt) {
      setArtPiecesInfo(
        artPiecesInfo.map((p) => {
          if (p.slug === slug) {
            return p.comments
              ? { ...p, comments: [...p.comments, newComment] }
              : { ...p, comments: [newComment] };
          } else {
            return p;
          }
        })
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [newComment] },
      ]);
    }
    /*
    setArtPiecesInfo([...artPiecesInfo, { ...data, id: uid() }]);
    */
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
