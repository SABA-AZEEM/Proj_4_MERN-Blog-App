import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faSun,faMoon } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';
import { Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Header = () => {

  const [modeIcon, setModeIcon] = useState(faSun);
  const [searchTerm, setSearchTerm]= useState('');
  const handleChangeIcon = ()=>{
    modeIcon === faSun ? setModeIcon(faMoon) : setModeIcon(faSun) ;
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
          rightIcon={faMagnifyingGlass}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </form>
      <div>
        <nav>
          <ul className='flex justify-between'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <button onClick={handleChangeIcon}>
        <FontAwesomeIcon icon={modeIcon} />
        </button>
      </div>
      <div>
        <a href="/signin">Sign In</a>
      </div>
    </Navbar>
  )
}

export default Header
