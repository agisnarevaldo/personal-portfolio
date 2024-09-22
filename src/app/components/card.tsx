import Image from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    image: string;
};

export default function Card( {title, description, image}: Readonly<CardProps>) {
    return (
        <Link href="#" className="border border-neutral-500 p-8 flex flex-col gap-2 w-[420px] rounded-lg">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>
                {description}
            </p>
            <Image src={image} alt="image" width={400} height={100}/>
        </Link>
    )
}