import { Link } from 'react-router-dom'

function LibraryClient() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          Library-Client
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/Spogotenau/Library-Client'
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
            Der Library-Client ist der webbasierte Client der Library-API.
            Entwickelt wurde der Client mit React, TypeScript und Tailwind CSS.
            Auf der Seite haben normale Nutzer die Möglichkeit, ihre gelesenen
            Bücher ihrer Liste hinzuzufügen und zu entfernen. Als Admin kann man
            zusätzlich alle Bücher verwalten, neue Bücher hinzufügen sowie alle
            Nutzerkonten einsehen.
          </p>
        </div>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://www.youtube.com/embed/5ZU2U9heZuk?si=wJSqSGiIPgCWpopA'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default LibraryClient
