import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from 'react-router';
type Props={
    children: React.ReactNode;
}
const Auth0ProviderWithNavigate = ({children}:Props) => {
    const navigate  = useNavigate();
    
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clienId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    if(!domain || !clienId || !redirectUri  || !audience){
        throw new Error("unable to initialize auth");
    }

    const onRedirectCallback =()=>{ 
       navigate("/auth-callback");


    };
   
    return(
        <Auth0Provider
            domain={domain}
            clientId={clienId}
            authorizationParams={{
                redirect_uri: redirectUri,
                audience

            }}
          onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
 
}

export default Auth0ProviderWithNavigate