const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: true,
    credentials: true
  },
  allowEIO3: true
});
// Обработчик подключения клиента
io.on('connection', (socket) => {
  console.log('Новый клиент подключился!');
  var json_var;
  // Обработчик получения данных от клиента
  socket.on('json', (json) => {
    console.log('Получен JSON:', json);
    // Дополнительная обработка полученного JSON
    // Пример отправки ответа клиенту
    if (json != {
        "message": "give me THIS"
      }) {
      json_var = json;
      console.log(json_var);
      console.log({
        "message": "give me THIS"
      })
    } else {
      console.log(json_var);
      socket.emit('response', JSON.stringify(json_var));

    }

  });
  // Обработчик отключения клиента
  socket.on('disconnect', () => {
    console.log('Клиент отключился');
  });
});
// Запуск сервера на порту 1605
server.listen(1605, () => {
  console.log('Сервер запущен на порту 1605');
});

/* const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);
// Коллекция сокетов для всех подключенных клиентов
const sockets = {};
// Обработчик подключения клиента
io.on('connection', (socket) => {
  console.log('Новый клиент подключился!');
  // Обработчик получения данных от клиента
  socket.on('json', (json) => {
    console.log('Получен JSON:', json);
    const data = JSON.parse(json);

    // Создание нового сервера на указанном порту
    const newServer = http.createServer();
    newServer.listen(data.port, () => {
      console.log(`Новый сервер запущен на порту ${data.port}`);
    });
    // Обработчик запросов на новом сервере
    newServer.on('request', () => {
      // Обработка запросов на новом сервере

    });
    // Сохранение сокета нового сервера для последующего использования
    sockets[data.port] = newServer;
  });
  // Обработчик отключения клиента
  socket.on('disconnect', () => {
    console.log('Клиент отключился');
  });
});
// Запуск сервера на порту 3000
server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
}); */