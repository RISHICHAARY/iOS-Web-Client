import { Link } from "react-router-dom";

export default function Suggestion(){
    return(
        <div className="w-full flex flex-col justify-center items-center my-[100px] mb-[50px]">
            <p className="fontEpilouge text-[38px] font-semibold decoration-solid underline decoration-orange">Drop us a line or two,</p>
            <p className="fontEpilouge text-[38px] font-semibold decoration-solid underline decoration-orange">we are open for creative minds</p>
            <p className="fontEpilouge text-[38px] font-semibold decoration-solid underline decoration-orange">and collaborations!</p>
            <div className="flex justify-center gap-[20px] items-center my-[50px]">
                <button className="bg-orange p-[5px] w-[120px] px-[15px] border-none outline-none rounded-md">
                    <p className="text-[14px] font-medium text-white">Contact</p>
                </button>
                <Link to='/ApplyNow' className="bg-orange text-center p-[5px] w-[120px] px-[15px] border-none outline-none rounded-md">
                    <p className="text-[14px] font-medium text-white">Apply Now</p>
                </Link>
                {/* <button className="bg-orange p-[5px] w-[120px] px-[15px] border-none outline-none rounded-md">
                    <p className="text-[14px] font-medium text-white">Apply Now</p>
                </button> */}
            </div>
        </div>
    )
}