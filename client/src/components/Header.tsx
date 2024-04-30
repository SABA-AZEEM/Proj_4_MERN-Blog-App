import { useState } from 'react';
import { Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";


const Header = () => {

  const [isDayMode, setIsDayMode] = useState(true);
  const [searchTerm, setSearchTerm]= useState('');

  const handleChangeIcon = ()=>{
    setIsDayMode(prevMode => !prevMode)
  }

  const handleSubmit = ()=>{

  }

  return (
    <Navbar className='border-b-2'>
      <Link 
        to='/'
        className='self-center text-sm sm:text-xl whitespace-nowrap font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-400 rounded-lg text-white'>
          Saba's
        </span>
        Blog
      </Link>

      <form onSubmit={handleSubmit}>
        <TextInput 
          type='text'
          placeholder='Search...'
          rightIcon={FaMagnifyingGlass}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </form>
      

      <div className='flex  items-center justify-between'>
        <div onClick={handleChangeIcon}>
          <button>
            {isDayMode? <CiSun /> : <FaMoon />}
          </button>
        </div>

        <div>
          <Link to="/signin">Sign In</Link>
        </div>
        <Navbar.Toggle />
      </div>
      
      <Navbar.Collapse>
        <Navbar.Link href='/'>
          Home
        </Navbar.Link>
        <Navbar.Link  href='/about'>
          About
        </Navbar.Link>
        <Navbar.Link href='/projects'>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default Header
