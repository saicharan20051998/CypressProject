class Elements{

    getsearch(){
        return cy.get('#twotabsearchtextbox')
    }

    getbooks(){
        return cy.get('h2 a span');
    }


}

export default Elements;