export default function Mentors(){
    return(
        <div className="w-full flex justify-center">
            <div className="flex flex-col items-center gap-[40px]">
                <p className="fontEpilouge text-[28px] font-bold">Meet the Mentors</p>
                <div className="w-full grid grid-cols-4 gap-[20px]">
                    <div className="flex flex-col items-center gap-[20px]">
                        <div className="w-[100px] h-[100px] bg-skin rounded-full"></div>
                        <p className="fontInter text-[22px] font-bold">R. Rajkamal</p>
                        <p className="fontInter text-[18px] font-medium">Apple Certified Mentor</p>
                    </div>
                    <div className="flex flex-col items-center gap-[20px]">
                        <div className="w-[100px] h-[100px] bg-skin rounded-full"></div>
                        <p className="fontInter text-[22px] font-bold">Paul T. Sheeba</p>
                        <p className="fontInter text-[18px] font-medium">Apple Certified Mentor</p>
                    </div>
                    <div className="flex flex-col items-center gap-[20px]">
                        <div className="w-[100px] h-[100px] bg-skin rounded-full"></div>
                        <p className="fontInter text-[22px] font-bold">Dr. A. Murugan</p>
                        <p className="fontInter text-[18px] font-medium">Apple Certified Mentor</p>
                    </div>
                    <div className="flex flex-col items-center gap-[20px]">
                        <div className="w-[100px] h-[100px] bg-skin rounded-full"></div>
                        <p className="fontInter text-[22px] font-bold">Prof. Anoop Menon</p>
                        <p className="fontInter text-[18px] font-medium">Apple Certified Mentor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}