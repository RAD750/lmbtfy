$(document).ready(function() {
    var a = $("#search-input"),
        b = $("#url-result"),
        c = $("#cursor"),
        e = $(".preview-search-link");
    b.attr("value", window.location);
    b.mouseup(function() { this.select() });
    b.focus(function() { this.select() });

    function f(g) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(g + "=");
            if (c_start != -1) {
                c_start = c_start + g.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) { c_end = document.cookie.length }
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }
    if (window.location.search == "") {
        b.attr("value", window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search);
        $("#search-form").submit(function(g) {
            g.preventDefault();
            g.stopPropagation();
            window.location = b.attr("value");
            return false
        });
        a.keyup(function(h) {
            var g = $("#search-input").val();
            $(this).attr("value", $(this).val());
            b.attr("value", window.location.protocol + "//" + window.location.host + window.location.pathname + "?q=" + encodeURIComponent(g));
            e.attr("href", window.location.protocol + "//" + window.location.host + window.location.pathname + "?q=" + encodeURIComponent(g))
        })
    } else {
        var d = decodeURIComponent(window.location.search);
        if (d.substr(0, 3) == "?q=") {
            d = d.substr(3);
            d = d.replace(/(\S)\+(\S)/g, "$1 $2")
        }
        if (d.length > 0) {
            c.show();
            c.attr("src", "img/cursor-default.png");
            b.text(window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search);
            b.attr("href", window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search);
            if ($("body").width() > 650) {
                c.animate({ top: "20px", left: "400px" }, 2250);
                setTimeout(function() { c.attr("src", "img/cursor-text.png") }, 1500);
                a.delay(2250).typetype(d, {
                    callback: function() {
                        c.animate({ top: "10px", left: "600px" }, 1000);
                        setTimeout(function() { $("#search-submit").addClass("hovered") }, 800);
                        setTimeout(function() { c.attr("src", "img/cursor-pointer.png") }, 800);
                        setTimeout(function() {
                            $("#search-submit").trigger("click");
                            $("#search-submit").addClass("active")
                        }, 1100)
                    }
                })
            } else {
                if ($("body").width() <= 650) {
                    c.animate({ top: "16px", left: "200px" }, 1700);
                    setTimeout(function() { c.attr("src", "img/cursor-text.png") }, 1100);
                    a.delay(2000).typetype(d, {
                        callback: function() {
                            c.animate({ top: "10px", left: "260px" }, 800);
                            setTimeout(function() { $("#search-submit").addClass("hovered") }, 320);
                            setTimeout(function() { c.attr("src", "img/cursor-pointer.png") }, 320);
                            setTimeout(function() { $("#search-submit").trigger("click") }, 1000)
                        }
                    })
                }
            }
        }
    }
    $("#search-form").click(function() { $("#search-input").focus() });
    $("#shorten-url-result").click(function(i) {
        i.preventDefault();
        i.stopPropagation();
        var h = "https://is.gd/create.php?format=json&url=" + encodeURIComponent(b.attr("value")),
            g;
        if (!g) {
            $.getJSON(h, function(j) {
                g = j.shorturl;
                g = g.replace("http:", "https:");
                b.attr("value", g)
            })
        } else { b.attr("value", g) }
    })
});

