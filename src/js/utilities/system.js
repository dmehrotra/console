'use strict'
function SystemData(){
	this.data = json;
}
var json = [
{
  "type":'file',
  "name":"hello.txt",
  "level":0
},
{
  "type": 'folder',
  "name": 'parents',
  "level": 0,
  "files":[
  {
    "name":"parents.txt",
    "level": 1
  }
  ],
  "folders":[
  {
    "name":"mom",
    "level":1,
    "files":[
    {
      "name":"mom.txt",
      "level":2
    }
    ],
  },
  {
    "name":"dad",
    "level":1,
    "files":[
    {
      "name":"dad.txt",
      "level": 2
    }
    ]
  }
  ]
}
]