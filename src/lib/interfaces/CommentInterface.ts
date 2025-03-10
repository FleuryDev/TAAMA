import { UserInterface } from './UserInterface';

export interface CommentInterface {
    id: number
    content: string | null | any,
    user: UserInterface
    created_at: Date | null,
    updated_at: Date | null,
    children: Array<CommentInterface> | null
}