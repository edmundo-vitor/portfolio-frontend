import { Link } from '@chakra-ui/react'

export default function NavItem({ name, itemActive, onClick, href }) {
   return (
      <Link
         m={{ base: '10px', sm: '12px', md: '20px' }}
         fontSize={{ base: 'dm', sm: 'md', md: 'lg' }}
         style={
            itemActive ?
               ({
                  borderBottom: '2px solid',
                  borderImageSlice: 1,
                  borderImageSource: 'linear-gradient(to right, #FBD189, #F59983)'
               })
               :
               {}
         }
         _hover={{
            textDecoration: 'none'
         }}
         onClick={onClick}
         href={href}
         margin={0}
      >
         {name}
      </Link>
   )
}