'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        user: 'John',
        income: '1050.00',
        createdAt: new Date(),
        updatedAt: new Date()
        
      }], {});
  },

 
 

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
  
 

  

};
