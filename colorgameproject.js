var numSquares=6;
var colors=generateRandomColors(numSquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

colorDisplay.textContent=pickedColor;

// var easyBtn=document.querySelector("#easyBtn");
// var hardBtn=document.querySelector("#hardBtn");

var modeButtons=document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++)
{
	modeButtons[i].addEventListener("click",function()
		{
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");

			this.classList.add("selected");

			this.textContent === "EASY" ? numSquares=3: numSquares=6;

			reset();
		});
}

function reset()
{
	colors=generateRandomColors(numSquares);

    	pickedColor=pickColor();

    	messageDisplay.textContent="";

    	this.textContent="NEW COLORS";

    	colorDisplay.textContent=pickedColor;

    	for(var i=0;i<squares.length;i++)
		{
			if(colors[i])
			{
				squares[i].style.display="block";
				squares[i].style.background=colors[i]
			}
			else
			{
				squares[i].style.display="none";
			}
		}

    	h1.style.background="steelblue";
    }


   resetButton.addEventListener("click",function()
   	{
   		reset();
   		this.textContent="NEW COLORS";
   	});
// easyBtn.addEventListener("click",function()
// 	{
// 		hardBtn.classList.remove("selected");
// 		easyBtn.classList.add("selected");

// 		numSquares=3;

// 		colors=generateRandomColors(numSquares);
// 		pickedColor=pickColor();
// 		colorDisplay.textContent=pickedColor;

// 		for(var i=0;i<squares.length;i++)
// 		{
// 			if(colors[i])
// 			{
// 				squares[i].style.background=colors[i]
// 			}
// 			else
// 			{
// 				squares[i].style.display="none";
// 			}
// 		}
// 	});

// hardBtn.addEventListener("click",function()
// 	{
// 		easyBtn.classList.remove("selected");
// 		hardBtn.classList.add("selected");

// 		numSquares=6;

// 		colors=generateRandomColors(numSquares);
// 		pickedColor=pickColor();
// 		colorDisplay.textContent=pickedColor;

// 		for(var i=0;i<squares.length;i++)
// 		{
// 		    squares[i].style.background=colors[i]
// 		    squares[i].style.display="block";
			
// 		}
// 	});

// resetButton.addEventListener("click",function()
//     {
//     	colors=generateRandomColors(numSquares);

//     	pickedColor=pickColor();

//     	messageDisplay.textContent="";

//     	this.textContent="NEW COLORS";

//     	colorDisplay.textContent=pickedColor;

//     	for(var i=0;i<squares.length;i++)
// {
// 	squares[i].style.background=colors[i];
// }
//     h1.style.background="steelblue";
//     }
// 	);


for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];

 
	squares[i].addEventListener("click",function()
		{
			var clickedColor=this.style.background;

			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent="CORRECT !";
				resetButton.textContent="PLAY AGAIN ?";
				changeColor(clickedColor);
				h1.style.background=clickedColor;
				messageDisplay.style.color=clickedColor;
				
			}
			else
			{
			   this.style.background="#232323";
			   messageDisplay.textContent="TRY AGAIN !";
			   messageDisplay.style.color="red";
			}
		});
}

	function changeColor(color)
	{
		for(var i=0;i<squares.length;i++)
		{
        	squares[i].style.background=color;
		}
	}

	function pickColor()
	{
		var random= Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function generateRandomColors(num)
	{
		var arr=[];

		for(var i=0;i<num;i++)
		{
        	arr.push(randomColor());
		}
		return arr;
	}

	function randomColor()
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);

		return "rgb("+r+", "+g+", "+b+")";
	}

