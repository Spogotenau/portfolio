import { Link } from 'react-router-dom'

function LibraryAPI() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          Library-API
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/Spogotenau/Library-API'
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
            Die Library-API ist eine API, die mit Spring Boot entwickelt wurde
            und PostgreSQL als Datenbank verwendet. Da ich zuvor noch nie mit
            Spring Boot oder PostgreSQL gearbeitet habe, nahm ich mir mehrere
            kleine Ziele vor, die nacheinander implementiert wurden. Als Nutzer
            kann man Bücher abfragen und gelesene Bücher seiner persönlichen
            Liste von gelesenen Büchern hinzufügen. Ebenso ist es möglich, mit
            einem Adminkonto Bücher hinzuzufügen, zu verändern oder zu löschen.
            Einen Client, der die API nutzt, gibt es momentan noch nicht, jedoch
            ist dieser geplant.
          </p>
        </div>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://www.youtube.com/embed/IXw7S3yN-pI?si=5r1hx88NDRGrvdXD'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default LibraryAPI
