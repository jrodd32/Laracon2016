### Vue.js

## Core Concepts
# 1.) Declarative & Reactive Rendering

Major issue of all front end apps is keeping the DOM and state in sync

Problems with the DOM
    Re-rendering entire chunks of the COM is expensive and disruptive
    Impreatively keeping the DOM in sync with the state is tedious and error-prone

Declarative & Reactive Rendering
View updates the State based on user Input which re-renders the View
    View is just a mapping of the model state
    State should be the single source of truth

        User Input
    View        State

            (Vue Instance)
    (DOM)               (Plain JS Objects)

Derived State w/ Computed Properties
Derived state == All todos that are done, All todos that are !done, etc

# 2.) Component Oriented Architecture
Centralize your state logic by keeping the things that mutate state in one place using the methodology of data down event up