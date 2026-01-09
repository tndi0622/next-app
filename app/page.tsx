import PostCard, { Post } from "@/app/components/PostCard";
import PostSearchClient from "./components/PostSearchClient";
import Newsletter from "@/components/Newsletter";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("호출실패");
  }

  const data: Post[] = await res.json();
  return data;
}

export default async function Home() {
  const posts = await getPosts();
  const topPosts = posts.slice(0, 10);
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="mb-4 text-2xl font-bold">데모 뉴스레터 게시글</h1>
      <p className="mt-0 mb-6 text-gray-500">
        jsonPlaceHolder를 사용하여 post출력
      </p>
      {/* postcard컴포넌트 넣는 부분 */}

      <PostSearchClient posts={posts.slice(0, 20)} />

      <Newsletter />
    </main>
  );
}
