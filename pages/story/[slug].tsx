import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../data/client";
import GetStories from "../../data/GetStories";
import GetStory from "../../data/GetStory";
import IStory from "../../types/Story";

const Story: NextPage<{ story: IStory }> = ({ story }) => {
  return <div>{story.title}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.request(GetStories);

  return {
    paths: data.stories.map((story: IStory) => ({
      params: { slug: story.slug }
    })),
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  if (!slug) {
    return {
      notFound: true
    };
  }

  const data = await client.request(GetStory, {
    slug
  });
  const { story } = data as { story: IStory };

  // Handle event slugs which don't exist in our CMS
  if (!story) {
    return {
      notFound: true
    };
  }

  // Provide Props to the Page Component
  return {
    props: { story },
    revalidate: 60 * 60 // Cache response for 1 hour (60 seconds * 60 minutes)
  };
};

export default Story;
