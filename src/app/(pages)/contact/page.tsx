"use client";
import Footer from "@/app/components/Footer";
import { SignupValidationSchema } from "@/app/validationScheme";
import { Formik, useFormik } from "formik";
import { SetStateAction, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: "",
  email: "",
  company: "",
  title: "",
};

export default function Page() {
  const [email, setEmail] = useState('');
  const notify = () => toast("Message sent successfully");

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = () => {
    if (email) {
      notify();
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setSubmitted(true);
      resetForm();
      notify(); // Notify here on form submission
    },
    validationSchema: SignupValidationSchema,
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
  } = formik;

  return (
    <div className="flex items-center text-center flex-col min-h-screen bg-white pt-[100px]">
      <div className="flex items-center flex-col md:ml-[-450px] ">
        <h1 className="text-3xl font-bold md:text-4xl text-[#36536B] w-[327px] h-[116px] md:w-[560px] md:h-[133px]">
          Submit a help request and we’ll get in touch shortly.
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center flex-col w-[327px] h-[499px] mt-[60px] md:ml-[-500px] md:mt-[-20px]">
        <input
          className="w-[327px] md:w-[427px] h-[42px] border-none border-b-2 border-[#36536B] focus:outline-none mt-[25px]"
          value={values.name}
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Name"
        />
        <div className="w-[327px] h-[1px] bg-[#36536B] md:w-[437px]"></div>
        {errors.name && <p className="text-red-700 ml-[-200px] mt-[10px] md:text-xl md:ml-[-250px]">{errors.name}</p>}

        <input
          className="w-[327px] h-[42px] border-none border-b-2 border-[#36536B] md:w-[437px] focus:outline-none mt-[25px]"
          value={values.email}
          type="text"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email Address"
        />
        <div className="w-[327px] md:w-[437px] h-[1px] bg-[#36536B]"></div>
        {errors.email && <p className="text-red-700 ml-[-200px] mt-[10px] md:text-xl  md:ml-[-250px]">{errors.email}</p>}

        <input
          className="w-[327px] h-[42px] border-none border-b-2 md:w-[437px] border-[#36536B] focus:outline-none mt-[25px]"
          value={values.company}
          type="text"
          name="company"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Company Name"
        />
        <div className="w-[327px] h-[1px] md:w-[437px] bg-[#36536B]"></div>
        {errors.company && <p className="text-red-700 ml-[-170px] mt-[10px] md:text-xl  md:ml-[-215px]">{errors.company}</p>}

        <input
          className="w-[327px] h-[42px] border-none border-b-2 md:w-[437px] border-[#36536B] focus:outline-none mt-[25px]"
          value={values.title}
          type="text"
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Title"
        />
        <div className="w-[327px] h-[1px] bg-[#36536B] md:w-[437px]"></div>
        {errors.title && <p className="text-red-700 ml-[-200px] mt-[10px] md:text-xl  md:ml-[-260px]">{errors.title}</p>}

        <button type="submit" className="w-[122px] h-[38px] bg-none rounded-2xl border-2 border-[#36536B] ml-[-210px] mt-[35px] hover:bg-[#36536B] hover:text-white">
          Submit
        </button>
        <ToastContainer />
      </form>

      <div className='items-center justify-center flex-col md:mt-[-250px] w-[252px] bg-white h-[200px] text-center mt-[100px] lg:ml-[750px]'>
        <h1 className='font-extrabold text-[#36536B] text-3xl'>Ready to start?</h1>
        <input
          className='w-[340px] h-[50px] rounded-2xl ml-[-40px] mt-[20px] pl-[20px]'
          type="text"
          placeholder='Enter email address'
          value={email}
          onChange={handleInputChange}
        />
        <button
          onClick={handleButtonClick}
          className={`w-[340px] h-[50px] rounded-2xl ml-[-40px] mt-[20px] text-white bg-[#BA4270] ${!email ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!email}
        >
          Schedule a Demo
        </button>
        <ToastContainer />
      </div>


    </div>
  );
}

function setSubmitted(_arg0: boolean) {
  console.log("Form submitted successfully");
}
