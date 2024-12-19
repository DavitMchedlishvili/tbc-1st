import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';


export const GET = handleAuth({
  
  login: handleLogin({

    returnTo: (req) => {
      // Determine language based on URL
      const currentUrl = req.url || req.headers.referer;
      const language = currentUrl.includes('/ka/') ? 'ka' : 'en';

      // Set return path to language-specific profile page
      return `/${language}/profile`;
    },
  }),
});


