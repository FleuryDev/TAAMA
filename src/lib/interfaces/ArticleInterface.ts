import { CommentInterface } from './CommentInterface';

export default interface ArticleInterface {
    id: number,
    title: string,
    slug: string,
    content: string,
    comments: Array<CommentInterface>
    preview_image: string
    created_at: string,
}