# YAGNI (You aren't going to need it) in Laravel
Jason McCreary - @gonedark

## Part 1
### WYS (What YAGNI solves)

Over Engineering

    Causes
        WLWWD
            We love what we do
        FOMO
            Fear of missing out (Think about all the acroymns)

        Implement things when we actually need them. Never when you just foresee that you need them.

MVP

    Minimal Viable Product
    Do the simplest thing that could possibly work. (Then iterate) -- From extreme programming book

KISS

    Keep it simple stupid

## Part 2
### SMTC (Show Me The Code)

Condensed a route to a welcome controller to removing the controler and returning the view in the route

SG (Speclative Generality)

    Adding coding because we think we will need it later

    Refactored a controller with the repository pattern where the repository was only returning a full collection of a class to remove the repository

RVY (Refactoring vs YAGNI)

    If you practice YAGNI you are keeping your code simple
    If you refactor you are making your code more simple
    It's a positive feedback loop

## Part 3
### SOY (Stages of YAGNI)

1.) Laziness
    YAGNI is not laziness, even if it feels that way at first. Look at time on your side.

2.) CYA (Challenge Your Assumptions)

    This will help you get past that feeling of laziness
    -- Do you really need to build that right now?
    -- If yes, do you have everything you need to start?
    -- Do you fully understand the problem?

3.) Empowerment
    Prior to this point you were probably just saying no.

    Do not call YAGNI on ...
        When learning something brand new
        A current design desicion based on a future need (The mail example with queueing from earlier)
            Don't do something intenionally wrong using YAGNI as an execuse
        Testing
        Abstracting external code
        Business requirements
        Security features

4.) Confidence
    With YAGNI you will ...

        know when to defer decisions until tomorrow / later
        trust your ability to pivot quickly
        write less code
        write less complex code (The whole point really)