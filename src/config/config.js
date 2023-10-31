import { config } from "dotenv"; //implementar config()

config()

const enviroment = {

    PORT:process.env.PORT,
    URL_DB:process.env.URL_DB

}

export default enviroment