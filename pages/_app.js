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
    if (artPiece) {
      setArtPiecesInfo(
        [...artPiecesInfo].map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
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

  function handleSubmitComment(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commentData = Object.fromEntries(formData);

    const activeArtPiece = artPiecesInfo.find((piece) => piece.slug === slug);

    if (activeArtPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) => {
          if (piece.slug === activeArtPiece.slug) {
            return piece.comments
              ? {
                  ...piece,
                  comments: [
                    ...piece.comments,
                    {
                      ...commentData,
                      id: uid,
                      date: new Date().toLocaleString(),
                    },
                  ],
                }
              : {
                  ...piece,
                  comments: [
                    {
                      ...commentData,
                      id: uid,
                      date: new Date().toLocaleString(),
                    },
                  ],
                };
          } else {
            return piece;
          }
        })
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        {
          slug,
          isFavorite: false,
          comments: [
            { ...commentData, id: uid(), date: new Date().toLocaleString() },
          ],
        },
      ]);
    }

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
