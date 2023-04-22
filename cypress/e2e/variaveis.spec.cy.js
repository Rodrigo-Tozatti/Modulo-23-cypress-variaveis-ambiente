

describe('Testes de Environment Variables', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('HOST'))
  });
  
  it('Deve visitar a página com sucesso', () => {
    cy.url().should('eq', 'http://localhost/')
  })

  it('Teste config Env',{
    env:{
      myEnv: 'local'
    }
  }, () => {
    cy.log(cypress.env('myEnv'))
  });
})
