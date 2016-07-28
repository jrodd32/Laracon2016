# Single-Page Applications with Vue, Vue Router & VueX
    Has a CLI to speed up development
        npm install -g vue-cli
        vue init webpack-simple-2.0
        npm install
        npm run dev // Starts server
    Come with webpack, hot reloading, and persistant transient state

## What is a SPA
    1.) Entire app loaded on a single page
    2.) No page reload on UI navigation
    3.) Dynamically update UI iwth ajax-fetched data

## Why SPA?
    1.) More fuluid, snappy UX
    2.) More decoupled architecture
        Frontend dedicated to handling UI complexity
        Backend focused on data logic and exposing API end points (reusable for multiple clients!)

## Challenges for SPAs
    1.) Displaying semantic URLs without reloading the page
    2.) Dynamic render corecct UI based on URL navigations
    3.) Deep-lnksing
    4.) SEO (Crawlers are mostly able to crawl SPAs)

## Handling the Challenges
### Displaying semantic URLs without reloading the page
    HTML5 History API (Look into this more)
    Use push-state to push history onto the API

#### Vue-Router
    Handles URLs using HTML5 History API
    Maps URLs to correct controllers

##### Using Vue-Router
    Import VueRouter
    Vue.use(VueRouter)
    const router = new VueRouter({
        routes: [
            { path: '/', component: App }
            <!-- More routes go here -->
        ]
    });

## Vuex
    Vuex is a state management solution (think Redux)
    Predicatble State Management
    Designed for large-scale applications that requires long-term maintainability
        Builds off yesterdays talk about centralizing state management
    Removes even more logic from the components. They would then basically only hold transient state logic
    All components can access any piece of state at anytime regardless of positioning of parent > child relationships
    Explicit state mutation gives you a mutation history and time travel debugging