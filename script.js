// const http = require("http");
// const fs = require("fs/promises");
// const path = require("path");

// // 1 - create a function that checks if recieved folder name are in root directoris or not

// function folder(randomFolder) {
//     const rootDir = path.resolve(__dirname);
//     fs.readdir(rootDir, (err, files) => {
//         if (err) {
//             console.error('Error', err);
//             return;
//         }
//         const isFolder = files.includes(randomFolder);

//         if (isFolder) {
//             console.log(`Folder "${randomFolder}" exists in the root directory.`);
//         } else {
//             console.log(`Folder "${randomFolder}" doesnt exist in the root directory.`);
//         }
//     });
// }

// folder('text.txt');

// 2 - create simple http get server and send users data from data.json

// const simpleServer = http.createServer(async (req, res) => {
//     if (req.url === '/users') {
//         try {
//             const filePath = path.join(__dirname, 'usersData.json');
//             const data = await fs.readFile(filePath, 'utf8');
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(data);
//         } catch (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('somebody forgot  "/users" :) ');
//     }
// });

// simpleServer.listen(3000, () => {
//     console.log(`Server running at http://localhost:3000`);
// });

// // 3 - create a http server that return random number between 1 to 100, http://localhost:3000/random

// const simpleServer = http.createServer(async (req, res) => {
//     if (req.url === '/random') {
//         try {
//             const randomNumber = () => {
//                 return Math.floor(Math.random() * 100);
//             };

//             const random = randomNumber();

//             const data = JSON.stringify(random);

//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(data);
//         } catch (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('error');
//     }
// });

// simpleServer.listen(3000, () => {
//     console.log(`Server running at http://localhost:3000`);
// });

// // 4 - create a http get server that returns simple html table


// const simpleServer = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });

//   const html = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>
//         <body>
//             <h2>Users data</h2>
//             <table border="1">
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Age</th>
//                 </tr>
//                 <tr>
//                     <td>1</td>
//                     <td>Giorgi</td>
//                     <td>Giorgi@example.com</td>
//                     <td>28</td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>Salome</td>
//                     <td>Salome@example.com</td>
//                     <td>29</td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>Hugo</td>
//                     <td>Hugo@example.com</td>
//                     <td>3</td>
//                 </tr>                
//             </table>
//         </body>
//         </html>
//     `;

//   res.end(html);
// });

// simpleServer.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/");
// });
