import React from "react";

const Feature = () => {
  return (
    <div>
      {/* Main Section with background and padding */}
      <section className="py-12 bg-gradient-to-r from-pink-500 to-purple-600 mb-40">
        {/* Main Title with fun hover effect */}
        <h2 className="text-center text-4xl font-extrabold md:text-5xl mx-10 lg:text-left text-white transform transition-all duration-500 ease-in-out hover:text-yellow-400 hover:scale-105 ">
          Syeda Ilma Zaidi: Exploring the Realms of Innovation with the Tech Insights Blog
        </h2>

        {/* Description paragraph */}
        <p className="text-center mt-4 text-sm sm:text-base text-white opacity-80 mx-4 md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Hi, I&apos;m Ilma, a passionate web developer and tech enthusiast, exploring the latest in web development, design, and technology trends. 
          With experience in building dynamic projects using tools like Next.js, TypeScript, and Tailwind CSS, I love sharing insights, tips, and tutorials to help others on their development journey. Join me as I document my learning, projects, and everything tech!
        </p>

        {/* Categories Section */}
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-center text-3xl font-bold text-yellow-400 mb-10 animate-fade-in-up">
            Explore Our Categories
          </h1>

          {/* Categories Grid with hover effects */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              "Artificial Intelligence",
              "HTML",
              "Virtual Reality",
              "Next.js",
              "Web Development",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 my-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer flex items-center justify-center text-white"
              >
                {/* Category Name */}
                <p className="font-semibold text-xl text-center">{category}</p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Description paragraph below categories */}
        <p className="text-sm md:text-base text-white opacity-75 mb-6 px-4 animate-fade-in-down delay-100 mt-10">
          In this blog, you&apos;ll find a variety of categories covering different aspects of the tech world. From web development, where I dive into the latest frameworks like Next.js and TypeScript, to UI/UX design, where I share tips for creating beautiful, user-friendly interfaces. I also cover the latest tech trends to keep you updated with innovations, as well as provide hands-on tutorials to help you build your skills. Additionally, I showcase my personal and collaborative projects, sharing the lessons and insights gained throughout the process. Whether you&apos;re a beginner or an experienced developer, there&apos;s something here for everyone to help you grow in your tech journey.
        </p>
      </section>
    </div>
  );
};

export default Feature;
