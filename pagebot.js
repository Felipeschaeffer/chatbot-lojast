{
  "name": "chatbot-loja-st",
  "version": "1.0.1",
  "description": "Chatbot para loja virtual utilizando Express",
  "author": "Felipe",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Nenhum teste configurado\" && exit 0",
    "lint": "eslint .",
    "format": "prettier --write .",
    "build": "echo \"Nenhum processo de build configurado\""
  },
  "dependencies": {
    "axios": "^1.6.8",
    "body-parser": "^1.20.2",
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.0",
    "eslint": "^8.58.0",
    "prettier": "^3.2.5"
  },
  "license": "MIT"
}
