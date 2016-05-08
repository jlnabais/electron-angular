Proof of concept project, using angular within an electron app.

1. Install node modules:  
  ```npm install```
2. Install npm global modules:  
  ```npm install -g electron-prebuilt```  
  ```npm install -g grunt-cli```  
  ```npm install -g browserify```  
  ```npm install -g electron-packager```
3. Run linter and sass:  
  ```grunt default```
4. Run application:  
  ```npm start```
5. Build the application:  
  ```electron-packager . --all```
