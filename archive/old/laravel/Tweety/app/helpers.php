<?php
/**
 * step 1: Register global helpers to "composer.json" file
 * "autoload": {
 *        "psr-4": {
 *           "App\\": "app/"
 *       },
 *      "classmap": [
 *         "database/seeds",
 *        "database/factories"
 *    ],
 *    "files": [
 *        "app/helpers.php"
 *    ]
 *
 * step 2: run composer dump-autoload
 */
function current_user()
{
    return auth()->user();
}
