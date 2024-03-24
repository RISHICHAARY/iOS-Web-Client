import LO from '../Assets/Location.png';

export default function Location(){
    return(
        <div className="flex justify-center items-center w-[100%] pt-[120px]">
            <div className='flex justify-center w-[75%]'>
                <div className="flex flex-col w-[50%] justify-between gap-[20px]">
                    <p className="text-[28px] fontEpilouge font-extrabold">Our Location</p>
                    <div className=' border-2 border-orange rounded-md w-fit'>
                        <img src={LO} alt='Location' className='rounded-md'/>
                    </div>
                </div>
                <div className="flex flex-col w-[50%] justify-between gap-[20px]">
                    <p className="text-[28px] fontEpilouge font-extrabold">Contact Us</p>
                    <div>
                        <p className='fontInter text-[18px] font-medium'>CRC Building, Main Campus,</p>
                        <p className='fontInter text-[18px] font-medium'>SRM Institute of Science and Technology,</p>
                        <p className='fontInter text-[18px] font-medium'>Kattankulathur, Chengalpattu District - 603203</p>
                    </div>
                    <div>
                        <p className='fontInter text-[18px] font-medium'>aclead.ciad@srmist.edu.in</p>
                        <p className='fontInter text-[18px] font-medium'>head.ciad@srmist.edu.in</p>
                        <p className='fontInter text-[18px] font-medium'>pault@srmist.edu.in</p>
                    </div>
                    <div>
                        <p className='fontInter text-[18px] font-medium'>+91 123456789</p>
                        <p className='fontInter text-[18px] font-medium'>+91 123456789</p>
                        <p className='fontInter text-[18px] font-medium'>+91 123456789</p>
                    </div>
                </div>
            </div>
        </div>
    )
}