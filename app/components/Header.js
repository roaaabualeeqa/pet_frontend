import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

function Header() {

    // consuming the context
    const {isDarktheme, toggleThemeHandler} = useContext(ThemeContext)
    return (
        <nav className="flex items-center justify-between flex-wrap bg-cyan-900 p-6 dark:bg-black">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image 
                src="/assets/logo3.png"
                width={90}
                height={50}
                alt="pet shop logo"
                />
                <span className="font-bold text-xl text-white uppercase">Pets shop</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Pets
                    </a>
                    <a href="/about_us" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        About us
                    </a>
                </div>
                <div>
                    <button onClick={toggleThemeHandler} href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4 lg:mt-0">Toggle Theme</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;