# Estimation
Chuck Reeves - @manchuck

The problem is we try to estimate the same way we do with code, deduction. What we really need is induction.

Try to avoid "wordy expression", the fluff inside a requirement that doesn't add anything.

(Uses an example of a contact form requirement)

## How to estimate
Define actors:
    Leads - ppl filling out the form
    Sales Team - ppl acting on leads

Look for requirement smells:
    Quick, easy, user friendly, etc

Be sure you define the technical requirements of what you are estimating.
    Email Lookup service
    Phone validation integration
    Form Logic
    Lead management UI

Historical Data
    Use what you know

Dry run / Unit tests
    Play with the tools, library's, etc that will be used in your estimate

Confidence Interval (CI)
    * Think like a forecast - always give a range

-- It is better to be roughly right than precisely wrong (John ?)

Examples)
    1. ) What is the wingspan of a 747 (211ft)
    2. ) Francis Scott Key the National Anthem wrote the lyrics but not the music (True)

Repetion
    What you have done in the past

Pros & cons
    ?

Absurdity test
    The wings are between:
        1-3 feet (no)
        100 - 300 (probably)

?

Fuzzy Logic / Tee Shirt Scale
    Effort
        Very Small
        Small
        Medium
        Large
        Very Large
    Lines of code (actually look back at already built features)
        150
        300
        450
        700
        850

Wideband Delphi or Group
    Get multiple esitmates from people. Then have a discussion and narrow down the ranges between the estimates

Bayes Theorem
    P(A|B) = P(B|A)P(A) / P(B)

    Basic dist is everytime you get new info. You must re-estimate.
    When you get information, the level of uncertainty will decrease.

### Priorities
    Urgency Matrix
        Urgent on the X axis
        Important on the Y axis
            High - blank
            Medium - low

    Prioritization Spreadsheeet
        Sets up the impact on the involved people (devs, sales team, leads, etc)

### Politics
Remove people from the problem
Focus on Interests not Positions
DO NOT NEGOTIATE YOUR ESTIMATE!!!

## Final Thoughts
Prefer hours to days (scale easier)

Throwing more developers will not solve the problem
    Takes nine months to have a baby. Nine women can't do it in one month

Iterate and be honest

Distance v Velocity
    Distance is the straight time estimated to do the task
    Velocity is the number of days to implement

Breakdown your estimates into the smallest manageable componets of the estimate

## Tools
Jira - https://www.atlassian.com/software/jira?
On Time Now - https://www.axosoft.com/tour (I think)

## References
Software Requirements - Karl Wiegers
    More for project managers than developers

Software estimation - Steve McConnel
    More for project managers than developers

How to Measure Anything - Douglas W. Hubbard