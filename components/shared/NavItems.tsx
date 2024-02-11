"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavLinks } from "@/constants";
import Image from "next/image";
import { fetchUserId } from "@/lib/user";

const NavItems = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { userId } = await fetchUserId();
      setUserId(userId);
    };

    fetchData();
  }, []);

  const pathname = usePathname();
  const navLinks = getNavLinks(userId);

  return (
    <ul className="text-black font-extrabold md:text-white flex flex-col  gap-y-8 mt-12 leading-loose justify-between w-full">
      {navLinks.map((links) => {
        const isActive = pathname === links.route;
        return (
          <div key={links.label}>
            <li
              className={`${
                isActive &&
                "bg-slate-900 text-white md:bg-white rounded md:text-black py-2"
              } my-10 md:my-0 leading-relaxed h-full`}
            >
              <Link href={links.route} className="w-full flex items-center h-full p-2">
                <Image src={links.icon} alt="icon" width={35} height={35} className="bg-white mr-5 "/>
                {links.label}
              </Link>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default NavItems;
