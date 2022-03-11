import { RichText } from "./RichText";

export default interface IStory {
  id: string;
  title: string;
  description: string;
  content: RichText;
  mdx: string;
  slug: string;
  videoUrl: string;
  featuredImage: {
    url: string;
  };
  publishedAt;
  author: {
    name: string;
    bio: string;
    picture: {
      url: string;
    };
  };
}
