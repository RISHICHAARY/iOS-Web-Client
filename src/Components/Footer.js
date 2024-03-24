import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <div className="flex flex-col justify-around bg-white">
            <div className="w-full flex items-center justify-evenly p-3 bg-white">
                <div className="text-right fontInter">
                    <p className="text-[20px]">iOS Development Center</p>
                    <p className="text-[12px]">Powered by Apple and Infosys</p>
                </div>
                <div className="text-[16px] font-semibold flex gap-[80px] items-center fontEpilouge">
                    <Link  to='/' className="border-none outline-none">
                        <p>Home</p>
                    </Link>
                    <Link to='/Projects' className="border-none outline-none">
                        <p>Projects</p>
                    </Link>
                    <Link  to='/Gallery' className="border-none outline-none">
                        <p>Gallery</p>
                    </Link>
                    <Link  to='/Contact' className="border-none outline-none">
                        <p>Contact</p>
                    </Link>
                    {/* <button className="border-none outline-none" onClick={()=>{setPageState('Home')}}>
                        <p>Home</p>
                    </button>
                    <button className="border-none outline-none" onClick={()=>{setPageState('Projects')}}>
                        <p>Projects</p>
                    </button>
                    <button className="border-none outline-none" onClick={()=>{setPageState('Gallery')}}>
                        <p>Gallery</p>
                    </button>
                    <button className="border-none outline-none" onClick={()=>{setPageState('Contact')}}>
                        <p>Contact</p>
                    </button> */}
                </div>
                <div className="flex gap-[30px] items-center  fontEpilouge">
                    <button className="border-none outline-none">
                        <i className="fa-brands fa-linkedin-in test-[14px]"></i>
                    </button>
                    <button className="border-none outline-none">
                        <i className="fa-brands fa-x-twitter test-[14px]"></i>
                    </button>
                    <button className="border-none outline-none">
                        <i className="fa-brands fa-instagram test-[14px]"></i>
                    </button>
                    <button className="border-none outline-none">
                        <i className="fa-brands fa-github test-[14px]"></i>
                    </button>
                </div>
            </div>
            <hr className="opacity-10"/>
            <div className="w-full flex items-center justify-evenly p-3 bg-white opacity-50">
                <p className="fontInter font-medium text-[14px]">© Copyright 2024, All Rights Reserved</p>
                <div className="flex gap-[20px] fontInter font-medium text-[14px]">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}