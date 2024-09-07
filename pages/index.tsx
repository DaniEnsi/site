import Intro from "../components/Home/Intro";
import Resume from "../components/Home/Resume";
import Writing from "../components/Home/Writing";
import { Main } from "../components/Layouts";
import { SEO } from "../components/SEO";
import NowReading from "../components/Home/NowReading";
import { useEffect } from "react";
import NowPlaying from "../components/Home/NowPlaying";
import Posts from "../components/Home/Posts";
import { serialize } from "next-mdx-remote/serialize";
import { posts } from "../constants";
import { useState } from 'react';
import { fetchLastFmStatus, LastFmStatus } from '../lib/lastfm';
import { fetchLiteralBooks, LiteralBook } from '../lib/literal';
import { siteSettings } from "../constants";


export default function HomePage() {
  const [lastFmStatus, setLastFmStatus] = useState<LastFmStatus | null>(null);
  const [literalBooks, setLiteralBooks] = useState<LiteralBook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [status, books] = await Promise.all([
        fetchLastFmStatus(),
        fetchLiteralBooks(),
      ]);
      setLastFmStatus(status);
      setLiteralBooks(books);
      setLoading(false);
    }
    fetchData();
  }, []);
  

  const data = {
    siteSettings: {
      siteTitle: siteSettings.siteTitle,
      metaDescription: siteSettings.siteDescription
    },
        posts: [
      // get from constants.ts and only the properties needed
      ...posts.slice(0, 3).map(({ title, slug, publishedDate, metaDescription }) => ({
        title,
        description: metaDescription,
        date: publishedDate,
        slug,
      }))
    ]
  };


  return (
    <>
      <SEO
        seo={{
          title: data.siteSettings.siteTitle,
          description: data.siteSettings.metaDescription,
          path: "/",
        }}
      />
      <Main>
        <Intro />
        <Resume />
        <Posts posts={data.posts} />
        {/* <Writing /> */}
        <NowPlaying lastFmStatus={lastFmStatus} loading={loading} />
        <NowReading books={literalBooks} loading={loading} />
      </Main>
    </>
  );
}