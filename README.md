# Urbanfun - UrbanStems Test Project

Welcome Potential UrbanStemmer! We're excited you're willing to take this adventure with us. Please take the time to read over the instructions for the following test project. You're not working with any real data so have fun with it! Feel free to add on any framework or libraries you're comfortable with. It shouldn't take up too much of your time. If you have any questions, feel free to email Chetan at chetan@urbanstems.com.

## The Challenge

We're expanding to a new city and we need your help! Take the data found in the `data.json` file and store it however you'd like (e.g. hardcode it directly in the request, parse it into a separate JSON/JS file, place it into a simple db, etc).

When a user arrives at the site, they must enter the zipcode they're sending flowers to. After the user has submitted/selected a zipcode, your frontend code must `GET /api/products` and only show them the flowers that are available in that zipcode. You are allowed to differentiate which products are available in whichever zipcode (e.g. "Fun Mix" can be in zipcode 80202 and 80205 while "Silly Mix" is only available in 80214). Basically, you can add attributes to the products data or create your own separate object to help you complete the task but cannot remove.

- Use any version of Node you're comfortable with. You can use ES6/ES2015 if you'd like.
- Use any backend framework (or none). Do what makes you feel comfortable.
- Use jQuery or any other library.
- Leave your frontend JS un-minified.
- There's no need to style the front-end properly, we're more concerned with functionality and usage rather than aesthetics.

Fork or clone away!

## Bonus Challenge #1

When a user enters a valid zipcode (5-digit number) outside of the given range for that city then return a message indicating so and ask for their email with a fake signup form (doesn't actually have to submit anywhere).

## Bonus Challenge #2

Whenever someone enters a new zipcode, show them a map of that zipcode from one of several map providers (e.g. Google, Mapbox, etc).