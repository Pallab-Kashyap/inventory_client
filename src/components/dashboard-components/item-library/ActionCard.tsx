


const ActionCard = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const menuRef = useRef(null);

  // useImperativeHandle(ref, () => ({
  //   toggleMenu: () => setIsOpen((prev) => !prev),
  //   closeMenu: () => setIsOpen(false),
  // }));

  // // Close menu when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <div className='h-20 w-40 border absolute right-20 rounded bg-white '>
        <div className=' w-full h-1/2  text-blue-500 flex items-center pl-4'>Edit</div>
        <div className='bg-stone-300 w-full h-1/2  text-red-500 flex items-center pl-4'>Delete</div>
    </div>
  )
}

export default ActionCard