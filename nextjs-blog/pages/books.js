import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({ books }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      {books.map((book) => (
    <li key={book.id}>
    {book.title} by {book.author}
  </li>
      ))}
 
  </section>

    </Layout>
  );
}


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/books');
    const books = await res.json();

  return {
    props: {
      books,
    },
  };
}
