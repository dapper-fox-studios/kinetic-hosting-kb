# Reducing Memory Usage
If your server is hitting out of memory errors, then there are a few steps you can take to reduce your memory usage saving you from needing to upgrade.

## Step One – Remove Unused Plugins/Mods
If you’re running a plugin-based server, look to remove any plugins or mods you’re not really using. For example, you might have a home plugin in your server, and essential. As essential has a home system, you can remove the home plugin and still keep the same function. So look for plugins that might overlap in their function, and remove those that do the same things.

If you’re running a modded server, remove any client-side mods from the server. Forge will still load these on a server sometime, so it’s best to make sure they’re all removed. A client-side mod is something that only has functions on the client, like custom main menu. Some mods do still have functions on the server, like JEI for example, but unless you’re using the mod to give yourself items, the mods can be removed without any impact to function. So taking the time to find out what mods you can remove, can be really worth it when trying to save memory.

## Step Two – Server Software
The software you’re using can also impact your RAM usage and performance. We’ll cover all the best options here for you.

If you’re not looking to run Bukkit plugins, then right now the best-optimised version for Minecraft is the Fabric mod loader with the Lithium mod installed: https://modrinth.com/mod/lithium

To install those, just select the version of Fabric you want to install from the version installer, then head to the Lithium link, download the jar, and then upload it into your server via the file manager. It needs to go into the folder marked mods. Also, don’t worry, you don’t need fabric on your client to join, you can join with just a normal version of Minecraft.

If you still want to use plugins, then we recommend you use Paper, and we have a full guide of the best settings here

Like fabric, paper can be downloaded via the version installer.

## Step Three – Loaded Chunks
One of the most common problems outside of memory leaks is the number of chunks being loaded. To help lower this, head to the server.properties file and change the view-distance property to a lower number. This will mean your server’s render distance is lower, but you can help hide this by using mods like Optifine or Far View.

If you’re running Paper, then you can also lower no-tick-view-distance in the Paper.yml

If you’re running a server with a larger player count, then we would recommend setting these values to 6 or 7

## Step Four – Selecting The Right Startup Flags
If you’re still having memory issues, then using the correct startup flags can be a huge help. You can find a guide on that here: 

## Step Five – Memory Leaks
A very simple rundown of a memory leak is this. Say your mod or plugin needs to do something, the server will give it some RAM, then once it’s done, the plugin/mod should then give it back to the system. However, sometimes in the case of memory leaks, this doesn’t happen, and the mod/plugin keeps the memory. If this happens on a process that runs frequently then you can quickly run out of memory.

Sadly on your end, there isn’t a lot you can do to fix these issues, but you can track down the problem. Installing a mod like Spark and running its dump tools can help you find the problematic mod: https://spark.lucko.me/

If you don’t know how this works or how to read its output, then please contact our support team. Once you’ve found the mod/plugin causing the issue, then one step is to remove it.

If you don’t want to remove any mod or plugin for your server, then you can set up automatic restarts. Running these every 4 hours can help keep memory leaks down, as when the server restarts, any stolen memory will be given back to the system.

## Step Six – Upgrade
If none of those has helped, and you’re still running out of memory, then it might be time to upgrade. To do this, head to the billing panel, press on your packages, and then upgrade. All your files will move to the upgraded server.