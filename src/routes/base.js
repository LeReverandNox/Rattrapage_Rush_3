/*jslint node: true this:true es6:true */
/*global this*/

"use strict";
module.exports = function (server) {
    const baseRoutes = [
        {
            method: "GET",
            path: "/",
            handler: async (req, rep) => {
                try {
                    rep.view("index");
                } catch (e) {
                    console.log(e);
                }
            }
        }
    ];

    server.route(baseRoutes);
};
