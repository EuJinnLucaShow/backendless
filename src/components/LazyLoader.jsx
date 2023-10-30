import { Suspense, lazy } from "react";

export const LazyLoader = ({ path }) => {

    const Component = lazy(() => import(`./../${path}`));
 
    return (
          <Suspense fallback={<div>Loading...</div>}> 
          <Component />
          </Suspense>)
}


