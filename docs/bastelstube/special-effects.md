# 🔥 Special Effects

## ☁️ Rauchpartikel-Emitter.  
::: warning
Effekt ist lokal. Funktion muss also auf allen Clients ausgeführt werden.
:::

### Syntax
```sqf
[
    position,  
    timeout,  
    effectSize,  
    expansion,  
    colorRed,  
    colorGreen,  
    colorBlue,  
    colorAlpha,  
    particleSize,  
    particleDensity,  
    particleLifetime,  
    particleSpeed,  
    particleLifting,  
    windEffect  
] call GRAD_fnc_createSmoke;
```

### Beispiel
`[getpos player,0,1.5] call GRAD_fnc_createSmoke`

`[getpos player,0,1.5] remoteExec ["GRAD_fnc_createSmoke"];`

### Funktion
```sqf
params [
    "_smokePos",
    ["_timeOut",0],
    ["_effectSize",1],
    ["_expansion",1],
    ["_colorRed",0.5],
    ["_colorGreen",0.5],
    ["_colorBlue",0.5],
    ["_colorAlpha",0.5],
    ["_particleSize",1],
    ["_particleDensity",10],
    ["_particleLifeTime",50],
    ["_particleSpeed",1],
    ["_particleLifting",1],
    ["_windEffect",1]
];


if (_smokePos isEqualType objNull) then {_smokePos = getPos _smokePos};
private _emitter = "#particlesource" createVehicleLocal _smokePos;

_emitter setParticleParams [
    ["\A3\data_f\ParticleEffects\Universal\Universal_02",8,0,40,1],
    "",
    "billboard",
    1,
    _particleLifeTime,
    [0,0,0],
    [0,0,2*_particleSpeed],
    0,
    0.05,
    0.04*_particleLifting,
    0.05*_windEffect,
    [1 *_particleSize + 1,1.8 * _particleSize + 15],

	[
        [0.7*_colorRed,0.7*_colorGreen,0.7*_colorBlue,0.7*_colorAlpha],
        [0.7*_colorRed,0.7*_colorGreen,0.7*_colorBlue,0.6*_colorAlpha],
        [0.7*_colorRed,0.7*_colorGreen,0.7*_colorBlue,0.45*_colorAlpha],
		[0.84*_colorRed,0.84*_colorGreen,0.84*_colorBlue,0.28*_colorAlpha],
        [0.84*_colorRed,0.84*_colorGreen,0.84*_colorBlue,0.16*_colorAlpha],
        [0.84*_colorRed,0.84*_colorGreen,0.84*_colorBlue,0.09*_colorAlpha],
		[0.84*_colorRed,0.84*_colorGreen,0.84*_colorBlue,0.06*_colorAlpha],
        [1*_colorRed,1*_colorGreen,1*_colorBlue,0.02*_colorAlpha],
        [1*_colorRed,1*_colorGreen,1*_colorBlue,0*_colorAlpha]
    ],

	[1,0.55,0.35],
    0.1,
    0.08*_expansion,
    "",
    "",
    ""
];

_emitter setParticleRandom [_particleLifeTime/2, [0.5*_effectSize,0.5*_effectSize,0.2*_effectSize], [0.3,0.3,0.5], 1, 0, [0,0,0,0.06], 0, 0];
_emitter setDropInterval (1/_particleDensity);

if (_timeOut > 0) then {[{deleteVehicle _this}, _emitter, _timeOut] call CBA_fnc_waitAndExecute};
```