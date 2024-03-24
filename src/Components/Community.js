import BG from '../Assets/BG.png';

export default function Community(){
    return(
        <div className='w-full flex justify-center my-[100px]'>
            <div className='w-[75%] bg-orange flex justify-center rounded-md py-[70px] px-[50px]'>
                <div className="flex flex-col justify-between w-[50%] gap-[30px]">
                    <p className="text-[28px] fontEpilouge font-bold leading-3 text-white">
                        Join our Community
                    </p>
                    <div>
                        <div>
                            <p className='fontInter text-[18px] font-medium text-white'>Connect, Learn, and Thrive: Join our vibrant community where iOS enthusiasts unite. Gain access to exclusive updates, valuable resources, and engaging discussions on our newsletter and Discord channel. Elevate your iOS development journey with us!</p>
                        </div>
                    </div>
                    <div className='flex gap-[20px]'>
                        <button className='border-none outline-none bg-white rounded-md py-1 px-5'>
                            <p className='fontEpilouge text-[14px] font-medium'>Newsletter</p>
                        </button>
                        <button className='border-none outline-none bg-white rounded-md py-1 px-5'>
                            <p className='fontEpilouge text-[14px] font-medium'>Join our Discord</p>
                        </button>
                    </div>
                </div>
                <div className='w-[50%] flex justify-center items-center'>
                    <img className="w-[65%]" src={BG} alt='AboutProgramImage'/>
                </div>
            </div>
        </div>
    )
}