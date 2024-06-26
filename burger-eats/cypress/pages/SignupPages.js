class SinupPage {

    go() {
       // cy.viewport(1440, 900) transferido no arquivo de config. Json
        // cy.visit('https://buger-eats.vercel.app')
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text' , 'Cadastre-se para  fazer entregas')
    }


    fillForm(deliver){
        
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.number)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[value="Buscar CEP"]').click()
        cy.wait(2000)

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value',deliver.address.street)
        cy.get('input[name="district"]').should('have.value',deliver.address.details)
        cy.get('input[name="city-uf"]').should('have.value',deliver.address.city_state)

        

        cy.contains('.delivery-method li', deliver.deliver_method).click()
        cy.get('input[accept^="image"]').attachFile(deliver.cnh)
    }


    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContentShoulBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text',expectedMessage)
    }


    alertMessageShouldBe(expectedMessage){
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
    }

}

export default SinupPage;