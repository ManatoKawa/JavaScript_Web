import Link from 'next/link';
import Head from 'next/head';
export default function FirstPost() {

  return (
    
    <>
    <Head>
        <title>First Post</title>
    </Head>

      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}