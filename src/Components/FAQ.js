export default function FAQ(){
    return(
        <div className="flex justify-center items-center w-full my-[40px]">
            <div className="flex flex-col gap-[40px] justify-center items-center w-[75%]">
                <p className="fontEpilouge text-[28px] font-extrabold">Frequently Asked Questions</p>
                <div className="flex flex-col gap-[20px] w-full">
                    <div className="px-4 p-2 bg-pink rounded-md w-full">
                        <p className="fontInter text-[18px] font-medium">Who is eligible to enroll in the iOS Development program?</p>
                    </div>
                    <div className="px-4 p-2 bg-pink rounded-md w-full">
                        <p className="fontInter text-[18px] font-medium">What topics or skills are covered in the curriculum?</p>
                    </div>
                    <div className="px-4 p-2 bg-pink rounded-md w-full">
                        <p className="fontInter text-[18px] font-medium">Are there any certifications or credentials awarded upon completion?</p>
                    </div>
                    <div className="px-4 p-2 bg-pink rounded-md w-full">
                        <p className="fontInter text-[18px] font-medium">Can students expect any hands-on projects or practical experience?</p>
                    </div>
                    <div className="px-4 p-2 bg-pink rounded-md w-full">
                        <p className="fontInter text-[18px] font-medium">What kind of support is available for students during the program?</p>
                    </div>
                    <div className="px-4 p-2 bg-pink rounded-md w-full">
                        <p className="fontInter text-[18px] font-medium">How does the program help students in their career advancement or job prospects?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}