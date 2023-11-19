import Express from "express";
const app = Express();
import { auth } from "./routes/auth.js";

//Middleware 
app.use(Express.json());

app.use('/api/auth', auth);

app.listen(4000, () => {

    console.log("Servidor en puerto 4000");

})