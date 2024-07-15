const express = require('express');
const app = require('express')();
app.use(express.json());
// proj name: Food-delivery-app-debak-tanmay
// userId: fooddelivery2024
// password: debaktanmayproj2024


// schema required: User(login, signup), admin(login, signup), category,



const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://fooddelivery2024:debaktanmayproj2024@cluster0.hj0hbke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(console.log("db connect"));

app.listen(3000,function(){
  console.log('listening on port');
});