import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Layout>
        <main>{children}</main>
        <Navigation />
      </Layout>
    </>
  );
}
