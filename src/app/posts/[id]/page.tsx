import AuthorCard from "@/components/AuthorCard";
import CommentSection from "@/components/CommentSection";
import Image from "next/image";
import React from "react";

const posts = [
  {
    id: "1",
    title: "Top 10 Must-Know JavaScript Libraries for 2024",
    description:
      "As JavaScript continues to evolve, several libraries have emerged as essential tools for developers aiming to build robust, efficient, and scalable applications in 2024. One of the most prominent libraries is React.js, a front-end framework that allows for the creation of dynamic and responsive user interfaces. It simplifies the development of interactive web applications by utilizing a component-based architecture. Another must-know library is Vue.js, which has gained popularity for its simplicity and flexibility, making it a great choice for building modern single-page applications. Vue’s reactive data-binding system and clear documentation make it an ideal choice for developers who value ease of use without compromising functionality. For those interested in handling state management, Redux remains a go-to option in 2024, especially for large-scale applications. It offers a predictable state container for JavaScript apps, helping developers manage complex state logic with ease. On the other hand, Three.js is an indispensable library for 3D graphics and animations. Whether for games, visualizations, or immersive web experiences, Three.js provides an extensive set of tools for rendering 3D models directly in the browser. Additionally, D3.js remains a powerful choice for data-driven visualizations, allowing developers to create interactive and complex charts and graphs with minimal code. These libraries represent the forefront of JavaScript development, helping to streamline workflows, improve performance, and enhance the user experience in modern applications.",

    imageUrl: "/images/2.png",
  },
  {
    id: "2",
    title: "Freelancing as a Developer: Tips for Creating an Effective Profile",
    description:
      "Creating an effective freelancing profile as a developer is crucial to attracting potential clients and standing out in a competitive market. One of the first steps is to craft a compelling title that succinctly communicates your skills and expertise. Instead of using generic titles, such as 'Web Developer,' be specific about what you do, such as 'React.js Developer' or 'Full-Stack Developer.' This helps clients quickly understand your strengths and whether you can meet their needs. It's also important to include a strong summary or bio that highlights your experience, skills, and the types of projects you're most passionate about. Use this section to explain your unique value proposition, how you can solve client problems, and any previous successful projects you've worked on. In addition to a catchy title and bio, showcase your work with a portfolio. Clients want to see tangible examples of your capabilities, so include a mix of personal projects, freelance work, and any open-source contributions. Ensure that the projects you display reflect the skills and technologies you're focusing on, such as React, TypeScript, or Next.js. When adding your portfolio pieces, provide brief descriptions of the challenges you faced and how you solved them. This demonstrates your problem-solving abilities and gives clients an insight into your approach to development. Finally, request testimonials or reviews from previous clients to add social proof to your profile. Positive feedback from others can significantly boost your credibility and help establish trust with potential clients. Lastly, always keep your profile up to date and tailor it to the platform you're using. Whether on platforms like Upwork, Freelancer, or Contra, each site may have different requirements and expectations for profiles. By keeping your profile sharp, relevant, and aligned with your skills and goals, you increase your chances of landing high-quality freelance gigs.",

    imageUrl: "/images/1.png",
  },
  {
    id: "3",
    title: "Debugging Made Easy: Common Errors and Fixes in Next.js",
    description:
      "Debugging in Next.js can sometimes be challenging, especially for developers who are just starting with the framework. However, understanding common errors and their fixes can make the process much easier. One frequent issue in Next.js is the 'Module not found' error, often triggered when a module or dependency is missing or incorrectly imported. The fix for this error usually involves ensuring that the module is correctly installed using npm or yarn and that the import paths are correct. Additionally, this error might arise if there’s a mismatch between the package versions, so updating dependencies and ensuring compatibility can resolve the issue. Another common error is related to Server-Side Rendering (SSR), where a component tries to access browser-specific features (such as window or document) during server-side rendering. Since these objects are only available in the browser, attempting to use them on the server will result in an error. To fix this, developers can wrap the code that uses these objects inside a check to see if the code is running in the browser, like using typeof window !== 'undefined'. Lastly, the '404 Page Not Found' error in Next.js can sometimes be caused by incorrectly configured dynamic routes. Double-checking the structure of dynamic routes and ensuring that files are named correctly and are in the correct folder can resolve this issue. By understanding and addressing these common errors, developers can troubleshoot more effectively and build Next.js applications with fewer interruptions.",

    imageUrl: "/images/3.png",
  },
  {
    id: "4",
    title: "Should You Learn TypeScript? A Coder's Guide for 2024",
    description:
      "TypeScript is quickly becoming one of the most popular languages in the JavaScript ecosystem, offering significant advantages to developers looking to build scalable and maintainable applications. As a superset of JavaScript, TypeScript introduces static typing, allowing developers to define types for variables, function parameters, and return values. This feature catches errors early in the development process, making debugging easier and improving the overall reliability of the code. By adding type annotations, TypeScript enables better autocompletion, code navigation, and refactoring tools, ultimately enhancing the developer experience. For beginners, learning TypeScript can lead to more structured and predictable code. It encourages best practices such as clear type definitions, which makes it easier for teams to collaborate and for codebases to grow over time. Moreover, TypeScript integrates seamlessly with existing JavaScript code, allowing developers to gradually migrate from JavaScript to TypeScript without a complete rewrite. As the demand for TypeScript grows, mastering it can significantly enhance your career prospects, as it's widely used in modern frameworks like Angular, React, and Node.js. For anyone looking to take their JavaScript skills to the next level, TypeScript is definitely worth learning in 2024.",

    imageUrl: "/images/4.png",
  },
  {
    id: "5",
    title: "Exploring Supabase: The Open-Source Firebase Alternative",
    description:
      "Supabase has emerged as a powerful, open-source alternative to Firebase, offering a suite of tools that help developers quickly build and scale applications with backend services like authentication, databases, and storage. One of the key features of Supabase is its use of PostgreSQL as the database, which provides a robust, relational database solution that supports complex queries, joins, and advanced data operations. This makes Supabase an appealing choice for developers who prefer SQL databases over the NoSQL approach used by Firebase. Supabase also offers real-time capabilities, allowing developers to easily set up real-time subscriptions for database changes, making it an excellent choice for chat applications, live updates, or collaborative features. Supabase also offers a wide range of out-of-the-box features, including authentication and storage, making it a one-stop solution for building full-stack applications. The authentication system supports a variety of login methods, including email/password, OAuth with providers like Google and GitHub, and third-party integrations. Additionally, Supabase provides file storage and management with ease, enabling users to upload, manage, and serve files directly from the platform. This is particularly useful for applications that need to handle user-generated content, such as images or videos. With the added benefit of being open-source, Supabase allows developers to host it themselves if needed, providing greater flexibility and control over their infrastructure. Supabase's ease of use and flexibility have made it increasingly popular among developers, especially those building applications with modern frameworks like Next.js and React. It offers a simple and intuitive API, along with excellent documentation and a dashboard for managing projects, making it easy for both beginners and experienced developers to get started. Whether you are building a small project or scaling up to a large application, Supabase provides a comprehensive backend solution that is cost-effective, scalable, and developer-friendly, positioning itself as a strong contender in the backend-as-a-service space.",

    imageUrl: "/images/5.png",
  },
  {
    id: "6",
    title: "Top 5 Web Design Trends to Watch in 2024",
    description:
      "As we move into 2024, web design continues to evolve with new technologies, creative approaches, and user expectations. Here are the top 5 web design trends to watch for in 2024: Dark Mode and High-Contrast Designs Dark mode continues to be popular in 2024, as it not only enhances the user experience by reducing eye strain but also adds a sleek, modern aesthetic to websites. Web designers are embracing high-contrast color schemes, making text and buttons stand out more clearly against dark backgrounds. This design trend not only creates a visually appealing effect but also offers improved accessibility for users with visual impairments.3D and Immersive ExperiencesWith advancements in web technologies like WebGL and Three.js, 3D elements and immersive web experiences are becoming more common. Interactive 3D models, animations, and virtual reality elements are being integrated into websites to create engaging and dynamic interfaces. This trend is particularly popular in e-commerce, product design, and gaming websites, offering users a more engaging and interactive way to experience content.Minimalist and Simplified NavigationIn 2024, web design continues to embrace minimalism, focusing on clean layouts, simple typography, and intuitive navigation. Streamlined menus, hidden navigation bars, and easy-to-follow structures ensure users can find what they need without feeling overwhelmed. The goal is to create seamless experiences with fewer distractions, allowing users to focus on the most important content.AI-Powered PersonalizationArtificial intelligence is transforming web design by enabling more personalized experiences. Websites are using AI to analyze user data and deliver content that is tailored to individual preferences. This can include personalized recommendations, targeted messaging, and dynamic content that adjusts based on user behavior, all of which can improve engagement and conversion rates.Voice User Interface (VUI) IntegrationAs voice assistants like Siri, Alexa, and Google Assistant continue to gain popularity, more websites are integrating voice user interfaces (VUI). Voice search and voice-controlled navigation are expected to become more prevalent in 2024, allowing users to interact with websites through voice commands. This trend is especially useful for users on the go or those with disabilities, offering greater accessibility and convenience.These trends reflect a shift toward more immersive, accessible, and user-centric web experiences, and understanding them can help designers stay ahead of the curve in 2024.",

    imageUrl: "/images/6.png",
  },
  {
    id: "7",
    title: "The Art of Minimalistic UI: Design Tips and Tools",
    description:
      "Minimalistic UI design focuses on simplicity, clarity, and functionality, emphasizing essential elements while removing unnecessary distractions. To achieve this, designers should use ample white space, which creates a sense of balance and improves readability. Limiting the color palette to neutral tones with a few accent colors helps maintain a calm and clean aesthetic, while choosing simple, easy-to-read typography ensures legibility. Prioritizing functionality over decoration is key, with every design element serving a clear purpose to enhance user experience. Tools like Figma, Sketch, and Adobe XD are ideal for creating minimalistic UIs, as they offer powerful design and prototyping features with an emphasis on clean, simple layouts. Webflow is a great option for building minimalistic websites without code, and Canva can be useful for designing UI elements like icons and buttons. With the right tools and design principles, minimalistic UI can create intuitive and visually appealing user experiences.",

    imageUrl: "/images/7.png",
  },
  {
    id: "8",
    title: "10 Tailwind CSS Tricks You Probably Didn't Know",
    description:
      "Tailwind CSS offers several tricks that can enhance your workflow and streamline development. One useful feature is responsive variants, which allow you to apply different styles based on the screen size using classes like sm:, md:, and lg:. This helps create adaptive layouts with minimal effort. Another handy feature is group hover, where you can trigger hover effects on child elements when the parent is hovered by using the group and group-hover classes. This is perfect for interactive elements like buttons or cards. Other notable tricks include the truncate class, which handles text overflow by adding ellipsis to long text, and dark mode support, which can be easily enabled in the configuration file to apply dark styles with the dark: variant. Additionally, Tailwind allows you to customize spacing by extending the spacing scale in the tailwind.config.js file, making it easier to match specific design needs. These tricks make Tailwind even more powerful for building responsive, adaptive, and user-friendly interfaces.",

    imageUrl: "/images/8.png",
  },
  {
    id: "9",
    title: "The Battle of Cloud Platforms: Netlify vs. Vercel vs. AWS",
    description:
      "When choosing a cloud platform for deploying modern web applications, Netlify, Vercel, and AWS are among the most popular options, each offering unique features and benefits. Netlify is known for its developer-friendly experience, particularly for static site deployments and JAMstack applications. With automatic continuous deployment, built-in form handling, and serverless functions, it’s ideal for front-end projects. It offers great integration with GitHub, GitLab, and Bitbucket, making deployments seamless. The free tier provides plenty of functionality for smaller projects, and its global CDN ensures fast load times. Vercel, on the other hand, is optimized for Next.js applications but supports other front-end frameworks as well. Its serverless architecture makes it great for highly dynamic applications with minimal setup. Vercel focuses on performance and ease of use, offering automatic scaling, edge caching, and instant deployments directly from your GitHub repo. It’s a favorite among developers for its simplicity, especially for those working on React-based applications. AWS provides a much broader and more flexible set of services, offering everything from storage and computing to AI tools and advanced infrastructure capabilities. While AWS offers extensive scalability and control, it can be more complex to set up and manage. It’s the go-to choice for large enterprises and projects requiring custom back-end setups, fine-grained infrastructure control, and integration with other AWS services. In summary, if you're focused on static sites and fast deployments with minimal configuration, Netlify and Vercel are excellent choices, with Vercel being more tailored for Next.js apps. AWS shines for larger, more complex applications that need comprehensive back-end solutions, flexibility, and scalability.",

    imageUrl: "/images/9.png",
  },
  {
    id: "10",
    title: "Step-by-Step Guide to Deploying Your Next.js App on Vercel",
    description:
      "Deploying a Next.js app on Vercel is quick and simple. First, prepare your Next.js project and push it to a Git repository (GitHub, GitLab, or Bitbucket). Once your code is on GitHub, log in to Vercel, click on 'New Project,' and connect your GitHub account. Vercel will automatically detect the Next.js framework and configure the project settings for you. You can further customize build settings or environment variables, but Vercel’s default settings are typically sufficient. After clicking the 'Deploy' button, Vercel will build and deploy your app. Once the process is complete, your app will be live on a unique Vercel URL. Any future changes pushed to the repository will trigger automatic deployments, ensuring your app stays up to date. Additionally, you can configure a custom domain for your project if desired.",

    imageUrl: "/images/10.png",
  },
  {
    id: "11",
    title: "How to Build a Portfolio Website That Stands Out",
    description:
      "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",

    imageUrl: "/images/11.png",
  },
  {
    id: "12",
    title: "Participating in Hackathons: What I Learned in 24 Hours",
    description:
      "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",

    imageUrl: "/images/12.png",
  },
  {
    id: "13",
    title: "Three.js Basics: Create Stunning 3D Experiences on the Web",
    description:
      "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",

    imageUrl: "/images/13.png",
  },
  {
    id: "14",
    title: "A Developer's Guide to Setting Up Sentry for Error Tracking",
    description:
      "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",

    imageUrl: "/images/14.png",
  },
  {
    id: "15",
    title: "How to Optimize React Apps for Performance",
    description:
      "This blog covers essential tools like React, Vue.js, and Three.js for modern web development.",

    imageUrl: "/images/15.png",
  },
];

const Post = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return (
      <h2 className="font-extrabold text-4xl text-center text-customPurple my-12">
        Post not found
      </h2>
    );
  }
  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => {
      return (
        <p key={index} className="mt-4 justify-center">
          {para.trim()}
        </p>
      );
    });
  };

  return (
    <div className="p-5 mx-auto max-w-3xl">
      <h2 className="font-extrabold text-4xl text-center text-customPurple my-12">
        {post.title}
      </h2>
      <div className="items-center flex justify-center">
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={400}
            height={400}
            className="object-cover rounded-md mt-4"
          />
        )}
      </div>
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id}></CommentSection>
      <AuthorCard />
    </div>
  );
};

export default Post;
