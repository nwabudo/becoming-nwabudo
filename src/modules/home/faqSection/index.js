"use client"
import Image from "next/image";
import FaqImage from "../../../../public/images/webp/faq.webp";

import { Flip, Slide } from "react-awesome-reveal";
import { faqData } from "./data";

const FaqItem = ({ data }) => {
  const { question, answer } = data || {};

  return <div className="text-center text-base md:text-lg xl:text-xl">
    <Slide direction="up" cascade damping={0.1} triggerOnce>
      <p className="text-primary font-bold">{question}</p>
      <p className="text-textColor">{answer}</p>
    </Slide>
  </div>
}

const FaqSection = () => {
  return (
    <section className='bg-[#FDF2DD] relative'>
      <div className='container pt-[6rem] pb-[8rem]'>
        <h2 className="group font-rusilla text-[5rem] leading-[0.7] md:text-[9.25rem] md:leading-[0.8] xl:text-[16.25rem] xl:leading-[0.7] text-primary text-center">
          <Slide direction="up" cascade damping={0.2} triggerOnce className="inline-flex">
            <span>Fa</span>
            <span className="relative overflow-hidden">
              <span>q</span>
              <span className="absolute h-fit left-2 md:left-3.5 xl:left-6 mt-2.5 md:mt-[26px] xl:mt-8 w-[65%]">
                <Flip delay={0.2} direction="vertical">
                  <Image src={FaqImage} alt="" className="group-hover:grayscale transition-all ease-out duration-200" />
                </Flip>
              </span>
            </span>
            <span>s</span>
          </Slide>
        </h2>
        <div className="mt-14 w-full md:w-8/12 lg:w-7/12 xl:w-6/12 md:px-2 lg:px-4 mx-auto flex flex-col space-y-6">
          {faqData.map((faq) => <FaqItem key={faq?.id} data={faq} />)}
        </div>
      </div>
    </section>
  )
}

export default FaqSection