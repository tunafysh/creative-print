"use client"
import { BackgroundBeamsWithCollision } from "@/components/elements/bgwcollision";;
import { ModeToggle } from "@/components/elements/modetoggle";
import { FlipWords } from "@/components/elements/wordflip";
import { motion } from "framer-motion";
import { data } from "@/components/data"
import { Card } from "@/components/defs";
import { BackgroundGradient } from "@/components/elements/specialcard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
	const { theme } = useTheme();
	const router = useRouter();

  return (
   <div className="flex flex-col items-center justify-center overflow-x-hidden">
    <div id="navbar" className="text-foreground bg-background fixed top-0 left-0 w-full h-[8vh] z-50 shadow-md shadow-foreground/5 flex flex-row justify-between items-center p-1 px-6">
			<div className="flex flex-row items-center">
				<div className="cursor-pointer" onClick={() => {
					const idk = document.getElementsByClassName("homepage")[0];

					if(idk){
						idk.scrollIntoView({
							behavior: "smooth",
							block: "center"
						});
					}
				}}>
				<h1 className="text-xl font-bold mr-2">Creative <br /> Print</h1>
				</div>
			</div>
			<ul className="flex flex-row list-none justify-between items-center">
				<motion.li className="mr-5 hover:text-secondary font-bold cursor-pointer text-foreground" transition={{ duration: 0.5 }}><a onClick={() => {
					const idk = document.getElementById("products");
					if (idk) {
						idk.scrollIntoView({
							behavior: "smooth",
							"block": "center"
						});
					}
				}}>Products</a></motion.li>

				<motion.li className="mr-5 hover:text-secondary font-bold cursor-pointer text-foreground" transition={{ duration: 0.5 }}><a onClick={() => {
					const element = document.getElementById("FAQ");
					if (element) {
						element.scrollIntoView({
							behavior: "smooth",
							block: "center"
						});
					}
				}}>About Us</a></motion.li>
				<ModeToggle/>
			</ul>
			</div>
      <BackgroundBeamsWithCollision className="bg-transparent homepage -z-50">
		<div className="flex flex-col items-center justify-center h-screen">
		<h1 className="text-5xl font-bold">Fabric Printing, </h1>
        <FlipWords words={["Simplified", "Streamlined", "Enhanced"]} className="text-5xl font-bold bg-clip-text text-transparent" />	
		<br />
		<p className="font-bold text-xl text-center">We sell custom hoodies, shirts and apparels at an affordable price for you. <br /> We also ship internationally but this may cost you a few bucks</p>
		<br />
		</div>
	  </BackgroundBeamsWithCollision>

		{/* <section id="partners" className={"p-8 w-screen flex flex-col items-center justify-center bg-indigo-600/10"}>
			<h1 className="text-4xl font-bold border-b-2 border-accent w-fit">Trusted by</h1>
		</section> */}
		
      <section id="FAQ" className="flex flex-col items-center justify-between h-fit] w-screen bg-indigo-600/25 p-8">
		<h1 className="text-4xl font-bold border-b-2 border-accent w-fit">About us</h1>
		<br />
		<p className="font-bold text-center text-wrap sm:w-full md:w-full lg:w-[40%]">We started our business in 2022. We are a small business that sells custom hoodies, shirts and apparels at an affordable price for you. We started in Kosovo and after a while we have moved to the US and other places. We also ship internationally but this may cost you a few Euros </p>	  </section>

		<section id="products" className={"p-8 flex flex-col items-center justify-center"}>
			<h1 className="text-4xl font-bold border-b-2 border-accent w-fit">Products</h1>
<div className="flex flex-row flex-wrap justify-center gap-10 m-16">

			{data.map((item: Card) => (
				item.special? (
					// eslint-disable-next-line react/jsx-key
					<BackgroundGradient className="w-[300px] rounded-[22px] p-4 sm:p-10 bg-background shadow-md">
						<Badge className="absolute dark:hover:bg-primary dark:bg-primary hover:bg-secondary bg-secondary px-1 -top-[5px] -left-[4px] text-white"><StarIcon width={16} height={16} className="mr-1" />Shpessëll</Badge>
						<Image src={theme === "light" ? "/lightmodehoodie.png" : "/darkmodehoodie.png"} width={400} height={500} className="object-contain" alt="hoodie" />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {item.title}
        </p>
 
        <p className="text-sm text-black/70 dark:text-white/70">
		  {item.description}
        </p>
		<div className="flex flex-row items-center">

        <Button className="mt-4 bg-emerald-600 hover:bg-emerald-600 pl-2 pr-2 rounded-r-none" onClick={() => router.push(`/checkout/?id=${item.id}`)}>
		<span className="font-bold text-white">Order now </span>
		</Button>
		<span className="mt-4 bg-emerald-500 rounded-md text-[0.6rem] pl-2 pr-2 px-2 w-8 py-0 flex items-center justify-center text-white h-9 rounded-l-none">
            ${item.price}
          </span>
		</div>
      </BackgroundGradient>
				):(
		// eslint-disable-next-line react/jsx-key
		<div className="rounded-[22px] w-[300px] p-4 sm:p-10 bg-background shadow-md border-2 dark:border-zinc-300 border-zinc-800">
			<div className="">

			<Image src={theme === "light" ? "/lightmodehoodie.png" : "/darkmodehoodie.png"} width={400} height={500} className="object-contain" alt="hoodie" />
			</div>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {item.title}
        </p>
 
        <p className="text-sm text-black/70 dark:text-white/70">
		  {item.description}
        </p>
		<div className="flex flex-row items-center">

        <Button className="mt-4 bg-emerald-600 hover:bg-emerald-600 pl-2 pr-2 rounded-r-none" onClick={() => router.push(`/checkout/?id=${item.id}`)}>
		<span className="font-bold text-white">Order now </span>
		</Button>
		<span className="mt-4 bg-emerald-500 rounded-md text-[0.6rem] pl-2 pr-2 px-2 w-8 py-0 flex items-center justify-center text-white h-9 rounded-l-none">
            ${item.price}
          </span>
		</div>
					</div>
				)
			))}
			</div>
		</section>
		<footer className="bg-indigo-600/40 w-screen p-4 flex items-center justify-center"> &copy;  2023 - Creative Print. All rights reserved. </footer>
   </div>
  );
}
