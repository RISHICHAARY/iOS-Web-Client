export default function PostBanner(){
    return(
        <div className="flex w-full justify-center items-center gap-[20px]">
            <div className="flex flex-col w-[216px] py-[25px] bg-orange rounded-md fontEpilouge text-white justify-center items-center gap-[10px]">
                <i className="fa-regular fa-clock text-[22px]"></i>
                <p className="text-[18px]">9 months</p>
            </div>
            <div className="flex flex-col w-[216px] py-[25px] bg-orange rounded-md fontEpilouge text-white justify-center items-center gap-[10px]">
                <i className="fa-solid fa-user-group text-[22px]"></i>
                <p className="text-[18px]">Offline</p>
            </div>
            <div className="flex flex-col w-[216px] py-[25px] bg-orange rounded-md fontEpilouge text-white justify-center items-center gap-[10px]">
                <i className="fa-solid fa-location-arrow text-[22px]"></i>
                <p className="text-[18px]">CRC Block</p>
            </div>
            <div className="flex flex-col w-[216px] py-[25px] bg-orange rounded-md fontEpilouge text-white justify-center items-center gap-[10px]">
                <i className="fa-solid fa-dollar-sign text-[22px]"></i>
                <p className="text-[18px]">Free of Cost</p>
            </div>
            <div className="flex flex-col w-[216px] py-[25px] bg-orange rounded-md fontEpilouge text-white justify-center items-center gap-[10px]">
                <i className="fa-regular fa-circle-check text-[22px]"></i>
                <p className="text-[18px]">Internship</p>
            </div>
        </div>
    )
}