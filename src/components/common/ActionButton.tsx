const ActionButton = ({handleFn, className, text}: {handleFn: () => void, className: string, text: string}) => {
  return (
    <button 
    onClick={handleFn}
    className={`py-2 px-4 text-center rounded-[6px] bg-blue-500 font-medium whitespace-nowrap ${className}`}>
      {text}
    </button>
  )
}

export default ActionButton