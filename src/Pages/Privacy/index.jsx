import React from 'react'

function Privacy() {
  return (
    <div className='max-w-3xl mx-auto p-6 text-gray-800 bg-white mt-8 rounded-lg'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        Datenschutzerklärung
      </h1>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>1. Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In
          dieser Datenschutzerklärung informieren wir Sie darüber, welche Daten
          in unserer App erfasst und wie sie verwendet werden.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>
          2. Verantwortliche Stelle
        </h2>
        <p>
          Jan Vontobel <br />
          jan2005.vontobel@gmail.com
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>
          3. Erhebung und Verwendung von Daten
        </h2>
        <h3 className='text-lg font-semibold mb-1'>a) Nutzungsdaten</h3>
        <p className='mb-4'>
          Beim Verwenden der App werden automatisch technische Informationen
          erfasst (z.B. Gerätetyp, Betriebssystemversion). Diese Daten werden
          ausschließlich zur Verbesserung der App verwendet.
        </p>
        <h3 className='text-lg font-semibold mb-1'>b) Werbung (AdMob)</h3>
        <p>
          Diese App nutzt das Werbenetzwerk <strong>Google AdMob</strong>. Durch
          die Einbindung von Werbeanzeigen erhebt Google möglicherweise
          personenbezogene Daten, wie z.B. die Werbe-ID des Geräts. Weitere
          Informationen finden Sie in der Datenschutzerklärung von Google:&nbsp;
          <a
            href='https://policies.google.com/privacy'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 underline'
          >
            https://policies.google.com/privacy
          </a>
          .
        </p>
        <p className='mt-2'>
          Sie können personalisierte Werbung in den Einstellungen Ihres Geräts
          deaktivieren:
        </p>
        <ul className='list-disc list-inside ml-4'>
          <li>
            Android: Einstellungen &gt; Google &gt; Werbung &gt; Personalisierte
            Werbung deaktivieren.
          </li>
          <li>
            iOS: Einstellungen &gt; Datenschutz &gt; Werbung &gt; Kein
            Ad-Tracking.
          </li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>4. Weitergabe von Daten</h2>
        <p>
          Personenbezogene Daten werden nicht an Dritte weitergegeben, es sei
          denn, dies ist gesetzlich vorgeschrieben oder zur Bereitstellung der
          Werbeanzeigen erforderlich (z.B. durch Google AdMob).
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>5. Rechte der Nutzer</h2>
        <p>
          Sie haben das Recht, jederzeit Auskunft über die bei uns gespeicherten
          personenbezogenen Daten zu erhalten sowie deren Berichtigung oder
          Löschung zu verlangen.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold mb-2'>
          6. Änderungen der Datenschutzerklärung
        </h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der
          App-Funktionalität oder der rechtlichen Anforderungen zu
          aktualisieren.
        </p>
      </section>
    </div>
  )
}

export default Privacy
