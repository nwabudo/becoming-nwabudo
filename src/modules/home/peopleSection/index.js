import Image from "next/image";
import { peopleList } from "./data";

const Card = ({ data }) => {
  const { firstName, lastName, role, image } = data || {};
  return <div className="group transition-all ease-in-out duration-150">
    <div className="h-[13 rem] md:h-[17.188rem]">
      <Image
        src={image} alt={firstName || ""}
        className="h-full w-full object-cover group-hover:grayscale transition-all ease-in-out duration-150"
      />
    </div>
    <div className="pt-3">
      <p className="text-lg leading-6 md:text-lg lg:text-xl xl:text-2xl 
      text-primary xl:leading-7 group-hover:text-textColor transition-all ease-in-out duration-150"
      >
        <span className="">{firstName}</span>
        <br />
        <span className="">{lastName}</span>
      </p>
      <p className="mt-2 text-sm md:text-sm-15 lg:text-base text-secondary">
        {role}
      </p>
    </div>
  </div>
}

const PeopleSection = () => {
  return (
    <section className='bg-white relative'>
      <div className='container pt-[6rem] pb-[8rem]'>
        <h2 className="font-rusilla text-6xl xl:text-[4.063rem] text-primary text-center flex flex-col md:flex-col flex-wrap justify-center items-center  md:gap-5">
          <span>team Bride</span> 
          <span className="text-secondary text-4xl xl:text-[3.063rem] pt-2">x</span> 
          <span>team Groom</span>
        </h2>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16">
          {peopleList.map((person) => <Card key={person?.id} data={person} />)}
        </div>
      </div>
    </section>
  )
}

export default PeopleSection