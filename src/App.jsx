import { useState } from 'react'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import Experience from './components/Experience'
import Services from './components/Services'

const initialNavItems = {
   inicio: true,
   experiencia: false,
   servicos: false,
   portfolio: false,
   contatos: false
}

const defaultNavItems = {
   inicio: false,
   experiencia: false,
   servicos: false,
   portfolio: false,
   contatos: false
}

export default function App() {
   const [navItems, setNavItems] = useState(initialNavItems)

   const items = {
      'navItems': navItems,
      'setNavItems': setNavItems,
      'defaultNavItems': defaultNavItems
   }

   return (
      <>
         <NavBar items={items} />
         <Presentation items={items} />
         <Experience items={items} />
         <Services items={items} />
      </>
   )

}

