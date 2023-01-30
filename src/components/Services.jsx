import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import {
   Stack,
   Text,
   Image,
   List,
   ListItem,
   ListIcon
} from '@chakra-ui/react';

import { MdCheckCircle } from 'react-icons/md'


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


         <Stack direction='row' spacing={5}>
            <Stack
               direction='column'
               align='center'
               borderRadius='20px'
               padding='20px'
               backgroundColor='#212121'
               minW='20vw'
               maxW='20vw'
            >
               <Image src='back-logo.png' w='190px' h='200px' />

               <Text
                  fontSize='2xl'
                  fontWeight='extrabold'
               >
                  Backend
               </Text>

               <List spacing={3} width='100%'>
                  <ListItem>
                     <ListIcon as={MdCheckCircle} color='green.500' />
                     Desenvolvimento de APIs REST
                  </ListItem>
                  <ListItem>
                     <ListIcon as={MdCheckCircle} color='green.500' />
                     Integração entre microsserviços
                  </ListItem>
                  <ListItem>
                     <ListIcon as={MdCheckCircle} color='green.500' />
                     Banco de dados SQL e NoSQL
                  </ListItem>
                  <ListItem>
                     <ListIcon as={MdCheckCircle} color='green.500' />
                     DevOps
                  </ListItem>
               </List>
            </Stack>

            <Stack
               direction='column'
               align='center'
               borderRadius='20px'
               padding='20px'
               backgroundColor='#212121'
               minW='20vw'
               maxW='20vw'
            >
               <Image src='front-logo.png' w='220px' h='190px' />

               <Text
                  fontSize='2xl'
                  fontWeight='extrabold'
               >
                  Frontend
               </Text>

               <List spacing={3} width='100%'>
                  <ListItem>
                     <ListIcon as={MdCheckCircle} color='green.500' />
                     Desenvolvimento de landing pages
                  </ListItem>
                  <ListItem>
                     <ListIcon as={MdCheckCircle} color='green.500' />
                     Desenvolvimento de sistemas e dashboards
                  </ListItem>
                  <ListItem>
                     <ListIcon as={MdCheckCircle} color='green.500' />
                     Desenvolvimento de novas funcionalidades
                  </ListItem>
               </List>
            </Stack>


         </Stack>
      </Stack>
   );
}