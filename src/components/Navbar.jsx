import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import MaxWidth from "./MaxWidth";
import { ArrowRight } from "lucide-react";

const NavLinks = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "Programs",
    href: "/programs",
  },
  {
    title: "Why us",
    href: "/whyus",
  },
  {
    title: "Plans",
    href: "/plans",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidth>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>IronEdge</span>
          </Link>

          {/* TODO: ADD MOBILE NAVBAR */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              {NavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  {link.title}
                </Link>
              ))}
              {/* login */}
              <Link
                href="/login"
                className={buttonVariants({
                  variant: "solid",
                  size: "sm",
                })}
              >
                Join Now <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          </div>
        </div>
      </MaxWidth>
    </nav>
  );
};
export default Navbar;
