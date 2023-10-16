import app from './app'
import sqlDB from './database/database'
import { component_module_element, module_element, window_module_element } from './models/module_model'

const PORT:number = 4000


const main = async () => {
    try {

        await sqlDB.authenticate()
        await sqlDB.sync({force: false})
        
        
        const data = await module_element.findAll()
        const data2 = await component_module_element.findAll()
        const data3 = await window_module_element.findAll()

        app.listen(PORT)


    } catch (error) {
        console.log(error)
    }
}

main()