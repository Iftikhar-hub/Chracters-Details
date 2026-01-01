// import Link from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="w-full max-w-480 bg-[#fdfdfd] flex  items-center flex-col md:gap-10 gap-6 p-10">
                <h1 className="text-[16px] text-center  lg:text-[28px] font-light font-medium ">Ricky and Morty Character</h1>

               <Link to = "/characters">
                <button className="ml-4 bg-amber-800 cursor-pointer hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
                    View Characters
                </button>
               </Link>  

            </div>
        </>

    )
}

export default Home;