import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Support() {
  const form = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    if (form.current && !isSending) {
      setIsSending(true)

      emailjs
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
        )
        .then(
          () => {
            setIsSending(false)
            setIsSent(true)
            form.current.reset()
          },
          () => {
            setIsSending(false)
          }
        )
    }
  }

  return (
    <div className='w-full max-w-md mx-auto bg-white mt-12 p-6 rounded-2xl shadow-lg'>
      <h2 className='text-2xl font-bold text-center text-gray-800'>
        Kontaktiere uns
      </h2>
      <p className='text-sm text-gray-400 mb-6 mt-2'>
        Du hast Fragen zu unserer App oder einen Vorschlag, wie wir sie
        verbessern können? Wir freuen uns über dein Feedback!
      </p>

      {isSent && (
        <div className='bg-green-100 text-green-800 p-4 rounded-lg text-center mb-4 transition'>
          🎉 Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
        <input
          type='text'
          name='name'
          placeholder='Dein Name'
          required
          className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
        />
        <input
          type='email'
          name='email'
          placeholder='Deine E-Mail'
          required
          className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
        />
        <textarea
          name='message'
          placeholder='Deine Nachricht'
          required
          className='border border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
        ></textarea>
        <button
          type='submit'
          disabled={isSending}
          className={`${
            isSending
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white font-semibold p-3 rounded-lg transition transform ${
            isSending ? '' : 'hover:scale-105 active:scale-100'
          }`}
        >
          {isSending ? 'Senden...' : 'Senden'}
        </button>
      </form>
      <p className='text-xs text-gray-400 text-center mt-8 leading-relaxed'>
        Jan Vontobel · Alte Post 12, 8956 Killwangen, Schweiz ·{' '}
        <a
          href='mailto:support@jan-vontobel.ch'
          className='underline hover:text-blue-500 transition'
        >
          jan2005.vontobel@gmail.com
        </a>
      </p>
    </div>
  )
}
