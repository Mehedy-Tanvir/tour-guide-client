# Travello Local Tour

## Extra Feature

- Editing id's on url of the browser may lead to crashing of server thats why I created a middleware named verifyId in the server side which checks if requests contain valid id. If id is not valid it sends a 404 status code in the client site which is than tracked by axios interceptor and if such error is occurred user is redirected to the home page showing invalid id toast.

## Project Features

- In the home page it contains Banner, Popular Services, Things You Need To Know, Our Memories and Subscription section. All the pages contain navbar and footer. Initially home page loads four popular services data from server which is stored in MongoDB. Clicking show all button below popular services section will redirect user to the services page.
- In the services page there is search by service name implemented. Initially it shows 6 services and show more button. Clicking show more button will show all the services.
- In the service card there is show details button. If user is logged in user can show detail page of the service and go further.
- In show detail page there is also other products from the same provider, clicking them will redirect user to their detail page.
- In show detail page clicking book button will open a modal where there shows service information and also user can input date and instruction and then purchase the service.
- User can see his bookings and pending works at the my schedule page.
- User can also add service by submitting form at the add service page.
- User can see his added services at my added services page.
- From my services page user can update and delete his/ her services.
- If anyone books his / her services it wil show on his / her my schedule's my pending work section. From here he / she can update the status of service to in progress, completed. Initially the status is in pending.
- Both email-password and social based authentication is implemented by firebase. Only the home page and all services pages are public.
- JWT based authentication is implemented.
- Axios interceptor functionality is implemented.
- There is 404 error page.
- Dynamic loading page is shown on loading.
- Successful or failed crud operations and authentications operations will show meaningful toast.
- In the navbar when users log in he or she can see his image and name.

## Live Links

## [https://travello-local-guide.web.app/](https://travello-local-guide.web.app/)

## [https://travello-local-guide.firebaseapp.com/](https://travello-local-guide.firebaseapp.com/)
