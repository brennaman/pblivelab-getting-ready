module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            body: "<h1>Hello Lunch-and-Learn People</h1>"
        };

    context.done();
};