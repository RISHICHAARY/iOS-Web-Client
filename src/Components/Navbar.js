import { Link } from 'react-router-dom';

export default function Navbar(){
    
    return(
        <div className="fixed w-full flex items-center justify-evenly p-3 bg-white bg-opacity-75 backdrop-blur-2xl">
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
                {/* <button className="border-none outline-none" onClick={()=>{setPageState('Home');Navigate('/')}}>
                    <p>Home</p>
                </button>
                <button className="border-none outline-none" onClick={()=>{setPageState('Projects');Navigate('/Projects')}}>
                    <p>Projects</p>
                </button>
                <button className="border-none outline-none" onClick={()=>{setPageState('Gallery');Navigate('/Gallery')}}>
                    <p>Gallery</p>
                </button>
                <button className="border-none outline-none" onClick={()=>{setPageState('Contact');Navigate('/Contact')}}>
                    <p>Contact</p>
                </button> */}
            </div>
            <div className="flex gap-[30px] items-center  fontEpilouge">
                <button>
                    <i className="fa-solid fa-circle-half-stroke text-[18px]"></i>
                </button>
                <Link to='/ApplyNow' className="bg-orange p-[5px] px-[15px] border-none outline-none rounded-md">
                    <p className="text-[14px] font-medium text-white">Apply Now</p>
                </Link>
                {/* <button className="bg-orange p-[5px] px-[15px] border-none outline-none rounded-md" onClick={()=>{Navigate('/ApplyNow')}}>
                    <p className="text-[14px] font-medium text-white">Apply Now</p>
                </button> */}
            </div>
        </div>
    )
}