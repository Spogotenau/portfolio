import { Link } from 'react-router-dom'

function ShoeBackend() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          Mein erstes Backend
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/SpogotenauPOGGERS/LA_1303'
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
            &quot;Lernatelier&quot; durchgeführt. Ich habe mich mit Node ein
            Backend erstellt, welches über eine Login und Registrierung-Funktion
            verfügt und verschiedene Schuhe aus einem Array abruft und verändern
            lässt mittels CRUD Operationen. Das Projekt habe ich durchgeführt,
            bevor wir das Modul über Backends bearbeitet haben, somit dachte ich
            auch nach dem Projekt, dass das Backendmodul einfach wird. Nachdem
            wir jetzt das Backendmodul bearbeitet haben, bin ich sehr glücklich,
            dass ich nicht gewartet habe auf das Backendmodul. Ich bin jetzt in
            der Lage ein Backend zu erstellen, mit ASP.NET aber auch mit Node,
            was ich mir abseits eines Moduls angeeignet habe.
          </p>
        </div>
        <button className='linkButton mt-16 flex mx-auto text-lg md:text-xl text-gray-200 bg-sky-700 hover:bg-sky-800 font-medium rounded-lg px-5 py-3.5'>
          <Link
            to='https://portfolio.bbbaden.ch/view/view.php?t=4f9df80bba279072e3c7'
            target='_blank'
            rel='noopener noreferrer'
          >
            Zum detailierten Mahara Portfolio
          </Link>
        </button>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://www.youtube.com/embed/va4j-UlXPb0'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default ShoeBackend
