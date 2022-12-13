import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import '@shelex/cypress-allure-plugin';

let url = "http://dummy.restapiexample.com";
let uri = "/api/v1/create";


Given("I Set POST employee service api endpoint", function () {
  url= url + uri;
});

When("I Send a POST HTTP request", function () {

  // cy.request("http://demo.guru99.com/V4/sinkministatement.php?CUSTOMER_ID=68195&PASSWORD=1234!&Account_No=1")
// .then((response) => {
//        expect(response.body).to('ErrorMsg', 'Success');
//       })
console.log(url);

cy.request({
  method: 'POST',
  url: url,
  body: {
      "name":"Dipak","salary":"123","age":"23"
  }
}).then((response) => { 
     expect(response.body).has.property("status","success1"); 
})

});

Then("I receive valid Response", function () {

    // cy.request({
    //       method: 'POST',
    //       url:url,
    //       body: {  "name":"","salary":"123","age":"23"}
    // }).then( ({ status }) => {
    //   console.log(status) // 201
    // })
  });