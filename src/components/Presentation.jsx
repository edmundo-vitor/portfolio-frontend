import { Flex, Image, Text, Stack, Link } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SocialIcon } from 'react-social-icons';

export default function Presentation({ items }) {
   const { ref, inView } = useInView(
      {
         threshold: 0.5,
         trackVisibility: false,
         delay: 100
      }
   );

   const { setNavItems } = items;

   useEffect(() => {
      if (inView) {
         setNavItems(prevState => ({ ...prevState, inicio: true }));
      } else {
         setNavItems(prevState => ({ ...prevState, inicio: false }))
      }
   }, [inView])

   const headingSize = {
      base: '2xl',
      sm: '3xl',
      md: '4xl',
      lg: '5xl'
   }

   return (
      <>
         <Flex
            id='presentation'
            bgColor='#151515'
            width='100vw'
            height='100vh'
            maxWidth='100%'
            ref={ref}
         >
            <Stack
               flexDirection={{ base: 'column', sm: 'row' }}
               align='flex-end'
               justify='center'
               width='100%'
               alignItems={{ base: 'center', sm: 'end' }}
            >
               <Stack
                  flexDirection='column'
                  color='#fff'
                  spacing={3}
                  height='100%'
                  justify='center'
                  maxWidth={{ base: '90vw', sm: '35vw' }}
                  padding={{ base: '30px', sm: '0px' }}
                  marginRight={{ base: 0, sm: 20 }}
               >
                  <Stack spacing={-1}>
                     <Text
                        fontSize={headingSize}
                        bgGradient='linear(to-b, #FBD189, #F59983)'
                        bgClip='text'
                        fontWeight='extrabold'
                     >
                        Olá,
                     </Text>
                     <Text
                        fontSize={headingSize}
                        fontWeight='extrabold'
                     >
                        sou o Edmundo.
                     </Text>
                     <Text
                        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                        bgGradient='linear(to-b, #FBD189, #F59983)'
                        bgClip='text'
                        fontWeight='extrabold'
                     >
                        Desenvolvedor backend
                     </Text>
                  </Stack>

                  <Stack spacing={5}>
                     <Text fontSize={{ sm: 'lg', md: 'xl', lg: '3xl' }}>Trabalho com desenvolvimento web com foco no backend, mas também tenho conhecimento no frontend.</Text>

                     <Link
                        href='#experience'
                        bgGradient='linear(to-b, #FBD189, #F59983)'
                        width={{ base: '120px', sm: '150px', md: '160px', lg: '180px' }}
                        borderRadius='100px'
                        fontSize={{ sm: 'md', md: 'lg', lg: 'xl' }}
                        textAlign='center'
                        fontWeight='extrabold'
                        _hover={{
                           textDecoration: 'none'
                        }}
                        p='8px'
                     >
                        saiba mais <ArrowDownIcon />
                     </Link>

                     <Stack
                        direction='row'
                        spacing={6}
                        mt={{ base: '30px !important', sm: '40px !important' }}
                     >
                        <Stack
                           width={{ base: '30px', sm: '30px', md: '40px', lg: '50px' }}
                           height={{ base: '30px', sm: '30px', md: '40px', lg: '50px' }}
                        >
                           <SocialIcon
                              url='https://www.linkedin.com/in/edmundo-vitor/'
                              target="_blank"
                              style={{ width: '100%', height: '100%' }}
                           />
                        </Stack>

                        <Stack
                           width={{ base: '30px', sm: '30px', md: '40px', lg: '50px' }}
                           height={{ base: '30px', sm: '30px', md: '40px', lg: '50px' }}
                        >
                           <SocialIcon
                              url='https://github.com/edmundo-vitor'
                              bgColor='#fff'
                              target="_blank"
                              style={{ width: '100%', height: '100%' }}
                           />
                        </Stack>

                        <Stack
                           width={{ base: '30px', sm: '30px', md: '40px', lg: '50px' }}
                           height={{ base: '30px', sm: '30px', md: '40px', lg: '50px' }}
                        >
                           <SocialIcon
                              url='https://www.instagram.com/edmundo_vtr/'
                              target="_blank"
                              style={{ width: '100%', height: '100%' }}
                           />
                        </Stack>
                     </Stack>
                  </Stack>
               </Stack>

               <Image
                  src='perfil.png'
                  width={{ base: '80vw', sm: '40vw' }}
                  minWidth={{ base: '40vw', sm: '20vw' }}
                  maxWidth={{ base: '70vw', sm: '45vw' }}
               />
            </Stack>
         </Flex>
      </>
   )
}