import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { Stack, Text, Button } from '@chakra-ui/react';

export default function Services({ items }) {
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
         setNavItems(prevState => ({ ...prevState, servicos: true }));
      } else {
         setNavItems(prevState => ({ ...prevState, servicos: false }))
      }
   }, [inView])

   return (
      <Stack
         id='services'
         flexDirection='column'
         bgColor='#151515'
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
            bgClip='text'
            fontWeight='extrabold'
         >
            Serviços
         </Text>


         <Stack direction='row'>
            <Button
               // bgGradient='linear(to-b, #FBD189, #F59983)'
               bgColor='#373737'
               width='10vw'
               borderRadius='100px'
               fontSize='xl'
            >
               Backend
            </Button>

            <Button
               // bgGradient='linear(to-b, #FBD189, #F59983)'
               bgColor='#373737'
               width='10vw'
               borderRadius='100px'
               fontSize='xl'
            >
               Frontend
            </Button>
         </Stack>
      </Stack>
   );
}