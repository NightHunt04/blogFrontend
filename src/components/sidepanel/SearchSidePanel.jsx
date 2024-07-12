import { useHeroContext } from '../../context/HeroContext'
import './CategoriesScroll.css'

function SearchSidePanel() {
    const { toggleSidePanel, sidePanel, handleSignUp } = useHeroContext()

    return (
        <div className={`sidePanel fixed top-0 left-0 ${sidePanel ? 'translate-x-0' : '-translate-x-[600px]' } w-[280px] 2xl:w-[370px] overflow-hidden transition-all duration-200 shadow-xl flex flex-col items-start justify-start min-h-screen z-20 bg-inherit`}>
            <div className="absolute right-5 top-5">
                <button className="cancelSidePanel hover:opacity-65" onClick={toggleSidePanel}>
                    <i className="fa-solid fa-xmark opacity-85"></i>
                </button>
            </div>
            
            <p className="text-[15px] 2xl:text-[17px] ml-10 2xl:ml-12 mt-[90px] 2xl:mt-[110px]">Search for an article</p>
            <div className="input flex mx-auto items-center justify-center border-[1px] border-[#cecece] rounded-[20px] px-2 mt-[2px] w-9/12">
                <input 
                    type="text" 
                    className="rounded-[20px] text-[14px] 2xl:text-[16px] px-1 2xl:px-3 py-1 w-full outline-none border-none"
                    placeholder="Search article..."/>
                <i className="fa-solid fa-magnifying-glass text-[#bbb] px-1"></i>
            </div>

            <div className="categories flex ml-[35px] 2xl:ml-[50px] mt-[80px] flex-col items-start justify-center gap-2 px-2">
                <p className="font-medium text-[17px] 2xl:text-[20px]">Categories</p>
                <div className="flex text-[13px] 2xl:text-[16px] flex-col items-start justify-start opacity-65 overflow-y-auto mb-2 pr-6 h-[210px] 2xl:h-[280px]">
                    <p className="categoryElements">All Category</p>
                    <p className="categoryElements">UI/UX Design</p>
                    <p className="categoryElements">Machine Learning</p>
                    <p className="categoryElements">Marketing</p>
                    <p className="categoryElements">Gaming</p>
                    <p className="categoryElements">Design</p>
                    <p className="categoryElements">Environment</p>
                    <p className="categoryElements">Development</p>
                    <p className="categoryElements">Trading</p>
                    <p className="categoryElements">Artificial Intelligence</p>
                    <p className="categoryElements">Politics</p>
                    <p className="categoryElements">Wild Life</p>
                    <p className="categoryElements">Science</p>
                </div>
            </div>

            <div className="sign text-[13px] 2xl:hidden flex flex-col gap-4 items-start justify-center ml-[40px] mt-[150px]">
                    <button onClick={() => {
                        toggleSidePanel()
                        handleSignUp()
                    }} className="sign shadow-md  border-[1px] border-[#e7e7e7] outline-none px-4 py-2 rounded-[30px] hover:border-[#22bb22] hover:-translate-y-[1px] transition-all duration-300">Sign<span className="text-[#115d33] font-medium">up</span></button>
                <button className="sign shadow-md border-[1px] border-[#22bb22] bg-[#22bb22] text-white outline-none px-4 py-2 rounded-[30px] hover:border-[#22bb22] hover:-translate-y-[1px] transition-all duration-300">Login</button>
            </div>
        </div>
    )
}

export default SearchSidePanel