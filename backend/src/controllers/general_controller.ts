import { Request, Response } from 'express'
import { component_module_element, incident_module_element, module_element, report_module_element, window_module_element } from '../models/module_model'

const tables: any = {
    component_module_element,
    incident_module_element,
    module_element,
    report_module_element,
    window_module_element
}

export const get_all_elements = async (req: Request, res: Response) => {
    const { params } = req
    const { table_name } = params

    try {

        const result = await tables[table_name].findAll()
        res.json(result)

    } catch (error) {

        res.json(error).status(400)

    }
}

export const get_element_by_id = async (req:Request, res: Response) => {

    const { params } = req
    const { table_name, id } = params

    try {
        
        const result = await tables[table_name].findByPk(id)
        res.json(result)

    } catch (error) {
        
        res.json(error).status(404)

    }

}

export const get_element_by_field = async (req: Request, res: Response) => {

    const { params } = req
    const { table_name, field, payload } = params

    try {
        
        const result = await tables[table_name].findOne({where: {
            [field] : payload
        }})

        res.json(result)

    } catch (error) {
        
        res.json(error).status(404)

    }

}

export const get_element_by_fk = async (req: Request, res: Response) => {

    const { params } = req
    const { table_name, fk, fk_path, path } = params

    try {

        const fk_instance = `fk_${path}_${fk_path}`

        console.log(fk_instance)

        const result = await tables[table_name].findAll({
            where: {
                [fk_instance]: fk
            }
        })
        
        res.json(result)
        
    } catch (error) {
        
        res.json(error).status(404)

    }

}

export const create_element = async (req: Request, res: Response) => {
    
    const { params, body } = req
    const { table_name } = params

    try {
        
        const result = await tables[table_name].create(body)

        res.json(result)

    } catch (error) {
        
        res.json(error).status(404)

    }

}

export const update_element = async (req: Request, res: Response) => {
    
    const { params, body } = req
    const { table_name, id } = params

    try {
        
        const element = await tables[table_name].findByPk(id)

        const result = await element.update(body)

        res.json(result)

    } catch (error) {
        
        res.json(error).status(404)

    }

}