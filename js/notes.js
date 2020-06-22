function add(section, note = localStorage.getItem(section)) {
  var id = Math.floor(Math.random() * 100000) // Random number generate for a unique ID
  note += 
  ` <input type="checkbox" id="${section}_${id}"> ` +
      `<label for="${section}_${id}" class="container"> ` +
        '<span class="checkmark"></span> ' +
      '</label> ' +
    `<span class="content" contenteditable="true" onkeyup="store('${id}', '${section}', this.innerHTML);">To do</span> ` +
    `<i class="remove fa fa-times" onclick="remove('${id}', '${section}');"></i> ` +
    '<br>'
  localStorage.setItem(section, note)
  document.getElementById(section).innerHTML = note
}

function store(id, section, value) {
  var note = localStorage.getItem(section)
  var re = new RegExp(`${id}',.*?">.*?<\/span> `);
  match = note.replace(re, `${id}', '${section}', this.innerHTML);">${value}</span> `) // Replace the old item with the new item (joins the HTML to value to make sure it doesn't replace a different string)
  localStorage.setItem(section, match)
}

function remove(id, section) {
  var note = localStorage.getItem(section)
  re = new RegExp(` *<input.{178}'${id}',.*?"><\/i> <br>`);
  note = note.replace(re, "")
  localStorage.setItem(section, note);
  document.getElementById(section).innerHTML = note
}

function get(section) {
  if (localStorage.getItem(section)) {
    var note = localStorage.getItem(section)
    document.getElementById(section).innerHTML = note
  }
  else { // Create a To Do item
    add(section, note = "")
  }
}