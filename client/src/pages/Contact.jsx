import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactHero from '../components/ContactHero'
import ContactCards from '../components/ContactCards'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <ContactCards />
    </div>
  )
}

export default Contact
Contact