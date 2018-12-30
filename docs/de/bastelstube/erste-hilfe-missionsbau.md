# Erste Hilfe Missionsbau

Die ganze &§$%%! klappt nicht?
Hier findest Du Lösungen auf die häufigsten Probleme, die beim Missionsbau auftreten – geordnet nach Typ.




## GRAD-Loadout
### … greift nicht
::: grad-tip 1)
Syntaxfehler beim Deklarieren? (Scriptfehler anschalten bzw. RPT prüfen).
* Klammer zuviel/zu wenig
* Semikolon vergessen
* Klasse der Einheit muss mit Loadoutklasse übereinstimmen
* B_ bzw. O_ muss aus Loadoutklasse gekürzt werden, d.h. `Medic_F` statt `B_Medic_F`
:::

::: grad-tip 2)
* Weste/Rucksack überfüllt?
* Keine Vanilla NATO/CSAT Fraktion benutzt beim Setzen?
:::

### … soll nicht greifen
::: grad-tip 1)
Im CO_Template 
* in `USER/loadouts.hpp` darf keine Faction eingetragen sein
:::

### Nackte Einheiten
::: grad-danger ARMA-Bug - Kein GRAD-Loadout Problem
Nackte Einheiten entstehen beim Ownerwechsel von Zeusclient auf Dedicated Server/Headless. Eine Möglichkeit, das Problem effektiv zu beheben ist ein Scriptschnipsel, der die Einheiten sofort nach dem Spawn verschiebt und das Loadout dort ggf. neu setzt:
:::
In die ServerInit.sqf:
```
["GRAD_missionControl_setServerAsOwner", {
    params ["_group"];

    //make unit editable for all zeus
    if([_group] isEqualTypeParams [grpNull])then{
        {
            _x addCuratorEditableObjects [units _group, true];
        } forEach (entities "moduleCurator_F");
    };


    // change owner to server
    _group setGroupOwner 2;


    // reapply loadiout if necessary
   	[{
   		params ["_group"];

        // setunitloadout class as a fallback, if unit is naked
    	{
    		if ((uniform _x) isEqualTo "") then {
    			_x setUnitLoadout (typeOf _x);
    		};
    	} forEach units _group;
    }, [_group], 3] call CBA_fnc_waitAndExecute;
   
}] call CBA_fnc_addEventHandler;
```

In die InitPlayerLocal.sqf:
```
{

  
    _x addEventHandler ["CuratorGroupPlaced", {
        params ["", "_group"];

        // you can add code which will be executed on every group (_group)

        ["GRAD_missionControl_setServerAsOwner", [_group]] call CBA_fnc_serverEvent;
    }];

    _x addEventHandler ["CuratorObjectPlaced", {
        params ["", "_object"];

        // you can add code which will be executed on every unit (_object)

        if (_object isKindOf "CAManBase") then {
            if (count units _object == 1) then {
                ["GRAD_missionControl_setServerAsOwner", [group _object]] call CBA_fnc_serverEvent;
            };
        } else {
            if (count crew _object > 1) then {
                ["GRAD_missionControl_setServerAsOwner", [group (crew _object select 0)]] call CBA_fnc_serverEvent;
            };
        };
    }];
} forEach allCurators;
```

## Respawn
### … greift nicht
::: grad-tip 1)
* Respawn Marker alle vorhanden?
:::
### … soll nicht greifen
::: grad-tip 1)
* Respawn Marker alle vorhanden?
:::

## Medicsettings
* siehe CBA Settings

## CBA Settings
* CO_Template bringt alle nötigen Settings mit inklusive Advanced Medical
* Stimmen die CBA Settings nicht, wurde das Template evtl. falsch gemerged. 
* Die müssen – sofern die Mission nicht im Template erstellt wurde – manuell im CO Template gespeichert und in der neuen Missionsdatei geladen werden (im Addon Settings Menü in 3DEN)

## Ganz generell
::: grad-warn Testen bleibt das A und O
Wer seine Mission nicht auf dem Dedicated Server (!) testet, der hat auch keine Chance Probleme rechtzeitig zu entdecken.
:::