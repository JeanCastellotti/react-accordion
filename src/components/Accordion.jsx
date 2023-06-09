import { useState } from 'react'
import AccordionItem from './AccordionItem'

const faqs = [
  {
    title: 'Lorem ipsum dolor sit amet?',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus eos facilis aliquid ab, quo nam commodi facere, fugit, aperiam natus dolorem quia.',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus, dolore unde eaque dignissimos eos possimus necessitatibus expedita perspiciatis molestias optio molestiae excepturi adipisci voluptas.',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consequatur eveniet, est assumenda iste, similique dolore molestiae eligendi sunt quo earum numquam.',
  },
]

function Accordion() {
  const [currentItem, setCurrentItem] = useState(null)

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 pt-20">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          index={index}
          currentItem={currentItem}
          onOpen={setCurrentItem}
          {...faq}
        />
      ))}
    </div>
  )
}

export default Accordion
