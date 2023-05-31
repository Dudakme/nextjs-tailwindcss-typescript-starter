import Navbar from "../components/nav";
import Slider from "../components/Sections/slider";
import Footer from "../components/Sections/footer";
import Lessons from "../components/Sections/lessons";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
    <Navbar />
    <Slider />
    <Lessons/>
    <Footer />
  </div>
  )
}
