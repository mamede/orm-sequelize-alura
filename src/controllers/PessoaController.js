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

  static async FindByMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params

    try {
      const find = await db.Matriculas.findOne({ 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
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

  static async CreateMatricula(req, res) {
    const { estudanteId } = req.params
    const newMatricula = { ...req.body, estudante_id: Number(estudanteId) }

    try {
      const newMatriculaCreate = await db.Matriculas.create(newMatricula)
      return res.status(200).json(newMatriculaCreate)

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

  static async UpdateMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    const newInfos = req.body

    try {
      await db.Matriculas.update(newInfos, { 
      where: { 
        id: Number(matriculaId) ,
        estudante_id: Number(estudanteId)
      }})

      const updatedInfo = await db.Matriculas.findOne({ 
        where: { 
          id: Number(matriculaId) 
        }
      })

      return res.status(200).json(updatedInfo)

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

  static async DeleteMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params

    try {
      await db.Matriculas.destroy({
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId) 
        }
      })

      return res.status(200).json({ message: 'Deletado' })

    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = PessoaController