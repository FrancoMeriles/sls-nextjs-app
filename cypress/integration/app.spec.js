/* eslint-disable cypress/no-unnecessary-waiting */
const CATEOGIRE_ID = '__CATEGORIE_ID_1__'
const CATEOGIRE_NAME = '__CATEGORIE_NAME_1__'
const TITLE_PRODUCT = '__TITLE_PRODUCT_1__'

context('Meli', () => {
  it('Complete workarround', () => {
    cy.visit(`${Cypress.env('base_url')}`)
    cy.title().should('eq', 'Mercado Libre - Home')

    // Should exist 2 items
    cy.get('.chakra-linkbox').should('have.length', 2).and('be.visible')
    cy.get('.chakra-linkbox').first().find('a').click()

    // Should navigate to categorie products page with the correct url and title
    cy.location({ timeout: 3000 }).should(($url) => {
      expect($url.pathname).to.equal(`/categorie/${CATEOGIRE_ID}/products`)
      expect($url.search).to.equal('?page=1')
    })
    cy.title().should('eq', `Mercado Libre - ${CATEOGIRE_NAME}`)
    cy.get('.chakra-linkbox').should('have.length', 3).and('be.visible')
    cy.contains('Anterior').should('be.disabled')
    cy.get('.chakra-linkbox').first().find('a').click()

    // Should open "Ver más formas de entrega" modal
    cy.contains('Opciones de envío y retiro').should('not.exist')
    cy.contains('Ver más formas de entrega').click()
    cy.contains('Opciones de envío y retiro').should('exist')

    // Should close the modal
    cy.get('.chakra-modal__close-btn').click()

    // Should open "Conocer más" modal
    cy.contains('Podés devolver este producto gratis. ¡No importa el motivo!').should('not.exist')
    cy.contains('Conocer más').click()
    cy.contains('Podés devolver este producto gratis. ¡No importa el motivo!').should('exist')

    // Should close the modal
    cy.get('.chakra-modal__close-btn').click()

    // Should have 0 product favorite
    cy.get('.chakra-badge').should(($p) => expect($p).to.contain('0'))

    // Should add 1 product to favorite
    cy.contains('Agregar a favoritos').click()

    // Should now have 1 product favorite
    cy.get('.chakra-badge').should(($p) => expect($p).to.contain('1'))

    // Should now have 1 product favorite
    cy.get('.chakra-badge').click()

    // Should navigate to favorite page
    cy.location({ timeout: 3000 }).should(($url) => {
      expect($url.pathname).to.equal(`/favorites`)
    })
    cy.title().should('eq', 'Mercado Libre - Mis Favoritos')

    // Should exist 1 product in favorite
    cy.get('.chakra-linkbox').should('have.length', 1).and('be.visible')
    cy.get('.chakra-linkbox p').should(($p) => {
      // should have found 2 elements
      expect($p).to.have.length(2)

      // make sure the first contains some text content
      expect($p.first()).to.contain(TITLE_PRODUCT)
      expect($p.last()).to.contain('Envío gratis')
    })

    // Should remove the product from favorite
    cy.get('.chakra-linkbox .chakra-icon').click()
    cy.get('.chakra-linkbox').should('not.exist')
  })
})

describe('Search functinality', () => {
  it('opens the app and visit home page', () => {
    // Should navigate to home page
    cy.visit(`${Cypress.env('base_url')}`)
    cy.title().should('eq', 'Mercado Libre - Home')

    // Should img logo have alt attribute
    cy.get('img').first().should('have.attr', 'alt')

    // Should find search input, type some value and redirect
    cy.get('form').find('input').last().should('have.attr', 'placeholder', 'Buscar');
    const INPUT = 'iphone';
    cy.get('form').find('input').last().type(INPUT).should('have.value', INPUT);
    cy.get('form').find('input').last().type('{enter}')

    // Should navigate to search result page products page with the correct url and title
    cy.location({ timeout: 5000 }).should(($url) => {
      expect($url.pathname).to.equal(`/products`)
      expect($url.search).to.equal('?q=iphone&page=1')
    })

    cy.title().should('eq', `Mercado Libre - ${INPUT}`)
    cy.get('.chakra-linkbox').should('have.length', 3).and('be.visible')
    cy.contains('Anterior').should('be.disabled')
    cy.get('.chakra-linkbox').first().find('a').click()
  });
});

describe('Zipcode functionality', () => {
  it('opens the app and visit a product page', () => {
    // Should navigate to home page
    cy.visit(`${Cypress.env('base_url')}/product/__ID_PRODUCT_1__`)
    cy.title().should('eq', `Mercado Libre - ${TITLE_PRODUCT}`)

    // Should open zipcode popover
    cy.contains('CP: 4000').should('exist')
    cy.contains('CP: 4000').click()

    // Should find input, type some value and redirect
    cy.get('form').find('input').first().should('have.attr', 'placeholder', 'Zipcode');
    const ZIPCODE = '5000';
    cy.get('form').find('input').first().type(ZIPCODE).should('have.value', ZIPCODE);
    cy.get('form').find('input').first().type('{enter}')

    // Should change zipcode
    cy.contains('CP: 4000').should('not.exist')
    cy.contains(`CP: ${ZIPCODE}`).should('exist')
  });
});