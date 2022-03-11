import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { RichText } from "./RichText";

export default interface IStory {
  id: string;
  title: string;
  description: string;
  content: RichText;
  mdx: string;
  mdxContent: MDXRemoteSerializeResult;
  slug: string;
  videoUrl: string;
  highlighted: boolean;
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
