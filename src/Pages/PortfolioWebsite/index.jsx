import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          Portfolio Website
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/SpogotenauPOGGERS/portfolio'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-sky-700'
          >
            &lt;Github Link /&gt;
          </Link>
        </h1>
      </div>
      <div>
        <div className=' text-lg mt-16 mx-4 md:mx-auto md:w-2/5 p-8 bg-gray-300 rounded-xl'>
          <p>
            Auch diese Website, worauf Sie sich jetzt gerade befinden ist ein
            Projekt von mir. Diese Website hat das Ziel, mich vorzustellen.
            Leser können durch das Lesen der Website mehr über mich und meine
            Arbeit erfahren. Die Seite habe ich mit React und Tailwind CSS
            erstellt.
          </p>
        </div>
      </div>
    </>
  )
}

export default Portfolio
