// src/app/page.tsx
import { allPosts } from '.contentlayer/generated'   // alias가 없을 땐 .contentlayer 경로
import PostCard from '@/components/PostCard'        // 앞서 만든 카드 컴포넌트

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  )

  return (
    <section className="mx-auto max-w-3xl space-y-8 px-4 py-8">
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </section>
  )
}
