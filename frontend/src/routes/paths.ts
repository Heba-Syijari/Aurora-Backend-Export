export const paths = {
  blog: "/blog",
  postDetails: (id: number, slug: string) => `/blog/${id}-${slug}`,
};
