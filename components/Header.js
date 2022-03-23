import React, { useState, useEffect } from "react";
//Import components
import Link from "next/link";
import { getCategories } from "../services";

//Fetch and set categories
const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-orange-700 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer hover:text-orange-700 font-mono text-4xl text-white">
              Turnusgutta
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-3 align-middle text-white  hover:text-orange-700 ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
