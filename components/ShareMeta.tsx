import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

const ShareMeta: React.FC<Props> = ({
  title = "Drew Lytle",
  description = "My name's Drew. I'm a designer and software engineer who likes to make stuff on the internet. I make videos and write about things I'm learning.",
  image = "https://media.graphcms.com/output=format:jpg/resize=,width:400,height:400/Rxt3c6FaT4uTu7iYkkkC"
}) => {
  const router = useRouter() || {};
  const url = router.pathname || "";
  if (title != "Drew Lytle") {
    title.concat(" | Drew Lytle");
  }
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`https://www.drewis.cool${url}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={`https://www.drewis.cool${url}`} />
      <meta name="twitter:creator" content="@itsjustdrewit" />
      <meta name="twitter:site" content="@itsjustdrewit" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
      />
    </Head>
  );
};

export default ShareMeta;
