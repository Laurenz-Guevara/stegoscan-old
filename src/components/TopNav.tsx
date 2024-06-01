import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

export function TopNav() {
  return (
    <>
      <div className="h-16 w-full"></div>
      <nav className="fixed top-0 z-50 w-full border-b bg-white">
        <div className="container flex w-full items-center justify-between py-4">
          <div className="space-x-4 font-medium">
            <Link href="/">Stegoscan</Link>
          </div>
          <div className="hidden space-x-4 lg:block">
            <SignedOut>
              <Link href="/examples">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/examples">Examples</Link>
              <Link href="/examples">Contact</Link>
              <Button asChild>
                <Link className="h-8 font-semibold" href="/book-a-demo">
                  Book a Demo
                </Link>
              </Button>
            </SignedOut>

            <SignedIn>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/dashboard">Restaurants</Link>
              <Link href="/dashboard">Menus</Link>
              <Link href="/dashboard">Settings</Link>
            </SignedIn>
          </div>
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton />
              <Button className="h-8" asChild>
                <SignUpButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <Menu className="lg:hidden" color="black" size={24} />
          </div>
        </div>
      </nav>
    </>
  );
}
