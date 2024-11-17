import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';


// const getReturnTo = (req) => {
//   // Determine language based on URL
//   const currentUrl = req.url || req.headers.referer;
//   const language = currentUrl.includes('/ka/') ? 'ka' : 'en';

//   // Set return path to language-specific profile page
//   return `/${language}/profile`;
// };


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




// import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// const getLanguageSpecificProfileUrl = (req) => {
//   const currentUrl = req.url || req.headers.referer || '';
//   const language = currentUrl.includes('/ka/') ? 'ka' : 'en';
//   return `/${language}/profile`;
// };

// export const GET = (req, res) => {
//   const returnToUrl = getLanguageSpecificProfileUrl(req);

//   return handleAuth({
//     login: handleLogin({
//       returnTo: returnToUrl,
//     }),
//   })(req, res);
// };