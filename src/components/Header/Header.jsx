import { useHeroContext } from '../../context/HeroContext'

function Header() {
    const { toggleSidePanel, handleSignUp } = useHeroContext()

    return (
        <div className="w-full flex items-center justify-between px-[25px] 2xl:px-[190px] z-10">
            <button className="2xl:text-[20px]"  onClick={toggleSidePanel}>
                <i className="fa-solid fa-bars text-[#2a2a2a] hover:opacity-50"></i>
            </button>
            <div className="font-semibold text-2xl 2xl:text-3xl mb-1 2xl:mb-0 mx-auto 2xl:mx-0 2xl:ml-[111px]">
                Blogs
            </div>
            <div className="hidden 2xl:text-[15px] 2xl:flex items-center justify-center 2xl:gap-4">
                <button onClick={handleSignUp} className="shadow-md border-[1px] border-[#e7e7e7] outline-none px-4 py-2 rounded-[30px] hover:border-[#22bb22] hover:-translate-y-[1px] transition-all duration-300">Sign<span className="text-[#115d33] font-medium">Up</span></button>
                <button className="shadow-md border-[1px] border-[#22bb22] bg-[#22bb22] text-white outline-none px-4 py-2 rounded-[30px] hover:border-[#22bb22] hover:-translate-y-[1px] transition-all duration-300">Login</button>
            </div>
        </div>
    )
}

export default Header