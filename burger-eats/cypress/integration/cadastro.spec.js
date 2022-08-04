

describe('Cadastro', ()=>{

    it('seja um entregador', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text' , 'Cadastre-se para  fazer entregas')

        var deliver = {
            name: 'James Rodriguez',
            cpf: '00000001441',
            email:'james@gmail.com',
            number: '62982142744',
            address: {
                postalcode: '75083460',
                street: 'Rua Doutor Evandro Pinto Silva',
                number: '20',
                details: 'Cidade Universitária',
                district: 'AP 23',
                city_state: 'Anápolis/GO'
            },

               deliver_method: 'Moto',  
            cnh:'CNH-E.png'

        }

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
        // cy.get('ul>li>[alt="Moto"]').click()
        // cy.get('ul>li>[alt="Bicicleta"]').click()
        // cy.get('ul>li>[alt="Van/Carro"]').click()

        cy.get('input[accept^="image"]').attachFile(deliver.cnh)

        cy.get('form button[type="submit"]').click()

        const expectedMessage ='Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
       
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text',expectedMessage)
        
    })

    
    it.only('CPF incorreto', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text' , 'Cadastre-se para  fazer entregas')

        var deliver = {
            name: 'James Rodriguez',
            cpf: '51',
            email:'james@gmail.com',
            number: '62982142744',
            address: {
                postalcode: '75083460',
                street: 'Rua Doutor Evandro Pinto Silva',
                number: '20',
                details: 'Cidade Universitária',
                district: 'AP 23',
                city_state: 'Anápolis/GO'
            },

               deliver_method: 'Moto',  
            cnh:'CNH-E.png'

        }

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
        // cy.get('ul>li>[alt="Moto"]').click()
        // cy.get('ul>li>[alt="Bicicleta"]').click()
        // cy.get('ul>li>[alt="Van/Carro"]').click()

        cy.get('input[accept^="image"]').attachFile(deliver.cnh)

        cy.get('form button[type="submit"]').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

        
    })
})

