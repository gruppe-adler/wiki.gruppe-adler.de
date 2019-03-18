# :file_folder: Gruppe Adler Modset
## Introduction
Gruppe Adler uses a Repository (Repo) consisting of different Mods to customize the game experience to our needs.

For synchronizing the mods we use Arma3Sync (A3S)

## Overview

Essentially, Gruppe Adler uses the following mods:

* Advanced Combat Environment 3 (ACE3)
* Community Upgrade Project Terrains (CUP)
* Red Hammer Studios Mods (RHS)
* Task Force Arrowhead Radio (TFAR)

A complete and detailed overview with all mods including version numbers and source links can be found in the forum: [Gruppe Adler Mod-Paket Forenlink](https://forum.gruppe-adler.de/topic/361)

## Breakdown of the repository

Our repository contains a total of three events (in the follwing also referred to as modsets). Depending on which events you want to participate, not all mods may be needed.

* **Gruppe Adler Main**: This modset contains all the mods needed for normal events.
* **Gruppe Adler Event**: This Modset is a subset of the _Gruppe Adler Main_, but contains only the absolutely necessary mods. We usually use this modsets when partner clans play with us as guests.
* **Gruppe Adler Optionals**: Here you can find all optional addons that you can load, but do not have to. These are addons that only have local effects (sound, user interface, etc.)

## Create and configure the repository

### Installation Arma3Sync
Arma3Sync is needed to download and sync the mods. The current version [can be found here](http://www.armaholic.com/page.php?id=22199). Just download and install it.

### Create a new profile
It it's not strictly necessary, but it is recommended to create a new profile for each new repository to prevent errors.

A new profile can be created with `Profiles` → `Edit` → `New`

::: warning
After the new profile has been created, Arma3Sync should be restarted.
:::

![create_profile](~@assets/gruppe-adler-modset/create-profile.jpg)

### Basic settings

The tab `Launcher Options` contains all basic settings.
Here everything from the Arma 3 installation path to Startup parameters can be configured. 
The settings that need to be made are:
* `Profile` - Select the Arma profile with the desired nickname here
* `Enable Battleye` - Since Battleye sometimes causes problems, as it partially blocks components of mods, it can be turned off on our servers.
* `ArmA III Executable Location (game/server)` - Specify the path to arma3_x64.exe here . This can be found in the Arma installation directory.
::: tip
The Arma installation directory can be found as follows: 
Open Steam → right-click Arma 3 → _Properties_ → Local Files_ → _Browse Local Files_
:::

![launcher-options](~@assets/gruppe-adler-modset/launcher-options.jpg)

In the tab `Addon Options` a folder must be set, in which the mods are stored afterwards. Simply click the blue cross on the right and select the desired path.
::: warning
In order to avoid mistakes, the Arma directory should not be chosen as the download directory, because then problems could arise with workshop mods from Steam, where A3S can not clearly determine which variant of the mod should be patched or loaded.

If the mods should still be in the Arma directory, at least one folder _"Gruppe Adler Mods"_ in the Arma directory should be created and selected.
:::

![addon-options](~@assets/gruppe-adler-modset/addon-options.jpg)

### Create the repository
A new repository can be created in the `Repository` tab. 
To do this - on the right side - click the blue cross. In the newly opened window, enter the following in the field `Public auto-config url`:  
<span class="grad--color-fuehrung">`http://gruppe-adler.de/arma3sync/.a3s/autoconfig`</span>  
Then press `import`. The connection was successful when above the <span class="grad--color-gastspieler">_Connection success!_</span> stands.

![new-repository](~@assets/gruppe-adler-modset/new-repository.jpg)

::: tip
A3S offers the `Repositories` following helpful settings in the tab for all repositories:
* **Notify:** A3S indicates at startup if this repo has received an update.
* **Auto:** A3S updates the repo automatically as soon as an update is available. (For this, of course, A3S must run)
:::

## Update repository

Every time mods are updated the following steps have to be followed to be able to play without problems on the next matchday.

### Connect to repository
In the list of events **(lower list!)** Select the desired event and click on the button with the blue arrow to the right of the list.

![connect-to-repository](~@assets/gruppe-adler-modset/connect-to-repository.jpg)

A new tab with the selected event appears. Here must under `Default destination folder` the directory, which was created under [Basic Settings](#basic-settings), be selected. 
With the button with the green hook the actuality of the mods can be checked. This process can take a few minutes, especially the first time.

![sync-mods](~@assets/gruppe-adler-modset/sync-mods.jpg)

### Update Mods
All mods that have a yellow warning sign must be updated.
* **Red** - new mod  
* **Blue** - Mod is deleted
* **Black (with yellow warning sign)** - Mod is being updated

The download is started with the black play button.

::: tip
To ensure the highest possible download speed, the maximum number of active connections should be set to the maximum value `Settings` → `Maximum number of connections`
:::

![max-connections](~@assets/gruppe-adler-modset/max-connections.jpg)

### Creating an Addon Group

As the last step, a so-called _Addon Group_ has to be created. These are in the first tab `Addons`. With addon groups can be determined which mods are started with Arma. All checked Mods are started with. 
To create an Addon Group from a Modset `Modsets` press the button . In the window that appears, select the desired event and `OK` confirm with .

::: warning
As soon as mods are added to the repository or kicked out, the Addon Group should be recreated in any case. To do this, first delete the old Addon Group by right-clicking and then follow the steps under [Creating an Addon Group](#creating- an-addon-group).
:::

![create-addon-group](~@assets/gruppe-adler-modset/create-addon-group.jpg)

### Testconnect to server

A quick testconnect to the server to check if everything is working properly is always recommended. The Adlerbase is accessible around the clock on our standard server and is always up to date.

## Installation TFAR

Gruppe Adler uses Task Force Arrowhead Radio (TFAR) to ensure a sufficiently good communication. 
TFAR needs a Teamspeak (TS) plugin to work correctly, which has to be installed separately. Switch to the mod directory, which was created under [Basic settings](#basic-settings). The subdirectory `@tfar\teamspeakthe` contains a file `task_force_radio.ts3_plugin`. A simple double click on that file installs the plugin.

::: tip
To install the plugin no instance of the Teamspeak 3 client must be running.
:::

In the TS should now, if you select your own user, a section on the right _Task Force Radio status_.

![teamspeak](~@assets/gruppe-adler-modset/teamspeak.jpg)

<style>
img {
    max-height: 300px;
}
</style>
