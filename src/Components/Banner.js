export default function Banner(){
    return(
        <div className="w-full flex flex-col justify-center items-center h-[100vh] gap-[40px] banner">
            <div className="justify-center">
                <div className="py-1 px-5 bg-orange rounded-full w-fit">
                    <p className="text-[18px] fontEpilouge text-white leading-1">Applications for next cohort are now open!</p>
                </div>
            </div>
            <div className="text-[50px] font-bold fontHelvecia text-center">
                <p className="m-0 leading-snug">Welcome to iOS Development Center,</p>
                <p className="m-0 leading-snug">Powered by Apple and Infosys</p>
            </div>
            <div className="text-[22px] fontEpilouge">
                <p>Unlock Your iOS Potential: Explore Limitless Innovation with Apple and Infosys at Your Side.</p>
            </div>
        </div>
    )
}