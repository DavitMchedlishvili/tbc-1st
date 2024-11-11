// Importing createMiddleware from 'next-intl/middleware'
import middleware from 'next-intl/middleware';
// Importing routing configuration from './i18n/routing'
import { routing } from './i18n/routing';

// Creating middleware using the default export of the 'next-intl' middleware
const createMiddleware = middleware.default;

// Exporting the middleware with the routing configuration
export default createMiddleware(routing);

// Configuring the middleware to match only internationalized pathnames
export const config = {
  matcher: ['/', '/(ka|en)/:path*']
};