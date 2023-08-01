import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 padding-x py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-fit"
          />
          <p className="text-base text-gray-700">
            CarHub 2023 <br /> All rights reserved
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div key={index} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((items, index) => (
                <Link key={index} href={items.url} className="text-gray-500">
                  {items.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 padding-x py-10">
        <p>@2023 CarHub Allrights Reserverd</p>

        <div className="footer__copyrights-link">
            <Link 
            href='/'
            className="text-gray-500"
            >
                Privacy Policy
            </Link>
            <Link 
            href='/'
            className="text-gray-500"
            >
                Terms of Use
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
