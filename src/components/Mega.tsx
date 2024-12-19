import React from "react";
import BlogCard from "./BlogCard";

const Mega = () => {
  const posts = [
    {
      id: "1",
      title: "Top 10 Must-Know JavaScript Libraries for 2024",
      decription:
        "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",
      date: "2024/12/15",
      imageUrl: "/images/2.png",
    },
    {
      id: "2",
      title: "Freelancing as a Developer: Tips for Creating an Effective Profile",
      decription:
        "This blog offers key insights to showcase your skills, attract clients, and stand out in the freelance market.",
      date: "2024/12/15",
      imageUrl: "/images/1.png",
    },
    {
      id: "3",
      title: "Debugging Made Easy: Common Errors and Fixes in Next.js",
      decription:
        "This blog  offers quick solutions to common Next.js issues for smoother development.",
      date: "2024/12/15",
      imageUrl: "/images/3.png",
    },
    {
      id: "4",
      title: "Should You Learn TypeScript? A Coder's Guide for 2024",
      decription:
        "This blog explains the benefits of TypeScript and how it enhances JavaScript development for beginners.",
      date: "2024/12/15",
      imageUrl: "/images/4.png",
    },
    {
      id: "5",
      title: "Exploring Supabase: The Open-Source Firebase Alternative",
      decription:
        "This blog dives into Supabase's features, showcasing why it's a powerful choice for modern app development.",
      date: "2024/12/15",
      imageUrl: "/images/5.png",
    },
    {
      id: "6",
      title: "Top 5 Web Design Trends to Watch in 2024",
      decription:
        "This blog highlights emerging design styles and innovations shaping the future of web experiences.",
      date: "2024/12/15",
      imageUrl: "/images/6.png",
    },
    {
      id: "7",
      title: "The Art of Minimalistic UI: Design Tips and Tools",
      decription:
        "This blog  explores strategies and resources for creating clean, user-friendly interfaces.",
      date: "2024/12/15",
      imageUrl: "/images/7.png",
    },
    {
      id: "8",
      title: "10 Tailwind CSS Tricks You Probably Didn't Know",
      decription:
        "This blog uncovers lesser-known tips to boost your productivity and creativity with Tailwind CSS.",
      date: "2024/12/15",
      imageUrl: "/images/8.png",
    },
    {
      id: "9",
      title: "The Battle of Cloud Platforms: Netlify vs. Vercel vs. AWS",
      decription:
        "This blog compares features, performance, and use cases to help you choose the best platform for your projects.",
      date: "2024/12/15",
      imageUrl: "/images/9.png",
    },
    {
      id: "10",
      title: "Step-by-Step Guide to Deploying Your Next.js App on Vercel",
      decription:
        "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",
      date: "2024/12/15",
      imageUrl: "/images/10.png",
    },
    {
      id: "11",
      title: "How to Build a Portfolio Website That Stands Out",
      decription:
        "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",
      date: "2024/12/15",
      imageUrl: "/images/11.png",
    },
    {
      id: "12",
      title: "Participating in Hackathons: What I Learned in 24 Hours",
      decription:
        "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",
      date: "2024/12/15",
      imageUrl: "/images/12.png",
    },
    {
      id: "13",
      title: "Three.js Basics: Create Stunning 3D Experiences on the Web",
      decription:
        "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",
      date: "2024/12/15",
      imageUrl: "/images/13.png",
    },
    {
      id: "14",
      title: "A Developer's Guide to Setting Up Sentry for Error Tracking",
      decription:
        "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",
      date: "2024/12/15",
      imageUrl: "/images/14.png",
    },
    {
      id: "15",
      title: "How to Optimize React Apps for Performance",
      decription:
        "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",
      date: "2024/12/15",
      imageUrl: "/images/15.png",
    },
  ];
  return (
    <div className="my-12 px-6">
      {/* Section Header */}
      <h1 className="font-extrabold text-4xl text-center text-customPurple my-12">
        Exploring the World of Technology
      </h1>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`transform transition duration-300 hover:scale-105 fade-in ${
              index % 2 === 0 ? "even:bg-gray-50" : "odd:bg-white"
            }`}
          >
            <BlogCard
              post={post}
              isDarkBackground={index % 2 === 0} // Alternate background
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mega;
