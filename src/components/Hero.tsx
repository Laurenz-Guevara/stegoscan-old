import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="container grid place-items-center pb-8 pt-8 md:pb-24 md:pt-12 lg:grid-cols-2">
      <div className="hidden py-6 md:order-1 md:block">
        <Image
          src="https://refold-studio.s3.eu-west-2.amazonaws.com/assets/5378664.jpg"
          width={500}
          height={400}
          alt="Stegosaurus"
        />
      </div>
      <div>
        <h1 className="text-5xl">Instantly create a digital QR Code menu</h1>
        <p className="mt-4 max-w-xl text-lg text-slate-600">
          Improve your customers’ ordering experience with our free QR code menu
          creator. Design a digital restaurant menu and share it with a unique
          QR code in just a few clicks.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link className="font-semibold" href="/book-a-demo">
              Book a Demo
            </Link>
          </Button>
          <SignUpButton />
        </div>
      </div>
      <div className="py-6 md:order-1 md:hidden">
        <Image
          src="https://refold-studio.s3.eu-west-2.amazonaws.com/assets/5378664.jpg"
          width={500}
          height={400}
          alt="Stegosarus"
        />
      </div>
    </main>
  );
}
