import PS from '../Assets/PS.png';

export default function ProgramSkills(){
    return(
        <div className="flex w-full justify-around my-[100px]">
            <div className="w-[75%] flex gap-[15px] items-center">
                <div className="flex flex-col justify-between w-[50%] gap-4">
                    <p className="text-[28px] fontEpilouge font-bold leading-3">
                        Skills you’ll Gain
                    </p>
                    <p className="text-[16px] font-medium fontInter">
                    This world-class learning and design program offers an overview of the skills to become an iOS developer, while simultaneously introducing you to highly sought-after transferable skills, including:
                    </p>
                    <div>
                        <div className='flex gap-[20px] items-center'>
                            <i className="fa-solid fa-circle-check text-orange text-[18px]"></i>
                            <p className="text-[16px] font-medium fontInter">
                                Design Thinking
                            </p>
                        </div>
                        <div className='flex gap-[20px] items-center'>
                            <i className="fa-solid fa-circle-check text-orange text-[18px]"></i>
                            <p className="text-[16px] font-medium fontInter">
                                Prototyping apps and conceptual design
                            </p>
                        </div>
                        <div className='flex gap-[20px] items-center'>
                            <i className="fa-solid fa-circle-check text-orange text-[18px]"></i>
                            <p className="text-[16px] font-medium fontInter">
                                User Interface and User Experience design
                            </p>
                        </div>
                        <div className='flex gap-[20px] items-center'>
                            <i className="fa-solid fa-circle-check text-orange text-[18px]"></i>
                            <p className="text-[16px] font-medium fontInter">
                                Introduction to Xcode, SwiftUI and Storyboard
                            </p>
                        </div>
                        <div className='flex gap-[20px] items-center'>
                            <i className="fa-solid fa-circle-check text-orange text-[18px]"></i>
                            <p className="text-[16px] font-medium fontInter">
                                Presentation and pitching of ideas
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <img className="w-[594px]" src={PS} alt='AboutProgramImage'/>
                </div>
            </div>
        </div>
    )
}