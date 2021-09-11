# kj-modelling

## Hosting
[![Netlify Status](https://api.netlify.com/api/v1/badges/4225893c-5f0f-42e2-9f6d-4c774cfb95af/deploy-status)](https://app.netlify.com/sites/kjmodelling/deploys)

## Packages Used
1. Bootstrap v.5.0.2 via CDN, no jQuery
2. [Swiper](https://swiperjs.com/) v.7.0.2

## Requests
Client requested the following:
1. Small web application to act as Instagram replacement to send to model bookings
2. No personal contact info (phone number, email), only a contact form to send booking info
3. Primarily focused on images
4. Client did not want to pay for custom domain or hosting fees.

## Design Process
1. I originally put together a rough [Figma](https://www.figma.com/file/q1PXN0xGMY29Svv9biukEH/kj-modelling?node-id=4%3A66) file for the client to view remotely.
2. She liked the colors used and the basic content, but wanted to make eveything horizontal vs. vertical.
3. I found that a simpler design looked more aesthetically pleasing, less "cartoony" and much easier to make responsive to all devices, and the client agreed.

## Form Submit
As this was a frontend only project, I needed to implement a form submission without setting up a backend. I used [FormSubmit](https://formsubmit.co/) to implement a simple email redirection to the client, as there were no files or large data being sent. 

### User Story: 

```
When the user fills out the contact form and clicks the submit button
And the user completes the ReCaptcha page
Then they will be redirected to a confirmation page
And the email will be send to the user in a secure fashion without providing the client's contact info
```

### Form Flow
1. The user fills out the form:


![create-message](https://user-images.githubusercontent.com/71335643/131942743-8b63b22b-5a54-40f0-8dc6-3d160520ee5d.png)
---
2. The user completes the ReCaptcha page for spam security:


![spam-control](https://user-images.githubusercontent.com/71335643/131942767-ea0703da-574c-4808-96bb-a7371217329d.png)
--- 
3. The user is sent to the confirmation page with navigation intact to go back to the home page:


![user-confirmation](https://user-images.githubusercontent.com/71335643/131942784-c97b98cf-d50e-41c3-9f71-7a55f1657037.png)
---
4. The client is sent an email with the contact information:


![email-sent](https://user-images.githubusercontent.com/71335643/131942835-fd2c2ca1-c15d-483f-b913-fc467dccbc2e.JPG)
