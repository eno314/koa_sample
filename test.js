var koa = require('koa'),
    router = require('koa-router'),
    bodyParser = require('koa-bodyparser'),
    app = koa();

app.use(bodyParser());
app.use(router(app));

app.get('/test', function *(next) {
    if (this.query === undefined) {
        this.body = 'query is nothing...';
        return ;
    }

    if (this.query.appid != undefined) {
        this.body = 'appid : ' + this.query.appid;
    } else {
        this.body = 'appid : ' + this.query;
    }
});

app.get('/test/:id', function *(next) {
    this.body = 'id : ' + this.params.id;
});

app.post('/test', function *(next) {
    if (this.request.body === undefined) {
        this.body = 'request body is nothing...';
        return ;
    }

    this.body = '';

    for (var key in this.request.body) {
        this.body += (key + ' : ' + this.request.body[key] + "\n");
    }
});

app.put('/test/:id', function *(next) {
    this.body = 'update id : ' + this.params.id;
});

app.del('/test/:id', function *(next) {
    this.body = 'delete id : ' + this.params.id;
});

app.listen(process.env.PORT || 5000);
