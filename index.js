
const express = require('express');

const app = express();

app.use(express.static('client-app/build'));
app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'client-app/build', 'index.html'));
});

const PORT = process.env.PORT || 5030;

app.listen(PORT, () => {
  console.log('server started at 5030');
});
