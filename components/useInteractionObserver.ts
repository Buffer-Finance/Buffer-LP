import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

export function useInteractionEffect(cb, dependencyRefs) {
  const ob = useRef<IntersectionObserver>();
  const ucb = useRef<any>();
  const observerCb = useCallback((enteries) => {  
    ucb.current = false;
    for (const entery of enteries) {
      if (entery.isIntersecting) {
         cb(true);
         ucb.current = true;
      } 
    }
    if(!ucb.current){
      cb(false);
    }
  },[]);
  useLayoutEffect(()=>{
    ob.current = new IntersectionObserver(observerCb);
  },[])
  useEffect(()=>{
    dependencyRefs.map(s=>{
      console.log(`s: `,s);
      
      if(s?.current)
      
      ob.current.observe(s.current)
    });
    
  },dependencyRefs)
 
}
