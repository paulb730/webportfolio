
import { useState } from "react";
import {Button} from "react-bootstrap"

const Contact_form=()=>{
    
    const [Name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [Message, setMessage]=useState("");

    const onSubmit=async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "dade5985-f210-4b21-8834-e22fae65b624");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        const res= await fetch("https://api.web3forms.com/submit",{
       
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json"
    
            },
            body:json 
    
        }).then((res)=>res.json());
        
        if (res.success) {
            console.log("Success",res)
            setName("");
            setEmail("");
            setMessage("");
        }
    }


    return(<div class="contact-container" >
            <form onSubmit={onSubmit}  action="" class="contact-left">
            <h3>Contáctame</h3>
            <input type="text"  value={Name} name="full_name" class="contact-inputs" placeholder="Ingresa tu nombre" 
            onChange={(e)=>setName(e.target.value)} required/>
            <input type="email" name="email" class="contact-inputs" value={Email} placeholder="Ingresa tu correo"
             onChange={(e)=>setEmail(e.target.value)} required/>
            <textarea name="message" value={Message} placeholder="Ingresa tu mensaje" class="contact-area"
            onChange={(e)=>setMessage(e.target.value)} required>
            </textarea>
            <Button type="submit" className="btn btn-secondary">Submit</Button>
            </form>  
          </div>)



}

export default Contact_form;