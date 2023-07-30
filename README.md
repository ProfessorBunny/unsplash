# React Unsplash Image Search App

This is a React app built using Vite that allows users to search for images using the Unsplash API. The app utilizes React Query to efficiently fetch, render, and manipulate data from the server directly in the React app. By leveraging the React Query cache, rendering data on the frontend becomes faster and more responsive. Additionally, the app provides a feature that enables users to switch between light mode and dark mode based on their preference.

## Features

- Search for Images: Users can enter keywords in the search bar to find images related to their search terms.
- React Query Integration: Data fetching and caching are managed using React Query, resulting in faster rendering and better performance.
- Light Mode / Dark Mode: Users can switch between light mode and dark mode based on their preference, providing a more personalized user experience.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool and development server for modern web applications.
- Unsplash API: A powerful API for searching and accessing high-quality images from Unsplash.
- React Query: A data-fetching library for React that optimizes server state synchronization.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm must be installed on your system.

### Installation

1. Clone the repository to your local machine using the following command:

```
git clone https://github.com/your-username/react-unsplash-image-search.git
```

2. Navigate to the project directory:

```
cd react-unsplash-image-search
```

3. Install the dependencies:

```
npm install
```

### Configuration

To use the Unsplash API, you need to obtain an API key. Follow these steps to get your API key:

1. Visit the [Unsplash Developer](https://unsplash.com/developers) website.
2. Sign in or create a new account.
3. Create a new application to get your API key.

### Usage

1. Open the project in your preferred code editor.

2. In the project directory, create a new file named `.env` and add the following line, replacing `YOUR_API_KEY` with the API key you obtained from Unsplash:

```
VITE_UNSPLASH_API_KEY=YOUR_API_KEY
```

3. Start the development server:

```
npm run dev
```

4. The app will be accessible at `http://localhost:5173`. Open this URL in your web browser.

5. You can now use the app to search for images and enjoy the light/dark mode feature.

#### Dark Theme - CSS

```css
:root {
  /* dark mode setup */
  --dark-mode-bg-color: #333;
  --dark-mode-text-color: #f0f0f0;
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);

  --darkModeTransition: color 0.3s ease-in-out, background-color 0.3s
      ease-in-out;
}

.dark-theme {
  --textColor: var(--dark-mode-text-color);
  --backgroundColor: var(--dark-mode-bg-color);
}

body {
  transition: var(--darkModeTransition);
  background: var(--backgroundColor);
  color: var(--textColor);
}
```

#### User Prefers Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --textColor: var(--dark-mode-text-color);
    --backgroundColor: var(--dark-mode-bg-color);
  }
}
```

[Unsplash Website](https://unsplash.com/)

#### Sign Up for an Unsplash Account

[Unsplash API](https://unsplash.com/developers)

#### Find the API Key and Correct URL for Searching Images

- register an app
- authorization (hint : public authentication)
- search functionality (hint : search photos)

After signing up for an Unsplash account, you will need to locate your API key and the correct URL to use when searching for images using the Unsplash API. This information can be found in the API documentation provided by Unsplash.

#### Setup ENV Variables in VITE

Environment variables can be used to store sensitive information, such as your Unsplash API key. In order to use environment variables in your application, you will need to set them up in VITE, a build tool for modern web development.

#### Deploy the Application to Netlify and Setup ENV Variables

Once your application is complete, you can deploy it to a hosting platform such as Netlify. When deploying to Netlify, you will need to set up your environment variables to ensure that your application can access your Unsplash API key.

#### React Query Info

By default, useQuery caches the results of the API request for a certain amount of time. This can improve the performance of your application by reducing the number of requests made to the API.

When you specify the queryKey array in the options object for useQuery, you are telling the hook how to identify the data being fetched. If the queryKey array doesn't change between renders of the component, then useQuery will return the cached data instead of re-fetching it from the API.

The queryKey array is used by useQuery to identify which data the query is fetching. When the queryKey array changes, useQuery assumes that the data being fetched has changed, and it re-runs the queryFn to fetch the updated data.

In this case, searchTerm is the user's search input, and it is used to modify the API request URL. By including searchTerm in the queryKey array, you are telling useQuery to re-run the queryFn whenever the user's search input changes, in order to fetch updated data based on the new search term.

Therefore, without including searchTerm in the queryKey array, the useQuery hook would not re-fetch data when the user performs a new search.

#### Vite ENV Vars

- .env : must be included in .gitignore
