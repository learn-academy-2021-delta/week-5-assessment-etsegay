# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Are (most) Ruby methods accessors or mutators?

  Your answer:
           Ruby has many built-in methods and most of them are accessors.Accessor methods are methods that do not change the nature of the original data collection usually arrays while mutator methods  are these that mutate the composition of the array either by removing or adding an element.

  Researched answer:
            Most ruby methods are accessor methods or getter methods.Accessor methods, allow a way to access the value of each instance variable from outside of the class.On the other hand mutators are  widely known as setter methods. Often a setter is accompanied by a getter, which returns the value of the private member variable.



2. What is a block in Ruby?

  Your answer:
           In javascript a block is the main body part of a function where all code snippets and statments are placed in curly braces.In ruby blocks are anonymous functions that can be passed into methods. Blocks are enclosed in a do-end statement or curly braces in ruby. 

  Researched answer:
            Ruby blocks are anonymous functions that can be passed into methods. Blocks are enclosed in a do-end statement or curly braces. do-end is usually used for blocks that span through multiple lines while curly braces is used for single line block. Blocks can have arguments which should be defined between two pipe | characters but in javascript arguments are enclosed in parenthesis before the block.



3. What is a gem?

  Your answer:
             Gem is library or snippet of code functionality. It packages up Ruby codes so it is easy to share with others.Gem is a package manager like npm and yarn in node.js 

  Researched answer:
        RubyGems software that enables us  to easily download, install, and use ruby software packages on our system. The software package is called a “gem” which contains a packaged Ruby application or library. Gems can be used to extend or modify functionality in Ruby applications.

4. What is a relational database? Are there other kinds of databases?

  Your answer:
         Relational database is a type of database that stores and provides access to data related to one another.Relational databases have columns that hold attributes of the data, and rows stores a value for each attribute.There are different kinds of databases,microsoft access,MySQL ,sql ,oracle and  advanced version of sql (postgresql).

  Researched answer:
          A relational database refers to a database that stores data in a structured format, using records nnd fields .This structured format  makes it easy to locate and access specific values within the database. It is "relational" because the values within each table are related to each other with primary key value.There are different kinds of relational values .The most popular relational data bases microsoft SQL Server, Oracle Database, MySQL, and IBM DB2.



5. What are primary keys? Why are they important?

  Your answer:
         Primary key is a key that  uniquely identifies each row in a table. Primary keys must contain unique values, and cannot contain null values.We can see some of the primary keys in our daily life for example social security number,email address,phone numbers.No two poepla can have the same phone number at least in the same company.

  Researched answer:
         A primary key,is also known as a primary keyword.It is a key in a relational database that is unique for each row or record. It is a unique identifier, such as a driver license number, telephone number (including area code), or vehicle identification number (VIN). A single table or relational database must always have one and only one primary key. Primary keys typically appear as columns in relational database tables.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:
    A RESTful route is a route that provides mapping from HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying merly on the URL to indicate what site to visit, a RESTful route depends on the HTTP verb and the URL.

2. JSON:
    JSON stands for JavaScript Object Notation It is a lightweight format that stores data in the form of object(key/value pairs).It is used to for store and transport data from a server to webbage.The sender usually send data in the form of JSON and the receiver stringify and converts the JSON.


3. ERB:
ERB (Embedded RuBy) is a feature of Ruby that enables US to conveniently generate any kind of text, in any quantity, from templates.ERB templates combine plain text with Ruby code for variable substitution and flow control, making them easy to write and maintain.

4. Params:
 params is a short form for the parameters method. params comes from ActionController::Base, which is accessed by your application via ApplicationController.Params refers to the parameters being passed to the controller via a GET or POST request

5. API:
    Application Program Interface,API is an interface that enable two software application to communicate each other.A popular javascript API iS the Fetch API, which is  a promise-based JavaScript API for making asynchronous HTTP requests in the browser to a server.users request data using fetch API get method from the server and servers respond with post method.
