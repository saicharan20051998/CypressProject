/// <reference types="cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import methods from "../pageobjects/methods";
const m = new methods();

Given('the user is logged in',function(){

    cy.visit('https://www.amazon.in/')

})

And('goes to landing page',function(){
    console.log(cy.title())

})

Given('User search for the product {string}',(searchitem) =>{
    m.searchproduct(searchitem);
})

When('User get the text of the books',()=>{
    m.clickonproduct();

})

Then('User validate the product is added to cart or not',()=>{

})