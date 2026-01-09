// 클라이언트 컴포넌트 실행
"use client";

/**
 * 서버컴포넌트vs클라이언트 컴포넌트
 * 1.서버 컴포넌트
 * -DB 접근
 * -서버API호출
 * 2. 클라이언트 컴포넌트
 * - useState,useEffect 사용
 * - 이벤트 사용
 */

import { useMemo, useState } from "react";
import PostCard, { Post } from "@/app/components/PostCard";

type Props = {
  posts: Post[];
};

export default function PostSearchClient({ posts }: Props) {
  const [keyword, setKeyWord] = useState("");

  const filteredPosts = useMemo(() => {
    // 입력된 키워드 공백삭제, 소문자로 변경
    const newKeyword = keyword.trim().toLowerCase();
    // 키워드가 존재하지 않는다면 기존 값 출력
    if (!newKeyword) return posts;
    const newPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(newKeyword);
    });
    return newPosts;
  }, [keyword, posts]);
  // 1. 함수의 반환값
  // 2. 의존성 배열

  return (
    <section>
      <div className="my-4">
        <input
          type="text"
          className="rounded-lg border border-gray-300 w-full"
          placeholder="제목 검색"
          onChange={(e) => setKeyWord(e.target.value)}
        />
        <div className="mt-2 text-xs text-gray-500">
          결과 : {filteredPosts.length} / {posts.length}
        </div>
      </div>
      {/* 필터링된 포스트 출력부분 */}
      {filteredPosts.length === 0 ? (
        <p className="text-gray-400">검색 결과가 없습니다</p>
      ) : (
        filteredPosts.map((post) => <PostCard post={post} key={post.id} />)
      )}
    </section>
  );
}
