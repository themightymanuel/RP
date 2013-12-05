// JavaScript Document
var numchoices
document.getElementById('options').innerHTML = '<p>test</p>'
function makelist()
{
	numchoices = document.getElementById('select').value
	var content = '<form>'
	for( var i = 1; i <= numchoices ; i++ )
	{
		 content += '<p><input type="text" id="o' + i + '"></p>'
	}
	content += '<p><input type="button" value="Pick Random" onClick="pickrnd()"></form>'
	document.getElementById('options').innerHTML = content
}

function pickrnd()
{
	var choices = new Array
	
	for( var i = 1; i <= numchoices; i++ )
	{
		choices[i] = document.getElementById('o' + i).value
	}
	var choice = Math.floor( 1 + Math.random() * numchoices )
	document.getElementById('results').innerHTML = choices[choice]
}

function preset()
{
	var list = document.getElementById('select3').value
	var lista = new Array
	lista = list.split(',')
	listlength = lista.length
	
	var choice = Math.floor( Math.random() * listlength )
	document.getElementById('preset').innerHTML = lista[choice]
}