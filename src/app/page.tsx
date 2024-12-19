import AuthorCard from "@/components/AuthorCard";
import CommentSection from "@/components/CommentSection";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Feature/>
      <AuthorCard />
      <Mega/>
      <Footer/>
    </div>
  );
}
