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
          <img src={rocket} className='rocket mt-96 relative left-[90%] h-24' />
        </div>
        <div className='md:pt-40 md:pb-32 pt-16 flex md:flex-row flex-col relative'>
          <img
            src={me}
            className='ml-auto mr-auto md:ml-64 md:mr-12 h-80 w-80 md:h-96 md:w-96 object-cover rounded-full'
          ></img>
          <div className='mt-20 md:mt-28 gap-5 ml-12 md:ml-44 grid md:grid-cols-2 text-xl text-gray-200'>
            <div>
              <p>
                <b>Name</b>
              </p>
              <p className=' text-sky-500 font-bold'>Jan Vontobel</p>
            </div>
            <div>
              <p>
                <b>Geburtsdatum</b>
              </p>
              <p className=' text-sky-500 font-bold'>09. September 2005</p>
            </div>
            <div>
              <p>
                <b>Ausbildung</b>
              </p>
              <p className=' text-sky-500 font-bold'>
                Informatikmittelschule IMS Baden,
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
              &quot;Ich möchte lernen, wie ich in einem Arbeitsumfeld mit einem
              Team arbeite. Sicherlich bin ich noch kein Profi, deshalb möchte
              ich jetzt Erfahrungen in meinem Praktikum sammeln, um daraus zu
              lernen.&quot;
            </i>
          </p>
        </div>
        <div className='hiddenRight meTexts rounded-lg float-right ml-auto mr-6 md:mr-24 mt-24 w-[285px] md:w-[800px] p-8 text-gray-200 text-lg'>
          <p>
            <i>
              &quot;In meiner Freizeit bin ich gerne mit meinen Freunden
              unterwegs. Zudem besuche ich seit einem Jahr 3 mal wöchentlich ein
              Fitnessstudio, um meinen Körper sowie meine Psyche, gesund zu
              halten. Ich höre mir sehr gerne Podcasts über verschiedenste
              Themen an.&quot;
            </i>
          </p>
        </div>
        <div className='hiddenLeft meTexts rounded-lg ml-6 md:ml-24 mt-24 mb-24 w-[285px] md:w-[800px] p-8 text-gray-200 text-lg'>
          <p>
            <i>
              &quot;Ich bin immer offen und interessiert, Neues zu lernen.
              Weitere Stärken von mir sind mein Verantwortungsbewusstsein und
              meine Zuverlässigkeit und das schon seit meiner jüngsten Kindheit.
              Langfristig gedacht, möchte ich stets aktuell bleiben und mich
              kontinuierlich für das Lernen und Anwenden von neuem offen
              zeigen.&quot;
            </i>
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutMe
