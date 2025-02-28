export default class ArticleModle {
    title: string;
    image: string;
    content: string;
    constructor(title: string, image: string, content: string) {
        this.title = title;
        this.image = image;
        this.content = content;
    }
}