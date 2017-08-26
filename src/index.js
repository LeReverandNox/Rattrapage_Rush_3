/*jslint node: true this:true es6:true */
/*global this*/

"use strict";
const Hapi = require("hapi");
const ejs = require("ejs");
const inert = require("inert");
const vision = require("vision");
const config = require("./config");
const routes = require("./routes");

const server = new Hapi.Server({
    connections: {
        routes: {
            cors: true
        },
        router: {
            stripTrailingSlash: true
        }
    }
});

server.connection({
    port: config.server.port
});

server.register([
    vision,
    inert,
    routes
], (err) => {
    if (err) {
        throw err;
    }

    server.views({
        engines: { ejs },
        relativeTo: __dirname,
        path: "views"
    });

    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`The Wakemon app is now running on port ${server.info.port}`);
    });
});
