module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
            status: 200,
            body: "<h1>Hello Lunch-and-Learn</h1>"
        };

    context.done();
};