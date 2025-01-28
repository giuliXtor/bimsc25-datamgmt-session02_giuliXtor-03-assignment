// This is main JavaScript file

// From vue, we import a function to create a Vue application
import { createApp } from "vue"

// Import of the App.vue file
import App from "./App.vue"

// Create Vue appliction with App.vue component and inject it into element with id 'app'
createApp(App).mount("#app")
