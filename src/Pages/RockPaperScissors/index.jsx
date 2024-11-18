import { Link } from 'react-router-dom'

function RockPaperScissors() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          Schere, Stein, Papier
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/Spogotenau/RockPaperScissors'
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
            Schere, Stein, Papier war eines meiner ersten privaten
            JavaScript-Projekte. Im Grunde ist es nur ein ganz simples Programm,
            nämlich altbekanntes Schere, Stein, Papier. Das Einzige, was ich
            geändert habe, ist, dass es kein unentschieden geben kann. Aber
            sonst funktioniert es wie folgt, der Nutzer wählt zwischen Schere,
            Stein oder Papier aus und nach drei Sekunden kommt der Zug des
            Programmes und danach wird ausgegeben, ob jetzt der Spieler oder das
            Programm gewonnen hat.
          </p>
        </div>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://www.youtube.com/embed/8Z1QEpsGH3o'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default RockPaperScissors
