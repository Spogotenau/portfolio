import { Link } from 'react-router-dom'

function QuizGame() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          Quiz Game
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/Spogotenau/LA_1302-Quiz-Game'
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
            Dieses Projekt wurde in unserem Praxiskurs, dem
            &quot;Lernatelier&quot; durchgeführt und war mein erstes Projekt mit
            JavaScript. Wie der Name des Projekts es schon sagt, geht es hier um
            ein Quiz Spiel. Der Nutzer bekommt eine Frage mit vier
            Antwortmöglichkeiten, wovon eine richtig ist. Durch jede richtige
            Antwort bekommt man Punkte, antwortet man falsch, ist die Spielrunde
            vorbei und man muss wieder bei 0 Punkten starten. Wie ich es auch in
            meinem Mahara Beitrag geschrieben habe, erwähne ich es auch noch
            hier. Das Projekt habe ich fast 100 % von einem YouTube Video
            kopiert. Wieso ich es trotzdem hier aufliste? Als ich dieses Projekt
            begonnen habe, hatte ich noch keine Ahnung von JavaScript und der
            DOM Manipulation. Doch durch das Durcharbeiten dieses YouTube-Videos
            habe ich besser verstanden, wie dieses Programm funktioniert. Und
            dieses Projekt hat auch eine grosse Rolle gespielt, bei der
            Entstehung zu meiner Leidenschaft zu JavaScript.
          </p>
        </div>
        <button className='linkButton mt-16 flex mx-auto text-lg md:text-xl text-gray-200 bg-sky-700 hover:bg-sky-800 font-medium rounded-lg px-5 py-3.5'>
          <Link
            to='https://portfolio.bbbaden.ch/view/view.php?t=2f6f1370a6665bd93a6b'
            target='_blank'
            rel='noopener noreferrer'
          >
            Zum detailierten Mahara Portfolio
          </Link>
        </button>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://www.youtube.com/embed/LiWlbOLfrws'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default QuizGame
