import { data } from "@/components/data"
import { notFound } from "next/navigation";
import Image from "next/image";
export async function getStaticPaths() {
    const paths = [
        { params: { id: data.forEach((data) => data.id)
            
         } },
    ]
    return { paths, fallback: true }
}
  
export default function Post({ params }: { params: { id: string } }) {
    const id = params.id
    const result = data.find((data) => data.id === id);
if (result) {
  const { title, description, type } = result;
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl mb-4 text-accent font-bold text-left"> Order now</h1>
        <div className="flex flex-row">
            <div>
            <Image src={ type == "hoodie" ? "/darkmodehoodie.png" : type == "turtleneck" ? "/turtleneck.png" : "/shirt.png"} alt="product" width={300} height={400} />
            </div>

            <div>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
        </div>
    </div>
  );
} else {
    return notFound();
}
}
  