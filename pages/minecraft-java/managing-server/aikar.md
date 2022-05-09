# Aikar Flags
Aikar Flags are currently the most optimised and tested startup flags for Minecraft. As such they’re are recommended for newer versions of the game, modded servers, and public servers.

## Correct Flags To Use
If your server is using under 13gb of RAM, then these are the flags you should use.

java -Xms12G -Xmx12G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:InitiatingHeapOccupancyPercent=15 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar server.jar nogui

Note: Change the RAM value to the amount of RAM your server has

If you’re using 13gb of RAM or more, then some changes are needed.

java -Xms13G -Xmx13G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -XX:G1NewSizePercent=40 -XX:G1MaxNewSizePercent=50 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=15 -XX:InitiatingHeapOccupancyPercent=20 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar server.jar nogui

Note: Change the RAM value to the amount of RAM your server has

## How Much RAM Should I Give
First, don’t give all your systems memory. These startup settings will use all the memory provided. So if you have a 14gb system, and give all 14gb, you don’t leave any memory for other processes on that system.

This also applies to anyone using the pterodactyl panel.

When setting the ram value, it’s a good idea to set it 1gb under your systems RAM


## More Isn’t Better
It’s common for people to think that giving more RAM to your server will solve all your problems. However this ofter can at best not solve any issues, and at worse, make the server crash more frequently.