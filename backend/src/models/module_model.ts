import sqlDB from "../database/database";
import { DataTypes } from 'sequelize'

const ENUM_STATUS:string[] = [
    'OPEN',
    'IN PROGRESS',
    'REVIEW',
    'CLOSE',
    'TO FIX',
    'TESTING'
]

const ENUM_RELEVANCE:string[] = [
    'LOW',
    'MEDIUM',
    'HIGH',
    'URGENT'
]

export const module_element = sqlDB.define('tb_module', {
    pk_id_module: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4(),
        primaryKey: true
    },
    module_title: {
        type: DataTypes.STRING
    },
    module_description: {
        type: DataTypes.STRING
    }
})

export const window_module_element = sqlDB.define('tb_window_module', {
    pk_id_window_module: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4(),
        primaryKey: true
    },
    window_title: {
        type: DataTypes.STRING
    }
})

export const component_module_element = sqlDB.define('tb_component_module', {
    pk_id_component_module: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4(),
        primaryKey: true
    },
    component_title: {
        type: DataTypes.STRING
    },
    component_type_location: {
        type: DataTypes.STRING
    },
    component_location: {
        type: DataTypes.STRING
    },
    component_action: {
        type: DataTypes.STRING
    },
    component_click_props: {
        type: DataTypes.JSON
    },
    component_type_props: {
        type: DataTypes.JSON
    }
})

export const report_module_element = sqlDB.define('tb_report_module', {
    pk_id_report_module: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4(),
        primaryKey: true
    },
    report_title: {
        type: DataTypes.STRING
    },
    report_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    report_status: {
        type: DataTypes.ENUM,
        values: ENUM_STATUS
    }
})

export const incident_module_element = sqlDB.define('tb_incident_module', {
    pk_id_incident_module: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4(),
        primaryKey: true
    },
    incident_title: {
        type: DataTypes.STRING
    },
    incident_obs: {
        type: DataTypes.STRING
    },
    incident_product_version: {
        type: DataTypes.STRING
    },
    incident_device: {
        type: DataTypes.STRING
    },
    incident_relevance: {
        type: DataTypes.ENUM,
        values: ENUM_RELEVANCE
    },
    incident_status: {
        type: DataTypes.ENUM,
        values: ENUM_STATUS
    },
    incident_date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    incident_own_developer: {
        type: DataTypes.STRING
    },
    incident_enviroment: {
        type: DataTypes.STRING
    },
    incident_summary: {
        type: DataTypes.STRING
    },
    incident_comments: {
        type: DataTypes.ARRAY(DataTypes.JSON)
    },
    incident_steps: {
        type: DataTypes.ARRAY(DataTypes.JSON)
    },
    incident_evidence: {
        type: DataTypes.ARRAY(DataTypes.JSON)
    }
})

//Relacion de modulo -> Ventana
module_element.hasMany(window_module_element, {
    foreignKey: {
        name: 'fk_window_module'
    },
    sourceKey: 'pk_id_module'
})

window_module_element.belongsTo(module_element, {
    foreignKey: {
        name: 'fk_window_module',
        allowNull: false
    },
    targetKey: 'pk_id_module'
})

//Relacion Ventana -> component
window_module_element.hasMany(component_module_element, {
    foreignKey: {
        name: 'fk_component_window'
    },
    sourceKey: 'pk_id_window_module'
})

component_module_element.belongsTo(window_module_element, {
    foreignKey: {
        name: 'fk_component_window',
        allowNull: false
    },
    targetKey: 'pk_id_window_module'
})

//Relacion Componente -> Incidente

component_module_element.hasMany(incident_module_element, {
    foreignKey: {
        name: 'fk_incident_component'
    },
    sourceKey: 'pk_id_component_module'
})

incident_module_element.belongsTo(component_module_element, {
    foreignKey: {
        name: 'fk_incident_component'
    },
    targetKey: 'pk_id_component_module'
})

//Relacion Incidente -> Reporte

report_module_element.hasMany(incident_module_element, {
    foreignKey: {
        name: 'fk_incident_report'
    },
    sourceKey: 'pk_id_report_module'
})

incident_module_element.belongsTo(report_module_element, {
    foreignKey: {
        name: 'fk_incident_report',
        allowNull: false
    },
    targetKey: 'pk_id_report_module'
})

//Reporte -> Module

module_element.hasMany(report_module_element, {
    foreignKey: {
        name: 'fk_report_module'
    },
    sourceKey: 'pk_id_module'
})

report_module_element.belongsTo(module_element, {
    foreignKey: {
        name: 'fk_report_module',
        allowNull: false
    },
    targetKey: 'pk_id_module'
})
