import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthorCard = () => {
  const socialMedia = [
    { platform: "Twitter", href: "https://x.com/syedailmaali" },
    { platform: "Linkedin", href: "https://www.linkedin.com/in/syeda-ilma-zaidi-279b9a248/" },
    { platform: "GitHub", href: "https://github.com/syedaIlmaAli/" },
  ];
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg rounded-lg p-8 mt-12 mx-auto max-w-4xl">
      {/* Author Info */}
      <div className="flex items-center space-x-6">
        <Image
          src="/images/profile.jpeg"
          alt="Author Image"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover border-4 border-purple-400 shadow-md"
        />
        <div>
          <h3 className="text-3xl font-bold text-gray-800">Ilma</h3>
          <p className="text-lg text-gray-600 italic">Web Developer | Blogger | Dreamer</p>
        </div>
      </div>

      {/* Introductory Text */}
      <p className="mt-6 text-gray-700 leading-relaxed text-justify text-lg">
        Hey there! I'm Ilma, a passionate web developer who loves creating beautiful and functional web experiences. 
        On this blog, I share my journey, tips, and ideas about technology, design, and creativity. 
        Thanks for stopping by—let's explore and learn together!
      </p>

      {/* Social Media Links */}
      <div className="mt-8">
        <p className="text-gray-600 font-medium text-lg">Connect with me:</p>
        <div className="mt-4 flex space-x-4">
          {socialMedia.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-block px-5 py-3 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              {item.platform}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
