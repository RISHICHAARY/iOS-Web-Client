import TKM from '../Assets/TKM.png';

export default function ThinksMind(){
    return(
        <div className="flex w-full justify-around my-[100px]">
            <div className="w-[75%] flex gap-[15px] items-center">
                <div className='w-[50%]'>
                    <img className="w-[594px]" src={TKM} alt='AboutProgramImage'/>
                </div>
                <div className="flex flex-col justify-between w-[50%] gap-4">
                    <p className="text-[28px] fontEpilouge font-bold leading-3">
                        Things to keep in–mind
                    </p>
                    <p className="text-[16px] font-medium fontInter">
                        The entire product development journey is completely free
                    </p>
                    <p className="text-[16px] font-medium fontInter">
                        All applicants must be over the age of 18
                    </p>
                    <p className="text-[16px] font-medium fontInter">
                        No prior coding knowledge, skills or experience is required
                    </p>
                    <p className="text-[16px] font-medium fontInter">
                        Duration of 9–months, 5 days a week and 2 hours per day
                    </p>
                    <p className="text-[16px] font-medium fontInter">
                        If successful in gaining a place in the program, you must be able to commit to be on-site at SRM IST KTR
                    </p>
                    <p className="text-[16px] font-medium fontInter">
                        A MacBook and iPhone device will be loaned to all participating students
                    </p>
                </div>
            </div>
        </div>
    )
}