import { Flex, Image } from '@chakra-ui/react'
import NavItem from './NavItem'


export default function NavBar({ items }) {

   let { navItems, defaultNavItems, setNavItems } = items;

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
               itemActive={navItems.inicio}
               onClick={() => setNavItems({ ...defaultNavItems, inicio: true })}
            />
            <NavItem
               name='Experiencia'
               href='#experience'
               itemActive={navItems.experiencia}
               onClick={() => setNavItems({ ...defaultNavItems, experiencia: true })}
            />
            <NavItem
               name='Serviços'
               href='#services'
               itemActive={navItems.servicos}
               onClick={() => setNavItems({ ...defaultNavItems, servicos: true })}
            />
            <NavItem
               name='Projetos'
               href='#projects'
               itemActive={navItems.projetos}
               onClick={() => setNavItems({ ...defaultNavItems, projetos: true })}
            />
            <NavItem
               name='Contatos'
               itemActive={navItems.contatos}
               onClick={() => setNavItems({ ...defaultNavItems, contatos: true })}
            />
         </Flex>

         <Flex></Flex>
      </Flex>
   )
}