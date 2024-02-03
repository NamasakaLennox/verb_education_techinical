# Simple Docs

The project implements a simple CRUD application to manage an inventory.

# How to use the api

The api is live on [Link](https://app-ch3c6jojfq-uc.a.run.app/api/)

## available routes

1. /create
2. /read
3. /read/:id
4. /update/:id
5. /delete/:id

##

The api only accepts json input
To use create and update routes you need to provide the following attributes as json object

1. name
2. price
3. quantity
4. id

For the delete and get object by id routes only the id is passed in the url

The get all records doesn't require any input

# Technical Skills Assessment 2

## Description

Tanui Industries is seeking to digitize its inventory-keeping process. As part of this
undertaking, you as the lead developer are required to design and implement a
simple API using firebase cloud functions that can Create, Update, Read and Delete
inventory.

## Implementation Instructions

- You are required to use Firebase cloud firestore as your primary database.
- Create a firebase project and initialize cloud functions.
- Create four firebase HTTP trigger endpoints - Create Inventory, Update
  Inventory, Get Inventory and Delete Inventory.
- Ensure that the endpoints can seed and update data from your primary cloud
  firestore database.
- Create a GitHub repository and push your code to it.
