import {app} from "./app";
import { connectedDB } from "./infrastructure/config/mongo";

const PORT = process.env.APP_PORT;

connectedDB();

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})