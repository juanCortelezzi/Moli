import Head from "next/head";
import Card from "../components/card";
import products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Groceries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-6xl text-white my-4">Grocerys</h1>
      <div className="mb-4 mx-2 flex flex-col items-around content-start justify-center md:flex-row md:flex-wrap">
        {products.map((p) => {
          return <Card key={p.title} product_data={p} />;
        })}
      </div>
    </div>
  );
}
