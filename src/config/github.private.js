// module.exports = {
//     appId: 887983,
//     clientID: 'Iv1.21d382aeacb5acca',
//     clientSecret: 'f72af089c740ff614dda78ff62259a5af3c49a3d',
//     callbackURL: 'http://localhost:8080/api/sessions/githubcallback'
// }
require('dotenv').config(); // Carga las variables de entorno desde .env
module.exports = {
    appId: process.env.GH_APPID,
    clientID: process.env.GH_CLIENTID,
    clientSecret: process.env.GH_CLIENTSECRET,
    callbackURL: process.env.GH_CALLBACK
}