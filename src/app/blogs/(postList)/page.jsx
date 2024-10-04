import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import SetCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postService";

// how to revalidate time-based
// this is dynamic page
// export const dynamic = "force-dynamic"
// export const revalidate = 10;
// i use in fetch request

async function BlogListPage() {
  const cookieStore = cookies();
  const options = SetCookieOnReq(cookieStore);
  const posts = await getPosts(options);
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

export default BlogListPage;
