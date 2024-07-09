import GlobalStyle from "../styles";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const URL = "https://example-apis.vercel.app/api/art";

  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <h1>ART GALLERY</h1>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
    </>
  );
}
