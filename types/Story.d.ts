export default interface IStory {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  featuredImage: {
    url: string;
  };
  author: {
    name: string;
    bio: string;
    picture: {
      url: string;
    };
  };
}
