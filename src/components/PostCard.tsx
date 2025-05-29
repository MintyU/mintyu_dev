// src/components/PostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '.contentlayer/generated';   // alias 설정 전이면 .contentlayer 경로 사용

interface Props {
    post: Post;
}

export default function PostCard({ post }: Props) {
    const slug = post._raw.flattenedPath.split('/').pop(); // URL 슬러그

    return (
        <Link
            href={`/${slug}`}
            className="group block space-y-2 py-6"
        >
            {/* 썸네일 */}
            <div className="relative h-40 w-full overflow-hidden rounded-lg">
                <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover grayscale transition-all group-hover:scale-105 group-hover:grayscale-0"
                />
            </div>

            {/* 제목 */}
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {post.title}
            </h2>

            {/* 태그 */}
            <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                    <span
                        key={tag}
                        className="rounded-full bg-black/10 px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
