## JS Checklist
A to do list created with JS and local storage

![](https://i.imgur.com/QF8r1hd.gif)

### Code


`html
<html>
  <head>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto Condensed'>
    <script src="js/notes.js"></script>
  </head
  <body>
    <div class="Notes">
        <span class="Title">To do:</span>
        <i class="fa fa-plus Add" onclick="add('ToDo');"></i>
        <div class="Note" id="ToDo">To do</div>
    </div>

    <script>
      get("ToDo");
    </script>
  </body>>
</html>
`
