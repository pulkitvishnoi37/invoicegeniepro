# invoice-genie-2.0
In this repo I am adding backend to the original invoice genie web app
I am making a node js backend for invoice genie app using which users can login, logout and store their created invoices to the database and it can be accessed whenever the user wants.

Doing this to learn node js to develop backends for my future projects. :smiley:

`29-09-2022` Added 2 APIs
1) POST API - to post user entered data on the server
2) GET API - to get user entered data from server

`30-09-2022` Added some cosmatic changes like login sign up buttons and profile icon and made some changes on navbar on all the pages.

`01-10-2022` Added Register, Login and logout functionality to the app with proper authentication and authorization using JWT token, Bcrypt to encrypt passwords.

`02-10-2022` Added functionality to save invoice in database. This functionaly only works when user is logged in or else app will show littel alert saying "You must login before saving your invoice". and after successful saving also app will show alert saying "Your invoice saved successfuly!" :sunglasses:

`03-10-2022` Created an API to send invoice data to show on MyInvoices page and added MyInvoices page.

`04-10-2022` Now redirecting the user to Home Page if user logout on MyInvoices page.

`05-10-2022` Added getInvoiceDetails and deleteInvoice APIs and connected it to MyInvoices page from where user can veiw and delete invoice from database.

`06-10-2022` Working on building logic to edit invoices which are already saved into the database. Today, implemented new page to edit the invoice and fetching saved data from DB on this page.

`07-10-2022` Half way through the Edit invoice functionality. Implementing logic to populate existing invoice information on edit invoice page.:relaxed:

`08-10-2022` Completed the last part of the project which is Edit invoice and update it to the database.

---
### `09-10-2022` Finally the  :alarm_clock: Day when this app was Deployed on Render and the link is [invoicegenie.onrender.com](https://invoicegenie.onrender.com) :relaxed:
---
