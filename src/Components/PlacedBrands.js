import CK from '../Assets/Coke.png';
import OAI from '../Assets/OAI.png';
import PL from '../Assets/PL.png';
import CA from '../Assets/CA.png';
import PLL from '../Assets/PLL.png';
import DOP from '../Assets/DOP.png';
import HYP from '../Assets/HYP.png';
import OD from '../Assets/OD.png';
import BRV from '../Assets/BRV.png';
import BEA from '../Assets/BEA.png';

export default function PlacedBrands(){
    return(
        <div className='w-full flex justify-around my-[100px]'>
            <div className='w-[75%] bg-orange flex flex-col rounded-md items-center justify-center gap-[60px] py-[40px] px-[1px]'>
                <p className='text-white fontEpilouge text-[28px] py-[20px] font-extrabold leading-3'>Our candidates got placed in</p>
                <div className='flex gap-[40px] justify-between w-full px-[60px] align-middle items-center flex-wrap'>
                    <img src={CK} alt='Coke-Cola'/>
                    <img src={OAI} alt='OpenAI'/>
                    <img src={PL} alt='OpenAI'/>
                    <img src={CA} alt='OpenAI'/>
                    <img src={PLL} alt='OpenAI'/>
                    <img src={DOP} alt='OpenAI'/>
                    <img src={HYP} alt='OpenAI'/>
                    <img src={OD} alt='OpenAI'/>
                    <img src={BRV} alt='OpenAI'/>
                    <img src={BEA} alt='OpenAI'/>
                </div>
            </div>
        </div>
    )
}