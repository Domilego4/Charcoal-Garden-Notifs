/*
Code poorly written by u/Domilego4 (@Domilego4 on Twitter) while he was bored one time in class.

A mod that annoyingly plays the Minecraft "Pling" sound effect 10 times
whenever that one plant reaches the stage you were waiting for.

How to use:
- Open the Console
- Type "ccX = [0-5]" to select the x coordinate of the garden tile to check
- Type "ccY = [0-5]" to select the y coordinate of the garden tile to check
	- I haven't tested these with smaller gardens, so it might break, but I don't think it should.
- Type "ccStage = [0-4]" to select which stage you want a notification for.
	- 0 is None (no notifications)
	- 1, 2, 3 and 4 are Bud, Sprout, Bloom and Mature, respectively
	- You can also replace the number with "ccStages.<stage name>"
*/

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
