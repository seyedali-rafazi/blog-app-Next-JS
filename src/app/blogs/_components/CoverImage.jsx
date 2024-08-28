import Image from "next/image";
import Link from "next/link";
import React from "react";

function CoverImage({ coverImageUrl, title, slug }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-md mb-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center hover:scale-110 transition-all duration-300"
        />
      </Link>
    </div>
  );
}

export default CoverImage;