function findImage() {
    let backdrops = [{
            filename: "jake-weirick-xMxcwihpUWM-unsplash.jpg",
            authorName: "Jake Weirick",
            attrURL: "https://unsplash.com/@weirick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "jack-b-5zQtmZDH7tY-unsplash.jpg",
            authorName: "Jack B",
            attrURL: "https://unsplash.com/@nervum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "huper-by-joshua-earle-MhP83Hhq6Ac-unsplash.jpg",
            authorName: "Joshua Earle",
            attrURL: "https://unsplash.com/@huper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "daniel-mirlea-ZfKuV0Nq75w-unsplash.jpg",
            authorName: "Daniel Mirlea",
            attrURL: "https://unsplash.com/@danielmirlea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "piyush-dubey-uM_sqKKFk60-unsplash.jpg",
            authorName: "Piyush Dubey",
            attrURL: "https://unsplash.com/@piyushh_dubeyy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "roman-kaiuk-6rHLEOHeIS8-unsplash.jpg",
            authorName: "Roman Kaiuk",
            attrURL: "https://unsplash.com/@roma_kaiuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "weston-mackinnon-KMAqr5CE-X8-unsplash.jpg",
            authorName: "Weston MacKinnon",
            attrURL: "https://unsplash.com/@betteratf8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "wolfgang-hasselmann-T6FdeJL-w88-unsplash.jpg",
            authorName: "Wolfgang Hasselmann",
            attrURL: "https://unsplash.com/@wolfgang_hasselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "wolfgang-hasselmann-pKbYekVi_o0-unsplash.jpg",
            authorName: "Wolfgang Hasselmann",
            attrURL: "https://unsplash.com/@wolfgang_hasselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "serge-le-strat-PU2tTsTDMuE-unsplash.jpg",
            authorName: "Serge le Strat",
            attrURL: "https://unsplash.com/@slestrat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "ivan-bandura-zlNmAaRPh58-unsplash.jpg",
            authorName: "Ivan Bandura",
            attrURL: "https://unsplash.com/@unstable_affliction?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "huper-by-joshua-earle-S-jFWWQ4-ac-unsplash.jpg",
            authorName: "Joshua Earle",
            attrURL: "https://unsplash.com/@huper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "taylor-smith-uMQ6Tf9N6PQ-unsplash.jpg",
            authorName: "Taylor Smith",
            attrURL: "https://unsplash.com/@taylor_smith?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "laura-ockel-cAG-JuV68E8-unsplash.jpg",
            authorName: "Laura Ockel",
            attrURL: "https://unsplash.com/@viazavier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "ant-rozetsky-SLIFI67jv5k-unsplash.jpg",
            authorName: "Ant Rozetsky",
            attrURL: "https://unsplash.com/@rozetsky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "alain-pham-P_qvsF7Yodw-unsplash.jpg",
            authorName: "Alain Pham",
            attrURL: "https://unsplash.com/@alain_pham?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "ant-rozetsky-io7dX_1EFCg-unsplash.jpg",
            authorName: "Ant Rozetsky",
            attrURL: "https://unsplash.com/@rozetsky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "david-clode-WC43RS6ZbYI-unsplash.jpg",
            authorName: "David Clode",
            attrURL: "https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "lynda-hinton-yKsGRdGQikU-unsplash.jpg",
            authorName: "Lynda Hinton",
            attrURL: "https://unsplash.com/@lyndaann1975?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "huper-by-joshua-earle-oI6EJabIYYQ-unsplash.jpg",
            authorName: "Joshua Earle",
            attrURL: "https://unsplash.com/@huper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "birger-strahl-ZmJS7UF5cy0-unsplash.jpg",
            authorName: "Birger Strahl",
            attrURL: "https://unsplash.com/@bist31?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "jan-kronies-Ao1MeLnG_kY-unsplash.jpg",
            authorName: "Jan Kronies",
            attrURL: "https://unsplash.com/@jankronies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "wolfgang-hasselmann-86xDAQUtPHI-unsplash.jpg",
            authorName: "Wolfgang Hasselmann",
            attrURL: "https://unsplash.com/@wolfgang_hasselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "eberhard-grossgasteiger-NCNzK2vVnpI-unsplash.jpg",
            authorName: "Eberhard Grossgaisteiger",
            attrURL: "https://unsplash.com/@eberhardgross?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "lei-jiang-ffH10s4BPTI-unsplash.jpg",
            authorName: "Lei Jiang",
            attrURL: "https://unsplash.com/@lj333?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "yerko-lucic-vgelIVXsYrY-unsplash.jpg",
            authorName: "Yerko Lucic",
            attrURL: "https://unsplash.com/@ylucic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "kukuh-himawan-samudro-P3BBKLXzR-Q-unsplash.jpg",
            authorName: "Kukuh Himawan Samuduro",
            attrURL: "https://unsplash.com/@kukuhhimawans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "sandra-ahn-mode-8UHy79yNrCU-unsplash.jpg",
            authorName: "Sandra Ahn Mode",
            attrURL: "https://unsplash.com/@sandramode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "daniele-buso-bUEIFf-BxCk-unsplash.jpg",
            authorName: "Daniele Buso",
            attrURL: "https://unsplash.com/@danielebuso?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "ashley-knedler-CRjCvUBXmvg-unsplash.jpg",
            authorName: "Ashley Knedler",
            attrURL: "https://unsplash.com/@ashkned?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            filename: "michiel-leunens-4SQFJb-pTJw-unsplash.jpg",
            authorName: "Michiel Leunens",
            attrURL: "https://unsplash.com/@leunesmedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        }
    ];
    //var c = Math.floor((Math.random() * backdrops.length));

    var today = new Date();
    var c = today.getDate() - 1;
    var a = "body { background-image: url('/img/backdrops/" + backdrops[c].filename + "'); background-repeat: no-repeat; background-size: cover!important; }";
    var b = 'Backdrop photo by <a href="' + backdrops[c].attrURL + '">' + backdrops[c].authorName + "</a> on Unsplash.";
    console.log(c + " / " + backdrops.length)
    document.getElementById("js-backdrop").innerHTML = a;
    document.getElementById("js-unsplash-attrib").innerHTML = b
};