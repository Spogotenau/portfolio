import weatherApp from '../../images/weatherApp.png'
import cooLet from '../../images/coolet.png'
import pwGolem from '../../images/pwGolem.png'
import shoeBackend from '../../images/shoeBackend.png'
import quizGame from '../../images/quizGame.png'
import todoList from '../../images/todoList.png'
import rockPaperScissors from '../../images/rockPaperScissors.png'
import randomFact from '../../images/randomFacts.png'
import portfolio from '../../images/portfolioScreen.png'
import ecoMania from '../../images/idpaScreen.png'
import { Link } from 'react-router-dom'

function Projekte() {
  return (
    <>
      <div className='pt-28 pb-[2.5rem] bg-slate-700 text-gray-200'>
        <h1 className=' text-3xl text-center'>Meine Projekte</h1>
      </div>
      <div className=' grid md:grid-cols-2 overflow-hidden pb-20'>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <Link to='/projekte/weatherguru'>
            <img
              src={weatherApp}
              alt='Weather Guru'
              className=' w-[550px] md:h-[295.92px] md:object-cover'
            />
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
          <Link to='/projekte/ecoMania'>
            <img
              src={ecoMania}
              alt='EcoMania'
              className=' w-[550px] md:h-[295.92px] md:object-cover'
            />
            <div className='description weatherGuru bg-gray-300 top-0 relative'>
              <h1 className=' text-2xl px-2 py-1'>EcoMania</h1>
              <p className=' text-lg px-2 pb-1'>
                EcoMania ist ein Online-Lernplattform um sich spielerisch auf
                Prüfungen vorzubereiten.
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
          <Link to='/projekte/meinErstesBackend'>
            <img
              src={shoeBackend}
              alt='Mein erstes Backend'
              className=' w-[550px] md:h-[295.92px] md:object-cover'
            />
            <div className='description shoeBackend bg-gray-300 top-0 relative'>
              <h1 className=' text-2xl px-2 py-1'>Mein erstes Backend</h1>
              <p className=' text-lg px-2 pb-1'>
                Dies war mein erstes Backend, dass ich erstellt habe mit einem
                kleinen Frontend.
              </p>
            </div>
          </Link>
        </div>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <Link to='/projekte/quizGame'>
            <img
              src={quizGame}
              alt='Quiz Game'
              className=' w-[550px] md:h-[295.92px] md:object-cover'
            />
            <div className='description quizGame bg-gray-300 top-0 relative'>
              <h1 className=' text-2xl px-2 py-1'>Quiz Game</h1>
              <p className=' text-lg px-2 pb-1'>
                Dies ist ein Quiz Spiel, welches eines meiner ersten Projekte
                mit JavaScript war.
              </p>
            </div>
          </Link>
        </div>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <Link to='/projekte/portfolio'>
            <img
              src={portfolio}
              alt='Quiz Game'
              className=' w-[550px] md:h-[295.92px] md:object-cover'
            />
            <div className='description portfolioWebsite bg-gray-300 top-0 relative'>
              <h1 className=' text-2xl px-2 py-1'>Portfolio Website</h1>
              <p className=' text-lg px-2 pb-1'>
                Auch diese Portfolio Website ist ein Projekt von mir. In diesem
                Projekt geht es darum mich als Person vorzustellen.
              </p>
            </div>
          </Link>
        </div>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <Link to='/projekte/schereSteinPapier'>
            <img
              src={rockPaperScissors}
              alt='Schere, Stein, Papier'
              className=' w-[550px] md:h-[295.92px] md:object-cover'
            />
            <div className='description rockPaperScissors bg-gray-300 top-0 relative'>
              <h1 className=' text-2xl px-2 py-1'>Schere, Stein, Papier</h1>
              <p className=' text-lg px-2 pb-1'>
                Dieses Projekt ist ein kleines Schere, Stein, Papier Spiel.
              </p>
            </div>
          </Link>
        </div>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <Link to='/projekte/todoListe'>
            <img
              src={todoList}
              alt='Todo Liste'
              className=' w-[550px] md:h-[295.92px] md:object-cover'
            />
            <div className='description todoList bg-gray-300 top-0 relative'>
              <h1 className=' text-2xl px-2 py-1'>To-do-Liste</h1>
              <p className=' text-lg px-2 pb-1'>
                Dieses Projekt ist eine kleine Todo Liste.
              </p>
            </div>
          </Link>
        </div>
        <div className='project mt-20 border-2 rounded-3xl shadow-2xl shadow-slate-800 border-slate-600 overflow-hidden w-11/12 md:w-[550px] md:h-[341.75px] mx-auto'>
          <Link to='/projekte/randomFact'>
            <img
              src={randomFact}
              alt='Random Fact'
              className=' w-[550px] md:h-[295.92px] md:object-cover'
            />
            <div className='description randomFact bg-gray-300 top-0 relative'>
              <h1 className=' text-2xl px-2 py-1'>Random Fact</h1>
              <p className=' text-lg px-2 pb-1'>
                Random Fact kann dir alle zehn Sekunden einen zufälligen
                Fun-Fact ausgeben.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Projekte
