This web application is structurely divided into different folders, which includes actions, assets for css and images, components folder, containers though in our case their is only one container and routes.
React Context for State Management have been used to pass filters, call api's and fetch the data. Separate actions and reducers files are created to call the api and set the state.
React redux was another option, but in our case we have less data to handle so react context have been used
Styled components is included for the loader component as well as external css file for others.
In the footer section two buttons are included i.e Next and Previous which would have been used for pagination, but in our case we receive bulk data at once, so the buttons won't be functioning.
The application is tested and is bug free.
