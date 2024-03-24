import AP from '../Assets/AP.png';

export default function AboutProgram(){
    return(
        <div className="flex w-full justify-around my-[100px]">
            <div className="w-[75%] flex gap-[15px] items-center">
                <div className='w-[50%]'>
                    <img className="w-[594px]" src={AP} alt='AboutProgramImage'/>
                </div>
                <div className="flex flex-col justify-between w-[50%] gap-4">
                    <p className="text-[28px] fontEpilouge font-bold leading-3">
                        About the Program
                    </p>
                    <p className="text-[16px] font-medium fontInter">
                        The iOS Development Product Journey at SRM IST empowers learners with a future-fit skill set at the intersection of technology, creativity and entrepreneurship.
                    </p>
                    <p className="text-[16px] font-medium fontInter">
                        You will be introduced to the Swift programming language - a powerful and intuitive programming language for iPhone, iPad, Mac and more - to prototype an original app idea.
                    </p>
                    <p className="text-[16px] font-medium fontInter">
                        In this nine month program you will experience the creative process of what it takes to solve real world problems, collaborate in teams in a challenge based learning environment and design apps using the Apple iOS ecosystem.
                    </p>
                </div>
            </div>
        </div>
    )
}