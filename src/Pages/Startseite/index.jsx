import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import background from '../../images/cube-background-2484131_1920.jpg'
import me from '../../images/meHome.png'
import jsLogo from '../../images/jsLogo.png'
import htmlLogo from '../../images/hmtlLogo.png'
import cssLogo from '../../images/cssLogo.png'
import cSharpLogo from '../../images/cSharpLogo.png'
import reactLogo from '../../images/reactLogo.png'
import gitLogo from '../../images/gitLogo.png'
import dockerLogo from '../../images/dockerLogo.png'
import mongoLogo from '../../images/mongoDBLogo.png'
import tailwindLogo from '../../images/tailwindLogo.png'
import nodeLogo from '../../images/nodeLogo.png'
import firebaseLogo from '../../images/firebaseLogo.png'
import aspDotNetLogo from '../../images/ASPNETLogo.png'
import arbeitsPlatz from '../../images/IMG_8600.jpg'
import lightbulb from '../../images/lightbulp.png'

function Startseite() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hiddenElement')
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <div className='frontPage pt-20 bg-slate-700'>
        <div className='animations absolute w-screen'>
          <img src={lightbulb} className='lightbulb h-24' />
        </div>
        <div className='md:flex md:flex-row justify-between'>
          <div className='md:ml-64 md:pt-56 pt-48 ml-8'>
            <h1 className='text-gray-200 md:text-4xl text-3xl mb-10'>
              Willkommen ich bin
            </h1>
            <h1 className='nameTitle w-max relative text-sky-700 md:text-7xl text-4xl mt-6'>
              JAN VONTOBEL
            </h1>
          </div>
          <div className=' mr-64 max-w-sm relative'>
            <div className='personContainer aspect-1/1.5 grid items-end overflow-hidden md:ease-in-out duration-300 md:hover:scale-110'>
              <img
                src={background}
                alt=''
                className=' absolute aspect-square object-cover w-full bottom-0 inset-x-0 mx-auto rounded-full'
              />
              <img
                src={me}
                alt='Bild von mir Jan Vontobel'
                className='personImg relative z-20 right-5 md:ease-in-out duration-300'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='wrapperDiagonal relative flex flex-col justify-center w-screen mt-44 px-4 py-20'>
        <h2 className='mx-auto text-2xl mb-4 max-w-2xl font-medium'>
          Was mache ich
        </h2>
        <p className='mx-auto text-xl max-w-2xl'>
          In den letzten 2 Jahren habe ich eine Leidenschaft für die
          Applikationsentwicklung entdeckt, die ich vor meinem Eintritt in die
          Informatikmittelschule so nicht erwartet hätte. Mit besonderem Fokus
          auf die Webentwicklung habe ich schon einige schulische, wie auch
          private Projekte realisiert. In der Entwicklung von Webseiten kann ich
          meiner Kreativität freien lauf lassen und mir immer wieder neue
          Grenzen setzen. In meinem Praktikum erhoffe ich mir, dass ich meine
          Kreativität wie auch meine Fähigkeiten einzusetzen lerne und diese
          auch noch erweitere.
        </p>
        <button className='linkButton mt-20 mx-auto text-lg md:text-xl text-gray-200 bg-sky-700 hover:bg-sky-800 font-medium rounded-lg px-5 py-3.5'>
          <Link to='/überMich'>Erfahren Sie mehr über mich</Link>
        </button>
      </div>
      <div className='flex flex-col mt-44 w-screen pt-12 pb-28 bg-gradient-to-br from-sky-500 to-green-300'>
        <h2 className='mx-auto text-2xl mb-12 font-medium'>Meine Kenntnisse</h2>
        <div className='grid md:grid-cols-5 grid-cols-1 gap-y-12 justify-items-center'>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img className=' h-52 py-4 mx-auto' src={jsLogo} alt='JavaScript' />
            <h1 className=' text-center text-lg'>JavaScript</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img className=' h-52 py-4 mx-auto' src={cssLogo} alt='CSS' />
            <h1 className=' text-center text-lg'>CSS</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img className=' h-52 py-4 mx-auto' src={htmlLogo} alt='HTML' />
            <h1 className=' text-center text-lg'>HTML</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img
              className=' h-52 py-4 mx-auto'
              src={cSharpLogo}
              alt='C-Sharp'
            />
            <h1 className=' text-center text-lg'>C#</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img className=' h-52 py-4 mx-auto' src={gitLogo} alt='Git' />
            <h1 className=' text-center text-lg'>Git</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img className=' h-52 py-4 mx-auto' src={dockerLogo} alt='Docker' />
            <h1 className=' text-center text-lg'>Docker</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img className=' h-52 py-4 mx-auto' src={reactLogo} alt='React' />
            <h1 className=' text-center text-lg'>React</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img className=' h-52 py-4 mx-auto' src={mongoLogo} alt='MongoDB' />
            <h1 className=' text-center text-lg'>MongoDB</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img
              className=' h-52 py-4 mx-auto'
              src={firebaseLogo}
              alt='Firebase'
            />
            <h1 className=' text-center text-lg'>Firebase</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img
              className=' h-52 py-4 mx-auto'
              src={tailwindLogo}
              alt='Tailwind'
            />
            <h1 className=' text-center text-lg'>Tailwind CSS</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img
              className=' h-52 py-4 mx-auto'
              src={aspDotNetLogo}
              alt='ASP.NET'
            />
            <h1 className=' text-center text-lg'>ASP.NET</h1>
          </div>
          <div className='hiddenElement bg-gray-200 w-52 h-52 rounded-xl'>
            <img className='h-52 py-4 mx-auto' src={nodeLogo} alt='Node.js' />
            <h1 className=' text-center text-lg'>Node</h1>
          </div>
        </div>
      </div>
      <div className='mt-20 mb-20 bg-gradient-to-tr from-slate-600 to-green-300 pt-12 pb-12 w-screen flex md:flex-row flex-col'>
        <div>
          <img
            className='arbeitsPlatz md:ml-16 mx-auto'
            src={arbeitsPlatz}
            alt=''
          />
        </div>
        <div className='mx-auto md:my-2 md:ml-16 md:pl-16 pr-8 px-8 md:border-l-4 md:border-gray-200'>
          <h2 className='mb-4 md:pt-32 pt-12 text-2xl text-slate-700 font-medium'>
            Meine Projekte
          </h2>
          <p className='text-xl max-w-2xl text-slate-700'>
            Aus Neugier gegenüber neuen Methoden um Projekte zu realisieren,
            stelle ich mich bei jedem meiner Projekte neuen Herausforderungen.
            Mit einer Liebe fürs Detail gefällt mir die Arbeit im Webbereich am
            besten, weshalb ein Grossteil meiner privaten Projekte auch
            Webapplikationen sind. Ich programmiere auch mit C#. In Verbindung
            mit der Webentwicklung kann ich C# dann auch in der Entwicklung von
            Backends anwenden. Momentan bin ich dabei, erste Projekte mit dem
            JavaScript Framework React zu realisieren, da dieses Framework sehr
            interessant ist und auch eines der meistbenutzten JavaScript
            Frameworks ist.
          </p>
          <button className='mt-20 flex mx-auto justify-center text-lg md:text-xl text-gray-200 bg-sky-700 hover:bg-sky-800 font-medium rounded-lg px-5 py-3.5'>
            <Link to='/projekte'>Zu meinen Projekten</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Startseite
