// src/app/(posts)/[slug]/page.tsx
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import MdxRenderer from '@/components/MdxRenderer'

export function generateStaticParams() {
    return allPosts.map(p => ({
        slug: p._raw.flattenedPath.split('/').pop(), // 'first-post'
    }))
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params                // Promise 해제 필수! 
    const post = allPosts.find(
        p => p._raw.flattenedPath.split('/').pop() === slug,
    )
    if (!post) notFound()

    return (
        <article className="prose dark:prose-invert mx-auto my-10">
            <h1>{post.title}</h1>
            <p className="text-sm opacity-60">{post.date}</p>

            {/* ⬇️  클라이언트 컴포넌트로 MDX 렌더 */}
            <MdxRenderer code={post.body.code} />
        </article>
    )
}
