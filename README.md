Flight Search :

How to Install :

Clone the project and make sure that code is being pushed to master branch .
After cloning run npm install .
Once npm install is done . Run npm start to run the application .
Run test cases :

run npm test .
contains a mock data file under test folder
included very basic test cases .
What is application includes :

This application has two views 

1. Booking form 
2. result of the search form with filter and sorting enabled .


=> created a select and date common component for reuse purpose under components folder .
=> Contains a centerlized traslator json file under utils folder for the reuse purpose
=> redux actions and reducers will follow the action tags to avoid human errors .
=>all the routes are managed under routes folder .



liberies added :

"enzyme": "^3.11.0", 
"enzyme-adapter-react-16": "^1.15.6", 
"enzyme-to-json": "^3.6.2", 
"react-redux": "^7.2.4", 
"react-router-dom": "^5.2.0", 
"redux": "^4.1.1"