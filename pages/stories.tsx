import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { client } from "../data/client";
import GetHighlighted from "../data/GetHighlighted";
import GetStories from "../data/GetStories";
import routes from "../helpers/routes";
import IStory from "../types/Story";

const Stories: NextPage<{ stories: [IStory] }> = ({ stories }) => {
  return (
    <div>
      {stories.map((story) => (
        <Link key={story.id} href={routes.story(story.slug)}>
          {story.title}
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { stories }: { stories: [IStory] } = await client.request(GetStories);
  const { stories: highlighted }: { stories: [IStory] } = await client.request(
    GetHighlighted
  );

  // Provide Props to the Page Component
  return {
    props: { stories, highlighted },
    revalidate: 60 * 60 // Cache response for 1 hour (60 seconds * 60 minutes)
  };
};

export default Stories;
