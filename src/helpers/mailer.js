// import Imap from'imap';
//
// var imap = new Imap({
//   imap: {
//     user: 'khvoyamokh@gmail.com',
//     password: 'jsth9c8d7s',
//     host: 'imap.gmail.com',
//     port: 993,
//     tls: true,
//     authTimeout: 3000
//   }
// });
//
// export const sendEmail = async (name , item, mail) => {
//   const openInbox = cb => {
//     imap.openBox('INBOX', true, cb);
//   };
//   const message = `Content-Type: text/plain
//     To: khvoyamokh@gmail.com
//     From: khvoyamokh@gmail.com
//     Subject: Hello world
//
//     Hi
//     This is a test message
//     `;
//   imap.once('ready', () => {
//     openInbox((err, box) => {
//       imap.append(message.toString(), {mailbox: 'Inbox'});
//     })
//   })
//   imap.connect(config).then(function (connection) {
//
//     connection.append(message.toString(), {mailbox: 'Inbox'});
//   });
// };
