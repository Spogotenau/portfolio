import { Link } from 'react-router-dom'

function CooLet() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          CooLet
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/Spogotenau/CooLet'
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
            &quot;Lernatelier&quot; durchgeführt. CooLet ist eine Lernplattform,
            die es Nutzern ermöglicht ihre Karteikarten Online zu lernen. Nutzer
            können vorgeschlagene Lernsets lernen oder auch bestimmte Lernsets
            suchen. Auch kann man als eingeloggter Nutzer seine eigenen Lernsets
            erstellen und für andere zugänglich machen. Dieses Projekt habe ich
            zusammen mit zwei Mitschülern realisiert. Das Projekt wurde mit
            JavaScript realisiert im Frontend und mit Node im Backend. Für das
            Backend war ich alleine zuständig und auch bei dem Frontend habe ich
            sehr viel realisiert, da meine Gruppenmitglieder oftmals Hilfe
            benötigten. Nutzerdaten wie auch die Daten der Lernsets werden in
            einer MongoDB Datenbank gespeichert.
          </p>
        </div>
        <button className='linkButton mt-16 flex mx-auto text-lg md:text-xl text-gray-200 bg-sky-700 hover:bg-sky-800 font-medium rounded-lg px-5 py-3.5'>
          <Link
            to='https://portfolio.bbbaden.ch/view/view.php?t=e87b12b97f0293a2298a'
            target='_blank'
            rel='noopener noreferrer'
          >
            Zum detailierten Mahara Portfolio
          </Link>
        </button>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://www.youtube.com/embed/oGXrz44qlaU'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default CooLet
