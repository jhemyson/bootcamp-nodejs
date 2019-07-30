const express = require("express")
const routes = require("./routes")

class App {
  constructor(){
    this.server = express()

    this._middlewares()
    this._routes()
  }

  _middlewares(){
    this.server.use(express.json())
    this.server.use(this._exceptionsErrors)
  }

  _routes(){
    this.server.use(routes)
  }

  _exceptionsErrors(err, req, res, next){
    if(err){
      return res.status(err.status).json(err)
    }

    next()
  }
}

module.exports = new App().server
