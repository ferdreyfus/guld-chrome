'use strict';

const clover_img = `
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="9.94203in" height="13.8585in" version="1.0" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 923 1287"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
    <style type="text/css">
    <![CDATA[
        .fil0 {fill:#8CC63F}
    ]]>
    </style>
    </defs>
    <g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"/>
    <g id="_2384774309936">
    <g>
        <g>
        <path class="fil0" d="M163 222c-33,-32 -87,-34 -118,0 -28,30 -45,70 -45,114 0,48 21,94 57,126 -36,32 -57,77 -57,126 0,43 17,84 45,113 31,34 85,33 118,0l239 -239 -239 -240z"/>
        </g>
    </g>
    <g>
        <g>
        <path class="fil0" d="M701 45c-30,-28 -70,-45 -113,-45 -49,0 -94,21 -126,57 -32,-36 -78,-57 -126,-57 -44,0 -84,17 -114,45 -34,31 -32,85 0,118l240 239 239 -239c33,-33 34,-87 0,-118z"/>
        </g>
    </g>
    <g>
        <g>
        <path class="fil0" d="M866 462c37,-32 57,-78 57,-126 0,-44 -17,-84 -44,-114 -32,-34 -86,-32 -119,0l-239 240 239 239c33,33 87,34 119,0 27,-29 44,-70 44,-113 0,-49 -20,-94 -57,-126z"/>
        </g>
    </g>
    <g>
        <g>
        <path class="fil0" d="M701 760l-239 -239 -240 239c-32,33 -34,87 0,119 30,27 70,44 114,44 48,0 94,-20 126,-57 7,8 14,15 23,22 59,99 37,252 -50,325 -18,15 -20,41 -6,59 9,10 21,15 33,15 9,0 19,-3 27,-10 96,-80 134,-229 101,-354 43,0 82,-17 112,-45 33,-31 32,-85 -1,-118z"/>
        </g>
    </g>
    </g>
    </g>
    </svg>`;

const loading_template = `
    <div id="leprechaun" class="row text-center">
        <div id="hat"></div>
        <div id="eyes"></div>
        <div id="head"></div>
    </div>
    <div id="leprechaun_loading" class="row text-center">
        <div id="clover1" class="clover">` + clover_img + `</div>
        <div id="clover2" class="clover">` + clover_img + `</div>
        <div id="clover3" class="clover">` + clover_img + `</div>
        <div id="clover4" class="clover">` + clover_img + `</div>
        <div id="clover5" class="clover">` + clover_img + `</div>
        <div id="clover6" class="clover">` + clover_img + `</div>
        <div id="clover7" class="clover">` + clover_img + `</div>
    </div>
    <div class="row text-center">
        LOADING
    </div>
`;

function routes(to, next) {
    var wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = loading_template;

    if (to == "generate") {
        next(function (err) {
            loadGenerate(err);
        });
    } else if (to == "decrypt") {
        next(function (err, key, passphrase) {
            decryptKey(err, key, passphrase);
        });
    } else if (to == "github") {
        next(function (err, key, passphrase) {
            loadGithub(err, key, passphrase);
        });
    } else if (to == "gamelist") {
        next(function (err) {
            loadGameList(err);
        });
    } else {
        next(function (err) {
            loadLogin(err);
        });
    }
}