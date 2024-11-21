"use client"
import { DotBackgroundDemo } from "@/components/dotbg";
import { ModeToggle } from "@/components/modetoggle";
import { motion } from "framer-motion";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center h-screen overflow-x-hidden">
    <div id="navbar" className="text-foreground fixed top-0 left-0 w-full bg-background h-[8vh] z-50 shadow-md shadow-foreground/5 flex flex-row justify-between items-center p-1 px-6">
			<div className="flex flex-row items-center">
			<h1 className="text-xl font-bold mr-2">Creative <br /> Print</h1>
			</div>
			<ul className="flex flex-row list-none justify-between items-center">
				<motion.li whileHover={{ color: "hsl(var(--secondary))" }} className="mr-5 font-bold cursor-pointer text-foreground" transition={{ duration: 0.5 }}><a href="https://github.com/tunafysh/Catalyst" target="_blank">Products</a></motion.li>
				<motion.li whileHover={{ color: "hsl(var(--secondary))" }} className="mr-5 font-bold cursor-pointer text-foreground" transition={{ duration: 0.5 }}><a href="https://github.com/tunafysh/Catalyst/wiki">About Us</a></motion.li>
				<ModeToggle/>
			</ul>
			</div>
      <DotBackgroundDemo>
        <p>test</p>
      </DotBackgroundDemo>
   </div>
  );
}
