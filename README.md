# Stream 1 Front End Development Project 
 
## Overview

This is a front end development project. The goal is to re-develop a website for a Psychotherapy Clinic using new images from the offices. The project is to show case the offices and also make the website interactive for the end user. Another goal of the website is to inform potantial clients about Psychoanalysis, give information about the clinic itself, and progress to call the clinic or book a session. 

## Project Guidelines
- Create a website of around 4-5 pages, or (if using a single scrolling page) these should be separate page areas
- Incorporate main navigation and grid layout (you might want to use Flexbox or Bootstrap to accomplish this)
- Include at least one form with validation. Since you are not expected to build a backend for the project, all this form needs to do is inform the user of whether or not the data was submitted successfully (i.e. passed validation)
- Whenever possible, strive to use semantic HTML5 elements to better structure your HTML code.
- Make sure your site is as responsive as possible. You can test this by checking the site on different screen sizes and browsers.
- The site should contain your own custom JavaScript logic – include at least one interactive component on your site that is based on non-trivial javascript logic. You can write this logic either inside an Angular controller/service, or in a separate js file.
- You should conduct and document tests to ensure that all of you websites functionality works well. Automated testing using frameworks such as Jasmine are preferable, but properly documented manual tests are also acceptable.
- Write a README.md file for your project that explains what the project does and the need that it fulfills. It should also describe the functionality of the project, as well as the technologies used. Detail how the project was deployed and tested and if some of the work was based off other code, explain what was kept and/or how it was changed to fit your need. A project submitted without a README.md file will FAIL.
- Use Git & GitHub for version control. Each new piece of functionality should be in a separate commit.
- Deploy the final version of your code to a hosting platform such as GitHub Pages.
 
## Features
 
### Existing Pages
#### Navbar/Footer
The Navbar and Footer are the same across all the pages. The Navbar is transparant at first and changes on scroll with jQuery and CSS classes. The dropdown menu is also enabled with jQuery. Navbar is fixed to top and scrolls with page to ensure easy site navigation. 

The top banner above the Navbar slides up with jQuery on scroll and appears again once scrolled back up to the top. The email when clicked should open computers default email and social media links open in a new tab. 

For the footer icons and buttons were used for a clean look, built into the bootstrap grid design. All links for social media and pins for locaitons open in new tab also. Email address when clicked should open computers default email. 

Throughout the Navbar and Footer (along with most of the site) pseudo classes were used for style and to make the site interactive. 

#### Homepage
I wanted sharp images for the landing page and incorporated them into the bootstrap carousel. jQuery was used to override the carousel to start when page loads.
I used keyframes for the main logo to fade in when the site loads. The same Keyframes is used on all slides. 

Underneath the slider I incorporated a button within the Psychotherapy Dublin logo. This links to a different part of the website. Here I used CSS positioning to place the button within the logo. I also used Keyframes to animate the logo (rotates slowly) for some fun. As with most buttons, :hover was used to give an interactive feel.

In the next section I developed a parallax effect using CSS and got the styling idea from a bootstrap example. 

Below the parallax I used jQuery to fade in three buttons on scroll. 

For the "Associated Friends and Partners" section I used CSS and HTML to create the slider effect. This is limited to four loops before starting again and could be coded a little better, but works for now. Using jQuery and CSS the slider stops and changes color on mouse hover.

#### Our Services, About Us, Your Psychotherapists, Appointments

All these pages have different variations of bootstrap grid design. jQuery fade in can be seen throughout. I've also embedded a video, and images. Overriding CSS was used for styling many of the email links.   

#### Contact Us

On this page I coded two forms as I wanted to play around with style. Validation is used for the email. Pseudo classed were also used for mouse hover on the location images. 
 
## Tech Used
### Some of the tech used includes:
- [Bootstrap](http://getbootstrap.com/)
    - I used **Bootstrap** to give the project a simple, responsive layout
- [jQuery](https://www.jquery.com/)
    - I used **jQuery** to help with the style and user interactions
- [font-awesome](http://fontawesome.io/)
    - I used **font-awesome** for icons 

## Installing
### How to get a development environment up and running
Click clone/download on the right of the repo. Download zip to desktop. Once downloaded open folder and remove all to a new folder which you can self title. With Sublime text editor open up any file required. To view webiste right click and select "view in browser". Viewing in Chrome is recommended.

## Testing
### What tests and why?
Testing all functionality on mobile once deployed. Found issues with margins as "px" was used instead of % in many cases. These have been amended and resolved. Also the drop down menu in the NavBar doesn't fully close when pressed a second time. 

#### NavBar
- Mobile Issues with the drop down menu on the Navbar when closing the menu. Doesn't fully dissappear. This is on mobile.  

More tests still need to be completed on mobile devices and functionality on different browsers. 

## Deployment
I encountered problems with deployment as the correct files didn't seem to carry over which was resolved using git bash. Initial image issues at the start also as gh-pages is case sensitive.



## Versioning
I used GitHub for versioning. 

## Author
David Fortune

## Acknowledgements