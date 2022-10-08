# Installing Mods On Your Ark Server

You can find mods for Ark on the Steam Workshop. There is a huge list of user created mods for you to checkout and add to your server.
https://steamcommunity.com/app/346110/workshop/

Once you've found a mod you like, click on the mods pages. In this example, we're using the Structures Plus (S+) mod.
You'll now see the URL at the top of your page, looks something like this:
https://steamcommunity.com/sharedfiles/filedetails/?id=731604991

The end part is what we're looking for, this is the mods ID. For this mod the ID is 731604991, but every mod will have its own unique ID.

Find the mod IDs for every mod you would like to install on your server.

## Adding The Mods To Your Server

Head to the file manager, then /ark/ShooterGame/Saved/Config/LinuxServer
Then look for the GameUserSettings.ini

Click on the file to open the editor.

Once the editor is open look for or add the line:
ActiveMods=

Enter the ID of the mods you would like to install, spacing them out with a comma.
In our example, the line would look like this:
ActiveMods=731604991

But if we wanted to install more than one mod, it would look like this,
ActiveMods=731604991,8439291,99029292

Save the file and restart your server.

## Things To Note

Your server will install the mods on your client when you join the server. As such, there is no need to also install the mods to your client manually.
