import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import Story from "../components/Story";
import ShareMeta from "../components/ShareMeta";
import { client } from "../data/client";
import GetHighlighted from "../data/GetHighlighted";
import GetStories from "../data/GetStories";
import IStory from "../types/Story";
import Head from "next/head";

const Stories: NextPage<{ stories: [IStory]; highlighted: [IStory] }> = ({
  stories,
  highlighted
}) => {
  const [searchString, setSearch] = useState("");
  return (
    <>
      <ShareMeta title="Stories" />

      <section className="top-section">
        <div className="tilted-header">
          <h1 className="uppercase mb-4">Stories</h1>
        </div>
        <div className="mx-auto max-w-prose">
          {highlighted.map((story) => (
            <Story story={story} key={story.id} />
          ))}

          <div className="px-2 mt-4">
            <h5 className="mb-2">ALL STORIES</h5>
            <div
              className="
            border border-gray-700
            dark:border-gray-200
            rounded-lg
            flex
            items-center
            px-3
            py-2
            focus-within:ring-2 focus-within:ring-red-300
            dark:focus-within:ring-indigo-300
            mb-6
          "
            >
              <i className="bi bi-search mr-4"></i>
              <input
                type="text"
                placeholder="Search stories..."
                className="flex-grow focus:outline-none"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-start">
            {filterStories(stories, searchString).map((story) => (
              <Story story={story} key={story.id} />
            ))}
          </div>
        </div>
      </section>
    </>
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

function filterStories(
  storiesArray: Array<IStory>,
  searchString: string
): Array<IStory> {
  if (!storiesArray) return [];
  return storiesArray.filter((story): Boolean => {
    return (
      story.title.toLowerCase().includes(searchString) ||
      story.description.toLowerCase().includes(searchString)
    );
  });
}

export default Stories;
