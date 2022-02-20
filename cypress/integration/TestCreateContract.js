
import PageCreateContract from 'C:/Users/Farhan/Deel task/cypress/support/PageCreateContract.js'


describe('Create the Fixed Rate Contract', function () {

  it('Launch Platform, Perform Login Operation, Create new contract', function () {
    const pageCreateContract = new PageCreateContract()

  pageCreateContract.LaunchApplication()

    pageCreateContract.getUserEmail().type('farhan.ahmed@cirplus.com')

    pageCreateContract.getPassword().type('Fahan.funny1')

    pageCreateContract.getLoginButton().click()
    cy.wait(10000)
    pageCreateContract.getUserMenu().click()
    
    pageCreateContract.getCreateNewContract().click()
    pageCreateContract.getFixedRate().click()
    //Step 1
    pageCreateContract.getContractName().type('test fixed contract')
    pageCreateContract.getTaxResidence().click()
    pageCreateContract.getTaxResidenceCountry().click()
    pageCreateContract.getJobtitle().type('test ')
    pageCreateContract.getScope().type('test scope')
    pageCreateContract.getCalandar().click()
    pageCreateContract.getDate().click()
    pageCreateContract.getNext().click()
  })
})