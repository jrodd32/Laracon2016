# Keeping Eloquent Eloquent
Colin DeCarlo (Vehikl) - @colindecarlo

As software development we choose this profession as an outlet for our creativity.

Having the correct tools is not the same as using the tools correctly.

## Model Defaults
Doesn't want to pass the same variables into the constructor every time it's instantiated

For every model that needed default attrs he created a default array and in the constructor merged the default array wiht any passed in params.

    Didn't like this because:
        it felt wrong
        he had to overwrite the default constructor of the core framework

Ended up just setting the default values on the Models attributes array

## Meaningful Relations
### Relations
    Lazy Access
    Eager loading
    Creating
    Saving

(Used the example of assocating Posts with Comments -- Ended up adding a scope to Comment so the DB call was: $post->with(['comments'])->recent() -- Recent was the scope added on Comments)

### Abstraction
You should start treating foriegn key elements as toxic
Added a newComment method on Post so that there wasn't a reach through Post->comment to get to the Comment->create() method

(Lots of examples where he abstracts inlined methods into their specific models. The CommentsOverWeekEngagement example.)