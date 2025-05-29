import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({
  output: 'export',        // 정적 사이트 유지
  images: {                // next/image - export 충돌 해소
    unoptimized: true
  }
})
