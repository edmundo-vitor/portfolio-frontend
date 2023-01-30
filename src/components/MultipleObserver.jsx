import { useInView } from 'react-intersection-observer';

const MultipleObserver = ({ children }) => {

   const { ref, inView } = useInView({ triggerOnce: true });

   if (inView) {
      console.log("Visualizando")
   } else {
      console.log("Não visualizo")
   }

   return (
      <div ref={ref}>
         {children}
      </div>
   )
}

export default MultipleObserver;