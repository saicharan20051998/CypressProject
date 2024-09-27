import Elements from "./Elements";
const ele = new Elements();
class methods{

    searchproduct(name){

        ele.getsearch().type(name + '{enter}')

    }

    clickonproduct(){
        ele.getbooks().each(($e1,index,$list)=>{

            const text = $e1.text()
            cy.log(text)

        })
    }
}

export default methods;