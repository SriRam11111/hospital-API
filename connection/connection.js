const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://database:Database@cluster0.g8vaoci.mongodb.net/test')