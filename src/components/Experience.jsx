import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Stack, Text, Link } from '@chakra-ui/react';
import {
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   Avatar,
   Box,
   Heading
} from '@chakra-ui/react'
import { Tag, TagLabel } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const technologies1 = [
   {
      name: 'Java',
      color: 'red'
   },
   {
      name: 'Spring boot',
      color: 'green'
   },
   {
      name: 'JPA',
      color: '#BFB87C'
   },
   {
      name: 'PostgreSQL',
      color: '#048DBD'
   },
   {
      name: 'Git',
      color: '#FF7B50'
   },
   {
      name: 'GitLab',
      color: '#D65E37'
   },
   {
      name: 'Docker',
      color: '#005996'
   }
]

const technologies2 = [
   {
      name: 'Java',
      color: 'red'
   },
   {
      name: 'Spring boot',
      color: 'green'
   },
   {
      name: 'SQLServer',
      color: '#BB3232'
   },
   {
      name: 'Git',
      color: '#FF7B50'
   },
   {
      name: 'GitLab',
      color: '#D65E37'
   },
   {
      name: 'AWS',
      color: '#FB7B00'
   }
]

export default function Experience({ items }) {
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
         setNavItems(prevState => ({ ...prevState, experiencia: true }));
      } else {
         setNavItems(prevState => ({ ...prevState, experiencia: false }))
      }
   }, [inView])

   return (
      <>
         <Stack
            id='experience'
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
            >
               Experiência
            </Text>

            <Stack
               flexDirection='row'
               maxWidth='50%'
               alignItems='center'
            >
               <Cards />
            </Stack>
         </Stack>
      </>
   )
}

export function Cards() {
   return (
      <Stack
         direction='row'
         maxHeight='70vh'
         maxWidth='100vw'
         opacity={0.9}
         justify='center'
         spacing={10}
      >
         <Card
            minWidth='60%'
            maxWidth='60%'
            minHeight='50%'
            maxHeight='50%'
            bgColor='#303030'
            color='#fff'
         >
            <CardHeader>
               <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                     <Avatar
                        name='Terra urbanizada'
                        src='https://yt3.ggpht.com/18Pxj9ImOqBmKWf0W_o20uNVSHF9I7Cmohiffhvxbmz0KxH6bZfzusnh9aCGV32e6Rb5WPpCdGg=s900-c-k-c0x00ffffff-no-rj'
                        objectFit='contain'
                     />
                     <Box>
                        <Heading size='sm'>Bolsista desenvolvedor backend</Heading>
                        <Text>
                           <Link
                              href='https://www.linkedin.com/company/terraurbanizada/'
                              isExternal
                           >
                              Núcleo Acesso à Terra Urbanizada <ExternalLinkIcon mx='2px' />
                           </Link>
                        </Text>
                     </Box>
                  </Flex>
               </Flex>
            </CardHeader>

            <CardBody>
               <Stack
                  direction='column'
               >
                  <Text>
                     - Desenvolvimento de APIs REST para produtos voltados a desenvolvimento urbano sustentável.
                  </Text>
                  <Text>
                     - Gerenciando a VM e containers Docker, fazendo o deploy das aplicações em ambiente de desenvolvimento, homologação e produção.
                  </Text>
               </Stack>
            </CardBody>

            <CardFooter
               flexDirection='column'
               justify='center'
            >
               <Stack
                  direction='row'
                  spacing={1}
                  wrap='wrap'
               >
                  {technologies1.map(item => (
                     <Tag
                        size='md'
                        borderRadius='full'
                        variant='solid'
                        backgroundColor={item.color}
                        fontWeight='bold'
                        key={Math.random()}
                     >
                        <TagLabel>{item.name}</TagLabel>
                     </Tag>
                  ))}
               </Stack>
            </CardFooter>
         </Card>

         <Card
            minWidth='60%'
            maxWidth='60%'
            minHeight='50%'
            maxHeight='50%'
            bgColor='#303030'
            color='#fff'
         >
            <CardHeader>
               <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                     <Avatar
                        name='Confitec'
                        src='https://media.licdn.com/dms/image/C4D0BAQFI3TuvLLmvNQ/company-logo_200_200/0/1672662920959?e=2147483647&v=beta&t=vKyuX5Lhfvyf1CBRCgmjxKQ7l2GSajl0Z0fEzviZNHo'
                        objectFit='contain'
                     />
                     <Box>
                        <Heading size='sm'>Analista de sistemas júnior</Heading>
                        <Text>
                           <Link
                              href='https://www.linkedin.com/company/confitec'
                              isExternal
                           >
                              Confitec <ExternalLinkIcon mx='2px' />
                           </Link>
                        </Text>
                     </Box>
                  </Flex>
               </Flex>
            </CardHeader>
            <CardBody>
               <Stack
                  direction='column'
               >
                  <Text>- Implementação de novas funcionalidades para sistema interno de seguros da BrasilSeg.</Text>
                  <Text>- Trabalhando com microsserviços.</Text>
               </Stack>
            </CardBody>

            <CardFooter
               justify='center'
               flexWrap='wrap'
            >
               <Stack
                  direction='row'
                  spacing={1}
                  wrap='wrap'
               >
                  {technologies2.map(item => (
                     <Tag
                        size='md'
                        borderRadius='full'
                        variant='solid'
                        backgroundColor={item.color}
                        fontWeight='bold'
                        key={Math.random()}
                     >
                        <TagLabel>{item.name}</TagLabel>
                     </Tag>
                  ))}
               </Stack>
            </CardFooter>
         </Card>
      </Stack>
   );
}