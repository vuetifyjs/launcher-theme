import { defineStore } from "pinia";

interface State {
  articles: {
    img: string;
    altImg: string;
    title: string;
    slug: string;
    author: string;
    ago: string;
  }[];
}

export const useHomeStore = defineStore("home", {
  state: (): State => ({
    articles: [
      {
        img: "articles/article1a.png",
        altImg: "articles/article1b.png",
        title: "Upcoming Sci-FI Horror",
        slug: "alienware-area-51",
        author: "John Smith",
        ago: "6h ago",
      },
      {
        img: "articles/article2a.png",
        altImg: "articles/article2b.png",
        title: "10 Indie Games to Watch in 2019",
        slug: "alienware-area-52",
        author: "John Smith",
        ago: "12h ago",
      },
    ],
  }),
});
