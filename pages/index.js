import { FeaturedPosts } from "../sections/index";
//Import components
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

//Export home page
export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-4">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data and sorting it
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  posts.sort((a, b) => (a.position > b.position ? 1 : -1));
  return {
    props: { posts },
  };
}
