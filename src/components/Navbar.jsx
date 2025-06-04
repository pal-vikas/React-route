import { Link } from "react-router-dom";

function Navbar()
{
    return (
        <>
        <div className="p-3 border-b border-neutral-200  ">
            <div className="w-[1000px] mx-auto  items-center flex justify-between">
                {/* <a href="/" className="text-2xl font-black">React SPA.</a> */}
                <Link to={'/'} className="text-2xl font-black">React SPA.</Link>
                <div className=" flex gap-3 text-2xl">
                    {/* <a className="" href="/">Home</a> */}
                    <Link to={'/'} >Home</Link>
                    {/* <a href="/about">About</a> */}
                     <Link to={'/about'} >About</Link>
                    {/* <a href="/contact">Contact</a> */}
                    <Link to={'/contact'}>Contact</Link>
                </div>
            </div>

        </div>
        </>
    )
}

export default Navbar;