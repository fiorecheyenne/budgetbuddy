'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('budgets', [{
        description: 'widget',
        category: 'medical',
        amount: '105.00',
        UserID: '1',
        createdAt: new Date(),
        updatedAt: new Date()
        
    }], {});
},
 

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('budgets', null, {});
  }
  
 

  

};