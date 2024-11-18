import { Link } from 'react-router-dom'

function RandomFact() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          Random Fact
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/Spogotenau/RandomFact'
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
            Random Fact gehörte zu einem meiner ersten privaten
            JavaScriptprojekten. Das Programm funktioniert wie folgt, klickt der
            Nutzer auf den Button in der Mitte der Seite, erscheint ein
            zufälliger Fun Fact. Der Nutzer hat alle zehn Sekunden die
            Möglichkeit sich einen neuen zufälligen Fun Fact auszugeben.
          </p>
        </div>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://www.youtube.com/embed/3VN809OY2YU'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default RandomFact
