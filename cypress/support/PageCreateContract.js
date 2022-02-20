class PageCreateContract {
    LaunchApplication() {
      // Function to Launch Platform
      cy.visit('https://app.deel.training/login') 
      
    }
  
    getUserEmail() {
      return cy.get('#mui-1')
    }
  
    getPassword() {
     return  cy.get('#mui-2')
    }
  
    getLoginButton() {
       return cy.get('.css-o48jmu > .button')
    }
    getUserMenu()
    {
      return cy.get('.mobile-header-content-container > .button')
    }
    getCreateNewContract()
    {
     return cy.get(':nth-child(2) > .anchor > .sidebar-link')
    }
    getFixedRate()
    {
      return cy.get(':nth-child(1) > .anchor > .box')
    }
    getContractName()
    {
      return cy.get(':nth-child(1) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input')
    }
    getTaxResidence()
    {
      return cy.get(':nth-child(1) > .deel-ui__stack_vertical > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control')
    }
    getTaxResidenceCountry()
    {
      return cy.get('#react-select-3-option-1-0 > .deel-ui__select__option-container')
    }
    getJobtitle()
    {
     return cy.get(':nth-child(3) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input')
    }
    getScope()
    {
      return cy.get('.deel-ui__textarea-component__textarea')
    }
    getCalandar()
    {
      return cy.get('.deel-ui__icon-calendar-0')
    }
    getDate()
    {
       return cy.get(':nth-child(19) > abbr')
    }
    getNext(){
      return cy.get('.justify-content-end > .button')
    }
  }


  export default PageCreateContract
  