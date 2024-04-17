import Link from "next/link";
import React from "react";

function DynamicRoutes() {
  return (
    <div className="p-5">
      {`When you don't know the exact segment names ahead of time and want to
      create routes from dynamic data, you can use Dynamic Segments that are
      filled in at request time or prerendered at build time.`}
      <Link
        href="https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes"
        target="_blank"
        className="underline text-blue-900 font-bold"
      >
        Dynamic Route
      </Link>
      <div className="py-5 ">
        <Link href="/blog" className="underline">
          Blog
        </Link>
      </div>
    </div>
  );
}

export default DynamicRoutes;
