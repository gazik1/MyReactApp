import { useMemo } from 'react';
export const useSortedPosts = (
  posts: {
    id: number;
    title: string;
    body: string;
  }[],
  sort: string
) => {
  const sortedPosts = useMemo(() => {

    if (sort) {
      // @ts-ignore
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = (
  posts: {
    id: number;
    title: string;
    body: string;
  }[],
  sort: string,
  query: string
) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
