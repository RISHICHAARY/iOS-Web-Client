import { useState } from "react";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm(){

    const [pageState,setPageState] = useState(
        {
            isLoading: false,
        }
    );

    const [formData,setFormData] = useState(
        {
            senderName:"",
            senderEmail:"",
            messageType:"",
            message:"",
        }
    );

    const [formValidation,setFormValidation] = useState(
        {
            senderName:null,
            senderEmail:null,
            messageType:null,
            message:null,
        }
    )

    const handleChange = (event) =>{
        const { name,value } = event.target;
        setFormData( (prev)=>({ ...prev,[name]:value }) );
        setFormValidation( (prev)=>({ ...prev,[name]:null }) );
    }

    const handleValidation = () =>{

        let inValid = false;
        if(formData.senderName === ""){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,senderName:"Please enter your name." }) );
        }
        if(formData.senderEmail === ""){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,senderEmail:"Please enter your email." }) );
        }
        if(formData.messageType === "select" || formData.messageType === ""){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,messageType:"Please select a message type." }) );
        }
        if(formData.message === "" || formData.message.length<25){
            inValid = true;
            setFormValidation( (prev)=>({ ...prev,message:"Please enter valid message minimum of 25 words." }) );
        }
        return inValid;
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!handleValidation()){
            console.log("API calling")
            setPageState((prev)=>({...prev,isLoading:true}));
            Axios.post("https://ios-web-server.onrender.com/api/Contact/sendMessage", {from:formData.senderEmail,name:formData.senderName, subject: formData.messageType, body: formData.message}).then((response)=>{
                setPageState((prev)=>({...prev,isLoading:false}));
                if(response.status === 200){
                    toast.success(response.data.message);
                }
                else{
                    toast.error(response.data.message);
                }
            })
        }
    }

    return(
        <div className="flex justify-center items-center w-full my-[100px]">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="flex flex-col w-[75%] gap-[20px]">
                <p className="fontEpilouge text-[28px] font-extrabold">Ask Us Anything</p>
                <form className="w-full" onSubmit={(event)=>{handleSubmit(event)}}>
                    <div className="bg-orange p-[20px] rounded-md flex flex-col gap-[20px]">
                        <div className="flex justify-between gap-[20px]">
                            <div className="flex flex-col w-[50%]">
                                <input
                                    placeholder="Hisenberg" 
                                    type='text'
                                    className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.senderName && 'border-[2px] border-red border-spacing-2'}`}
                                    name='senderName'
                                    value={formData.senderName}
                                    onChange={(event)=>{handleChange(event)}}
                                />
                                <p className={`ext-sm font-extralight text-[12px] text-white ${ formValidation.senderName ? "visible" :"hidden" }`}>{formValidation.senderName}</p>
                            </div>
                            <div className="flex flex-col w-[50%]">
                                <input
                                    placeholder="example.gmail.com" 
                                    type='email'
                                    className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.senderEmail && 'border-[2px] border-red border-spacing-2'}`}
                                    name='senderEmail'
                                    value={formData.senderEmail}
                                    onChange={(event)=>{handleChange(event)}}
                                />
                                <p className={`ext-sm font-extralight text-[12px] text-white ${ formValidation.senderEmail ? "visible" :"hidden" }`}>{formValidation.senderEmail}</p>
                            </div>
                        </div>
                        <div>
                            <select 
                                className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.messageType && 'border-[2px] border-red border-spacing-2'}`}
                                name='messageType'
                                value={formData.messageType}
                                onChange={(event)=>{handleChange(event)}}
                            >
                                <option value='select'>SELECT</option>
                                <option value='Querry'>Querry</option>
                            </select>
                            <p className={`ext-sm font-extralight text-[12px] text-white ${ formValidation.messageType ? "visible" :"hidden" }`}>{formValidation.messageType}</p>
                        </div>
                        <div>
                            <textarea
                                placeholder="Enter your message here...."
                                rows='5' 
                                type='text'
                                className={`rounded-sm text-black p-[5px] outline-none w-full ${ formValidation.department && 'border-[2px] border-red border-spacing-2'}`}
                                name='message'
                                value={formData.message}
                                onChange={(event)=>{handleChange(event)}}
                            />
                            <p className={`ext-sm font-extralight text-[12px] text-white ${ formValidation.message ? "visible" :"hidden" }`}>{formValidation.message}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <input disabled={pageState.isLoading} type='submit' value={(pageState.isLoading?"Sending...":"Next")} className={`bg-orange w-[150px] border-none outline-none text-white fontEpilouge font-extrabold p-1 rounded-md my-10 ${(pageState.isLoading? "opacity-50":"")}`}/>
                    </div>
                </form>
            </div>
        </div>
    )
}