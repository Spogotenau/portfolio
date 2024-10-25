import { Link } from 'react-router-dom'

function EcoMania() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          EcoMania
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/Spogotenau/IDPA_Hauptprojekt'
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
            EcoMania war mein IDPA-Projekt, welches ich zusammen mit drei
            Klassenkameraden realisiert habe. Die Applikation wurde mit React
            und TypeScript entwickelt. Für das Styling haben wir Tailwind CSS
            und die shadcn/ui Library verwendet. Auf EcoMania können Schüler
            spielerisch durch das Lösen von Quizzen Schulstoff lernen. Als
            Lehrer mit einem Admin-Konto hat man die Möglichkeit, die gelösten
            Quizze der Schüler einzusehen und neue Fragen sowie Kategorien zu
            erstellen. Als Schüler hat man die Möglichkeit, seine gelösten
            Quizze in der persönlichen Statistikseite anzusehen. Bei den Quizzen
            gibt es zwei verschiedene Fragearten: Multiple-Choice-Fragen und
            Richtig-oder-Falsch-Fragen.
          </p>
        </div>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://youtube.com/embed/Eb5iRqAhudo'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default EcoMania
