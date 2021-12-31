import Head from "next/head";

const posts = [
  {
    title: "React Testing",
    excerpt: "This is a test",
  },
  {
    title: "React Testing 2",
    excerpt: "This is a test 2",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Turnusgutta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
    </div>
  );
}
