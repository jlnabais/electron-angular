Proof of concept project, using angular within an electron app.

1. Install ruby:  
  [Ruby Docs](http://www.ruby-lang.org/en/documentation/installation/)  
2. Install Sass:  
  ```sudo gem install sass```  
3. Install node modules:  
  ```npm install```
4. Install npm global modules:  
  ```npm install -g electron-prebuilt```  
  ```npm install -g grunt-cli```  
  ```npm install -g browserify```  
  ```npm install -g electron-packager```
5. Run linter and sass:  
  ```grunt default```
6. Run application:  
  ```npm start```
7. Build the application:  
  ```electron-packager . --all```
