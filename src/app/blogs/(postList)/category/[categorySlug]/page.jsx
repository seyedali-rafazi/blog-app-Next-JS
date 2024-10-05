import { getPosts } from "@/services/postService";
import SetCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

async function category({ params, searchParams }) {
  const { categorySlug } = params;
  const queries =
    queryString.stringify(searchParams) + `&categorySlug=${categorySlug}`;
  const cookieStore = cookies();
  const options = SetCookieOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);

  return (
    <div>
      {posts.length == 0 ? (
        <p className="text-lg text-secondary-600">
          پستی با این دسته بندی پیدا نشد.
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default category;
