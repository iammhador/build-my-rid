import React from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import image1 from "../../assets/blog-img1.jpg";
import image2 from "../../assets/blog-img2.jpg";
import image3 from "../../assets/blog-img3.jpg";
import Image from "next/image";
import Link from "next/link";

const BlogInfo = [
  {
    title: "Choosing the Right PC Components",
    description:
      "Discover essential tips to consider before purchasing components for your PC build.",
    date: "March 1, 2023",
    image: image1,
  },
  {
    title: "Assembling Your PC: A Step-by-Step Guide",
    description:
      "Learn the necessary steps to build your own PC and avoid common pitfalls.",
    date: "July 31, 2023",
    image: image2,
  },
  {
    title: "Optimizing Your PC for Peak Performance",
    description:
      "Explore strategies to maintain and enhance the health of your PC over time.",
    date: "September 21, 2023",
    image: image3,
  },
];

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col md:flex-row justify-between mb-5">
        <h2 className="text-4xl font-semibold text-black mb-4 md:mb-0">
          Blog & Articles
        </h2>
        <Link href="/" className="text-base font-medium text-black">
          See more
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {BlogInfo.map((blogPost, index) => (
          <div
            key={index}
            className="max-w-xs md:max-w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg "
          >
            <Image
              src={blogPost.image}
              alt={`Blog-${index}`}
              width={400}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-black text-base mb-2">
                {blogPost.title}
              </div>
              <p className="text-gray-500 text-sm mb-2">
                {blogPost.description}
              </p>
              <p className="text-gray-500 text-xs">{blogPost.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
