import weatherApp from '../../images/weatherApp.png'
import cooLet from '../../images/coolet.png'
import pwGolem from '../../images/pwGolem.png'
import { Link } from 'react-router-dom'

function Projekte() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className=' text-3xl text-center'>Meine Projekte</h1>
      </div>
      <div className=' grid md:grid-cols-2 overflow-hidden mb-20'>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <Link to='/projekte/weatherguru'>
            <img src={weatherApp} alt='Weather Guru' className=' w-[550px]' />
            <div className='description weatherGuru bg-gray-300 top-0 relative'>
              <h1 className=' text-2xl px-2 py-1'>Weather Guru</h1>
              <p className=' text-lg px-2 pb-1'>
                Weather Guru ist eine Wetter App, welche die aktuelle Temperatur
                von verschiedenen Orten der Welt zurückgibt.
              </p>
            </div>
          </Link>
        </div>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <Link to='/projekte/coolet'>
            <img
              src={cooLet}
              alt='CooLet'
              className=' w-[550px] md:h-[295.92px] md:object-cover'
            />
            <div className='description cooLet bg-gray-300 top-0 relative'>
              <h1 className=' text-2xl px-2 py-1'>CooLet</h1>
              <p className=' text-lg px-2 pb-1'>
                CooLet ist eine Lernplattform um Online Karteikarten zu lernen.
              </p>
            </div>
          </Link>
        </div>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <Link to='/projekte/passwordGolem'>
            <img
              src={pwGolem}
              alt='CooLet'
              className=' w-[550px] md:h-[295.92px] md:object-cover'
            />
            <div className='description pwGolem bg-gray-300 top-0 relative'>
              <h1 className=' text-2xl px-2 py-1'>Password Golem</h1>
              <p className=' text-lg px-2 pb-1'>
                Password Golem ist ein online Passwortmanager, in dem man seine
                Passwörter speichern und verwalten kann.
              </p>
            </div>
          </Link>
        </div>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <img src={weatherApp} alt='Weather Guru' className=' w-[550px]' />
          <div className='description bg-gray-300 top-0 relative'>
            <h1 className=' text-2xl px-2 py-1'>Weather Guru</h1>
            <p className=' text-lg px-2 pb-1'>
              Weather Guru ist eine Wetter App, welche die aktuelle Temperatur
              von verschiedenen Orten der Welt zurückgibt
            </p>
          </div>
        </div>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <img src={weatherApp} alt='Weather Guru' className=' w-[550px]' />
          <div className='description bg-gray-300 top-0 relative'>
            <h1 className=' text-2xl px-2 py-1'>Weather Guru</h1>
            <p className=' text-lg px-2 pb-1'>
              Weather Guru ist eine Wetter App, welche die aktuelle Temperatur
              von verschiedenen Orten der Welt zurückgibt
            </p>
          </div>
        </div>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <img src={weatherApp} alt='Weather Guru' className=' w-[550px]' />
          <div className='description bg-gray-300 top-0 relative'>
            <h1 className=' text-2xl px-2 py-1'>Weather Guru</h1>
            <p className=' text-lg px-2 pb-1'>
              Weather Guru ist eine Wetter App, welche die aktuelle Temperatur
              von verschiedenen Orten der Welt zurückgibt
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projekte
