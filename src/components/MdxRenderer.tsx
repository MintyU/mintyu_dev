// src/components/MdxRenderer.tsx
'use client'                           // 🔸 클라이언트 컴포넌트 선언
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'

interface Props {
    code: string
    components?: MDXComponents          // h1·a 같은 커스텀 요소 주입 시
}

export default function MdxRenderer({ code, components }: Props) {
    const MDX = useMDXComponent(code)   // 이제 훅 오류 X
    return <MDX components={components} />
}
