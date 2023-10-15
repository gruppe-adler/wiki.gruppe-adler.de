# 🪖 Arma Reforger

[[toc]]

## Hints

```c#
string title = "Gruppe Adler"; // default = string.Empty
string message = "rulez";
float duration = 10.0; // in seconds
bool isSilent = false; // default = false

SCR_HintManagerComponent.GetInstance().ShowCustomHint(message, title, duration, isSilent);

SCR_HintManagerComponent.GetInstance().ShowCustomHint(message);

```
<img width="222" alt="Screenshot 2023-10-14 111219" src="https://github.com/gruppe-adler/wiki.gruppe-adler.de/assets/50139270/85497374-bf69-4c84-a11a-cfe541990f23">

## Console Output

### Print()
```c#
// LogLevel defaults to LogLevel.NORMAL

Print("spam message", LogLevel.SPAM);
Print("verbose message", LogLevel.VERBOSE);
Print("debug message", LogLevel.DEBUG);
Print("normal message", LogLevel.NORMAL);
Print("warning message", LogLevel.WARNING);
Print("error message", LogLevel.ERROR);
Print("fatal message", LogLevel.FATAL);

//Perhaps SPAM, VERBOSE and DEBUG only show up if special states are active, like Debug Mode
```
<img width="362" alt="Screenshot 2023-10-14 112118" src="https://github.com/gruppe-adler/wiki.gruppe-adler.de/assets/50139270/ea0a9d79-84fc-48fd-befb-398ac95c93cc">

### PrintFormat()
```c#
string s1 = "The";
string s2 = "quick";
string s3 = "brown";
string s4 = "fox";
string s5 = "jumps";
string s6 = "over";
string s7 = "a";
string s8 = "lazy";
string s9 = "dog";

PrintFormat("%1 %2 %3 %4 %5 %6 %7 %8 %9.", s1, s2, s3, s4, s5, s6, s7, s8, s9);

// PrintFormat() does not support LogLevel but you could use this instead:
Print(string.Format("%1 %2 %3 %4 %5 %6 %7 %8 %9.", s1, s2, s3, s4, s5, s6, s7, s8, s9), LogLevel.NORMAL);

// I think I read somewhere that the parameter count of functions is generally limited to 9 or 10
```
<img width="376" alt="Screenshot 2023-10-14 112710" src="https://github.com/gruppe-adler/wiki.gruppe-adler.de/assets/50139270/86539fb9-f196-4d3a-81af-4b0a387ac7f4">

## Check Locality ...

### ... for an Entity that has a RplComponent
```c#
IEntity entity = GetGame().GetWorld().FindEntityByName("MyEntity");

RplComponent rplComp = RplComponent.Cast(entity.FindComponent(RplComponent));

if (rplComp.Role() == RplRole.Authority)
{
	Print("This computer hat the role 'Authority' for this entity.");
}
if (rplComp.Role() == RplRole.Proxy)
{
	Print("This computer hat the role 'Proxy' for this entity.");
}

PrintFormat("Master: %1", rplComp.IsMaster());
PrintFormat("Owner: %1", rplComp.IsOwner());
PrintFormat("Proxy: %1", rplComp.IsProxy());
```
<img width="435" alt="Screenshot 2023-10-14 121225" src="https://github.com/gruppe-adler/wiki.gruppe-adler.de/assets/50139270/2a803322-05b7-4499-aca6-66f4b332c74d">

### ... more in general
```c#
PrintFormat("Server: %1", Replication.IsServer());
PrintFormat("Client: %1", Replication.IsClient());
```
<img width="347" alt="Screenshot 2023-10-14 142207" src="https://github.com/gruppe-adler/wiki.gruppe-adler.de/assets/50139270/5639a767-2900-46e2-a984-ec0a6093c943">


## Find entities
```c#
// Give your entity a name in in the object properties (It's something like a variable name)

IEntity entity = GetGame().GetWorld().FindEntityByName("MyEntity");
```
<img width="343" alt="Screenshot 2023-10-14 120009" src="https://github.com/gruppe-adler/wiki.gruppe-adler.de/assets/50139270/8eebe4a3-df52-4b6b-b742-d31493a02e46">

## Spectator
See GRAD Spectator for implementation details: https://github.com/gruppe-adler/GRAD-Spectator
```c#
// Execute locally

// Get players entity position
vector pos = GetGame().GetPlayerController().GetControlledEntity().GetOrigin();

// Change position to be above and behind the entity
pos[2] = pos[2] - 4;
pos[1] = pos[1] + 3;
		
// Enable specator by spawning the spectator entity at the given position
EntitySpawnParams params = new EntitySpawnParams();
params.Transform[3] = pos;
Resource r = Resource.Load("{E1FF38EC8894C5F3}Prefabs/Editor/Camera/ManualCameraSpectate.et");
IEntity spectator = GetGame().SpawnEntityPrefab(r, GetGame().GetWorld(), params);

// Disable specator by deleting spectator entity
SCR_EntityHelper.DeleteEntityAndChildren(spectator);
```

