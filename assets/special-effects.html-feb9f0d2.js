import{_ as e,x as o,y as t,D as n}from"./framework-3f51f5be.js";const r={},a=n(`<h1 id="🔥-special-effects" tabindex="-1"><a class="header-anchor" href="#🔥-special-effects" aria-hidden="true">#</a> 🔥 Special Effects</h1><h2 id="☁️-rauchpartikel-emitter" tabindex="-1"><a class="header-anchor" href="#☁️-rauchpartikel-emitter" aria-hidden="true">#</a> ☁️ Rauchpartikel-Emitter.</h2><p>::: warning Effekt ist lokal. Funktion muss also auf allen Clients ausgeführt werden. :::</p><h3 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h3><div class="language-sqf" data-ext="sqf"><pre class="language-sqf"><code>[
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
</code></pre></div><h3 id="beispiel" tabindex="-1"><a class="header-anchor" href="#beispiel" aria-hidden="true">#</a> Beispiel</h3><p><code>[getpos player,0,1.5] call GRAD_fnc_createSmoke</code></p><p><code>[getpos player,0,1.5] remoteExec [&quot;GRAD_fnc_createSmoke&quot;];</code></p><h3 id="funktion" tabindex="-1"><a class="header-anchor" href="#funktion" aria-hidden="true">#</a> Funktion</h3><div class="language-sqf" data-ext="sqf"><pre class="language-sqf"><code>params [
    &quot;_smokePos&quot;,
    [&quot;_timeOut&quot;,0],
    [&quot;_effectSize&quot;,1],
    [&quot;_expansion&quot;,1],
    [&quot;_colorRed&quot;,0.5],
    [&quot;_colorGreen&quot;,0.5],
    [&quot;_colorBlue&quot;,0.5],
    [&quot;_colorAlpha&quot;,0.5],
    [&quot;_particleSize&quot;,1],
    [&quot;_particleDensity&quot;,10],
    [&quot;_particleLifeTime&quot;,50],
    [&quot;_particleSpeed&quot;,1],
    [&quot;_particleLifting&quot;,1],
    [&quot;_windEffect&quot;,1]
];


if (_smokePos isEqualType objNull) then {_smokePos = getPos _smokePos};
private _emitter = &quot;#particlesource&quot; createVehicleLocal _smokePos;

_emitter setParticleParams [
    [&quot;\\A3\\data_f\\ParticleEffects\\Universal\\Universal_02&quot;,8,0,40,1],
    &quot;&quot;,
    &quot;billboard&quot;,
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
    &quot;&quot;,
    &quot;&quot;,
    &quot;&quot;
];

_emitter setParticleRandom [_particleLifeTime/2, [0.5*_effectSize,0.5*_effectSize,0.2*_effectSize], [0.3,0.3,0.5], 1, 0, [0,0,0,0.06], 0, 0];
_emitter setDropInterval (1/_particleDensity);

if (_timeOut &gt; 0) then {[{deleteVehicle _this}, _emitter, _timeOut] call CBA_fnc_waitAndExecute};
</code></pre></div>`,10),l=[a];function c(i,_){return o(),t("div",null,l)}const u=e(r,[["render",c],["__file","special-effects.html.vue"]]);export{u as default};
