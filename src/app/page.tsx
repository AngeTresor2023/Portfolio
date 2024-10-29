import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Spacing from "./_components/Spacing";
import Status from "./_components/Status";
import Study from "./_components/Study";
import Experience from "./_components/Experience";
import Projet from "./_components/Projet";
import Projets2 from "./_components/Projets2";
import Studies from "./_components/Studies";

export default function Home() {
  return (
   <main className="mx-0 my-1 w-full min-w-full px-1" >
    <Header />
    <Spacing size="lg"/>
    <Hero/>
    <Spacing size="lg"/>
    <Projet/>
    <Spacing size="lg"/>
    <Studies/>
    <Spacing size="lg"/>
   </main>
  );
}
