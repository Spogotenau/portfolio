import { Link } from 'react-router-dom'

function PasswordGolem() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          Password Golem
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/TheSolian/Password-Golem'
            className='hover:text-sky-700'
          >
            &lt;Github Link /&gt;
          </Link>
        </h1>
      </div>
      <div>
        <div className=' text-lg mt-16 mx-4 md:mx-auto md:w-2/5 p-8 bg-gray-300 rounded-xl'>
          <p>
            Dieses Projekt wurde in unserem Praxiskurs dem
            &quot;Lernatelier&quot; durchgeführt. Password Golem ist ein
            Passwortmanager, der den Nutzern die Möglichkeit bietet ihre
            Passwörter zu speichern. Ebenfalls können Nutzer sich auch
            Passwörter nach ihren Belieben erstellen lassen. Das Projekt habe
            ich zusammen mit einem Mitschüler Realisiert. Das Projekt wurde mit
            React realisiert und es wurde Tailwind CSS benutzt. Die Nutzerdaten
            wie auch die Passwörter werden auf einer Firebase Datenbank
            gespeichert. Bei diesen Projekt habe ich nur an dem Frontend
            gearbeitet, da dies eines meiner ersten Projekte mit React war.
          </p>
        </div>
        <button className='linkButton mt-16 flex mx-auto text-lg md:text-xl text-gray-200 bg-sky-700 hover:bg-sky-800 font-medium rounded-lg px-5 py-3.5'>
          <Link to='https://portfolio.bbbaden.ch/view/view.php?t=e33cd1c3c2c7b0d53d86'>
            Zum detailierten Mahara Portfolio
          </Link>
        </button>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://www.youtube.com/embed/WNTvnkAd3c4'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default PasswordGolem
