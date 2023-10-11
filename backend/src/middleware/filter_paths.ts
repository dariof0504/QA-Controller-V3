import { Request, Response, NextFunction } from 'express'

const PATHS: string[] = [
    'module',
    'component',
    'incident',
    'report',
    'window'
]

export const filter_paths = (req: Request, res: Response, next: NextFunction) => {
    const { params } = req
    const { path } = params

    if (PATHS.includes(path)) {

        const table_name: string = path == 'module' ? 'module_element' : `${path}_module_element`

        req.params.table_name = table_name

        next()
    } else res.json('no hay')

}