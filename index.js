const express = require('express');
const loadProtos = require('./protocol');
const dispatchRoutes = require('./dispatch');

const app = express();
const PORT = 21000;

loadProtos().then(() => {
    app.use(dispatchRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Failed to load protobufs:', error);
});
