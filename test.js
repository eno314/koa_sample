var koa = require('koa'),
    router = require('koa-router'),
    app = koa();

app.use(router(app));

app.get('/test', function *(next) {
    this.body = "list page";
});

app.get('/test/:id', function *(next) {
    this.body = "id : " + this.params.id;
});

app.post('/test', function *(next) {
    this.body = "regist";
});

app.put('/test/:id', function *(next) {
    this.body = "update id : " + this.params.id;
});

app.del('/test/:id', function *(next) {
    this.body = 'delete id : ' + this.params.id;
});

app.listen(process.env.PORT || 5000);
