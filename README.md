# IBM Cloud Foundry Simple Example

**Disclaimer:** *This is not an official IBM github repository. This is a personal repository used for demo/workhsop purposes.*

This demo is intented to showcase IBM CF and walk you through the process of deploying a simple cloud-native application on the cloud. It also showcases some of the CF features like: self-healing & scaling. The dmeo app is a very basic calculator that can only divide two numbers and return the result through a web based UI. The app consists of two main components:

1. **A ReactJS frontend *(Located in the [calculator-ui](https://github.com/usfngm/cf_workshop/tree/master/calculator-ui) folder)*:** This component serves the UI and has the code that sends the HTTP request to the NodeJS backend and finally show the result of the division into a textbox.
2. **A NodeJS backend  *(Located in the [division-service](https://github.com/usfngm/cf_workshop/tree/master/division-service) folder)*:** This component has the division logic and recieves HTTP requests from clients and responds back with the result in JSON format.