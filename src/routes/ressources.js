/*jslint node: true this:true es6:true */
/*global this*/

"use strict";

module.exports = function (server) {
    const ressourcesRoutes = [
        {
            method: "GET",
            path: "/css/{file*}",
            handler: {
                directory: {
                    path: "public/css"
                }
            }
        },
        {
            method: "GET",
            path: "/js/{file*}",
            handler: {
                directory: {
                    path: "public/js"
                }
            }
        },
        {
            method: "GET",
            path: "/js/lib/{file*}",
            handler: {
                directory: {
                    path: "public/js/lib"
                }
            }
        },
        {
            method: "GET",
            path: "/favicon.ico",
            handler: {
                file: "public/images/favicon.ico"
            }
        },
        {
            method: "GET",
            path: "/images/{file*}",
            handler: {
                directory: {
                    path: "public/images"
                }
            }
        },
        {
            method: "GET",
            path: "/partials/{file*}",
            handler: {
                directory: {
                    path: "views/partials"
                }
            }
        }
    ];

    server.route(ressourcesRoutes);
};
