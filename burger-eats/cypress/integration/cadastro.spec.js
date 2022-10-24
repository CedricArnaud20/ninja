
import SinupPage from '../pages/SignupPages'
describe('Cadastro', ()=>{
    
    beforeEach( function() {
        cy.fixture('delivery').then((d)=>{
            this.deliver = d
        })
    })

    it('seja um entregador', function(){

       var signup = new SinupPage()  

       signup.go()
       signup.fillForm(this.deliver.signup)
       signup.submit()

        const expectedMessage ='Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
 
        
    })

    
    it('CPF incorreto', function(){
       
       var signup = new SinupPage()  

       signup.go()
       signup.fillForm(this.deliver.cpf_invalido)
       signup.submit()
       signup.alertMessageShouldBe('Oops! CPF inválido')    
        // cy.get('ul>li>[alt="Moto"]').click()
        // cy.get('ul>li>[alt="Bicicleta"]').click()
        // cy.get('ul>li>[alt="Van/Carro"]').click()       

        
    })
})

