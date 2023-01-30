import { Flex, Image, Text, Stack, Button, Link } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
               flexDirection='row'
               align='flex-end'
               justify='center'
               width='100%'
            >
               <Stack
                  flexDirection='column'
                  color='#fff'
                  spacing={3}
                  height='100%'
                  justify='center'
                  maxWidth='30vw'
                  marginRight={20}
               >
                  <Stack spacing={-1}>
                     <Text
                        fontSize='5xl'
                        bgGradient='linear(to-b, #FBD189, #F59983)'
                        bgClip='text'
                        fontWeight='extrabold'
                     >
                        Olá,
                     </Text>
                     <Text
                        fontSize='6xl'
                        fontWeight='extrabold'
                     >
                        sou o Edmundo.
                     </Text>
                     <Text
                        fontSize='4xl'
                        bgGradient='linear(to-b, #FBD189, #F59983)'
                        bgClip='text'
                        fontWeight='extrabold'
                     >
                        Desenvolvedor backend
                     </Text>
                  </Stack>

                  <Stack spacing={5}>
                     <Text fontSize='3xl'>Trabalho com desenvolvimento web com foco no backend, mas também tenho conhecimento no frontend.</Text>
                     <Button
                        href='#experience'
                        bgGradient='linear(to-b, #FBD189, #F59983)'
                        width='10vw'
                        borderRadius='100px'
                        fontSize='xl'
                     >


                     </Button>
                     <Link
                        href='#experience'
                        bgGradient='linear(to-b, #FBD189, #F59983)'
                        width='10vw'
                        borderRadius='100px'
                        fontSize='xl'
                        textAlign='center'
                        fontWeight='extrabold'
                        _hover={{
                           textDecoration: 'none'
                        }}
                     >
                        saiba mais
                     </Link>
                  </Stack>
               </Stack>

               <Image
                  src='perfil.png'
                  width='40vw'
                  minWidth='20vw'
                  maxWidth='45vw'
               />
            </Stack>
         </Flex>
      </>
   )
}