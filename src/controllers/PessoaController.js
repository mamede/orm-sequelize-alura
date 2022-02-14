const db = require('../models');

class PessoaController {
  static async GetAll(req, res) {
    try {
      const todasAsPessoas = await db.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async FindById(req, res) {
    const { id } = req.params

    try {
      const find = await db.Pessoas.findOne({ 
        where: { 
          id: Number(id) 
        }
      })

      return res.status(200).json(find)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async Create(req, res) {
    const newPerson = req.body

    try {
      const newPersonCreate = await db.Pessoas.create(newPerson)
      return res.status(200).json(newPersonCreate)

    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async Update(req, res) {
    const { id } = req.params
    const updatePerson = req.body

    try {
      await db.Pessoas.update(updatePerson, { 
      where: { 
        id: Number(id) 
      }})

      const updatedPerson = await db.Pessoas.findOne({ 
        where: { 
          id: Number(id) 
        }
      })

      return res.status(200).json(updatedPerson)

    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async Delete(req, res) {
    const { id } = req.params

    try {
      await db.Pessoas.destroy({
        where: { 
          id: Number(id) 
        }
      })

      return res.status(200).json({ message: 'Deletado' })

    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = PessoaController