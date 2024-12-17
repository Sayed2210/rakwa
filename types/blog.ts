import type BlogCategory from "~/types/blog_category";
import type Tag from "~/types/tags";

export default interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    updated_at: string;
    category: BlogCategory;
    tags: Tag[]
    slug: string;
    metaTitle: string;
    metaDescription: string;
    author: string;
    comments: number;
    content: string;
    views: number;
    likes: number;
    dislikes: number;

}