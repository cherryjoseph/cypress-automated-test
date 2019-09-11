describe("Google test suite",() => {
    it("Go to google homepage", function(){
        cy.visit("www.google.com")
        cy.log("All good!")
    })
})