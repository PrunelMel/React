import react from '../assets/react.svg'
const Navbar = () => {
  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            {/* <span className='hidden md:block text-white text-2xl font-bold ml-2'>
              React Jobs
            </span> */}
            <img src={react} alt="" />
            <div className='md:ml-auto'>
              <div className='flex space-x-4'>
                <div className='flex items-center justify-center border border-transparent rounded hover:bg-black'>
                  <a className="text-white p-2">Home</a>
                </div>
                <div className='flex items-center justify-center border border-transparent rounded hover:border-black'>
                  <a className="text-white hover:bg-black p-2">Jobs</a>

                </div>
                <div className='flex items-center justify-center border border-transparent rounded hover:border-black'>
                  <a className="text-white hover:bg-black p-2">Add Jobs</a> 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar