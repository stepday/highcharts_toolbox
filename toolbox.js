/**
* Highcharts toolbox plugin
* Date:2014-06-13
* Author: stepday
* WebSite: http://www.stepday.com
*
*/
(function (f) {
    var A = f.Chart,
    t = f.addEvent,
    B = f.removeEvent,
    l = f.createElement,
    o = f.discardElement,
    v = f.css,
    k = f.merge,
    r = f.each,
    p = f.extend,
    D = Math.max,
    j = document,
    C = window,
    E = f.isTouchDevice,
    F = f.Renderer.prototype.symbols,
    s = f.getOptions(),
    y;

    s.navigation = {
        buttonOptions: {
            symbolFill: "#E0E0E0",
            symbolSize: 14,
            symbolStroke: "#666",
            symbolStrokeWidth: 3,
            symbolX: 12.5,
            symbolY: 10.5,
            y: 25,
            align: "right",
            buttonSpacing: 3,
            height: 22,
            theme: {
                fill: "white",
                stroke: "none"
            },
            verticalAlign: "top",
            width: 34
        }
    };
    p(A.prototype, {
        //Add toolbox buttons or icons
        addButton: function (b) {
            var a = this,
            d = a.renderer,
            c = k(a.options.navigation.buttonOptions, b),
            j = c.onclick,
            h = c.menuItems,
            g,
            e,
            l = {
                stroke: c.symbolStroke,
                fill: c.symbolFill
            },
            q = c.symbolSize || 12;
            if (!a.btnCount) a.btnCount = 0;
            if (c.enabled !== !1) {
                var m = c.theme,
                n = m.states,
                o = n && n.hover,
                n = n && n.select,
                i;
                delete m.states;
                j ? i = function () {
                    j.apply(a, arguments)
                } : h && (i = function () {
                    a.contextMenu(e.menuClassName, h, e.translateX, e.translateY, e.width, e.height, e);
                    e.setState(2)
                });
                c.text && c.symbol ? m.paddingLeft = f.pick(m.paddingLeft, 25) : c.text || p(m, {
                    width: c.width,
                    height: c.height,
                    padding: 0
                });
                e = d.button(c.text, 0, 0, i, m, o, n).attr({
                    title: b.title,
                    "stroke-linecap": "round"
                });                
                e.menuClassName = b.menuClassName || "highcharts-menu-" + a.btnCount++;
                c.symbol && (g = d.symbol(c.symbol, c.symbolX - q / 2, c.symbolY - q / 2, q, q).attr(p(l, {
                    "stroke-width": c.symbolStrokeWidth || 1,
                    zIndex: 1000
                })).add(e));
                e.add().align(p(c, {
                    width: e.width,
                    x: f.pick(c.x, y)
                }), !0, "spacingBox");
                y += (e.width + c.buttonSpacing) * (c.align === "right" ? -1 : 1);
            }
        }
    });
    A.prototype.callbacks.push(function (b) {
        // get toolbox node config info
        var a, d = b.options.toolbox,
        c = d.buttons;
        y = 0;
        if (d.enabled !== !1) {
            for (a in c) b.addButton(c[a]);
        }
    })
})(Highcharts);
