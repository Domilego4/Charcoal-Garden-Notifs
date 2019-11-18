// Code poorly written by u/Domilego4 (@Domilego4 on Twitter) while he was bored in class


const ccStages =
{
	none:0
	bud:1,
	sprout:2,
	bloom:3,
	mature:4
};

var ccX = 0;
var ccY = 0;
var ccStage = ccStages.none;
var ccChecked = false;

function gardenCheck()
{
		PlaySound("https://gamepedia.cursecdn.com/minecraft_gamepedia/6/65/Pling.ogg",1,0);
}

function gardenNotification(x, y, stage)
{
	
	if(document.getElementById("gardenTileIcon-"+x+"-"+y).style.backgroundPositionX === "-"+stage*48+"px")
	{
		ccStage = ccStages.none;
		var ccTimer = 0;
		while(ccTimer < 10)
		{
			setTimeout(gardenCheck, ccTimer*500);
			ccTimer++;
		}
	}
}

CharGardenLoop = function(x, y, stage)
{
	gardenNotification(x, y, stage);
}

CharBackupLoop = Game.Loop;

Game.Loop = function()
{
	CharGardenLoop(ccX, ccY, ccStage);
	CharBackupLoop();
}
