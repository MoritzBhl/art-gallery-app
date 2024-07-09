import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const URL = "https://example-apis.vercel.app/api/art";

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>ART GALLERY</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}
