import parsedData from './../Database/Database.json'

export const authApi = {

     login(log, pas) {

        if (parsedData.Login === log && parsedData.Password === pas) {
            return parsedData.Name
        } else {

            return 'false'
        }
    },

    loginIsHave(log) {
        if (parsedData.Login === log) {
            return true
        } else {
            return false
        }
    }
}