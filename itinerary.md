# Post Course – Full Stack Project

### Overview

This week we’re going to be building an Holiday Itinerary application, that allows you to share photos with friends/family whilst on holiday, and let them know what you are up to whilst there.

### Goals

- A functioning Itinerary: I should be able to upload photos and locations ands text etc about my days activities, so my family/friends can view them.
  - Pages
    - **Login Page (/)**: form for adding credentials
    - **Dashboard (/holidays)**: list of holidays, categorised into current and past
    - **Holiday (/holiday/holidayId)**: from the dashboard if you click on a holiday you are taken through the the specific holiday... which contains a timeline (slideshow or list) of the holidays events (photos and text etc)
    - **Add Holiday (/holiday/add)**: A page for authorised users to add a new holiday
    - **Edit Holiday (/holiday/edit/holidayId)**: A page for authorised users to edit an lready created holiday
  - Authentiation: Use firebase auth to ensure only once the correct credentials have been provided can someone (you) add photos etc to the itinerary.
  - Be able to see past holidays, as well as current holidays, based on the current date
  - e.g. if the date today is 22nd April and you are on holiday in Bali from 11th - 25th.... that would be a current holiday, compared to if the date today was 28th, the same holiday would be a previous holiday.

### Specifications 

- Built in React
- API is build in Spring or NodeJS (if you want to challenge yourself even more!)
- Database is either MySQL or NoSQL
- Auth required to update itinerary, not to view it

### EXT

- If you want to add some extra functionality you can add a flight tracker to the application
- Users can then enter a flight number + the airline being used, and get updates (how these are portrayed are up to you) on the flight that relates to the holiday... examples are:
  - progress bar for flight completion (e.g. halfway there shows 50%)
  - text message when the flight takes off/lands
