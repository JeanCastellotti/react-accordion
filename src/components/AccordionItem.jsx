function AccordionItem({ index, title, text, currentItem, onOpen }) {
  const isOpen = index === currentItem

  return (
    <div
      onClick={() => onOpen(isOpen ? null : index)}
      className={`grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-x-6 gap-y-8 rounded border-t-4 border-y-white bg-white py-5 pl-6 pr-12 shadow ${
        isOpen && 'border-t-[#087f5b]'
      }`}
    >
      <span
        className={`self-start text-2xl font-medium text-[#ced4da] ${
          isOpen && '!text-[#087f5b]'
        }`}
      >
        {index + 1 < 9 && 0}
        {index + 1}
      </span>
      <h2 className={`text-2xl font-medium ${isOpen && 'text-[#087f5b]'}`}>
        {title}
      </h2>
      <span className="self-start text-2xl font-medium">
        {isOpen ? '-' : '+'}
      </span>
      {isOpen && <p className=" col-[2/-1] pb-4 leading-relaxed">{text}</p>}
    </div>
  )
}

export default AccordionItem
