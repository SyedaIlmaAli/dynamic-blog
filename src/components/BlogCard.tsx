import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    decription: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground?: boolean;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="relative overflow-hidden cursor-pointer rounded-lg shadow-md transition-transform duration-300 hover:scale-105 group">
      {/* Blog Image with Overlay */}
      <div className="relative h-56 w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          style={{ objectFit: "cover" }} // Optional inline style
          className="object-cover" // Keeps your existing class for Tailwind CSS
        />
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>

      {/* Blog Content */}
      <CardContent className="p-6 bg-white dark:bg-gray-900">
        <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {post.title}
        </CardTitle>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {post.decription}
        </p>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString()}
          </span>
          <Link
            href={`/posts/${post.id}`}
            className="inline-block bg-customPurple text-white px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-red-600 transform transition-all duration-300"
          >
            Read Now
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default BlogCard;
