# FriendFinder-App

## Overview

 Friend Finder is a compatibility-based application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

## Demo
![demo](https://drive.google.com/file/d/10oJ1PRGJ3TigLlLmTj79dj2GJWjvt_Fc/view)

----
## Commands and Outcomes

Table Display
> Upon opening the app, the products table is displayed. This table was created by configuring node to a mySQL database which contained the products and their information. 

![table image](screenshots/table.png)

Selecting a Product
> The user is prompted to chose a product and enter the desired quantity. If there is enough in stock, the quantity in the database updates and the users order is completed. 

![purchase](screenshots/ordertotal.png)

Insufficient Quantity
> If there is not enough in stock, the user is alerted and prompted to select a different item.

![Quantity validation](screenshots/iquantity.png)

----
## How to Use
This is a CLI app that runs in the users terminal. In order to test it, mySQL and Inquirer must be installed in the directory where the files are downloaded. To download the packages, enter the following commands into terminal:

    npm install mysql
    npm install inquirer 

Additonally, the user must download MySQL Workbench and create an account. To run the app, enter the password into the connection.js file.