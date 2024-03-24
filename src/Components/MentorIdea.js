import MI from '../Assets/MI.png';

export default function MentorIdea(){
    return(
        <div className='flex justify-around w-full my-[100px]'>
            <div className="flex flex-col gap-[30px] w-[75%] justify-center items-center">
                <img className="w-[100px] h-[100px]" src={MI} alt="MentorImage"/>
                <p className="text-[24px] text-center fontTimes">“The RMIT Apple Foundation Program is an immersive, challenge-based learning opportunity for learners to experience what it really means to design and develop an app, learn Design Thinking principles and gain hands-on practice with the intuitive Swift programming environment. By targeting learners from underrepresented groups, we hope to both broaden the pool of talent in the tech sector and increase the diversity of that talent pool.”</p>
                <div className='fontInter text-center'>
                    <p className='font-bold text-[20px]'>Prof. R. Rajkamal</p>
                    <p className='font-medium text-[18px]'>Executive Dean, School of Computing Technologies, SRM IST KTR</p>
                </div>
            </div>
        </div>
    )
}