const express = require('express');
const morgan = require('morgan');
const { db, Page, User } = require('./models');

const app = express();
app.use(morgan());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
	console.log('connected to the database');
});

app.get('/', (req, res) => {
	res.send('Hello!');
});

// ... other stuff

const init = async () => {
	await db.sync({ force: true });
	await Page.sync();
	await User.sync();
	const PORT = 3000;
	app.listen(PORT, () => {
		console.log(`listening on port ${PORT}...`);
	});
};

init();
