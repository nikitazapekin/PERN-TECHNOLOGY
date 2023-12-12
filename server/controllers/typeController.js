const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {   //МЕТОД СОЗДАНИЯ ЭЛЕМЕНТА
        const {name} = req.body
        console.log("NAMEEEEEEEEEEEEEEEEEEEEEEEEEEE"+name)
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) { // МЕТОД ПЛУЧЕНИЯ ЭЛЕМЕНТОВ ИЗ БД
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()