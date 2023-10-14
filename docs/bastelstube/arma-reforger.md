# 🪖 Arma Reforger

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
