import {useRef} from 'react'

import Button from "../../components/Button";
import './Form.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Form = () => {
    const form = useRef();

    const sendEmail = async (e) => {
      e.preventDefault();

      const SERVICE_ID = "service_4s41c9n";
      const TEMPLATE_ID = "template_yodaxxe";
      const PUBLIC_KEY = "X16HCjjGA5XdjhX1Q";
  
      try{
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);  
      console.log(result.text);
      toast.success('Message sent successfully');
      }
      catch(e){
        console.log(e);
        toast.error('An error occurred. Please try again later');
      }finally{
        form.current.reset();
      }
    };
  return (
    <main className="flex flex-col items-center justify-center h-full md:pt-10 pt-20 gap-3 ">
      <h1 className="text-light md:text-5xl text-2xl text-center">Send me <span className="text-primary">a message!</span></h1>
      <p className="text-light md:text-xl text-lg text-center">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>

      <form ref={form} onSubmit={sendEmail}  className="text-white md:w-1/2 w-4/5 mt-9 flex flex-col gap-9">
        <div >
          <label className="block text-light text-sm ">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 text-light leading-tight focus:outline-none focus:shadow-outline bg-transparent appearance-none"
            placeholder="Insert your name"
          />
        </div>
        <div >
          <label className="block text-light text-sm ">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 text-light leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            placeholder="Insert your email"
          />
        </div>
        <div >
          <label className="block text-light text-sm">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="w-full px-3 py-2 text-light leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            placeholder="Write your message"
          ></textarea>
        </div>
        <Button text="Send" />
      </form>
      <ToastContainer theme="dark" autoClose={2000}/>
    </main>
  );
};

export default Form;
