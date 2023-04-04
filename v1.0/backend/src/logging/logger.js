const pino = require('pino')
const prettty = require('pino-pretty')
const store = require('store')
const LOGIN_DATA_KEY = 'login_data_key'
const TOKEN = 'token'

 const setLoginData =(data) => {
  let saved =store.set(LOGIN_DATA_KEY,{'userID':data.body.schoolId,'deviceID':data.headers['x-request-deviceid']})
 }

 const getLoginData = () => {
  let loginData =store.get(LOGIN_DATA_KEY)
    return loginData
}

const setToken =(data) => {
  let saved =store.set(TOKEN,data)
 }

 const getToken = () => {
  let token =store.get(TOKEN)
    return token
}

const levels = {
  error: 50,
  warn: 40,
  notice: 30,
  info: 20,
  debug: 10,
};


const logger = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  customLevels: levels,
   useOnlyCustomLevels: true,


  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    bindings: (bindings) => {
      return { pid: bindings.pid, host: bindings.hostname};
    },
    level: (label) => {
      return { level: label.toUpperCase() };
    },
    
  },
 },
   prettty()

)
  
  module.exports = {
    logger,getLoginData,setLoginData,setToken,getToken
  };