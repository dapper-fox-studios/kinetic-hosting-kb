# Best Setting For Paper
Here is a rundown of the best setting for a Paper server. We’ll be using the Paper, Spigot, and Bukkit yml files in the guide.

## Bukket.YML
One of the biggest impacts will be mobs on your server, so we’re going to lower the number that can spawn.

monsters: 30
animals: 10
water-animals: 5
water-ambient: 5
water-underground-creature: 5
axolotls: 5
ambient: 2

chunk-gc:
period-in-ticks: 500

If lots of chunks are being stuck loaded, then you can change this option to have the server check for unused chunks. An unused chunk is a chunk that is loaded but has no players in it. Don’t lower this option too much, as it can cause more lag issues than it solves.

Before changing any of the other files, check this to see if this has fixed any TPS issues you might have.

## Spigot.YML
mob-spawn-range: 5

This lowers the range from the play that mobs will spawn. We only recommend changing this if you have tried everything else, as this can impactful to the playing experience

entity-tracking-range:
players: 32
animals: 16
monsters: 48
music: 32
other: 32

This is another setting you should only change if your server is still lagging. The options we’ve put in place are what we think is optimal without impacting players too much. If you are still lagging, then lowering monsters to 32 will help. We wouldn’t push it any lower, than this, however.


item-despawn-rate: 3000

Another setting that can be changed to help with lag. If you’ve got a problem with lots of items, then lowering this will help. However, if you don’t have a grave plugin on the server or keep inventory, we wouldn’t recommend lowering this, as it will lower how long you have to collect your items before they despawn

arrow-despawn-rate: 600
merge-radius:
items: 5
exp: 5

These settings can be changed without impacting players at all. They won’t do a lot to help with server performance, but they will help.

## Paper.YML
per-player-mob-spawns: true

This option won’t help with performance, but it will help mobs be distributed across your players better. Thus hiding some of the options we changed before.