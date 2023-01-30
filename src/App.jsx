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
   const [navItens, setNavItens] = useState(initialNavItems)

   const items = {
      'navItens': navItens,
      'setNavItens': setNavItens,
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

