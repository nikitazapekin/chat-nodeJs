/*import ws from "ws";
const {Server}= ws
import {v4 as uuid} from "uuid"; */
/*const ws = require("ws");
const { v4: uuid } = require("uuid");
const { Server } = ws;


const clients={};

const wss =new Server({port: 8000});
wss.on("connection", (ws)=> {
const id= uuid();
clients[id]=ws;
console.log(`New client ${id}`)
ws.on('message', (rawMessage)=> {

})
ws.on('close', ()=> {
    delete clients[id]
    console.log(`Client is closed ${id}`)
})
}) */

// "type": "module",
/*
import { Server } from "ws";
import { v4 as uuid } from "uuid";

const clients = {};

const wss = new Server({ port: 8000 });

wss.on("connection", (ws) => {
  const id = uuid();
  clients[id] = ws;
  console.log(`New client ${id}`);

  ws.on("message", (rawMessage) => {
    // handle message
  });

  ws.on("close", () => {
    delete clients[id];
    console.log(`Client is closed ${id}`);
  });
}); */






/*
import WebSocket from 'ws';
import { v4 as uuid } from 'uuid';

const clients = {};
const messages=[];
const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', (ws) => {
  const id = uuid();
  clients[id] = ws;
  console.log(`New client ${id}`);

  ws.on('message', (rawMessage) => {
   console.log(rawMessage)
   const {name, message}= JSON.parce(rawMessage)
   message.push({name, message})
   for(const id in clients){
    clients[id].send(JSON.stringify([{name, message}]))
   }
  });
  
  ws.on('close', () => {
    delete clients[id];
    console.log(`Client is closed ${id}`);
  });
  ws.on('error', (error) => {
    console.error(`WebSocket error: ${error}`);
  });
}); */


/*
import WebSocket from 'ws';
import { v4 as uuid } from 'uuid';

const clients = {};
const messages = [];
const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', (ws) => {
  const id = uuid();
  clients[id] = ws;
  console.log(`New client ${id}`);

  ws.on('message', (rawMessage) => {
    console.log(rawMessage);
    const { name, message } = JSON.parse(rawMessage);
    messages.push({ name, message });
    for (const clientId in clients) {
      clients[clientId].send(JSON.stringify({ name, message }));
    }
  });

  ws.on('close', () => {
    delete clients[id];
    console.log(`Client is closed ${id}`);
  });

  ws.on('error', (error) => {
    console.error(`WebSocket error: ${error}`);
  });
});
 */


/*
import WebSocket from 'ws';
import { v4 as uuid } from 'uuid';

const clients = {};
const messages = [];

const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', (ws) => {
  const id = uuid();
  clients[id] = ws;
  console.log(`New client ${id}`);

  ws.on('message', (rawMessage) => {
    console.log("=========")
    console.log(rawMessage);
    console.log(`Received message: ${rawMessage}`);

    const { name, message } = JSON.parse(rawMessage);
    messages.push({ name, message });
    for (const clientId in clients) {
      clients[clientId].send(JSON.stringify({ name, message }));
    }
  });

  ws.on('close', () => {
    delete clients[id];
    console.log(`Client is closed ${id}`);
  });

  ws.on('error', (error) => {
    console.error(`WebSocket error: ${error}`);
  });
}); */



/*
const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);

const clients = {};
const messages = [];

io.on('connection', (socket) => {
  const id = socket.id;
  clients[id] = socket;
  console.log(`New client ${id}`);

  socket.on('message', (rawMessage) => {
    console.log(`Received message: ${rawMessage}`);
    const { name, message } = JSON.parse(rawMessage);
    messages.push({ name, message });
    for (const clientId in clients) {
      clients[clientId].send(JSON.stringify({ name, message }));
    }
  });

  socket.on('disconnect', () => {
    delete clients[id];
    console.log(`Client is closed ${id}`);
  });

  socket.on('error', (error) => {
    console.error(`Socket error: ${error}`);
  });
});

server.listen(8000, () => {
  console.log('Server listening on port 8000');
});

*/


/*
import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();
const io = new Server(server);

const clients = {};
const messages = [];

io.on('connection', (socket) => {
  const id = socket.id;
  clients[id] = socket;
  console.log(`New client ${id}`);

  socket.on('message', (rawMessage) => {
    console.log(`Received message: ${rawMessage}`);
    const { name, message } = JSON.parse(rawMessage);
    messages.push({ name, message });
    for (const clientId in clients) {
      clients[clientId].send(JSON.stringify({ name, message }));
    }
  });

  socket.on('disconnect', () => {
    delete clients[id];
    console.log(`Client is closed ${id}`);
  });

  socket.on('error', (error) => {
    console.error(`Socket error: ${error}`);
  });
});

server.listen(8000, () => {
  console.log('Server listening on port 8000');
});
 */

/*
import ws from "ws";
const {Server} = ws;
import {v4 as uuid} from "uuid";
import {writeFile, readFileSync, existsSync} from "fs";
const clients = {};
const log = existsSync('log') && readFileSync('log', 'utf-8');
const messages = log ? JSON.parse(log) : [];

const wss = new Server({port: 8000});
wss.on("connection", (ws) => {
    const id = uuid();
    clients[id] = ws;

    console.log(`New client ${id}`);
    ws.send(JSON.stringify(messages));

    ws.on('message', (rawMessage) => {
        const {name, message} = JSON.parse(rawMessage);
        messages.push({name, message});
        for (const id in clients) {
            clients[id].send(JSON.stringify([{name, message}]))
        }
    })

    ws.on('close', () => {
        delete clients[id];
        console.log(`Client is closed ${id}`)
    })
})

process.on('SIGINT', () => {
    wss.close();
    writeFile('log', JSON.stringify(messages), err => {
        if (err) {
            console.log(err);
        }
        process.exit();
    })
}) */



import ws from "ws";
import { v4 as uuid } from "uuid";
import { writeFile, existsSync, mkdirSync } from "fs";
const clients = {};
const messages = [];
const logDir = "./logs"; // Директория для хранения логов

if (!existsSync(logDir)) {
  // Создание директории для хранения логов, если она не существует
  mkdirSync(logDir);
}

const logFile = `${logDir}/log.txt`; // Путь к файлу логов

if (existsSync(logFile)) {
  // Чтение сообщений из файла логов
  const logData = readFileSync(logFile, "utf-8");
  messages.push(...JSON.parse(logData));
}

const wss = new ws.Server({ port: 8000 });

wss.on("connection", (ws) => {
  const id = uuid();
  clients[id] = ws;

  console.log(`New client ${id}`);
  ws.send(JSON.stringify(messages));

  ws.on("message", (rawMessage) => {
    const { name, message } = JSON.parse(rawMessage);
    messages.push({ name, message });

    for (const id in clients) {
      clients[id].send(JSON.stringify([{ name, message }]));
    }
  });

  ws.on("close", () => {
    delete clients[id];
    console.log(`Client is closed ${id}`);
  });
});

process.on("SIGINT", () => {
  wss.close();

  // Запись сообщений в файл логов
  writeFile(logFile, JSON.stringify(messages), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Log file created: ${logFile}`);
      // Добавьте ваше действие, которое нужно выполнить после создания файла логов
    }

    process.exit();
  });
});

// npm i ws
// npm i uuid
//npm update ws
//npm install socket.io
//npm install ws@7.4.5
