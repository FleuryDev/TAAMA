import { CommentInterface } from '../interfaces/CommentInterface';
import { UserInterface } from '../interfaces/UserInterface';

export default class Comment implements CommentInterface {
    updated_at: Date | null;
    children: CommentInterface[] | null;
    id: number;
    content: string | null | any;
    user: UserInterface;
    created_at: Date | null;
    constructor() {

    }

    public get getContent(): string | null | any {
        return this.content;
    }
    public set setContent(value: string | null | any) {
        this.content = value;
    }
    public get getCreated_at(): Date | null {
        return this.created_at;
    }
    public set setCreated_at(value: Date | null) {
        this.created_at = value;
    }


}