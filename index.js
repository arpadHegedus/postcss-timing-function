/**
 * POSTCSS TIMING FUNCTION
 * A postcss plugin to add other common named timing functions without having to remember bezier values
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let postcss = require('postcss');

// export plugin
module.exports = postcss.plugin('postcss-timing-function', options => {
    let transitions = {
        'ease-in-quad':         "cubic-bezier(.55, .08, .68, .53)",
        'ease-in-cubic':        "cubic-bezier(.55, .05, .67, .19)",
        'ease-in-quart':        "cubic-bezier(.89, .03, .68, .22)",
        'ease-in-quint':        "cubic-bezier(.75, .05, .85, .06)",
        'ease-in-sine':         "cubic-bezier(.47, .00, .74, .71)",
        'ease-in-expo':         "cubic-bezier(.95, .05, .79, .03)",
        'ease-in-circ':         "cubic-bezier(.60, .04, .98, .33)",
        'ease-in-back':         "cubic-bezier(.60, -0.28, .73, .04)",
        'ease-out-quad':        "cubic-bezier(.25, .46, .45, .94)",
        'ease-out-cubic':       "cubic-bezier(.21, .61, .35, 1)",
        'ease-out-quart':       "cubic-bezier(.16, .84, .44, 1)",
        'ease-out-quint':       "cubic-bezier(.23, 1, .32, 1)",
        'ease-out-sine':        "cubic-bezier(.39, .57, .56, 1)",
        'ease-out-expo':        "cubic-bezier(.19, 1, .22, 1)",
        'ease-out-circ':        "cubic-bezier(.07, .82, .16, 1)",
        'ease-out-back':        "cubic-bezier(.17, .88, .32, 1.27)",
        'ease-in-out-quad':     "cubic-bezier(.45, .03, .51, .95)",
        'ease-in-out-cubic':    "cubic-bezier(.64, .04, .35, 1)",
        'ease-in-out-quart':    "cubic-bezier(.77, 0, .17, 1)",
        'ease-in-out-quint':    "cubic-bezier(.86, 0, .07, 1)",
        'ease-in-out-sine':     "cubic-bezier(.44, .05, .55, .95)",
        'ease-in-out-expo':     "cubic-bezier(1, 0, 0, 1)",
        'ease-in-out-circ':     "cubic-bezier(.78, .13, .15, .86)",
        'ease-in-out-back':     "cubic-bezier(.68, -0.55, .26, 1.55)",

        'swift-out':            "cubic-bezier(.55, 0, .1, 1)",
        'bounce':               "cubic-bezier(.65, 1.95, .03, .32)"
    };
    return css => {
        css.walkDecls(/(animation|transition)(\-timing\-function)?/ig, decl => {
            for(let [name, bezier] of Object.entries(transitions)) {
                if(decl.value.indexOf(name) >= 0) {
                    decl.value = decl.value.replace(name, bezier);
                }
            }
        });
    }
});