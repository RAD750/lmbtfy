$(document).ready(function() {
    var l = $("#search-input"),
        k = $("#url-result"),
        j = $("#cursor"),
        h = $(".preview-search-link");
    k.attr("value", window.location);
    k.mouseup(function() { this.select() });
    k.focus(function() { this.select() });

    function g(a) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(a + "=");
            if (c_start != -1) {
                c_start = c_start + a.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) { c_end = document.cookie.length }
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }
    if (window.location.search == "") {
        k.attr("value", window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search);
        $("#search-form").submit(function(a) {
            a.preventDefault();
            a.stopPropagation();
            window.location = k.attr("value");
            return false
        });
        l.keyup(function(a) {
            var b = $("#search-input").val();
            $(this).attr("value", $(this).val());
            k.attr("value", window.location.protocol + "//" + window.location.host + window.location.pathname + "?q=" + encodeURIComponent(b));
            h.attr("href", window.location.protocol + "//" + window.location.host + window.location.pathname + "?q=" + encodeURIComponent(b))
        })
    } else {
        var i = decodeURIComponent(window.location.search);
        if (i.substr(0, 3) == "?q=") {
            i = i.substr(3);
            i = i.replace(/(\S)\+(\S)/g, "$1 $2")
        }
        if (i.length > 0) {
            j.show();
            j.attr("src", "img/cursor-default.png");
            k.text(window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search);
            k.attr("href", window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search);
            if ($("body").width() > 650) {
                j.animate({ top: "20px", left: "400px" }, 2250);
                setTimeout(function() { j.attr("src", "img/cursor-text.png") }, 1500);
                l.delay(2250).typetype(i, {
                    callback: function() {
                        j.animate({ top: "10px", left: "600px" }, 1000);
                        setTimeout(function() { $("#search-submit").addClass("hovered") }, 800);
                        setTimeout(function() { j.attr("src", "img/cursor-pointer.png") }, 800);
                        setTimeout(function() {
                            $("#search-submit").trigger("click");
                            $("#search-submit").addClass("active")
                        }, 1100)
                    }
                })
            } else {
                if ($("body").width() <= 650) {
                    j.animate({ top: "16px", left: "200px" }, 1700);
                    setTimeout(function() { j.attr("src", "img/cursor-text.png") }, 1100);
                    l.delay(2000).typetype(i, {
                        callback: function() {
                            j.animate({ top: "10px", left: "260px" }, 800);
                            setTimeout(function() { $("#search-submit").addClass("hovered") }, 320);
                            setTimeout(function() { j.attr("src", "img/cursor-pointer.png") }, 320);
                            setTimeout(function() { $("#search-submit").trigger("click") }, 1000)
                        }
                    })
                }
            }
        }
    }
    $("#search-form").click(function() { $("#search-input").focus() });
    $("#shorten-url-result").click(function(c) {
        c.preventDefault();
        c.stopPropagation();
        var a = "https://is.gd/create.php?format=json&url=" + encodeURIComponent(k.attr("value")),
            b;
        if (!b) {
            $.getJSON(a, function(d) {
                b = d.shorturl;
                b = b.replace("http:", "https:");
                k.attr("value", b)
            })
        } else { k.attr("value", b) }
    });
});

function findImage() {
    let backdrops = [{
            "filename": "jake-weirick-xMxcwihpUWM-unsplash.jpg",
            "authorName": "Jake Weirick",
            "attrURL": "https://unsplash.com/@weirick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "david-clode-WC43RS6ZbYI-unsplash.jpg",
            "authorName": "David Clode",
            "attrURL": "https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "lynda-hinton-yKsGRdGQikU-unsplash.jpg",
            "authorName": "Lynda Hinton",
            "attrURL": "https://unsplash.com/@lyndaann1975?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "huper-by-joshua-earle-oI6EJabIYYQ-unsplash.jpg",
            "authorName": "Joshua Earle",
            "attrURL": "https://unsplash.com/@huper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "birger-strahl-ZmJS7UF5cy0-unsplash.jpg",
            "authorName": "Birger Strahl",
            "attrURL": "https://unsplash.com/@bist31?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "jan-kronies-Ao1MeLnG_kY-unsplash.jpg",
            "authorName": "Jan Kronies",
            "attrURL": "https://unsplash.com/@jankronies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "wolfgang-hasselmann-86xDAQUtPHI-unsplash.jpg",
            "authorName": "Wolfgang Hasselmann",
            "attrURL": "https://unsplash.com/@wolfgang_hasselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "eberhard-grossgasteiger-NCNzK2vVnpI-unsplash.jpg",
            "authorName": "Eberhard Grossgaisteiger",
            "attrURL": "https://unsplash.com/@eberhardgross?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "lei-jiang-ffH10s4BPTI-unsplash.jpg",
            "authorName": "Lei Jiang",
            "attrURL": "https://unsplash.com/@lj333?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "yerko-lucic-vgelIVXsYrY-unsplash.jpg",
            "authorName": "Yerko Lucic",
            "attrURL": "https://unsplash.com/@ylucic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "kukuh-himawan-samudro-P3BBKLXzR-Q-unsplash.jpg",
            "authorName": "Kukuh Himawan Samuduro",
            "attrURL": "https://unsplash.com/@kukuhhimawans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "sandra-ahn-mode-8UHy79yNrCU-unsplash.jpg",
            "authorName": "Sandra Ahn Mode",
            "attrURL": "https://unsplash.com/@sandramode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "daniele-buso-bUEIFf-BxCk-unsplash.jpg",
            "authorName": "Daniele Buso",
            "attrURL": "https://unsplash.com/@danielebuso?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "ashley-knedler-CRjCvUBXmvg-unsplash.jpg",
            "authorName": "Ashley Knedler",
            "attrURL": "https://unsplash.com/@ashkned?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            "filename": "michiel-leunens-4SQFJb-pTJw-unsplash.jpg",
            "authorName": "Michiel Leunens",
            "attrURL": "https://unsplash.com/@leunesmedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        }




    ];

    var imgNum = Math.floor((Math.random() * backdrops.length));
    var css = "body { background-image: url('/img/backdrops/" + backdrops[imgNum].filename + "'); background-repeat: no-repeat; background-size: 100vw; }";
    var attrib = "Backdrop photo by <a href=\"" + backdrops[imgNum].attrURL + "\">" + backdrops[imgNum].authorName + "</a> on Unsplash.";
    document.getElementById('js-backdrop').innerHTML = css;
    document.getElementById('js-unsplash-attrib').innerHTML = attrib;
}