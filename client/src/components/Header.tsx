import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; 


const Header = () => {
  return (
    <div>
      <div>
        <h1><span>Saba's</span>Blog</h1>
      </div>
      <div>
        <input 
            type="text"
            placeholder='Search...'
        />
        <FontAwesomeIcon icon={faHome} />
      </div>
    </div>
  )
}

export default Header
