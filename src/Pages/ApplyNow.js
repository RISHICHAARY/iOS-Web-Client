import { useState } from 'react';

import FAQ from '../Components/FAQ';

export default function ApplyNow(){

    const [ formStage, setFormStage ] = useState(1);

    const [ formData,setFormData ] = useState(
        {
            fullName:"",
            personalEmail:"",
            instituteEmail:"",
            contactNumber:"",
            registerNumber:"",
            department:"",
            batch:"",
            cgpa:"",
        }
    );
    const [ formValidation,setFormValidation ] = useState(
        {
            fullName:null,
            personalEmail:null,
            instituteEmail:null,
            contactNumber:null,
            registerNumber:null,
            department:null,
            batch:null,
            cgpa:null,
        }
    )

    const handleChange = (event) =>{
        const { name,value } = event.target;
        setFormData( (prev)=>({ ...prev,[name]:value }) );
        setFormValidation( (prev)=>({ ...prev,[name]:null }) );
    }

    const handleValidationOne = () =>{

        let inValid = false;

        if(formData.fullName === "" || formData.fullName.length<2){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,fullName:"Please enter valid name." }) );
        }
        if(formData.personalEmail === ""){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,personalEmail:"Please enter valid personal email." }) );
        }
        if(formData.instituteEmail === ""){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,instituteEmail:"Please enter valid institute email." }) );
        }
        if(formData.instituteEmail === formData.personalEmail){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,instituteEmail:"Please enter valid institute email.",personalEmail:"Please enter valid personal email." }) );
        }
        if(formData.contactNumber === ""){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,contactNumber:"Please enter your contact number." }) );
        }

        return inValid;
    }

    const handleValidationTwo = () =>{

        let inValid = false;

        if(formData.registerNumber === "" || formData.registerNumber.length<15){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,fullName:"Please enter valid registration number." }) );
        }
        if(formData.department === "select"){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,personalEmail:"Please select your personal department." }) );
        }
        if(formData.batch === "select"){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,instituteEmail:"Please select your institute batch." }) );
        }
        if(formData.cgpa === ""){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,contactNumber:"Please enter your contact cgpa." }) );
        }

        return inValid;
    }

    const handleSubmitOne = (event) =>{
        event.preventDefault();
        if(!handleValidationOne()){
            setFormStage(formStage+1);
        }
    }

    const handleSubmitTwo = (event) =>{
        event.preventDefault();
        if(!handleValidationTwo()){
            setFormStage(formStage+1);
        }
    }

    return(
        <>
            <div className="w-full flex justify-center items-center pt-[130px]">
                <div className="flex w-[75%] justify-center gap-[20px]">
                    <div className="w-[50%] flex flex-col gap-[20px]">
                        <p className="fontEpilouge font-extrabold text-[28px]">Submit your Application</p>
                        <p className="fomtInter text-[18px] font-medium">
                            Got a passion for problem-solving, teamwork and creating change in our world? Apply now for the iOS Development Center at SRM. Fill out your details and submit your application.
                        </p>
                        <div>
                            <div className="flex gap-[20px] items-center my-[10px]">
                                <p className="bg-orange w-[27px] h-[27px] flex justify-center items-center rounded-full text-white font-bold text-[14px] fontEpilouge">1</p>
                                <p className={`text-[18px] fontInter ${(formStage === 1)?'font-bold':''}`}>Basic Info & Course Details</p>
                            </div>
                            <div className="flex gap-[20px] items-center my-[10px]">
                                <p className="bg-orange w-[27px] h-[27px] flex justify-center items-center rounded-full text-white font-bold text-[14px] fontEpilouge">2</p>
                                <p className={`text-[18px] fontInter ${(formStage === 2)?'font-bold':''}`}>Getting to know you better</p>
                            </div>
                            <div className="flex gap-[20px] items-center my-[10px]">
                                <p className="bg-orange w-[27px] h-[27px] flex justify-center items-center rounded-full text-white font-bold text-[14px] fontEpilouge">3</p>
                                <p className={`text-[18px] fontInter ${(formStage === 3)?'font-bold':''}`}>Supporting Documents</p>
                            </div>
                            <div className="flex gap-[20px] items-center my-[10px]">
                                <p className="bg-orange w-[27px] h-[27px] flex justify-center items-center rounded-full text-white font-bold text-[14px] fontEpilouge">4</p>
                                <p className={`text-[18px] fontInter ${(formStage === 4)?'font-bold':''}`}>Instructions, T&C</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] flex flex-col items-center">
                        {
                            (formStage === 1)?
                                <form className="w-full" onSubmit={(event)=>{handleSubmitOne(event)}}>
                                    <div className="bg-orange rounded-md p-[50px] flex flex-col gap-[20px]">
                                        <div className="flex flex-col gap-[5px] text-white fontInter text-[16px]">
                                            <p className="font-semibold">Fullname:</p>
                                            <input className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.fullName && 'border-[2px] border-red border-spacing-1'}`} 
                                                type='text' 
                                                placeholder='Hisenberg'
                                                name='fullName'
                                                value={formData.fullName}
                                                onChange={(event)=>{handleChange(event)}}
                                            />
                                            <p className={`ext-sm font-extralight text-[12px] ${ formValidation.fullName ? "visible" :"hidden" }`}>{formValidation.fullName}</p>
                                        </div>
                                        <div className="flex flex-col gap-[5px] text-white fontInter text-[16px]">
                                            <p className="font-semibold">Personal E-mail:</p>
                                            <input className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.personalEmail && 'border-[2px] border-red border-spacing-2'}`} 
                                                type='email' 
                                                placeholder='example@gmail.com'
                                                name='personalEmail'
                                                value={formData.personalEmail}
                                                onChange={(event)=>{handleChange(event)}}
                                            />
                                            <p className={`ext-sm font-extralight text-[12px] ${ formValidation.personalEmail ? "visible" :"hidden" }`}>{formValidation.personalEmail}</p>
                                        </div>
                                        <div className="flex flex-col gap-[5px] text-white fontInter text-[16px]">
                                            <p className="font-semibold">Institute E-mail:</p>
                                            <input className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.instituteEmail && 'border-[2px] border-red border-spacing-1'}`} 
                                                type='email' 
                                                placeholder='student@xyz.edu.in'
                                                name='instituteEmail'
                                                value={formData.instituteEmail}
                                                onChange={(event)=>{handleChange(event)}}
                                            />
                                            <p className={`ext-sm font-extralight text-[12px] ${ formValidation.instituteEmail ? "visible" :"hidden" }`}>{formValidation.instituteEmail}</p>
                                        </div>
                                        <div className="flex flex-col gap-[5px] text-white fontInter text-[16px]">
                                            <p className="font-semibold">Contact Number:</p>
                                            <input className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.contactNumber && 'border-[2px] border-red border-spacing-1'}`} 
                                                type='tel'
                                                pattern="[0-9]{10}"
                                                placeholder='9xxxx xxx83'
                                                name='contactNumber'
                                                value={formData.contactNumber}
                                                onChange={(event)=>{handleChange(event)}}
                                            />
                                            <p className={`ext-sm font-extralight text-[12px] ${ formValidation.contactNumber ? "visible" :"hidden" }`}>{formValidation.contactNumber}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <input type='submit' value="Next" className="bg-orange border-none outline-none text-white fontEpilouge font-extrabold p-1 w-[100px] rounded-md my-10"/>
                                    </div>
                                </form>
                            :(formStage === 2)?
                                <form className="w-full" onSubmit={(event)=>{handleSubmitTwo(event)}}>
                                    <div className="bg-orange rounded-md p-[50px] flex flex-col gap-[20px]">
                                        <div className="flex flex-col gap-[5px] text-white fontInter text-[16px]">
                                            <p className="font-semibold">Register Number:</p>
                                            <input className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.registerNumber && 'border-[2px] border-red border-spacing-1'}`} 
                                                type='text' 
                                                placeholder='RAxxxxxxxxxxxxx'
                                                name='registerNumber'
                                                value={formData.registerNumber}
                                                onChange={(event)=>{handleChange(event)}}
                                            />
                                            <p className={`ext-sm font-extralight text-[12px] ${ formValidation.registerNumber ? "visible" :"hidden" }`}>{formValidation.registerNumber}</p>
                                        </div>
                                        <div className="flex flex-col gap-[5px] text-white fontInter text-[16px]">
                                            <p className="font-semibold">Department:</p>
                                            <select className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.department && 'border-[2px] border-red border-spacing-2'}`}  
                                                placeholder='select'
                                                name='department'
                                                value={formData.department}
                                                onChange={(event)=>{handleChange(event)}}
                                            >
                                                <option value="select">SELECT</option>
                                                <option value="CINTEL">CINTEL</option>
                                            </select>
                                            <p className={`ext-sm font-extralight text-[12px] ${ formValidation.department ? "visible" :"hidden" }`}>{formValidation.department}</p>
                                        </div>
                                        <div className="flex flex-col gap-[5px] text-white fontInter text-[16px]">
                                            <p className="font-semibold">Batch:</p>
                                            <select className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.batch && 'border-[2px] border-red border-spacing-1'}`}  
                                                placeholder='select'
                                                name='batch'
                                                value={formData.batch}
                                                onChange={(event)=>{handleChange(event)}}
                                            >
                                                <option value='select'>SELECT</option>
                                                <option value='1'>Batch 1</option>
                                                <option value='2'>Batch 2</option>
                                            </select>
                                            <p className={`ext-sm font-extralight text-[12px] ${ formValidation.batch ? "visible" :"hidden" }`}>{formValidation.batch}</p>
                                        </div>
                                        <div className="flex flex-col gap-[5px] text-white fontInter text-[16px]">
                                            <p className="font-semibold">CGPA:</p>
                                            <input className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.cgpa && 'border-[2px] border-red border-spacing-1'}`} 
                                                type='number'
                                                // pattern="[6-9]{5} [0-9]{5}"
                                                placeholder='9.2'
                                                name='cgpa'
                                                min="0"
                                                max="10"
                                                step="0.1"
                                                value={formData.cgpa}
                                                onChange={(event)=>{handleChange(event)}}
                                            />
                                            <p className={`ext-sm font-extralight text-[12px] ${ formValidation.cgpa ? "visible" :"hidden" }`}>{formValidation.cgpa}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <input type='submit' value="Next" className="bg-orange border-none outline-none text-white fontEpilouge font-extrabold p-1 w-[100px] rounded-md my-10"/>
                                    </div>
                                </form>
                            :<></>
                        }
                    </div>
                </div>
            </div>
            <FAQ/>
        </>
    )
}