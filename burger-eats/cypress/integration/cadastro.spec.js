
import SinupPage from '../pages/SignupPages'
describe('Cadastro', ()=>{


    // before(function() {

    //     cy.log(' executar uma única vez antes de cadas caso de teste ') 

    // })
    // beforeEach(function() {

    //     cy.log('executar uma sempres antes de cadas caso de teste') 

    // })
    // after(function() {

    //     cy.log('executar uma única vez depois de cadas caso de teste') 

    // })
    // afterEach(function() {

    //     cy.log('executar sempre depois de cadas caso de teste') 

    // }) Ganchos


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

        signup.modalContentShoulBe(expectedMessage)        
        
 
        
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

