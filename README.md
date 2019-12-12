# BSc (Hons.) Level 8 - Assignment 2 

Name: Dylan French Carroll

## Overview.
Scroll down to find updates. 
This is a basic web app based off of the hacker news labs. I changed the premise to be a 
playlist app where you can add songs to my playlist for me to check out and listen to. 

. . . . . List of user features  . . . .

- Add post
- Comment on post
- View post comments
- View help page
- Log in page

## Setup.

Download the main folder and open it in Visual Studio Code editor. Once loaded, open terminal to the hackerNews2 folder and type "npm start".
This should run the web page app on localhost:3000. 

## Data Model Design.

Here is the json folder that i pasted data into. I tried to get more CRUD working but only got read, as JS cannot write to files such as JSON, I looked into
running and express server and getting the app to send commands to that to delete data from the json folder. I also explained the flow of the app to request data for posts 
and provided some JSON data i used. 

![](/img/eerd.png)
![](/img/DataModel.png)


~~~
[
    {
        "id": 1,
        "title": "Paint It, Black",
        "link": "https://www.youtube.com/watch?v=O4irXQhgMqg",
        "author": "The Rolling Stones",
        "comments": [],
        "upvotes": 10
    },
    {
        "id": 2,
        "title": "Back In Black ",
        "link": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
        "author": "AC/DC",
        "comments": [],
        "upvotes": 14
    }

]
~~~
## UI Design.

>>Here is the main page, you can add posts here and once added can be viewed here. They are not persistent. 

![](./img/main.png)

>> Here is a help page with some text.  

![](./img/help.png)

>> This is my log in page which doesn't have any functions as of yet, because JS cannot write to my machine from the browser. 

![](./img/login.png) 

>>> This is a comments page, you can add comments and view comments here, I just added one and it shows above the box

![](./img/comment.png)


## Routing.

. . . . List each route supported by the app. For each one state the associated view and whether it's public/private (requires authentication) . . . . .

- http://localhost:3000/ (public)- displays all published posts - title, artist and link only.
- http://localhost:3000/posts/x (public) - "x" is the post number. Detailed view of a particular post. Shows comments and can add comments here.
- http://localhost:3000/help (public) - help page with some text
- http://localhost:3000/login (public) - login/sign up page

## Storybook.

. . . . . Include a screenshot of the fully expanded list of stories from the tool's UI (see below). Group the stories appropriately (e.g. Contact page group) . . . .

![](./img/story1.png)
![](./img/story2.png)
![](./img/story3.png)

. . . . (Optional) State any non-standard Storybook add-ons used and include a screenshot(s) to illustrate.

## Backend (Optional).

Instead of manually using the hardcoded data from the stubApi.js file, i put the data into a JSON file as the code is less smelly that way.
At the moment the app only reads data from the JSON file as i could not get the express server to work with my project to allow more CRUD and authentication.
Now the stubApi.js file just has functions that I still use instead of having data and functions. 

## Authentication (Optional).

. . . . Briefly explain the authentication method used by your app (e.g. JWT, Firebase) ). If user registration is not supported, mention test username/password pairs available . . . . . .

## Independent learning.

I deployed my website using glitch so it is public and wont need to be ran locally if you choose. 
Website address is: https://dylanfrenchcarroll-web-app-assignment-1.glitch.me/


#Update#
Since the first assignment I have added a backend to my application. 

