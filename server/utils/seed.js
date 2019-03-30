import uuidv4 from "uuid/v4";
import {
 User, Users, Message, Messages,
} from "./utils";
// dummy data for users
const seedUser1 = new User(101, 'tundeusman1@gmail.com',
        'Tunde', 'Usman', 'Userpassword1', "gvweyuywyg");
const seedUser2 = new User(102, 'tundeusman2@gmail.com',
    'Monsurah', 'Ishaq', 'Userpassword2', "uhewfhoir");
const seedUser3 = new User(333, 'example@gmail.com',
    "tunde", "usman", "password");

export const users = new Users();

users.newUser(seedUser1)
    .then(okay => okay).catch(err => console.log(err));
users.newUser(seedUser2)
    .then(okay => okay).catch(err => console.log(err));
users.newUser(seedUser3)
.then(okay => okay).catch(err => console.log(err));

const seedMessage1 = new Message(uuidv4(), "2/03/2019", 'I love Andela',
    'Tunde usman love andela so much', 112, "draft", uuidv4(), null);
const seedMessage2 = new Message(uuidv4(), "2/03/2019", 'My love for Andela',
    'Andela is the best place where i will love to work', 224, "unread", 101, 201);
const seedMessage3 = new Message(uuidv4(), "2/04/2019", 'I love my life',
    'Tunde usman loves his life', 105, "sent");
export const messages = new Messages();

messages.createMessage(seedMessage1)
.then(okay => okay).catch(err => err);
messages.createMessage(seedMessage2).then(okay => okay).catch(err => err);
messages.createMessage(seedMessage3).then(okay => okay).catch(err => err);

export const user = new User(101, "testing@gmail.com", "Tunde", "usman", "password", "token");
export const login = { email: "testing@gmail.com", password: "password" };
export const message = new Message(566, "6-7-28", 'Fake subject', 'Fake Message');
export const fakeLogin = { email: "fake@gamil.com", password: "fakePassword" };
