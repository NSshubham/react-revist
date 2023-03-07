import {useRouteError} from "react-router-dom";

const Error = () => {
   const err = useRouteError();
   console.log(err);

   return (
       <>
         <div>
            <h1>Oops!! Something went wrong !!!</h1>
            <h2>{err.status} : {err.statusText}</h2>
            <h4>{err.data}</h4>
         </div>
       </>
   );
}

export default Error;