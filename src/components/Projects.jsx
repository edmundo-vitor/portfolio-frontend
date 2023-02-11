import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import { Card, Heading, CardBody, Image, Stack, Text } from '@chakra-ui/react'

export default function Projects({ items }) {
   const { ref, inView } = useInView(
      {
         threshold: 0.5,
         trackVisibility: true,
         delay: 100
      }
   );

   const { setNavItems } = items;

   useEffect(() => {
      if (inView) {
         setNavItems(prevState => ({ ...prevState, projetos: true }));
      } else {
         setNavItems(prevState => ({ ...prevState, projetos: false }))
      }
   }, [inView])

   return (
      <Stack
         id='projects'
         flexDirection='column'
         bgColor='#191919'
         width='100vw'
         height='100vh'
         maxWidth='100%'
         ref={ref}
         justifyContent='center'
         alignItems='center'
         color='#fff'
         zIndex={0}
         spacing={20}
      >
         <Text
            fontSize='3xl'
            bgGradient='linear(to-b, #FBD189, #F59983)'
            fontWeight='extrabold'
            bgClip='text'
         >
            Projetos
         </Text>

         <Card
            width={{ base: '80vw', sm: '70w', md: '60vw', lg: '40vw' }}
            bgColor='#303030'
            color='#fff'
         >
            <CardBody>
               <Image
                  src='https://www.ioccaruaru.com.br/img/em_breve.jpg'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
               />
               <Stack mt='6' spacing='3'>
                  <Heading size='md'>Sistema web</Heading>
                  <Text>
                     Em breve
                  </Text>
               </Stack>
            </CardBody>
         </Card>
      </Stack>
   );
}