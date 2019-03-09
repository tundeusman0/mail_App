# mail_App
Mail App is an application that allows users to exchange messages/information

[![Build Status](https://travis-ci.com/tundeusman0/mail_App.svg?branch=gh-pages)](https://travis-ci.com/tundeusman0/mail_App)
[![Coverage Status](https://coveralls.io/repos/github/tundeusman0/mail_App/badge.svg?branch=gh-pages)](https://coveralls.io/github/tundeusman0/mail_App?branch=gh-pages)
[![Test Coverage](https://api.codeclimate.com/v1/badges/97c54f2847f698fa0e5b/test_coverage)](https://codeclimate.com/github/tundeusman0/mail_App/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/97c54f2847f698fa0e5b/maintainability)](https://codeclimate.com/github/tundeusman0/mail_App/maintainability)

View App: (https://tundeusman0.github.io/mail_App)
## Features

### Users
* Signup and Login
* Send a Message
* Read a Message
* Reset Password
* Draft/save messsage
* View messsages
* Check saved messsages
* Edit saved messsages

### Admin
* Create group
* Add a User to a group

### Installation

Clone repo to your local machine:
git clone https://github.com/tundeusman0/mail_App.git

Install dependencies and run locally

Then run:

**npm install**

Now start the server:
    **npm start**

## Running the test
To run tests:
 **npm test**

To run eslint test:
 **npm run eslint-test**

## API
<!-- API is deployed at [here]() on heroku. -->

### API Routes
<table>
	<tr>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/auth/signup</td> 
		<td>Create user account</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/auth/login</td> 
		<td>Sign in to user account</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/messages</td> 
		<td>Post a message</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>/api/v1/messages</td> 
		<td>Get all messages</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>/api/v1/messages/unread</td> 
		<td>Get unread messages</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>/api/v1/messages/sent</td> 
		<td>Get sent messages</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>/api/v1/messages/:messageId</td> 
		<td>Get messages by ID</td>
	</tr>
	<tr>
		<td>DELETE</td>
		<td>/api/v1/messages/:messageId</td> 
		<td>Delete messages by ID</td>
	</tr>
</table>

## Authors

* **Idowu Usman Babatunde**
