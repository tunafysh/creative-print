"use client"
import { data } from "@/components/data"
import { notFound, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

 function Card() {
    const param = useSearchParams().get("id")

    const {type, title, description} = data.find((data) => data.id == param)?? notFound();

    return(
        <div className="w-screen h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl mb-4 text-accent font-bold text-left">Checkout</h1>
        <div className="flex flex-row">
            <div className="bg-foreground py-4 rounded-md mr-8">
            <Image src={ type == "hoodie" ? "/darkmodehoodie.png" : type == "turtleneck" ? "/turtleneck.png" : "/shirt.png"} alt="product" width={200} height={300} />
            </div>

            <div>
            <h1>Item: {title}</h1>
            <p>Description: {description}</p>
            </div>
            </div>
        </div>
    )
}

export default function Checkout() {
    return (
        <Suspense>
            <Card/>
        </Suspense>
    )
}