import { Suspense } from "react";
import PostList from "./_components/PostList";
import Loading from "./loading";

async function BlogListPage() {
  return (
    <div>
      <h1>salam</h1>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogListPage;
