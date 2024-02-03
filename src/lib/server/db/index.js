import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
import { HOST, USER, PASSWORD, DATABSE } from '$env/static/private'
import { insertEvent, notificationResult, applyEvent } from './query';
import ip from 'ip'

export const app = express();
const port = 3000;

const host = ip.address()

console.log("IP ADRESS!!!" + ip.address())

// Create a MySQL connection
export const db = createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABSE,
  port: 3306,
});


// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Enable CORS --> otherwise I cannot access from svelte localhost
app.use(cors());

//hanfle post query
app.use(express.json());


//It's just a test to check the correct behavior
app.get('/test', function (req, res) {
  return db.query("SELECT * FROM Test", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    res.send(result);
  });
});

app.post('/insert-event', async (req, res) => {
  // Extract data from the request
  const {
    ID_user,
    available_start_date,
    availabe_end_date,
    location,
    capacity,
    guest_price,
    type_of_meal,
    dishOrigin,
    dishName,
    name_of_event,
    duration,
    description,
    start_time,
    currency,
    occasion,
    menu,
    agenda,
    photo,
    walking,
    smoking,
    kids,
    pet,
    alcohol,
  } = req.body;
  console.log("index.js");
  try {
    // Call your insertEvent function
    const insertId = await insertEvent(
      ID_user,
      available_start_date,
      availabe_end_date,
      location,
      capacity,
      guest_price,
      type_of_meal,
      dishOrigin,
      dishName,
      name_of_event,
      duration,
      description,
      start_time,
      currency,
      occasion,
      menu,
      agenda,
      photo,
      walking,
      smoking,
      kids,
      pet,
      alcohol
    );

    // Send a success response
    res.status(200).json({ insertId });
  } catch (error) {
    // Send an error response
    console.error('Error inserting event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//It's just a test to check the correct behavior
app.get('/test', function (req, res) {
  return db.query("SELECT * FROM Test", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});

app.post('/loginVerify', async (req, res) => {
  const {
    email,
    password
  } = req.body;
  const foundID = await verifyCredential(email, password);
  if (foundID === -1) {
    res.status(200).json({ success: false, message: 'Invalid credentials' });
  } else {
    // set global variable
    res.status(200).json({ success: true, message: 'Login successful', userID: foundID });
  }
});

// @ts-ignore
async function verifyCredential(email, password) {
  const query = `SELECT ID_user FROM credentials WHERE email = ? AND password = ?`;
  return new Promise((resolve, reject) => {
    db.query(query, [email, password], (err, result) => {
      if (err) {
        console.error('Error querying the database:', err);
        reject(err);
      } else {
        if (result.length === 0) {
          // No rows matched the WHERE clause
          console.log('No matching user found.');
          resolve(-1); // or resolve with any other value that represents no match
        } else {
          // Rows matched the WHERE clause
          resolve(result[0].ID_user);
        }
      }
    });
  });
}


app.post('/insertCredential', async function (req, res) {
  const {
    name,
    email,
    password
  } = req.body;
  const nRowWithSameEmail = await emailAlreadyPresent(email);
  if (nRowWithSameEmail == 0) {
    const userID = await insertUser(name);
    //set global variable
    const query = "INSERT INTO `credentials` (`ID_user`, `email`, `password`) VALUES (?,?,?);"
    return db.query(query, [userID, email, password], (err, result) => {
      if (err) throw err;
      res.status(200).json({ success: true, message: 'Sing up success' });
    });
  } else {
    // If already present, send a JSON response with a message
    res.status(200).json({ success: false, message: 'Credentials already present' });
  }
});



// @ts-ignore
async function insertUser(name) {
  const query = "INSERT INTO `users` (`ID`, `name`, `surname`, `live_in`, `description`, `accomodation_type`, `location`, `tenants_number`, `kids_number`, `gender`) VALUES (NULL, ?, '', NULL, '', '', '', '', '', NULL);  "
  return new Promise((resolve, reject) => {
    db.query(query, [name], (err, result) => {
      if (err) {
        console.error('Error inserting into database:', err);
        reject(err);
      } else {
        console.log('Result setted');
        resolve(result.insertId);
      }
    });
  });
}

// @ts-ignore
async function emailAlreadyPresent(email) {
  const query = "SELECT COUNT(*) FROM credentials where email=?;";
  return new Promise((resolve, reject) => {
    db.query(query, [email], (err, result) => {
      if (err) {
        console.error('Error getting data', err);
        reject(err);
      } else {
        // Access the count value from the result
        const count = result[0][Object.keys(result[0])[0]];
        resolve(count);
      }
    });
  });
}

// Start the server
app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

app.get('/insertedRequest', function (req, res) {
  return db.query("SELECT ID FROM requests ORDER BY ID DESC LIMIT 1", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});

app.post('/notificationResult', async (req, res) => {

  // Extract data from the request
  const {
    ID_application,
    state
  } = req.body;
  try {
    // Call your insertEvent function
    const insertId = await notificationResult(
      ID_application,
      state
    );
    // Send a success response
    res.status(200).json({ insertId });
  } catch (error) {
    // Send an error response
    console.error('Error inserting event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/applyEvent', async (req, res) => {

  // Extract data from the request
  const {
    ID_event,
    ID_user
  } = req.body;
  try {
    // Call your insertEvent function
    const result = await applyEvent(
      ID_event, ID_user
    );
    if (result === -1) {
      // Send an unsuccessful response if insertId is -1
      res.status(200).json({ success: false, insertId: result });
    } else {
      // Send a successful response with the insertId
      res.status(200).json({ success: true, insertId: result });
    }
  } catch (error) {
    // Send an error response
    console.error('Error inserting event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});