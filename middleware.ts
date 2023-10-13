import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    //basically does access control
    publicRoutes: ["/", '/homepage', '/courses', '/courses/moreInfo/math/algebra', '/courses/moreInfo/math/trigonometry',
    '/courses/moreInfo/science/chemistry', '/courses/moreInfo/science/middleSchool Biology', '/courses/science',
      '/courses/math', '/courses/technology', '/courses/education', '/courses/lifeskills', '/courses/personalDev',   
    ],
});
 
export const config = {
    //specify when it should run
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};