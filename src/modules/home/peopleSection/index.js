"use client"
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import { peopleList } from "./data";

const Card = ({ data }) => {
  const { firstName, lastName, role, image } = data || {};
  return <div className="group transition-all ease-in-out duration-150">
    <Slide direction="up" cascade damping={0.1} triggerOnce>
      <div className="h-[13 rem] md:h-[17.188rem]">
        <Image
          src={image} alt={firstName || ""}
          className="h-full w-full object-cover group-hover:grayscale transition-all ease-in-out duration-150"
        />
      </div>
      <div className="pt-3">
        <div className="text-lg leading-6 md:text-lg lg:text-xl xl:text-2xl 
      text-primary xl:leading-7 group-hover:text-textColor transition-all ease-in-out duration-150"
        >
          <Slide delay={0.1} direction="up" cascade damping={0.1} triggerOnce>
            <span className="">{firstName}</span>
            <span className="">{lastName}</span>
          </Slide>
        </div>
        <Slide delay={0.2} direction="up" triggerOnce>
          <p className="mt-2 text-sm md:text-sm-15 lg:text-base text-secondary">
            {role}
          </p>
        </Slide>
      </div>
    </Slide>
  </div>
}

const PeopleSection = () => {
  return (
    <section className='bg-white relative'>
      <div className='container pt-[6rem] pb-[8rem]'>
        <h2 className="font-rusilla text-6xl leading-[0.9] xl:text-[4.063rem] text-primary text-center flex flex-col md:flex-row flex-wrap justify-center items-center  md:gap-5">
          <Slide direction="up" cascade damping={0.1} triggerOnce>
            <span>team Bride</span>
            <span className="text-secondary text-4xl xl:text-[3.063rem] md:pt-2">x</span>
            <span>team Groom</span>
          </Slide>
        </h2>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 md:gap-x-8 gap-y-14 md:gap-y-16">
          {peopleList.map((person) => <Card key={person?.id} data={person} />)}
        </div>
      </div>
    </section>
  )
}

export default PeopleSection