import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black p-8 flex flex-col items-center gap-8">
        <div className="w-full max-w-[120px] -mt-2 bg-black rounded-full">
          <img
            src={"https://static.vecteezy.com/system/resources/previews/030/637/719/large_2x/e-commerce-image-hd-free-photo.jpg"}
            alt="SUGAR Cosmetics Logo"
            className="w-full h-auto block"
          />
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { to: "https://www.facebook.com", src: "https://i.pinimg.com/474x/f7/99/20/f79920f4cb34986684e29df42ec0cebe.jpg", alt: "Facebook" },
            { to: "https://www.tumblr.com", src: "https://cdn.icon-icons.com/icons2/1558/PNG/512/353426-logo-tumbler_107491.png", alt: "Tumblr" },
            { to: "https://www.youtube.com", src: "https://static.vecteezy.com/system/resources/thumbnails/023/986/480/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png", alt: "YouTube" },
            { to: "https://www.twitter.com", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LEV-ApZUO6OUnu1ulvL8F3L91AqHlpD0Hw&s", alt: "Twitter" },
            { to: "https://www.instagram.com", src: "https://e7.pngegg.com/pngimages/672/312/png-clipart-instagram-logo-icon-others-text-photography.png", alt: "Instagram" },
            { to: "https://www.pinterest.com", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBI2KVWv2BVSrhpjaWAxnJ2z5FctP0b47jg&s", alt: "Pinterest" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.to}
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.src} alt={link.alt} className="w-5 h-5 object-contain" />
            </a>
          ))}
        </div>
      </div>

      <footer className="bg-black border-t border-gray-300 pt-5 text-white">
        <nav>
          <ul className="flex justify-center list-none">
            {[
              { to: "/stores", label: "Stores" },
              { to: "/elite", label: "Elite" },
              { to: "/terms", label: "Terms & Conditions" },
              { to: "/returns", label: "Returns" },
              { to: "/faqs", label: "FAQs" },
              { to: "/about", label: "About Us" },
            ].map((item, index) => (
              <li key={index} className="mx-2">
                <Link
                  to={item.to}
                  className="text-blue-200 text-lg hover:text-white transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-5 flex flex-col lg:flex-row justify-between gap-6">
          <div className="lg:w-1/3">
            <h2 className="text-xl font-semibold">GET IN TOUCH</h2>
            <div className="mt-4">
              <h3 className="font-medium">Call us at</h3>
              <a
                href="tel:1800-209-9933"
                className="block text-lg font-bold text-gray-200"
              >
                1800-209-9933
              </a>
              <p className="text-sm text-gray-400">Monday to Saturday: 09:00 AM - 07:00 PM</p>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { header: "Support", link: "mailto:hello@ecommerce.com", label: "hello@ecommerce.com" },
              { header: "Careers", to: "/careers", label: "We're hiring!" },
              { header: "Press & Media", link: "mailto:pr@ecommerce.com", label: "pr@ecommerce.com" },
              { header: "Influencer Collab", to: "/join", label: "Join Us" },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{column.header}</h3>
                {column.to ? (
                  <Link to={column.to} className="text-blue-200 hover:text-white">
                    {column.label}
                  </Link>
                ) : (
                  <a href={column.link} className="text-blue-200 hover:text-white">
                    {column.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-500">
            Copyright © 2024 E-commerce . All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
