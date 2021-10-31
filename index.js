"use strict";

const express = require("express");
const line = require("@line/bot-sdk");
const app = express();

const PORT = process.env.PORT || 3000;

const config = {
    channelSecret: '',
    channelAccessToken: '',
};

const config = new line.Client(config);

// ここから
$('button')
    .html('Click me')
    .on('click', () => {
        console.log(store.user_id_1.todos)
            let id = Date.now()
            store.user_id_1.todos[id]
            = {text: 'added', check: false}
    })

let store = {
    user_id_1: {
        todos: {
            todo_id1: { text: 'こんにちは', check: true },
        }
    },
}   

const store = [
    {
        userid: 1,
        todos: [
            'todos1',
            'todos2',
            'todos3',
            'todos4',
        ]
    }, {
        userid: 2,
        todos: [
            'todos1',
            'todos2',
            'todos3',
            'todos4',
        ]
    }, {
        userid: 3,
        todos: [
            'todos1',
            'todos2',
            'todos3',
            'todos4', 
        ]
    }, {
        userid: 4,
        todos: [
            'todos1',
            'todos2',
            'todos3',
            'todos4',
        ]
    }
]