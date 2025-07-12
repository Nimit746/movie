import React, { useState} from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import favicon from "../assets/favicon.ico";

const Navbar = () => {


    const [ismenuopen, setIsmenuopen] = useState(false)

    const handlemenu = () => {
        setIsmenuopen(!ismenuopen);
    }



    return (
        <nav className="flex justify-around items-center p-3 border-b-3 border-b-[#483e23] h-13 bg-transparent gap-50 text-white">
            <div className="flex justify-center items-center gap-9">
                <div className="flex gap-2">
                    <div className="md:hidden">
                        <Menu onClick={handlemenu}/>
                    </div>
                    <div>
                        <img src="" className="" />
                    </div>
                    <div>
                        <h1 className="">CineMatch</h1>
                    </div>
                </div>

                {ismenuopen && (
                    <div className="md:hidden fixed inset-0 w-full h-[35%] bg-white/50 z-50 flex flex-col">
                        <div className="flex justify-end p-4">
                            <X onClick={handlemenu} className="text-black w-8 h-8 cursor-pointer" />
                        </div>
                        <ul className="flex flex-col items-center gap-6 mt-10 cursor-pointer text-black font-bold text-xl">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/movies'>Movies</Link>
                            </li>
                            <li>
                                <Link to='/shows'>TV Shows</Link>
                            </li>
                            <li>
                                <Link to='/watchlist'>My List</Link>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="hidden md:flex transitions-all duration-150">
                    <ul className="flex gap-4">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/shows">TV Shows</Link>
                        </li>
                        <li>
                            <Link to="/watchlist">My List</Link>
                        </li>
                    </ul>
                </div>
            </div>

                <img src={favicon} alt="Favicon" className="rounded-full aspect-square w-7" />
                
        </nav>
    );
};

export default Navbar;
