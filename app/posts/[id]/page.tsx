import Link from "next/link";
import { Post } from "@/app/components/PostCard";

type PageProps = {
  params: Promise<{ id: string }>;
};

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("호출실패");
  }
  const data: Post = await res.json();
  return data;
}

export default async function PostDetailPage({ params }: PageProps) {
  // 이동된 게시글 번호값 가져오기
  // await 썼을때
  const { id } = await params;
  const post = await getPost(id);
  // then 썼을때
  params.then((id1) => {
    getPost(id1.id).then((data) => {
      const post = data;
    });
  });

  return (
    <main className="max-w-[720px] mx-auto p-6">
      <Link href="/">목록으로 이동</Link>
      <h1 className="mb-3">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
      <div className="mt-5 text-xs">포스트 ID : {post.id}</div>
    </main>
  );
}
