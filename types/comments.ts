import type Replay from "~/types/replies";

export default interface Comment {
    id: number;
    name: string;
    author: string;
    author_image: string;
    email: string;
    date: string;
    content: string;
    replies: Replay[];
}