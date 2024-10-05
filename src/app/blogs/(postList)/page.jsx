import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import SetCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postService";
import queryString from "query-string";

// how to revalidate time-based
// this is dynamic page
// export const dynamic = "force-dynamic"
// export const revalidate = 10;
// i use in fetch request

export const dynamic = "force-dynamic";

async function BlogListPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = SetCookieOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);
  const { search } = searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : `نشان دادن ${posts.length}نتیجه برای `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}

      <PostList posts={posts} />
    </>
  );
}

export default BlogListPage;
