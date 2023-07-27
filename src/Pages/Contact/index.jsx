import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hiddenContact')
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
  return (
    <>
      <div className='hiddenContact mt-60 w-10/12 rounded-lg p-6 md:w-1/3 mx-auto shadow-2xl shadow-slate-800 text-gray-200'>
        <h1 className='text-lg pb-4'>
          Über ein persönliches Kennenlernen würde ich mich sehr freuen.
          Erreichbar bin ich wie folgt:
        </h1>
        <div className='pb-4'>
          <h1 className='text-lg text-center'>E-Mail</h1>
          <div className='text-center'>
            <Link
              to='mailto:jan2005.vontobel@gmail.com'
              className='text-lg text-sky-500'
            >
              jan2005.vontobel@gmail.com
            </Link>
          </div>
        </div>
        <div>
          <h1 className='text-lg text-center'>Mobile</h1>
          <div className='text-center'>
            <Link to='tel:+41774692528' className='text-lg text-sky-500'>
              +41 77 469 25 28
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
