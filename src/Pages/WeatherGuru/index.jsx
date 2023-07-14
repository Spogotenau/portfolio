import { Link } from 'react-router-dom'

function weatherGuru() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          Weather Guru
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/SpogotenauPOGGERS/weatherapp'
            className='hover:text-sky-700'
          >
            &lt;Github Link /&gt;
          </Link>
        </h1>
      </div>
      <div>
        <div className=' text-lg mt-16 mx-4 md:mx-auto md:w-2/5 p-8 bg-gray-300 rounded-xl'>
          <p>
            Weather Guru war mein erstes privates Projekt, welches ich mit React
            realisiert habe. Zusätzlich habe ich mit Tailwind CSS gearbeitet.
            Mithilfe von Weather Guru kann man sich die aktuelle Temperatur und
            die, der drei folgenden Tagen ausgeben lassen für Orte Ihrer Wahl.
            Die Wetterdaten werden bei jeder Abfrage von einer Wetter API
            geholt.
          </p>
        </div>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://www.youtube.com/embed/USmcpoMrFuY'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default weatherGuru
