import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
   Flex,
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   Avatar,
   Box,
   Heading,
   Stack,
   Text,
   Link,
   Tag,
   TagLabel
} from '@chakra-ui/react'
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
            minHeight='100vh'
            maxWidth='100%'
            ref={ref}
            justifyContent='center'
            alignItems='center'
            color='#fff'
            zIndex={0}
            spacing={{ base: 5, sm: 5 }}
            padding='20px'
         >
            <Text
               fontSize='3xl'
               bgGradient='linear(to-b, #FBD189, #F59983)'
               fontWeight='extrabold'
               bgClip='text'
               mt={{ base: '6vh' }}
            >
               Experi??ncia
            </Text>

            <Stack
               flexDirection='row'
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
         direction={{ base: 'column', md: 'row' }}
         maxHeight='100vh'
         width='90vw'
         opacity={0.9}
         justify='center'
         spacing={10}
      >
         <Card
            minWidth={{ base: '100%', md: '40%' }}
            maxWidth={{ base: '100%', md: '40%' }}
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
                              N??cleo Acesso ?? Terra Urbanizada <ExternalLinkIcon mx='2px' />
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
                     - Desenvolvimento de APIs REST para produtos voltados a desenvolvimento urbano sustent??vel.
                  </Text>
                  <Text>
                     - Gerenciando a VM e containers Docker, fazendo o deploy das aplica????es em ambiente de desenvolvimento, homologa????o e produ????o.
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
            minWidth={{ base: '100%', md: '40%' }}
            maxWidth={{ base: '100%', md: '40%' }}
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
                        <Heading size='sm'>Analista de sistemas j??nior</Heading>
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
                  <Text>- Implementa????o de novas funcionalidades para sistema interno de seguros da BrasilSeg.</Text>
                  <Text>- Trabalhando com microsservi??os.</Text>
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