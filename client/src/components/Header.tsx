import { useState } from 'react';
import { Navbar, TextInput,Button } from 'flowbite-react';
import { Link,useLocation } from 'react-router-dom';

import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";


const Header = () => {

  const [isDayMode, setIsDayMode] = useState(true);
  const [searchTerm, setSearchTerm]= useState('');

  const location = useLocation();
  const path = location.pathname;

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
      <Button className='lg:hidden h-10 w-12' color='gray' pill>
        <FaMagnifyingGlass />
      </Button>


      <div className='flex  md:order-1 gap-3'>
        <div onClick={handleChangeIcon}>
          <Button className='w-12 h-10 hidden sm:inline font-black' color='gray' pill>
            {isDayMode? <CiSun /> : <FaMoon />}
          </Button>
        </div>
        <Link to="/signin">
          <Button color='gray' outline gradientDuoTone="purpleToBlue">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} href='/'>
          Home
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} href='/about' >
          About
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} href='/projects' >
          Projects
        </Navbar.Link>
        
      </Navbar.Collapse>
      
    </Navbar>
  )
}

export default Header
