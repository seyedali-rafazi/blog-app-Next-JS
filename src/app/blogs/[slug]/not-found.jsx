import Link from "next/link";

function NotFound() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <p className="text-xl font-bold text-red-600 mb-8">
            هیچ پستی با این مشخصلات یافت نشد !
          </p>
          <Link href="/blogs" className="text-secondary-700">رفتن به صفحه پست ها؟</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
