#### Setup

- npm install
- npm run dev

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
