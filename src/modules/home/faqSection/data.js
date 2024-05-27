import Link from "next/link";

export const faqData = [
  {
    id: 1,
    question: "Where is the wedding happening?",
    answer: "The wedding is happening in Lagos Nigeria"
  },
  {
    id: 2,
    question: "Is the wedding strictly by invitation?",
    answer: "Yes, the wedding ceremony is strictly by invitation. An access card will be sent to you after your RSVP."
  },
  {
    id: 3,
    question: "When is the RSVP deadline?",
    answer: "Please RSVP by August 15th, so we can have an accurate headcount."
  },
  {
    id: 4,
    question: "Are kids welcome?",
    answer: <>Kids are welcome at our Wedding Mass.
      <br />However, we will not be including them in the plans for reception</>
  },
  {
    id: 5,
    question: "Can I bring a plus one to the wedding?",
    answer: "While we will love to have as many people there, one access card admits one person."
  },
  {
    id: 6,
    question: "What kind of shoes should/shouldn't I wear?",
    answer: `Calling all ladies! Do not wear stiletto heels. I repeat, do not wear stiletto 
    heels. There are a bunch of grassy/dirt areas that you might have to 
    walk in so wear chunky heels or sandals. Can't have any of you ruining 
    nice shoes or breaking any ankles.`
  },
  {
    id: 7,
    question: "Is it okay to take pictures with our phones and cameras during the wedding?",
    answer: "Yes! We would love you to take photos, upload them to our photo library and share on Social Media. Don't forget to use our hashtags though #BecomingNwabudo winks😉"
  },
  {
    id: 8,
    question: "What time will the reception end?",
    answer: "The reception will end at 5pm"
  },
  {
    id: 9,
    question: "Is there a gift registry?",
    answer: <>
      <span>Yes. Visit our cash registry</span>
      <span className="pl-2 text-primary underline underline-offset-4">
        <Link 
        href="https://withjoy.com/becoming-nwabudo/registry" 
        target="_blank" 
        rel="noopener noreferrer">here.</Link>
      </span>
    </>
  },
  {
    id: 10,
    question: "What is the color(s) of the day?",
    answer: "Wine, lilac and gold"
  },
]