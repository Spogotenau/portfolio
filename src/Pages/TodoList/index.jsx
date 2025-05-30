import { Link } from 'react-router-dom'

function TodoList() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className='text-center text-sky-700 font-bold text-2xl md:text-3xl'>
          To-do-Liste
        </h1>
        <h1 className=' text-center text-xl md:text-2xl '>
          <Link
            to='https://github.com/Spogotenau/TodoList'
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
            Dieses Projekt war eines meiner ersten privaten JavaScriptprojekten.
            Bei dem Projekt handelt es sich um eine To-do-Liste. Der Nutzer kann
            neue To-dos hinzufügen zu seiner Liste. Durch das Klicken auf den
            Edit Button der einzelnen To-dos können diese auch bearbeitet
            werden. Ist ein To-do abgeschlossen, kann man auf das To-do klicken
            und es wird durchgestrichen.
          </p>
        </div>
        <div className='mt-16 mx-auto md:w-2/5 w-5/6 mb-16'>
          <iframe
            className=' w-full aspect-video'
            src='https://www.youtube.com/embed/gPhhG6tVMxc'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default TodoList
