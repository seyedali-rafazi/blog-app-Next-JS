import { Suspense } from "react";
import PostList from "../_components/PostList";
import Loading from "../loading";

// how to revalidate time-based
// this is dynamic page
// export const dynamic = "force-dynamic"
export const revalidate = 10;
// i use in fetch request

async function BlogListPage() {
  return (
    <div>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam
        architecto ducimus doloribus modi illum porro maiores iusto, corporis
        quia, repellendus blanditiis reiciendis molestiae laudantium ad omnis
        adipisci voluptate ut, vero debitis asperiores? Inventore iure
        exercitationem debitis rem nulla amet nemo repellendus delectus minima
        molestias, eius natus aliquid aut accusantium similique saepe? Omnis,
        soluta voluptas blanditiis odio iusto consequatur quod dolorum
        aspernatur natus, placeat nisi voluptatem! Distinctio totam nostrum eum
        voluptatum pariatur, soluta nobis obcaecati! Eaque cumque obcaecati
        ullam blanditiis labore perferendis unde laboriosam reiciendis vel
        tempore sapiente modi totam tempora suscipit illum sunt minus velit qui,
        amet aut ratione.
      </h1>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogListPage;
