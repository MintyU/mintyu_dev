import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        summary: { type: 'string', required: true },
        tags: { type: 'list', of: { type: 'string' }, required: true },
        thumbnail: { type: 'string', required: true },
    },
}))

export default makeSource({
    contentDirPath: 'src/content',
    documentTypes: [Post],
})
