class myPlayerClass {
    constructor(e, r, l) {
        this.playerData = e,
        this.langs = r,
        this.cyberlockers = l,
        this.processFinalPlayer()
    }
    getLangConfig(e, r = null) {
        return this.getObjectConfig(this.langs, e, r)
    }
    getCyberlockersConfig(e, r = null) {
        return this.getObjectConfig(this.cyberlockers, e, r)
    }
    getObjectConfig(e, r, l = null) {
        let a = e.find(e => e.name == r);
        if (a || (a = e.find(e => !0 === e.
    default)), !a) throw Error("Bad Config");
        return l ? a[l]:
        a
    }
    orderLangs() {
        this.langs = this.langs.sort(this.orderByPriorityProperty)
    }
    orderByPriorityProperty(e, r) {
        let l = e.priority,
        a = r.priority;
        return l == a ? 0 : l > a ? 1 : -1
    }
    removerDisplayFalseCyberlockers(e) {
        return e.filter(e => !0 === this.getCyberlockersConfig(e.cyberlocker, "display"))
    }
    groupByVisibleLangs(e) {
        let r = {};
        return this.langs.forEach(function(e) { ! 0 === e.display && (r[e.name] = [])
        }),
        e.forEach(function(e) {
            r[e.language] && r[e.language].push(e)
        }),
        r
    }
    orderPlayer(e) {
        for (let r in  e) {
            if (0 === e[r].length) {
                delete e[r];
                continue
            }
            e[r] = e[r].sort((e, r) => {
                let l = this.getCyberlockersConfig(e.cyberlocker, "priority"),
                a = this.getCyberlockersConfig(r.cyberlocker, "priority");
                return l == a ? 0 : l > a ? 1 : -1
            })
        }
        return e
    }
    processFinalPlayer() {
        let e;
        this.orderLangs(),
        e = this.removerDisplayFalseCyberlockers(this.playerData),
        e = this.groupByVisibleLangs(e),
        e = this.orderPlayer(e),
        this.finalPlayer = e
    }
    getFinalPlayer() {
        return this.finalPlayer
    }
}
function getQueryStringParameter(e) {
    return new URLSearchParams(window.location.search).get(e)
}
var myPlayer = new myPlayerClass(player, langs, cyberlockers),
playerData = myPlayer.finalPlayer,
player_base_url = "";
$(document).ready(function() { ! function e(r) {
        Object.keys(r).forEach(e => {
            let l = myPlayer.getLangConfig(e, "icon");
            $(".langclass").append('<li id="li-' + e + '" onclick="SelLang(this, \'' + e + '\');"><img src="https://plantillasplus.com/Imagenes/player/' + l + '"></li>'),
            $(".cyberlockerClass").append('<div class="OD OD_' + e + '"></div>'),
            r[e].forEach(r => {
                let l = myPlayer.getCyberlockersConfig(r.cyberlocker, "icon");
                $(".OD_" + e).append("<li onclick=\"go_to_player('" + r.link + '\')"><img src="https://plantillasplus.com/Imagenes/player/' + l + '"><span>' + r.cyberlocker + "</span><p>Audio: " + r.language + " - Calidad: " + r.quality + "</p></li>")
            })
        })
    } (playerData),
    $(".langclass li:first").addClass("SLD_A"),
    $(".cyberlockerClass div:first").addClass("REactiv"),
    function e() {
        let r = getQueryStringParameter("selectedLang");
        if (["Ingles", "Espa\xf1ol-Latino", "Espa\xf1ol", "Japones"].includes(r)) {
            var l;
            l = r,
            $(".SelectLangDisp li").removeClass("SLD_A"),
            $("#li-" + l).addClass("SLD_A"),
            $(".cyberlockerClass div").removeClass("REactiv"),
            $(".cyberlockerClass .OD_" + l).addClass("REactiv")
        }
    } ()
});
