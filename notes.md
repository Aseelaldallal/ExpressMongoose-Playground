HTTP Verbs

Get
Post
Put
Patch
Delete

Put vs patch:
Put replace entire document, patch updates a specific field.

Express: Minimal, flexible absgraction layer on top of node
handy framewok for creating Web APIs
Allows us to do routing, create/use middleware, and use template engines

// MIDDLEWARE
app.use(function(req,res, next) {
// Do something here
// then move to next middleware
next();
})
use is solely for middleware
app.use() applies middleware to every single route
if we want to pick and choose which routes to apply middleware to, we have to
specify it in second argument
app.post('/todos, middleware, function(req,res)=> {
// blah
})

app.use(express.static('public'));
everything in public folder immediately gets served to client
(use this guy with templating engines)

Dynamic Routes
app.get('/quotes/:name, function(req,res) {
response.send(request.params.name);
})
