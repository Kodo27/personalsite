var img = document.querySelector('#mainimage');

//images for boxy patterns
var bxleft = document.querySelector('#bxone');
var bxright = document.querySelector('#bxtwo');
var bxone = 'images/bxleft.png';
var bxtwo = 'images/bxright.png';
var bpleft = 'images/bpleft.png';
var bpright = 'images/bpright.png';

var originalwidth = 240;
var originalheight = 360;

var changed = false;

window.onscroll = function()
{
	var srcleft = bxleft.getAttribute('src'); 
	var srcright = bxright.getAttribute('src'); 

	if(changed)
	{
		changed = false;
		return;
	}

	if(srcleft === bxone)
	{
		bxleft.setAttribute('src', bpleft);
	}
	else
	{
		bxleft.setAttribute('src', bxone);
	}

	if(srcright === bxtwo)
	{
		bxright.setAttribute('src', bpright);
	}
	else
	{
		bxright.setAttribute('src', bxtwo);
	}

	changed = true;
}

img.onmouseover = function()
{
	img.setAttribute('width', 264);
	img.setAttribute('height', 396);
}

img.onmouseout = function()
{
	img.setAttribute('width', originalwidth);
	img.setAttribute('height', originalheight);
}