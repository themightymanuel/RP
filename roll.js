// JavaScript Document

var sides
var value = new Array
var dice

function roll()
{
	sides = document.getElementById('number').value
	dice = document.getElementById('select2').value
	value.length = 0
	for(var i = 1; i <= dice; i++)
	{
		value[i-1] = Math.floor( 1 + Math.random() * sides )
	}
	document.getElementById('rollvalue').innerHTML = value
}