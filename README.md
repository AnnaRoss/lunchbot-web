# LunchBot :robot::pizza:

## Prerequisites

The API (including docker-files) provided by Nent. Make sure it's up & running at http://localhost:3000.<br> If you've changed the port that it's available at, please make sure to change tot the correct port  in `/package.json`, `"proxy": "http://localhost:<LUNCHBOT_API_PORT_GOES_HERE>"` 

You will also need to have the following installed:

[Node.js](https://nodejs.org/en/) - v10.15.3 _\*Tip! If you use [nvm](https://github.com/creationix/nvm/blob/master/README.md), you can run `nvm use` from the project-root to set the correct node.js version._<br>
[yarn](https://yarnpkg.com/en/docs/install) - v1.15.2<br>

## Get Started

All set? Let's proceed! :ok_hand: :smile:

**Heads up!** All scripts should be run from the root of the project, if no other directory is mentioned
### 1. **Create a `.env.local`-file**

Copy the content of `.env.local.example`-file located at the root directory.

### 2. **Install dependencies**

In your terminal run `yarn` from the project root directory.

### 3. **Run the project in development mode**

In your terminal run `yarn start` from the project root directory.

### Code Formatting
If you want to contribute to this project, it's recommended to follow our lightweight code formatting guidelines 🤓 <br>

1. Make sure you have an **ESLint** extension installed for your editor. [Info on how to integrate ESLint](https://eslint.org/docs/user-guide/integrations). <br>
In this project, we use the default ESLint config that comes along when using [`react-scripts`](https://www.npmjs.com/package/react-scripts).<br>
   
2. Make sure you have a **prettier** extension installed for your editor. [Info on how to integrate Prettier](https://prettier.io/docs/en/editors) <br>
In the `/.prettierrc` file, there's some additional formatting rules :smile:<br>
--------------------------------
## Project Dependencies

### [React](https://reactjs.org/)
A JavaScript library for building component-based user interfaces.
[Create React App](https://github.com/facebook/create-react-app) was used to initiate this project.

### [dotenv](https://github.com/motdotla/dotenv#readme)
Loads environment variables from .env for nodejs projects.

### [Reach Router](https://reach.tech/router)
A routing library for React.

### [node-sass](https://github.com/sass/node-sass)
A Library that enables you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.

## Available Scripts

In the project root directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>

## Anna's General Thoughts

### Improvements & Bugs

Given I would have more time, I would like to:
- Implement tests (I've quite recently started out with testing, therefore I didn't prioritize it)
- Write comments in the code base, to enhance readability for other developers.
- Extend the very lightweight error handling that I had time to implement.
- Implement feedback to the user ( loaders, error message etc.)
- Give the design more love, responsiveness is high priority.
- Implement a "go-back-button".
- Fix a bug that I know of, is that when you hit the phone-number-link in the detailed-restaurant-view. It makes a call to the API.

### Features
At this point, I have implemented basic versions of three out of the four suggested features.

**Feature 1: A view that displays the list of the restaurants from LuncBotAPI.**<br>

> As a LunchBot visitor, I want to get insight of several places where I can eat in Stockholm,
> so that it's easier for me to decide where to eat.

**Feature 2: A detailed view for each restaurant that displays more information about the
selected restaurant.**<br>

> As a LunchBot visitor, I want to be able to get more details about a restuarant that I'm interested in,
> so that I can read their menu for example.

**Feature 3: A feature that lets the user sort the list of restaurants based on relevant
attributes.**<br>

> As a LunchBot visitor, I want to be able to easily view the restaurants with the best rating,
> so that it takes less time for me to find a place where I know has good food.

#### Not Implemented

A feature that I've started with, but didn't have time to complete, was to inform the user wether or not a restaurant is open at the current time. Since that feels like an essential feature for the app. 

What I'm thinking about implementing, but didn't have time to do for this code task, are features such as sorting by distance from the user's current location, using the Geolocation API.
