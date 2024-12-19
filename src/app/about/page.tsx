import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  return (
    <div>
        <NavBar/>
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
            About Us
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Welcome to our blog! Here, we share insights, stories, and ideas that inspire, inform, and spark conversations. Our mission is to provide valuable content that caters to your interests and keeps you coming back for more.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Whether you are here for tech tips, personal growth advice, or creative inspiration, our team of passionate writers is committed to delivering quality articles tailored just for you.
          </p>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Vision</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Our vision is to build a community of curious minds and thoughtful readers who thrive on sharing knowledge and ideas. We aim to create a platform that fosters connection, learning, and growth.
          </p>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We would love to hear from you! Feel free to reach out through our contact page or connect with us on social media to share your thoughts, feedback, or suggestions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:from-purple-600 hover:to-red-600 duration-300 py-2 px-4 rounded-full shadow-lg transform transition hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-red-600 duration-300 py-2 px-4 transform transition hover:scale-105"
            >
              Follow Us
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
