import { useState } from 'react'
import { Flex, Image, Link } from '@chakra-ui/react'
import NavItem from './NavItem'


export default function NavBar({ items }) {

   let { navItens, defaultNavItems, setNavItens } = items;

   return (
      <Flex
         position='fixed'
         bgColor='#131313'
         width='100vw'
         height='6vh'
         padding='10px'
         justifyContent='space-around'
         zIndex={100}
      >
         <Image
            src='eddev-logo.png'
         />

         <Flex
            color='#fff'
            align='center'
         >
            <NavItem
               name='Inicio'
               href='#presentation'
               itemActive={navItens.inicio}
               onClick={() => setNavItens({ ...defaultNavItems, inicio: true })}
            />
            <NavItem
               name='Experiencia'
               href='#experience'
               itemActive={navItens.experiencia}
               onClick={() => setNavItens({ ...defaultNavItems, experiencia: true })}
            />
            <NavItem
               name='Serviços'
               href='#services'
               itemActive={navItens.servicos}
               onClick={() => setNavItens({ ...defaultNavItems, servicos: true })}
            />
            <NavItem
               name='Portfólio'
               itemActive={navItens.portfolio}
               onClick={() => setNavItens({ ...defaultNavItems, portfolio: true })}
            />
            <NavItem
               name='Contatos'
               itemActive={navItens.contatos}
               onClick={() => setNavItens({ ...defaultNavItems, contatos: true })}
            />
         </Flex>

         <Flex></Flex>
      </Flex>
   )
}