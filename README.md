# Leeds United Quiz

This is a quiz on Leeds United FC, and so the target audience are Leeds fans. The quiz will allow them to test their knowledge on the club. Due to the nature of the questions it is more likely to be suited to young adults or older.

Live Link: https://vfg-95.github.io/leeds-quiz/

![siteresponsivity](./assets/images/responsive.png)

## Table of Contents

1. [Goals](#goals)
    1. [Organisation Aims](#organisation-aims)
    2. [User Stories](#user-stories)
2. [Design](#design)
    1. [Colour Scheme](#colour-scheme)
    2. [Fonts](#fonts)
    3. [Wireframe](#wireframe)
3. [Features](#features)
    1. [Homepage](#homepage)
    2. [Q&A Section](#q&a-section)
    3. [Answer Feedback](#answer-feedback)
    4. [Score](#score)
    5. [Quiz Progress](#quiz-progress)
    6. [Score Page](#score-page)
    7. [Features To Implement](#features-to-implement)
4. [Testing](#testing)
    1. [Function Testing](#function-testing)
    2. [Lighthouse Testing](#lighthouse-testing)
    3. [Validators](#validators)
    4. [Bugs](#bugs)
5. [Deployment](#deployment)
6. [Credits](#credits)
7. [Media](#media)


## Goals

### Organisation Aims
- Make the sites purpose obvious on landing
- Create a fun but challenging quiz for the target audience
- Use an appropriate, visually pleasing colour scheme
- Make the quiz/site easy to navigate and complete

### User Stories
- I want to be able to quickly and intuitively complete the quiz
- I want to know what question I am on during the quiz
- I want to know my final score from the quiz
- I want to be able to retake the quiz
- I want to know what the correct answer is

## Design

I wanted the design to be simple and clean, which I achieved by keeping it very minimal and including the essential features which are discussed below. Other than the Leeds badge no other photos are included as I felt if I were to use one that it would be best used as a background image which I thought would be distracting from the quiz itself.

![quizquestion](./assets/images/quizquestion.png)

### Colour Scheme

The colour scheme was very easy to decide on as I matched it to kit/badge colours of Leeds United; White, Yellow and Blue.

![colourscheme](./assets/images/colourscheme.png)

### Fonts

I used two google fonts for the site, 'Ubuntu' was the default font used on the quiz name, play & home buttons, and the questions and answers themseleves. I then used 'Oxanium' for anything relating to the score, progress or answer feedback.

### Wireframe

I drew out the design for my wireframe. There were some changes/additions but the basic outline stayed the same for both the home page and quiz page. I came up with the final score page later in the project.

![wireframehomepage](./assets/images/wireframehomepage.png)

![wireframequiz](./assets/images/wireframequiz.png)

## Features

### Homepage
The home page clearly states what the site is for and allows the user to start the quiz with the 'play' button.

![homepage](./assets/images/homepage.png)

### Q&A Section
The main feature of the quiz is the Q&A section which provides the user with the questions and 4 interactive options for the user to choose from and complete the quiz. Users will instinctively click/press on the options to choose their answer. 

![colourscheme](./assets/images/qanda.png)

### Answer Feedback
The feedback feature appears in the place of the quiz progress when a user choses an answer. This hides the quiz progress and tells the user whether their answer was correct, or if not what the correct answer was. It also uses colour to visually aid the user, yellow meaning correct and blue incorrect.

![correct](./assets/images/correct.png)

![incorrect](./assets/images/incorrect.png)

### Score
The score feature increments with every correct answer to let the user know how many questions they have answered correctly whilst doing the quiz.

![score](./assets/images/score.png)

### Quiz Progress
The quiz progress feature increments with each question and displays to the user what number question they are on and the total number of questions.

![progress](./assets/images/progress.png)

### Score Page
Once the user finishes they are taken to the score page which tells them their final score along with a custom quote which is chosen depending on their final score. The user can then go back to the homepage and restart the quiz is they wish.

![scorepage](./assets/images/scorepage.png)

### Features To Implement

I was going to include a scoreboard (you can see this is commented out in the index.html file) to allow users to save their name and score, however I realised that as the site only makes use of local storage users on other devices/browsers would not actually see one another scores and so this is something which can be done with future development.

## Testing

I tested the sites responsiveness using Chrome dev tools and also on my own iPhone XR, MacBook & iPad:

**Mobile:**

-   Moto G4 (360x640)
-   Galaxy S5 (360x640)
-   Pixel 2 (411x731)
-   Pixel 2 XL (411x823)
-   iPhone 5/SE (320x568)
-   iPhone 6/7/8 (375x667)
-   iPhone 6/7/8 Plus (414x736)
-   iPhone X (375x812)
-   iPad (768x1024)
-   iPad Pro (1024x1366)

**Browsers:**

-   Chrome
-   Mozilla Firefox
-   Safari
-   Edge

### Function Testing

I tested the site was functioning as expected using my own devices and the browsers specified in the above section. The following functionality was tested for each:

- Play Button - tested that the play button directed through to the quiz page
- Option Buttons - tested that the option buttons responded to clicks and taps
- Increment Score - tested that the score properly increased when an answer was correct
- Quiz Progress - tested that the question number increased as expected whilst progressing through the quiz
- Answer Feedback - tested that when an option was clicked that the correct or incorrect answer feedback appeared
- Final Score - tested that the final score was pushed through to the score page correctly once the quiz was finished
- Final Quote - tested that the quote which appears on the score page corresponded to the final score
- Home Button - tested that the home button takes you back to the home page, and that the quiz can then be properly restarted

I used google sheets to keep a record of each device and browser as I went through the testing process, see example below for my iPhone XR:

![iphonexrtesting](./assets/images/iphonexrtesting.png)

### Lighthouse Testing

I got this result for desktop

![lighthousedesktop](./assets/images/lighthousedesktop.png)

and the following result for mobile

![lighthousemobile](./assets/images/lighthousemobile.png)

### Validators

W3 HTML Validator:

![htmlvalid](./assets/images/htmlvalid.png)

W3 CSS Validator:

![cssvalid](./assets/images/cssvalid.png)

JS Hint Validator:

![jsvalid](./assets/images/jsvalid.png)

I have not addressed the JavaScript warning as I believe this has not been covered on the course yet.

### Bugs

I solved the following bug where by the pseudo :hover class on the quiz options and buttons turned the font colour yellow, on phones and tablets this meant that the colour stayed yellow when the next question appeared:

![bug1](./assets/images/bug1.png)

This was soved by moving the :hover classes to a media query which only targets laptop or desktop size screens:

```
@media only screen and (min-width: 1025px) {

    /* Home Page */

    .button:hover {
        color: #FFF300;
        transition: 200ms;
        transform: scale(1.02);
        cursor: pointer;
    }

    /* Quiz Page */

    .option:hover {
        color: #FFF300;
        transition: 200ms;
        cursor: pointer;
    }
```

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
    - in the GitHub repository, navigate to the settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page provides the link to the completed website

The live link can be found here - https://vfg-95.github.io/leeds-quiz/

## Credits

- I took inspiration from the following YouTube [tutorial](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2939s)

## Media

- The club crest is a trade mark of Leeds United Football Club and I have contacted them for permission to display this on the quiz.












