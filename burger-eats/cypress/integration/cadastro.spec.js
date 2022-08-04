
import SinupPage from '../pages/SignupPages'
describe('Cadastro', ()=>{

    it('seja um entregador', ()=>{
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

       var signup = new SinupPage()  

       signup.go()
       signup.fillForm(deliver)
       signup.submit()

        const expectedMessage ='Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
 
        
    })

    
    it('CPF incorreto', ()=>{

      

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

        
       var signup = new SinupPage()  

       signup.go()
       signup.fillForm(deliver)
       signup.submit()
       signup.alertMessageShouldBe('Oops! CPF inválido')

      
        // cy.get('ul>li>[alt="Moto"]').click()
        // cy.get('ul>li>[alt="Bicicleta"]').click()
        // cy.get('ul>li>[alt="Van/Carro"]').click()



       

        
    })
})

