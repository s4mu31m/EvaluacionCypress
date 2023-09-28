describe('Evaluacion de Cypress', () => {
  beforeEach(() => {
    cy.visit('http://zero.webappsecurity.com/')
  })

  //    Prueba de Navegación:
  it('Verificar que el titulo sea correcto', () => {
    cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
  });

  it('Verificacion de encabezados', () => {
    cy.get('.brand').should('be.visible')
  });

  // 3. Prueba de Contenido:
  it('Verificar que CHECKING ACCOUNT ACTIVITY esté presente.', () => {
    cy.get('#online_banking_features > :nth-child(3) > div > p').should('be.visible')
  });

  it('Verificar que MY MONEY MAP esté presente.', () => {
    cy.get('#online_banking_features > :nth-child(4) > div > p').should('be.visible')
  });

  //     4. Prueba de Interacción:
  it('Verificar que el menu de Online Banking se despliegue correctamente', () => {
    cy.get('#onlineBankingMenu > div > strong').trigger('mouseover')
    cy.get('#onlineBankingMenu > div > strong').click()
  });

  //     5. Prueba de Respuesta:
  it('Verificar interacción', () => {
    cy.get('#searchTerm').type('bank')
    cy.get('#searchTerm').type('{enter}')

  });

  //     6. Pruebas Adicionales:
  it('Verificar que las imagenes se carguen correctamente', () => {
    cy.get('.active > img').should('be.visible')
  });

  it('Verificar que los campos obligatorios no puedan enviarse vacíos', () => {
    cy.get('#signin_button').click()
    cy.get('.btn').click()
    cy.get('.alert-error').should('be.visible')
  });
});