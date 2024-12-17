export default interface Replay {
    id: number;
    author: string;
    author_image: string;
    email: string;
    date: string;
    content: string;
    replies: Replay[]
}