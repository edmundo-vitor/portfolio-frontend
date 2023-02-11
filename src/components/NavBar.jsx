import NavItem from './NavItem'
import { Flex, Image } from '@chakra-ui/react'
import {
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   IconButton,
   Stack
} from '@chakra-ui/react'

import { MdMenu } from 'react-icons/md';

export default function NavBar({ items }) {

   let { navItems, defaultNavItems, setNavItems } = items;

   return (
      <>
         {/* Menu principal */}
         <Flex
            position='fixed'
            bgColor='#131313'
            width='100vw'
            height='6vh'
            padding='10px'
            justifyContent='space-around'
            zIndex={100}
            display={{ base: 'none', sm: 'flex' }}
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
            </Flex>

            <Flex></Flex>
         </Flex>

         {/* Menu mobile */}
         <Flex
            position='fixed'
            bgColor='#131313'
            width='100vw'
            height='6vh'
            padding='10px'
            justifyContent='space-between'
            zIndex={100}
            display={{ base: 'flex', sm: 'none' }}

         >
            <Image
               src='eddev-logo.png'
            />
            <Menu>
               <svg width="0" height="0">
                  <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                     <stop stopColor="#FBD189" offset="0%" />
                     <stop stopColor="#F59983" offset="100%" />
                  </linearGradient>
               </svg>

               <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<MdMenu style={{ fill: "url(#gradient)" }} />}
                  backgroundColor='#282828'
                  _hover={{}}
                  _active={{ border: 'none' }}
               />
               <MenuList
                  backgroundColor='#282828'
                  color='#FFF'
                  border='none'
               >
                  <Stack
                     spacing={10}
                     padding={10}
                     alignItems='flex-start'
                     width='100%'
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

                  </Stack>
               </MenuList>
            </Menu>
         </Flex>
      </>
   )
}