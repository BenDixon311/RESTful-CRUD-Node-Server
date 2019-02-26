# RESTful-CRUD-Node-Server

# Ben's Roster Updater

## Data Structure:
  `
  {
    "name": String,
    "number": Number,
    "team": String,
    "position": String
  }`
  
# Endpoints
### GET All Players
  - Use `/api` to view all players
  
 ### GET One Player by name
  - Use `/api/:name` to GET one player
  
 ### GET Players by Team Name
  - Use `/api/:team` to GET all players by Team Name
  
 ### POST player
  - use `/api/create` to create a new player 
  - *see above data structure for json syntax
  
 ### UPDATE player
  - use `/api/update/:id` to update player info
  
 ### DELETE player
  - use `/api/delete/:id` to delete player data
  
 
Postman was used to fill the server with data
