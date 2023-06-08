import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  const [showList, setShowList] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth
      setWidth(newWidth)
      setShowList(newWidth > 768)
      setShowIcon(newWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleClick = () => {
    if (width <= 768) {
      setShowList(!showList)
    }
  }

  const setListFalse = () => {
    if (width <= 768) {
      setShowList(false)
    }
  }

  return (
    <nav className='nav text-gray-200 h-20 text-lg fixed top-0 w-screen z-50 shadow-2xl'>
      <div className='grid grid-cols-2 items-center py-4'>
        <Link className='w-12 md:ml-64 ml-12' to={'/'} onClick={setListFalse}>
          <img src={logo} alt='logo' className='h-12' />
        </Link>
        {showIcon && (
          <div
            className='text-3xl mr-12 flex justify-end'
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
        {showList && (
          <ul className='links flex justify-center md:w-auto md:flex-row md:justify-end md:col-span-1 col-span-2 md:mt-0 mt-4 mx-auto w-full flex-col md:gap-10 items-center md:mr-64'>
            <li className='w-full md:border-t-0 border-t-2 border-slate-700'>
              <Link
                className=' w-full flex justify-center py-4 md:py-0'
                to={'/'}
                onClick={handleClick}
              >
                <p>Startseite</p>
              </Link>
            </li>
            <li className='w-full md:border-t-0 border-t-2 border-slate-700'>
              <Link
                className=' w-full flex justify-center py-4 md:py-0'
                to={'/überMich'}
                onClick={handleClick}
              >
                <p className='whitespace-nowrap'>Über mich</p>
              </Link>
            </li>
            <li className='w-full md:border-t-0 border-t-2 border-slate-700'>
              <Link
                className=' w-full flex justify-center py-4 md:py-0'
                to={'/portfolio'}
                onClick={handleClick}
              >
                <p>Portfolio</p>
              </Link>
            </li>
            <li className=' w-full md:border-t-0 border-t-2 border-slate-700'>
              <Link
                className='w-full flex justify-center py-4 md:py-0'
                to={'/kontakt'}
                onClick={handleClick}
              >
                <p>Kontakt</p>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
