// init project
const logger = require('koa-logger')
const serve = require('koa-static')
const route = require('koa-route')
const Koa = require('koa')
const app = new Koa()

const john = require('./john.js')

// log requests
app.use(logger())

// serve static files
app.use(serve(__dirname + '/public'))

// serve a new john
app.use(route.get('/john', ctx => {
  ctx.body = john()
}))

// happy johns!
app.listen(process.env.PORT || 3000)