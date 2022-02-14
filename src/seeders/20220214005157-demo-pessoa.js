'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'John Doe1',
        ativo: true,
        email: 'john@doe.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ane Doe',
        ativo: true,
        email: 'ane@doe.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'John Doe2',
        ativo: true,
        email: 'john@doe.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'John Doe3',
        ativo: true,
        email: 'john@doe.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'John Doe4',
        ativo: true,
        email: 'john@doe.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Professor Doe',
        ativo: true,
        email: 'john@doe.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Professor Doe 2',
        ativo: true,
        email: 'john@doe.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
