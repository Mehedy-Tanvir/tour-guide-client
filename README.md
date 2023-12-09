# Travello Local Tour

## Unique Feature

- Editing id's on the URL of the browser may lead to the crashing of the server. To address this, I created a middleware named `verifyId` on the server side, which checks if requests contain a valid id. If the id is not valid, it sends a 404 status code to the client side. This error is tracked by the Axios interceptor, and if such an error occurs, the user is redirected to the home page, showing an invalid id toast.

## Project Features

- In the home page, it contains Banner, Popular Services, Things You Need To Know, Our Memories, and Subscription sections. All pages contain a navbar and footer. Initially, the home page loads four popular services data from the server, which is stored in MongoDB. Clicking the show all button below the popular services section will redirect the user to the services page.
- In the services page, there is a search by service name implemented. Initially, it shows 6 services and a show more button. Clicking the show more button will display all the services.
- In the service card, there is a show details button. If the user is logged in, the user can show the detail page of the service and go further.
- In the show detail page, there are also other products from the same provider. Clicking them will redirect the user to their detail page.
- In the show detail page, clicking the book button will open a modal where there shows service information, and the user can input the date and instruction and then purchase the service.
- Users can see their bookings and pending works on the my schedule page.
- Users can also add a service by submitting a form on the add service page.
- Users can see their added services on the my added services page.
- From the my services page, users can update and delete their services.
- If anyone books their services, it will show on their my schedule's my pending work section. From here, they can update the status of the service to in progress or completed. Initially, the status is pending.
- Both email-password and social-based authentication are implemented by Firebase. Only the home page and all services pages are public.
- JWT-based authentication is implemented.
- Axios interceptor functionality is implemented.
- There is a 404 error page.
- Dynamic loading page is shown on loading.
- Successful or failed CRUD operations and authentication operations will show meaningful toasts.
- In the navbar, when users log in, they can see their image and name.

## Technology Used

- **Frontend:**

  - React.js
  - React Router
  - Tailwind CSS
  - Daisy UI

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB

- **Authentication:**

  - Firebase (Email-password and social-based authentication)

- **Other Libraries:**

  - JWT (JSON Web Token)
  - Axios
  - React Hot Toast
  - Tanstack Query
  - Framer Motion
  - Lottie React
  - React Icons
  - Prop Types

- **Deployment:**

  - Client Side Hosted to Firebase
  - Backend Side Hosted to Vercel

## Server Repository

- [https://github.com/Mehedy-Tanvir/tour-guide-server](https://github.com/Mehedy-Tanvir/tour-guide-server)

## Live Links

- [https://travello-local-guide.web.app/](https://travello-local-guide.web.app/)
- [https://travello-local-guide.firebaseapp.com/](https://travello-local-guide.firebaseapp.com/)
