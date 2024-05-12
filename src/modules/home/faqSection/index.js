import Image from "next/image";
import FaqImg from "../../../../public/images/webp/faq.webp";
import { faqData } from "./data";

const FaqItem = ({ data }) => {
  const { question, answer } = data || {};

  return <div className="text-center text-base md:text-lg xl:text-xl">
    <p className="text-primary font-bold">{question}</p>
    <p className="text-textColor">{answer}</p>
  </div>
}

const FaqSection = () => {
  return (
    <section className='bg-[#FDF2DD] relative'>
      <div className='container pt-[6rem] pb-[8rem]'>
        <h2 className="font-rusilla text-6xl xl:text-[4.063rem] text-primary text-center flex flex-col md:flex-col flex-wrap justify-center items-center  md:gap-5">
          <Image src={FaqImg} alt="" />
        </h2>
        <div className="mt-14 w-full md:w-8/12 lg:w-7/12 xl:w-6/12 md:px-2 lg:px-4 mx-auto flex flex-col space-y-6">
          {faqData.map((faq) => <FaqItem key={faq?.id} data={faq} />)}
        </div>
      </div>
    </section>
  )
}

export default FaqSection