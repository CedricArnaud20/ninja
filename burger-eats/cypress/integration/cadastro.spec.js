

describe('Cadastro', ()=>{

    it('seja um entregador', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text' , 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'James Rodriguez',
            cpf: '00000001441',
            email:'james@gmail.com',
            numero: '62982142744',
            endereco: {
                cep: '75083460',
                rua: 'Rua Doutor Evandro Pinto Silva',
                numero: '20',
                bairro: 'Cidade Universitária',
                complemento: 'AP 23',
                cidade_uf: 'Anápolis/GO'
            },

            metodo_entrega: 'Moto',
            cnh:'CNH-E.png'

        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.numero)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[value="Buscar CEP"]').click()
        cy.wait(2000)

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value',entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value',entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value',entregador.endereco.cidade_uf)


        cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        // cy.get('ul>li>[alt="Moto"]').click()
        // cy.get('ul>li>[alt="Bicicleta"]').click()
        // cy.get('ul>li>[alt="Van/Carro"]').click()

        cy.get('input[accept^="image"]').attachFile(entregador.cnh)

        cy.get('form button[type="submit"]').click()

        const expectedMessage ='Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
       
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text',expectedMessage)
        
    })

    
    it('CPF incorreto', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text' , 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'James Rodriguez',
            cpf: '51',
            email:'james@gmail.com',
            numero: '62982142744',
            endereco: {
                cep: '75083460',
                rua: 'Rua Doutor Evandro Pinto Silva',
                numero: '20',
                bairro: 'Cidade Universitária',
                complemento: 'AP 23',
                cidade_uf: 'Anápolis/GO'
            },

            metodo_entrega: 'Moto',
            cnh:'CNH-E.png'

        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.numero)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[value="Buscar CEP"]').click()
        cy.wait(2000)

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value',entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value',entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value',entregador.endereco.cidade_uf)


        cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        // cy.get('ul>li>[alt="Moto"]').click()
        // cy.get('ul>li>[alt="Bicicleta"]').click()
        // cy.get('ul>li>[alt="Van/Carro"]').click()

        cy.get('input[accept^="image"]').attachFile(entregador.cnh)

        cy.get('form button[type="submit"]').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

        
    })
})

