/// <reference types ="cypress" />


describe('Acessar site para testes automatizados', () => {

    beforeEach(()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })

    it('Preenchendo dados básicos', () => {
        cy.get('input[ng-model="FirstName"]').type('Allan');
        cy.get('input[ng-model="LastName"]').type('Ferraz');
     //   cy.get('input[ng-model="Adress"]').type('Rua de teste do Allan');
        cy.get('input[ng-model="EmailAdress"]').type('allansilvaferraz@hotmail.com');
        cy.get('input[ng-model="Phone"]').type('(17)912345678');
        cy.get('input[value="Male"]').click();
        cy.get('input[id="checkbox2"]').click();
     //   cy.get('#msdd').select(['Portuguese']); não é possivel selecionar o campo
        cy.get('#Skills').select('Android');
       // cy.get('.select2-selection').type('Australia');
        cy.get('.select2-selection').type('Australia').type('{downArrow}').select('Australia');
        //atualização
        
    });

});
