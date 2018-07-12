<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>{{title}}</title>
    </head>
    <style>
        a {
           display: block;
           font-size: 30px; 
           text-decoration: none;
           color:#000;
        }
    </style>
    <body>
        {{#each files}}
            <a href="{{../dir}}/{{this}}">{{this}}</a>
        {{/each}}
    </body>
</html>