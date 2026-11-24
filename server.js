import 'dotenv/config';

import app from './src/app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Healthcare Management System API listening on port ${PORT}`);
});
