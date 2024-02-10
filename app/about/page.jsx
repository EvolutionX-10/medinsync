import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Landing1 from "./landing1";
import Landing2 from "./landing2";
import Landing3 from "./landing3";
import Landing4 from "./landing4";
import Landing5 from "./landing5";

function page() {
   
   return (
      <>
         <Navbar />
         <Landing1 />
         <Landing2 />
         <Landing3 />
         <Landing4 />
         <Landing5 />
         <Footer />  
      </>
   )
}

export default page