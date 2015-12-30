# Urbanfun - UrbanStems Test Project

Welcome Potential UrbanStemmer! We're excited you're willing to take this adventure with us. Please take the time to read over the instructions for the following test project. You're not working with any real data so have fun with it! Feel free to add on any framework or libraries you're comfortable with. It shouldn't take up too much of your time. If you have any questions, feel free to email Chetan at chetan@urbanstems.com.

## The Challenge

We're expanding to a new city and we need your help! Take the data found in the `data.json` file and store it however you'd like (e.g. hardcode it directly in the request, parse it into a separate JSON/JS file, place it into a simple db, etc).

When a user arrives at the site (http://localhost:3000), they must enter the zipcode they're sending flowers. After selecting a zipcode, your frontend code must `GET /api/products` and only show them the flowers that are available in that zipcode. You are allowed to differentiate which products are available in whichever zipcode. Basically, you can add attributes to the products data but cannot remove.

The default rendering engine is `jade`. Switch it to whatever you're most comfortable with (handlebars, etc). Leave your frontend JS un-minified. You can use ES6 if you'd like.

No need to style it properly, we're more concerned with functionality and usage rather than aesthetics.

## Bonus Challenge #1

When a user enters a valid zipcode (5-digit number) outside of the given range for that city then return a message indicating so and ask for their email with a fake signup form.

## Bonus Challenge #2

Whenever someone enters a new zipcode, show them a map of that zipcode from one of several map providers (e.g. Google, Mapbox).