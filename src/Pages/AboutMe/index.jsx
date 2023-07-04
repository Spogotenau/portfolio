import { useEffect } from 'react'
import me from '../../images/jan-fullwidth.png'
import rocket from '../../images/rocket.png'

function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })

    const hiddenLeftElements = document.querySelectorAll('.hiddenLeft')
    hiddenLeftElements.forEach((el) => observer.observe(el))

    const hiddenRightElements = document.querySelectorAll('.hiddenRight')
    hiddenRightElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenLeftElements.forEach((el) => observer.unobserve(el))
      hiddenRightElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
  return (
    <>
      <div className='pt-20 pb-[9rem] bg-slate-700'>
        <div className='animations absolute w-screen'>
          <img src={rocket} className='rocket mt-96 relative left-[80%] h-24' />
        </div>
        <div className='md:pt-40 md:pb-32 pt-16 flex md:flex-row flex-col'>
          <img
            src={me}
            className='ml-auto mr-auto md:ml-64 md:mr-12 h-80 w-80 md:h-96 md:w-96 object-cover rounded-full'
          ></img>
          <div className='mt-20 md:mt-28 gap-5 ml-12 md:ml-44 grid md:grid-cols-2 text-xl text-gray-200'>
            <div>
              <p>
                <b>Name</b>
              </p>
              <p className=' text-sky-700 font-bold'>Jan Vontobel</p>
            </div>
            <div>
              <p>
                <b>Geburtstag</b>
              </p>
              <p className=' text-sky-700 font-bold'>09. September 2005</p>
            </div>
            <div>
              <p>
                <b>Ausbildung</b>
              </p>
              <p className=' text-sky-700 font-bold'>
                Informatikmitelschule Baden,
                <br /> 2. Jahr abgeschlossen
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col overflow-hidden'>
        <div className='hiddenLeft meTexts rounded-lg ml-6 md:ml-24 mt-24 w-[285px] md:w-[800px] p-8 text-gray-200 text-lg'>
          <p>
            <i>
              &quot;Ich möchte lernen, wie ich in einem Arbeitsumfeld mit
              Mitarbeitern arbeite. Sicherlich bin ich noch kein Profi in meiner
              Arbeit und in der mit anderen, doch um besser zu werden möchte ich
              direkte praktische Erfahrung sammeln und daraus lernen.&quot;
            </i>
          </p>
        </div>
        <div className='hiddenRight meTexts rounded-lg float-right ml-auto mr-6 md:mr-24 mt-24 w-[285px] md:w-[800px] p-8 text-gray-200 text-lg'>
          <p>
            <i>
              &quot;In meiner Freizeit unternehme ich gerne Dinge mit meinen
              Freunden. Zudem gehe ich seit einem Jahr 3 Mal wöchentlich ins
              Fitnessstudio um meinen Körper so wie meine Psyche gesund zu
              behalten. Auch höre ich sehr gerne Podcasts über verschiedenste
              Themen an.&quot;
            </i>
          </p>
        </div>
        <div className='hiddenLeft meTexts rounded-lg ml-6 md:ml-24 mt-24 mb-24 w-[285px] md:w-[800px] p-8 text-gray-200 text-lg'>
          <p>
            <i>
              &quot;Ich bin immer offen und interessiert daran, Neues zu lernen,
              und erweise auch eine gewisse Disziplin, die man oftmals braucht.
              Mein Ziel langfristig ist es immer am Zahn der Zeit zu sein, genau
              für das muss man immer offen sein Neues zu lernen und
              verwenden.&quot;
            </i>
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutMe
