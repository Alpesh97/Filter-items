const toolURL = "https://wyrmwoodgaming.com/modulargamingtable";
const ksURL = "https://www.kickstarter.com/projects/wyrmwood/modular-gaming-table.json";
const tableShapes = {
    "0-3_4-maple": "M537.7 509l20.1 6.6 248.5-50.5L784 460z",
    "0-length-maple": "M663.4 546.5l184.8-.2 3.8 11.8-193.7-.2z",
    "0-top-down-maple": "M521.7 396.1l453.2.6-.3 208.7-453.7-.8z",
    "0-3_4-espressomaple": "M538.1 508.9l18.7 6.7 250.5-50.5-20.9-5z",
    "0-length-espressomaple": "M663.4 547.5l184.8-.2 3.8 12.8-193.7-.2z",
    "0-top-down-espressomaple": "M519.7 395.1l455.2.6-.3 209.7-456.7-.8z",
    "0-3_4-cherry": "M537.7 509l20.1 6.6 248.5-50.5L784 460z",
    "0-length-cherry": "M847.6 546.4l-183.4-.3-5.3 12.7 192.2-.2z",
    "0-top-down-cherry": "M975.3 393.6l-453.3.6-1.8 209.4 455.1.8z",
    "0-3_4-blackwalnut": "M803.5 465.7l-243.6 51.2-22.9-8.3 248.2-49.5z",
    "0-length-blackwalnut": "M852 559.9l-206.6-.2 6.4-12.9 197.1.5z",
    "0-top-down-blackwalnut": "M975.8 606.8l-456.2-1.2V393.7l456.2-.8z",
    "0-3_4-padauk": "M537.7 509l21.9 7 246.7-50.9-21.7-6.1z",
    "0-length-padauk": "M663.4 546.5l185.8-.2 2.8 13.8-193.7-.2z",
    "0-top-down-padauk": "M519.7 395.1l455.2-.4-.3 210.7-455.7-.8z",
    "0-3_4-wenge": "M537.2 508l22.6 8.6 246.5-51.5L784 459z",
    "0-length-wenge": "M662.4 546.5l185.8-.2 3.8 13.8-194.7-.2z",
    "0-top-down-wenge": "M519.7 395.1l456.2.6-1.3 209.7-455.7-.8z",
    "0-3_4-purpleheart": "M537.7 509l20.1 6.6 248.5-50.5L786 459z",
    "0-length-purpleheart": "M664.2 545.7l183.8.3 3.8 12.9-193.2.3z",
    "0-top-down-purpleheart": "M519.7 395.1l456.2.6-1.3 209.7-455.7-.8z",
    "1-3_4-maple": "M478 488.1l251.7-45.9 233.1 61.5-265.4 60.6z",
    "1-length-maple": "M521.5 546.4l451.1.3 12 12.6-474.4.4z",
    "1-top-down-maple": "M480.3 260.7l544.4.4-.4 482.3-544.2.5z",
    "1-3_4-espressomaple": "M476 490.2L732.7 444l231.8 62.2-264 60.2z",
    "1-length-espressomaple": "M522.5 546.4l455.4 1.8 8.9 12.1-475.6-.6z",
    "1-top-down-espressomaple": "M479.3 258.7l546.4.4-.4 485.3-546.2.5z",
    "1-3_4-cherry": "M962.2 503.6l-233-62.1-252.3 47 221.3 75.6z",
    "1-length-cherry": "M975.4 547.9l-455.4-.5-9.1 12.8 473-.4z",
    "1-top-down-cherry": "M1024.5 260.4H481.1l-.6 483.5h544.2z",
    "1-3_4-blackwalnut": "M964.6 503.5L698.9 564 477 488l252.2-46.7z",
    "1-length-blackwalnut": "M985.4 560.3l-473.7-.4 8-11.8 455.7-.2z",
    "1-top-down-blackwalnut": "M1025.2 744.2l-544.9-1.1V259.9l543.9-.8z",
    "1-3_4-padauk": "M475.5 487.4l252.7-46.5L965 503.1l-265 61.5z",
    "1-length-padauk": "M519.5 546.4l457.4.8 9.9 12.1-476.6.4z",
    "1-top-down-padauk": "M479.3 260.7l545.4-.6-.4 484.3-544.2-.5z",
    "1-3_4-wenge": "M475.8 488.5l254.1-47.2L963 503.5l-263.7 61.2z",
    "1-length-wenge": "M520.4 547l456.4-.2 10 13.5-246.6.7-229-1.3z",
    "1-top-down-wenge": "M479.3 258.7l546.4.4-.4 485.3-546.2.5z",
    "1-3_4-purpleheart": "M479.6 489.4L725.2 442 963 503.5l-257.1 61.2z",
    "1-length-purpleheart": "M514.8 546.8l455.4 1.3 11.5 12.2-475.3-.4z",
    "1-top-down-purpleheart": "M480.5 259.7l545.2-.6-.4 485.3-546.2.5z",
    "2-3_4-maple": "M529.7 320.7l200.2-25.1 169.2 32L696.8 359z",
    "2-length-maple": "",
    "2-top-down-maple": "M479.8 743.9l.3-482.8 545.4-.4-.3 484.2z",
    "2-3_4-espressomaple": "M529.7 320.7L730.1 295l175.1 32.6L696.8 359z",
    "2-length-espressomaple": "",
    "2-top-down-espressomaple": "M478.8 744.9l.3-485.8 547.4-.4-.3 487.2z",
    "2-3_4-cherry": "M900.1 327.3l-171.8-31.9-197.5 26 167.1 36.8z",
    "2-length-cherry": "",
    "2-top-down-cherry": "M1024.5 260.6l-543.6-.7v484l543.8-.2z",
    "2-3_4-blackwalnut": "M904.1 327.7l-204.3 31.1-171-38.2L730.5 295z",
    "2-length-blackwalnut": "",
    "2-top-down-blackwalnut": "M1026 744.6l-546.7-.9V259.1l545.4-.7z",
    "2-3_4-padauk": "M529.7 320.7L730.1 295l175.1 32.6-205.9 31.2z",
    "2-length-padauk": "",
    "2-top-down-padauk": "M478.8 743.9l.3-483.8 546.4-.4-.3 485.2z",
    "2-3_4-wenge": "M528.6 321.6L730.1 295l172.7 33-206 31z",
    "2-length-wenge": "",
    "2-top-down-wenge": "M478.8 744.9l.3-485.8 547.4-.4-.3 487.2z",
    "2-3_4-purpleheart": "M529.7 320.7L730.1 295l175.1 32.6L696.8 359z",
    "2-length-purpleheart": "",
    "2-top-down-purpleheart": "M478.8 744.9l.3-485.8 547.4-.4-.3 487.2z",
    "3-3_4-maple": "M796.7 379.1L451.2 302l191.5-21.7 360.8 66.2z",
    "3-length-maple": "",
    "3-top-down-maple": "M1186 744.5l-868.9-.6-.2-483.5 869.5-.8z",
    "3-3_4-espressomaple": "M796.7 379.1l-349.2-77.8 193.9-23.6 367.5 68.1z",
    "3-length-espressomaple": "",
    "3-top-down-espressomaple": "M1187 745.5l-871.9.4-.2-487.5 872.5.2z",
    "3-3_4-cherry": "M1004.2 346.3l-361.3-66.5-191.5 22 345.5 77.8z",
    "3-length-cherry": "",
    "3-top-down-cherry": "M1186.1 259.6l-868.4.5-.5 484 868.7.3z",
    "3-3_4-blackwalnut": "M797.5 379.2L449.9 301l194.8-23.1 359.8 67.8z",
    "3-length-blackwalnut": "",
    "3-top-down-blackwalnut": "M1186.8 744.4l-870.5.3.7-485.6 869.4-1z",
    "3-3_4-padauk": "M800.6 379.4l-352.2-78.8 193-21.9 366.5 67.1z",
    "3-length-padauk": "",
    "3-top-down-padauk": "M1187 745.5l-870.9-.6-.2-485.5 871.5-.8z",
    "3-3_4-wenge": "M797.7 380.1L548 325.2l-74.5-15.6-30-8.3 198.9-22.6 365.5 67.1z",
    "3-length-wenge": "",
    "3-top-down-wenge": "M1187 745.5l-870.9-.6-.2-485.5 871.5-.8z",
    "3-3_4-purpleheart": "M796.7 379.1l-349.2-77.8 193.9-22.6 366.5 66.1z",
    "3-length-purpleheart": "",
    "3-top-down-purpleheart": "M1187 745.5l-870.9-.6-.2-485.5 871.5-.8z",
    "4-3_4-maple": "M888.8 395.4L324.8 269l190.7-19.9 582.6 107.3z",
    "4-length-maple": "",
    "4-top-down-maple": "M1348.8 745.5l-1195.3.4-.3-485.7 1196.3.4-1.3 236.3z",
    "4-3_4-espressomaple": "M887.3 395.4l-568-127.7 195.5-21.5 586.4 108.6z",
    "4-length-espressomaple": "",
    "4-top-down-espressomaple": "M1349.1 746.8H147.7l.4-489.7 1201.6-.5z",
    "4-3_4-cherry": "M1100 355.7L514.2 248.4l-188.4 20.5 564.7 124.5z",
    "4-length-cherry": "",
    "4-top-down-cherry": "M1349.6 259.2l-1202.5 1.4-.2 486.3 1202-.2z",
    "4-3_4-blackwalnut": "M889.7 394.7L323 269.9l191.6-21.7 585 108.2z",
    "4-length-blackwalnut": "",
    "4-top-down-blackwalnut": "M149.9 260.9H1349v485.8H149.9z",
    "4-3_4-padauk": "M887.3 395.4L324.4 269.5l190.2-20.9L1099 355.9z",
    "4-length-padauk": "",
    "4-top-down-padauk": "M1350.7 747.9H144.6l1.3-488.2 1205.2-1z",
    "4-3_4-wenge": "M887.3 395.4L322.2 269l193.3-20.8L1101 355.8z",
    "4-length-wenge": "",
    "4-top-down-wenge": "M1351.9 748.6L147 748.3l.3-490.1 1206.6-1.1z",
    "4-3_4-purpleheart": "M887.3 395.4L322.2 269l193.3-20.8 583 107.7z",
    "4-length-purpleheart": "",
    "4-top-down-purpleheart": "M1350.7 747.6l-1202.6.1.5-488.3 1202.1.7z",
    "accessory-3_4-maple": "M1500 0H170L0 87v95l1500 345z",
    "accessory-3_4-espressomaple": "M1500 0H147L0 76v107l1500 343z",
    "accessory-3_4-cherry": "M1500 0H145L0 74v105l1500 345z",
    "accessory-3_4-blackwalnut": "M1500 1v525L0 184V80L156 1z",
    "accessory-3_4-padauk": "M1500 0H129L0 67v116l1500 341z",
    "accessory-3_4-wenge": "M1500 0H147L0 76v106l1500 345z",
    "accessory-3_4-purpleheart": "M1500 0H153L0 78v106l1500 344z",
    "accessory-3_4_cardshelf-maple": "M1500 0H273L0 141v192l1500 345z",
    "accessory-3_4_cardshelf-espressomaple": "M1500 0H260L0 132v201l1500 344z",
    "accessory-3_4_cardshelf-cherry": "M1500 0H248L0 127v200l1500 346z",
    "accessory-3_4_cardshelf-blackwalnut": "M1500 675L0 333V134L261 0h1239z",
    "accessory-3_4_cardshelf-padauk": "M1500 0H226L0 119v215l1500 339z",
    "accessory-3_4_cardshelf-wenge": "M1500 0H248L0 126v207l1500 344z",
    "accessory-3_4_cardshelf-purpleheart": "M1500 0H256L0 131v203l1500 344z",
    "accessory-3_4c-maple": "M344.1 281L1415 815l85-71V155.6L998.6 14z",
    "accessory-3_4c-espressomaple": "M344.1 282L1421 820l79-68V152.6L1001.6 10z",
    "accessory-3_4c-cherry": "M345.1 281L1418 819l82-70V153.6L999.6 10z",
    "accessory-3_4c-blackwalnut": "M345.1 281L1422 820l78-65V155.6L1004 14z",
    "accessory-3_4c-padauk": "M344.1 282L1422 821l78-66V154.6L1003.6 13z",
    "accessory-3_4c-wenge": "M344.1 282L1418 819l82-70V151.6L998.6 9z",
    "accessory-3_4c-purpleheart": "M345.1 282L1416 817l84-69V152.6L1002.6 12z",
    "accessory-acrylic-maple": "M1141.5 678.6L1415 815l85-71V421.5zM1146.4 88.6L1500 189.4v-33.8L998.6 14 344.1 281l200.2 99.8z",
    "accessory-acrylic-espressomaple": "M1146.4 88.6L1500 189.4v-36.8L1001.6 10 344.1 282l199 99.4zM1140.1 679.6L1421 820l79-68V421.5z",
    "accessory-acrylic-cherry": "M1140.1 679.6L1418 819l82-70V421.5zM1146.4 88.6L1500 189.4v-35.8L999.6 10 345.1 281l199.2 99.9z",
    "accessory-acrylic-blackwalnut": "M1146.4 88.6L1500 189.4v-33.8L1004 14 345.1 281l199.3 99.8zM1140.7 679.2L1422 820l78-65V421.5z",
    "accessory-acrylic-padauk": "M1146.4 88.6L1500 189.4v-34.8L1003.6 13 344.1 282 543 381.5zM1139.8 679.9L1422 821l78-66V421.5z",
    "accessory-acrylic-wenge": "M1146.4 88.6L1500 189.4v-37.8L998.6 9 344.1 282 543 381.5zM1139.8 679.9L1418 819l82-70V421.5z",
    "accessory-acrylic-purpleheart": "M1146.4 88.6L1500 189.4v-36.8L1002.6 12 345.1 282l198.5 99.2zM1140.5 679.4L1416 817l84-69V421.5z",
}
const acc_images = {
    "smallcup": [
        ["3_4", "3_4", "3_4", "video"],
        ["3_4_empty", "3_4_cola", "3_4_wine", "none"]
    ],
    "largecup": [
        ["3_4", "3_4", "video"],
        ["3_4_empty", "3_4_glass", "none"]
    ],
    "component": [
        ["3_4", "3_4", "video"],
        ["3_4_empty", "3_4_dice", "none"]
    ],
    "modular": [
        ["3_4", "3_4", "video"],
        ["3_4_empty", "3_4_coins", "none"]
    ],
    "cardshelf": [
        ["3_4_cardshelf", "3_4_cardshelf", "video"],
        ["3_4_empty", "3_4_cards", "none"]
    ],
    "power": [
        ["3_4", "3_4", "3_4", "video"],
        ["3_4_empty", "3_4_wireless", "3_4_wired", "none"]
    ],
    "desk": [
        ["3_4c", "3_4c", "3_4c", "video"],
        ["empty", "life", "laptop", "none"]
    ],
    "deck": [
        ["3_4c", "3_4c", "video"],
        ["empty", "life", "none"]
    ],
    "screen": [
        ["3_4c"],
        ["empty"]
    ],
    "block": [
        ["close_topper", "wide", "video"],
        ["close", "wide_topper", "none"]
    ],
    "grid": [
        ["3_4c", "3_4c", "3_4c", "video"],
        ["hex_empty", "square_empty", "square_life", "none"]
    ],
    "acrylic": [
        ["3_4c", "3_4c", "video"],
        ["empty", "life", "none"]
    ],
    "felt": [
        ["3_4", "top-down-empty", "top-down-gaming"],
        ["none", "none", "top-down-gameoverlay"]
    ]
}
var getParams = function(url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}
var toUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: "0",
    maximumFractionDigits: "2"
});

function loadShare() {
    var params = getParams(window.location.href);
    var shareStr = (params["share"]) ? atob(params["share"]) : "3,0,0,0";
    var selections = shareStr.split(",");
    if (selections[0] == "-1") {
        $(".dimensions:eq(2)").click();
        $(".wood_type:eq(0)").click();
        $(".fabric_type:eq(0)").click();
        $(".topper_wood_type:eq(0)").click();
    } else {
        $(".dimensions:eq(" + selections[0] + ")").click();
        $(".wood_type:eq(" + selections[1] + ")").click();
        $(".fabric_type:eq(" + selections[2] + ")").click();
        $(".topper_wood_type:eq(" + selections[3] + ")").click();
    }
    $(".accessories:eq(1)").click();
    $(".accessories:eq(0)").click();
    if (selections.length > 4) {
        for (var i = 4; i < selections.length; i++) {
            var x = selections[i].split(".");
            var gI = x[0];
            var aI = x[1];
            var q = x[2];
            $(".desktop .acc_group:eq(" + gI + ")").find(".accessories:eq(" + aI + ")").find(".quantity").val(q);
            $(".mobile .acc_group:eq(" + gI + ")").find(".accessories:eq(" + aI + ")").find(".quantity").val(q);
            if (i == 4) {
                $(".desktop .acc_group:eq(" + gI + ")").find(".accessories:eq(" + aI + ")").click();
            }
        }
        $(".acc_group").each(function() {
            var rTotal = 0;
            var aG = $(this);
            $(this).find(".quantity").each(function() {
                rTotal += +$(this).val();
                (rTotal > 0) ? aG.find(".accAmount").html('<span class="times"></span><span class="count">' + rTotal + '</span>'): aG.find(".accAmount").html("");
            });
        });
    }
}

function saveShare() {
    var finalString = "";
    finalString += $(".dimensions").index($(".dimensions.active")) + ",";
    finalString += $(".wood_type").index($(".wood_type.active")) + ",";
    finalString += $(".fabric_type ").index($(".fabric_type.active")) + ",";
    finalString += $(".topper_wood_type").index($(".topper_wood_type.active"));
    $(".desktop .acc_group").each(function(gIndex) {
        $(this).find(".accessories").each(function(aIndex) {
            var x = $(this).find(".quantity").val();
            if (+x > 0) {
                var y = "" + gIndex + "." + aIndex + "." + x;
                finalString += "," + y;
            }
        });
    });
    finalString = btoa(finalString);
    return finalString;
}

function updatePricing() {
    var priceTot = 0;
    var woodPrice = 0;
    var fabPrice = 0;
    var topPrice = 0;
    var sizeIndex = $(".desktop .dimensions").index($(".desktop .dimensions.active"));
    var woodList = $(".desktop .wood_type.active").attr("data-price").split(",");
    var fabList = $(".desktop .fabric_type.active").attr("data-price").split(",");
    var topList = $(".desktop .topper_wood_type.active").attr("data-price").split(",");
    if (!$(".no_table").hasClass("active")) {
        woodPrice = parseInt(woodList[sizeIndex]);
        fabPrice = parseInt(fabList[sizeIndex]);
        topPrice = parseInt(topList[sizeIndex]);
        priceTot = +woodPrice + +fabPrice + +topPrice
        $(".table_select_cost").removeClass("showme");
    } else {
        $(".table_select_cost").addClass("showme");
    }
    $(".desktop .dimensions").each(function() {
        var myIndex = $(".desktop .dimensions").index($(this));
        var tempDiff = (parseInt(woodList[myIndex]) + parseInt(fabList[myIndex]) + parseInt(topList[myIndex])) - priceTot;
        var plusMin = (0 <= tempDiff) ? "+ " : "- ";
        tempDiff = toUSD.format(Math.abs(tempDiff));
        $(this).find(".table_select_cost").text(plusMin + tempDiff);
        $(".mobile .dimensions").eq($(".desktop .dimensions").index($(this))).find(".table_select_cost").text(plusMin + tempDiff);
    });
    $(".desktop .wood_type").each(function() {
        var tempDiff = $(this).attr("data-price").split(",")[sizeIndex] - woodPrice;
        var plusMin = (0 <= tempDiff) ? "+ " : "- ";
        tempDiff = toUSD.format(Math.abs(tempDiff));
        $(this).find(".sample_price").text(plusMin + tempDiff);
        $(".mobile .wood_type").eq($(".desktop .wood_type").index($(this))).find(".sample_price").text(plusMin + tempDiff);
    });
    $(".desktop .fabric_type").each(function() {
        var tempDiff = $(this).attr("data-price").split(",")[sizeIndex] - fabPrice;
        var plusMin = (0 <= tempDiff) ? "+ " : "- ";
        tempDiff = toUSD.format(Math.abs(tempDiff));
        $(this).find(".sample_price").text(plusMin + tempDiff);
        $(".mobile .fabric_type").eq($(".desktop .fabric_type").index($(this))).find(".sample_price").text(plusMin + tempDiff);
    });
    $(".desktop .topper_wood_type").each(function() {
        var tempDiff = $(this).attr("data-price").split(",")[sizeIndex] - topPrice;
        var plusMin = (0 <= tempDiff) ? "+ " : "- ";
        tempDiff = toUSD.format(Math.abs(tempDiff));
        $(this).find(".sample_price").text(plusMin + tempDiff);
        $(".mobile .topper_wood_type").eq($(".desktop .topper_wood_type").index($(this))).find(".sample_price").text(plusMin + tempDiff);
    });
    var accTotal = 0;
    $(".desktop .acc_group").each(function() {
        var priceInfo = $(this).attr("data-price").split(",");
        if ($(this).attr("data-acc") == "felt") {
            var feltPrice = priceInfo[sizeIndex];
            $(this).find(".accessories").each(function(index) {
                var myTotal = $(this).find(".quantity").val();
                var myCalc = +feltPrice * +myTotal;
                accTotal += +myCalc;
                $(this).find(".accessory_total_cost").each(function() {
                    $(this).text(myCalc);
                });
            });
        } else {
            $(this).find(".accessories").each(function(index) {
                var myTotal = $(this).find(".quantity").val();
                var i = index;
                var myCalc = +priceInfo[i] * +myTotal;
                accTotal += +myCalc;
                $(this).find(".accessory_total_cost").each(function() {
                    $(this).text(myCalc);
                });
            });
        }
    });
    $(".mobile .acc_group").each(function(gindex) {
        var priceInfo = $(this).attr("data-price").split(",");
        if ($(this).attr("data-acc") == "felt") {
            var feltPrice = priceInfo[sizeIndex];
            $(this).find(".accessories").each(function(index) {
                var myTotal = $(this).find(".quantity").val();
                var myCalc = +feltPrice * +myTotal;
                $(this).find(".accessory_total_cost").each(function() {
                    $(this).text(myCalc);
                });
            });
        } else {
            $(this).find(".accessories").each(function(index) {
                var myTotal = $(this).find(".quantity").val();
                var i = index;
                var myCalc = +priceInfo[i] * +myTotal;
                $(this).find(".accessory_total_cost").each(function() {
                    $(this).text(myCalc);
                });
            });
        }
    });
    priceTot += accTotal;
    $(".est_price_number h1").text(toUSD.format(priceTot));
}

function changeColor(hex) {
    $(".fabric-shape").each(function() {
        $(this).css("fill", hex);
    });
}
$(".no_table").click(function() {
    $(".no_table").toggleClass("active");
    $(".table_name_variable").text("NO TABLE");
    updatePricing();
});
$(".dimensions").click(function() {
    $(".dimensions.active").removeClass("active");
    $(".no_table.active").removeClass("active");
    $(this).addClass("active");
    ($(".desktop .dimensions").index($(this)) >= 0) ? $(".mobile .dimensions").eq($(".desktop .dimensions").index($(this))).addClass("active"): $(".desktop .dimensions").eq($(".mobile .dimensions").index($(this))).addClass("active");
    $(".table_name_variable").text($(this).find(".table_select_title").text());
    var woodName = $(".wood_type.active").attr("data");
    var tableSize = $(".desktop .dimensions").index($(".desktop .dimensions.active"));
    var topperWoodName = $(".desktop .topper_wood_type.active").attr("data");
    $(".table_image").each(function() {
        if ($(this).attr("data") != "closeup") {
            $(this).attr("src", "/tools/visualiser/IMAGES/tables/" + woodName + "/" + tableSize + "-" + woodName + "-" + $(this).attr("data"));
        }
    });
    $(".game_image").each(function() {
        $(this).attr("src", "/tools/visualiser/IMAGES/tables/overlays/" + tableSize + "-" + $(this).attr("data"));
    });
    $(".dining_image").each(function() {
        $(this).attr("src", "/tools/visualiser/IMAGES/tables/overlays/" + tableSize + "-" + $(this).attr("data"));
    });
    if ($(".desktop .topper_wood_type.active").attr("data") != "notopper") {
        $(".topper_image, .dining_topper_image").each(function() {
            if ($(this).attr("data") != "closeup") {
                $(this).attr("src", "/tools/visualiser/IMAGES/toppers/" + topperWoodName + "/" + tableSize + "-" + topperWoodName + "-" + $(this).attr("data"));
            }
        });
        if ($(".topper_hide").hasClass("hidden")) {
            $(".topper_image").removeClass("hidden");
        }
    } else {
        $(".topper_image").addClass("hidden");
        $(".dining_topper_image").each(function() {
            if ($(this).attr("data") != "closeup") {
                $(this).attr("src", "/tools/visualiser/IMAGES/toppers/" + woodName + "/" + tableSize + "-" + woodName + "-" + $(this).attr("data"));
            }
        });
    }
    $(".tablePage .fabric-shape").each(function() {
        $(this).attr("d", tableShapes[tableSize + "-" + $(this).attr("data") + "-" + woodName]);
    });
    loadAccPrices();
    updatePricing();
});
$(".wood_type").click(function() {
    $(".wood_type.active").removeClass("active");
    $(this).addClass("active");
    ($(".desktop .wood_type").index($(this)) >= 0) ? $(".mobile .wood_type").eq($(".desktop .wood_type").index($(this))).addClass("active"): $(".desktop .wood_type").eq($(".mobile .wood_type").index($(this))).addClass("active");
    $(".wood-info div.active").removeClass("active");
    $(".wood-info ." + $(this).attr("data") + "-info").addClass("active");
    $(".wood_name_variable").text($(this).find(".wood_name").text());
    var woodName = $(this).attr("data");
    var tableSize = $(".desktop .dimensions").index($(".desktop .dimensions.active"));
    var topperWoodName = $(".desktop .topper_wood_type.active").attr("data");
    $(".table_image").each(function() {
        if ($(this).attr("data") == "closeup") {
            $(this).attr("src", "/tools/visualiser/IMAGES/tables/frontlogos/table-" + woodName + ".jpg");
        } else {
            $(this).attr("src", "/tools/visualiser/IMAGES/tables/" + woodName + "/" + tableSize + "-" + woodName + "-" + $(this).attr("data"));
        }
    });
    $(".game_image").each(function() {
        $(this).attr("src", "/tools/visualiser/IMAGES/tables/overlays/" + tableSize + "-" + $(this).attr("data"));
    });
    $(".dining_image").each(function() {
        $(this).attr("src", "/tools/visualiser/IMAGES/tables/overlays/" + tableSize + "-" + $(this).attr("data"));
    });
    if ($(".desktop .topper_wood_type.active").attr("data") != "notopper") {
        $(".topper_image").each(function() {
            if ($(this).attr("data") == "closeup") {
                $(this).attr("src", "/tools/visualiser/IMAGES/tables/frontlogos/topper-" + topperWoodName + ".png");
            } else {
                $(this).attr("src", "/tools/visualiser/IMAGES/toppers/" + topperWoodName + "/" + tableSize + "-" + topperWoodName + "-" + $(this).attr("data"));
            }
        });
        $(".dining_topper_image").each(function() {
            $(this).attr("src", "/tools/visualiser/IMAGES/toppers/" + topperWoodName + "/" + tableSize + "-" + topperWoodName + "-" + $(this).attr("data"));
        });
        if ($(".topper_hide").hasClass("hidden")) {
            $(".topper_image").removeClass("hidden");
        }
    } else {
        $(".topper_image").addClass("hidden");
        $(".dining_topper_image").each(function() {
            $(this).attr("src", "/tools/visualiser/IMAGES/toppers/" + woodName + "/" + tableSize + "-" + woodName + "-" + $(this).attr("data"));
        });
    }
    $(".tablePage .fabric-shape").each(function() {
        $(this).attr("d", tableShapes[tableSize + "-" + $(this).attr("data") + "-" + woodName]);
    });
    updatePricing();
});
$(".fabric_type").click(function() {
    $(".fabric_type.active").removeClass("active");
    $(this).addClass("active");
    ($(".desktop .fabric_type").index($(this)) >= 0) ? $(".mobile .fabric_type").eq($(".desktop .fabric_type").index($(this))).addClass("active"): $(".desktop .fabric_type").eq($(".mobile .fabric_type").index($(this))).addClass("active");
    $(".fabric_hide").removeClass("hidden");
    changeColor($(this).attr("data-hex"));
    $(".fabric_name_variable").text($(this).find(".fabric_name").text());
    updatePricing();
});
$(".topper_wood_type").click(function() {
    $(".topper_wood_type.active").removeClass("active");
    $(this).addClass("active");
    ($(".desktop .topper_wood_type").index($(this)) >= 0) ? $(".mobile .topper_wood_type").eq($(".desktop .topper_wood_type").index($(this))).addClass("active"): $(".desktop .topper_wood_type").eq($(".mobile .topper_wood_type").index($(this))).addClass("active");
    var woodName = $(this).attr("data");
    var tableSize = $(".desktop .dimensions").index($(".desktop .dimensions.active"));
    var tableWoodName = $(".desktop .wood_type.active").attr("data");
    if ($(this).attr("data") != "notopper") {
        $(".topper_image, .dining_topper_image").each(function() {
            if ($(this).attr("data") == "closeup") {
                $(this).attr("src", "/tools/visualiser/IMAGES/tables/frontlogos/topper-" + woodName + ".png");
            } else {
                $(this).attr("src", "/tools/visualiser/IMAGES/toppers/" + woodName + "/" + tableSize + "-" + woodName + "-" + $(this).attr("data"));
            }
        });
        $(".topper_name_variable").text($(this).find(".wood_name").text() + " Topper");
        $(".topper_image, .topper_toggle").removeClass("hidden");
        $(".dining_disclaimer").addClass("hidden");
    } else {
        $(".topper_name_variable").text($(this).find(".wood_name").text());
        $(".topper_image, .topper_toggle").addClass("hidden");
        $(".dining_disclaimer").removeClass("hidden");
        $(".dining_topper_image").each(function() {
            $(this).attr("src", "/tools/visualiser/IMAGES/toppers/" + tableWoodName + "/" + tableSize + "-" + tableWoodName + "-" + $(this).attr("data"));
        });
    }
    $(".topper-wood-info div.active").removeClass("active");
    $(".topper-wood-info ." + $(this).attr("data") + "-info").addClass("active");
    updatePricing();
});
$(".dimensions, .wood_type, .topper_wood_type").click(function() {
    $(".tablePage #loadIcon:hidden").show("fade", 300);
    $('.tablePage .carousel-item.active').waitForImages(function() {
        $(".tablePage #loadIcon").hide("fade", 500);
    });
});
$(".shipping_country").click(function() {
    $(".shipping_country.active").removeClass("active");
    $(this).addClass("active");
    $(".shipping_country_variable").text("Shipping to: " + $(this).find(".shipping_country_name").text());
    updatePricing();
});
$(".gallery_thumb").click(function() {
    $(".gallery_thumb.active").removeClass("active");
    $(this).addClass("active");
});
$(".topper_toggle").click(function() {
    $(".topper_image").toggleClass("hidden");
    $(".topper_hide, .topper_show").toggleClass("hidden");
});
$(".shareBut").click(function() {
    $(".savekey").text(toolURL + "?share=" + saveShare());
});
$("#shareModal").on('hidden.bs.modal', function(e) {
    $(".savekey").removeClass("copy_confirm");
    $(".savekey").removeClass("copy_confirm2");
});
$(".randomBut").click(function() {
    var randWood = Math.floor((Math.random() * ($(".desktop .wood_type").length - 1)));
    var randFab = Math.floor((Math.random() * ($(".desktop .fabric_type").length - 1)));
    var randTop = Math.floor((Math.random() * ($(".desktop .topper_wood_type").length - 1)) + 1);
    $(".wood_type:eq(" + randWood + ")").click();
    $(".fabric_type:eq(" + randFab + ")").click();
    $(".topper_wood_type:eq(" + randTop + ")").click();
});
$(".accessories").click(function() {
    var accGroup = $(this).closest(".acc_group");
    var accName = accGroup.attr("data-acc");
    var tableWoodName = $(".desktop .wood_type.active").attr("data");
    var accWoodName = $(this).find(".accessory_wood_swatch").attr("data");
    var topperWoodName = ($(".desktop .topper_wood_type.active").attr("data") == "notopper") ? accWoodName : $(".desktop .topper_wood_type.active").attr("data");
    var imageData = acc_images[accName];
    var numImages = (imageData[0][imageData[0].length - 1] != "video") ? imageData[0].length : imageData[0].length - 1;
    var tableSize = $(".desktop .dimensions").index($(".desktop .dimensions.active"));
    if (accName == "screen") {
        accWoodName = "maple";
        $(".screen_disclaimer").removeClass("hidden");
    } else {
        $(".screen_disclaimer").addClass("hidden");
    }
    if ((accName == "block") && ($(".desktop .topper_wood_type.active").attr("data") == "notopper")) {
        $(".topper_disclaimer").removeClass("hidden");
    } else {
        $(".topper_disclaimer").addClass("hidden");
    }
    if (accName == "felt") {
        var hex = $(this).attr("data-hex");
        $(".fabric-shape.acc").each(function() {
            $(this).css("fill", hex);
        });
    } else {
        var hex = $(".fabric-shape.dt").css("fill");
        $(".fabric-shape.acc").each(function() {
            $(this).css("fill", hex);
        });
    }
    if (!$(this).hasClass("active")) {
        $(".accPage #loadIcon").show("fade", 100);
        if (accGroup.hasClass("locked_tag")) {
            $(".unlockAtNum").text(accGroup.attr("data-ks-val-text"));
            $(".unlocks_at").show("fade", 300);
        } else {
            $(".unlocks_at").hide("fade", 300);
        }
        $(".accessories.active").removeClass("active");
        $(this).addClass("active");
        ($(".desktop .accessories").index($(this)) >= 0) ? $(".mobile .accessories").eq($(".desktop .accessories").index($(this))).addClass("active"): $(".desktop .accessories").eq($(".mobile .accessories").index($(this))).addClass("active");
    }
    $(".carouselImage").each(function(index) {
        if (index >= numImages) {
            if ($(this).hasClass("active")) {
                $("#accCarousel").carousel(0);
            }
            $(this).hide().removeClass("carousel-item");
        }
    });
    $(".thumbnailImage").each(function(index) {
        if (index >= numImages) {
            $(this).hide("fade", 400);
        }
    });
    if (imageData[0][imageData[0].length - 1] != "video") {
        if ($(".carouselVideo").hasClass("active")) {
            $("#accCarousel").carousel(0);
        }
        $(".carouselVideo").hide().removeClass("carousel-item");
        $(".accVid")[0].pause();
        $(".vidThumbnailImage").hide("fade", 400);
    }
    imageData[0].forEach(function(item, index) {
        var tableType = imageData[0][index];
        var accType = imageData[1][index];
        if (tableType == "video") {
            $("#accCarousel .accVidWebm").attr("src", "/tools/visualiser/IMAGES/accessories/videos/" + accName + ".webm").show();
            $("#accCarousel .accVidMp4").attr("src", "/tools/visualiser/IMAGES/accessories/videos/" + accName + ".mp4").show();
            $(".accThumbs .acc_vid_image").attr("src", "/tools/visualiser/IMAGES/accessories/videos/" + accName + ".jpg").show();
        } else if (tableType != "none") {
            if (accName == "felt") {
                var tableSVGType = tableType.replace("-empty", "").replace("-gaming", "");
                $("#accCarousel .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/tables/" + tableWoodName + "/" + tableSize + "-" + tableWoodName + "-" + tableType + ".jpg").show();
                $("#accCarousel .fabric-shape").eq(index).attr("d", tableShapes[tableSize + "-" + tableSVGType + "-" + tableWoodName]).show().closest("svg").removeClass("svgOnTop");
                $(".accThumbs .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/tables/" + tableWoodName + "/" + tableSize + "-" + tableWoodName + "-" + tableType + ".jpg").show();
                $(".accThumbs .fabric-shape").eq(index).attr("d", tableShapes[tableSize + "-" + tableSVGType + "-" + tableWoodName]).show().closest("svg").removeClass("svgOnTop");
            } else if (accName == "block") {
                $("#accCarousel .fabric-shape").eq(index).hide().closest("svg").removeClass("svgOnTop");
                $(".accThumbs .fabric-shape").eq(index).hide().closest("svg").removeClass("svgOnTop");
                if (accType == "close") {
                    $("#accCarousel .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + topperWoodName + "-" + tableType + ".jpg").show();
                    $(".accThumbs .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + topperWoodName + "-" + tableType + ".jpg").show();
                } else {
                    $("#accCarousel .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + accWoodName + "-" + tableType + ".jpg").show();
                    $(".accThumbs .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + accWoodName + "-" + tableType + ".jpg").show();
                }
            } else if (accName == "acrylic") {
                $("#accCarousel .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/base/accessory-base-" + tableWoodName + "-" + tableType + ".jpg").show();
                $(".accThumbs .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/base/accessory-base-" + tableWoodName + "-" + tableType + ".jpg").show();
                $("#accCarousel .fabric-shape").eq(index).attr("d", tableShapes["accessory-acrylic-" + tableWoodName]).show().closest("svg").addClass("svgOnTop");
                $(".accThumbs .fabric-shape").eq(index).attr("d", tableShapes["accessory-acrylic-" + tableWoodName]).show().closest("svg").addClass("svgOnTop");
            } else if (accName == "grid") {
                $("#accCarousel .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/base/accessory-base-" + tableWoodName + "-" + tableType + ".jpg").show();
                $(".accThumbs .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/base/accessory-base-" + tableWoodName + "-" + tableType + ".jpg").show();
                $("#accCarousel .fabric-shape").eq(index).attr("d", tableShapes["accessory-" + tableType + "-" + tableWoodName]).show().closest("svg").removeClass("svgOnTop");
                $(".accThumbs .fabric-shape").eq(index).attr("d", tableShapes["accessory-" + tableType + "-" + tableWoodName]).show().closest("svg").removeClass("svgOnTop");
            } else {
                $("#accCarousel .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/base/accessory-base-" + tableWoodName + "-" + tableType + ".jpg").show();
                $("#accCarousel .fabric-shape").eq(index).attr("d", tableShapes["accessory-" + tableType + "-" + tableWoodName]).show().closest("svg").removeClass("svgOnTop");
                $(".accThumbs .acc_table_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/base/accessory-base-" + tableWoodName + "-" + tableType + ".jpg").show();
                $(".accThumbs .fabric-shape").eq(index).attr("d", tableShapes["accessory-" + tableType + "-" + tableWoodName]).show().closest("svg").removeClass("svgOnTop");
            }
        } else {
            $("#accCarousel .acc_table_image").eq(index).hide();
            $("#accCarousel .fabric-shape").eq(index).hide().closest("svg").removeClass("svgOnTop");
            $(".accThumbs .acc_table_image").eq(index).hide();
            $(".accThumbs .fabric-shape").eq(index).hide().closest("svg").removeClass("svgOnTop");
        }
        if (accType != "none") {
            if (accName == "felt") {
                $("#accCarousel .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/tables/overlays/" + tableSize + "-" + accType + ".png").show();
                $(".accThumbs .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/tables/overlays/" + tableSize + "-" + accType + ".png").show();
            } else if (accName == "acrylic") {
                $("#accCarousel .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + tableWoodName + "-" + accType + ".png").show();
                $(".accThumbs .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + tableWoodName + "-" + accType + ".png").show();
            } else if (accName == "grid") {
                $("#accCarousel .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + accType + ".png").show();
                $(".accThumbs .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + accType + ".png").show();
            } else if (accName == "block") {
                if (accType == "close") {
                    $("#accCarousel .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + accWoodName + "-" + accType + ".png").show();
                    $(".accThumbs .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + accWoodName + "-" + accType + ".png").show();
                } else {
                    $("#accCarousel .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + topperWoodName + "-" + accType + ".png").show();
                    $(".accThumbs .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + topperWoodName + "-" + accType + ".png").show();
                }
            } else {
                $("#accCarousel .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + accWoodName + "-" + accType + ".png").show();
                $(".accThumbs .acc_image").eq(index).attr("src", "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + accWoodName + "-" + accType + ".png").show();
            }
        } else {
            $("#accCarousel .acc_image").eq(index).hide();
            $(".accThumbs .acc_image").eq(index).hide();
        }
        if (tableType == "video") {
            $(".carouselVideo").addClass("carousel-item").show();
            $(".accVid")[0].load();
            $(".vidThumbnailImage").show("fade", 600);
            if ($(".carouselVideo").hasClass("active")) {
                $(".accVid")[0].play();
            }
            $(".accThumbs .vidThumbnailImage .gallery_thumb").attr("data-slide-to", index);
        } else {
            $(".carouselImage").eq(index).addClass("carousel-item").show();
            $(".thumbnailImage").eq(index).show("fade", 600);
            $(".accThumbs .gallery_thumb").eq(index).attr("data-slide-to", index);
        }
    });
    $('.accPage').waitForImages(function() {
        $(".accPage #loadIcon").hide("fade", 600);
    });
});
$("#accCarousel").on('slide.bs.carousel', function(e) {
    $(".accPage .gallery_thumb.active").removeClass("active");
    $(".accPage .gallery_thumb:visible:eq(" + e.to + ")").addClass("active");
});
$("#accCarousel").on('slid.bs.carousel', function(e) {
    if ($(".carouselVideo").hasClass("active")) {
        $(".accVid")[0].play();
    } else {
        $(".accVid")[0].pause();
        $(".accVid")[0].currentTime = 0;;
    }
});
$("#carouselTable").on('slide.bs.carousel', function(e) {
    $(".tablePage .gallery_thumb.active").removeClass("active");
    $(".tablePage .gallery_thumb:visible:eq(" + e.to + ")").addClass("active");
});

function loadAccPrices() {
    var sizeIndex = $(".desktop .dimensions").index($(".desktop .dimensions.active"));
    $(".desktop .acc_group").each(function() {
        var thisGroup = $(this);
        var priceInfo = $(this).attr("data-price").split(",");
        if (thisGroup.attr("data-acc") == "felt") {
            $(this).find(".accessory_select_cost").each(function(index) {
                $(this).text("$" + priceInfo[sizeIndex]);
            });
        } else {
            $(this).find(".accessory_select_cost").each(function(index) {
                $(this).text("$" + priceInfo[index]);
            });
        }
    });
    $(".mobile .acc_group").each(function() {
        var thisGroup = $(this);
        var priceInfo = $(this).attr("data-price").split(",");
        if (thisGroup.attr("data-acc") == "felt") {
            $(this).find(".accessory_select_cost").each(function(index) {
                $(this).text("$" + priceInfo[sizeIndex]);
            });
        } else {
            $(this).find(".accessory_select_cost").each(function(index) {
                $(this).text("$" + priceInfo[index]);
            });
        }
    });
}

function updateAccTotals(accGroup, isDesktop) {
    var runningTotal = 0;
    if (isDesktop) {
        groupIndex = $(".desktop .acc_group").index(accGroup);
        $(".mobile .acc_group:eq(" + groupIndex + ") .quantity").each(function(index) {
            $(this).val(accGroup.find(".quantity:eq(" + index + ")").val());
        });
    } else {
        groupIndex = $(".mobile .acc_group").index(accGroup);
        $(".desktop .acc_group:eq(" + groupIndex + ") .quantity").each(function(index) {
            $(this).val(accGroup.find(".quantity:eq(" + index + ")").val());
        });
    }
    accGroup.find(".quantity").each(function() {
        runningTotal += +$(this).val();
    });
    (runningTotal > 0) ? accGroup.find(".accAmount").html('<span class="times"></span><span class="count">' + runningTotal + '</span>'): accGroup.find(".accAmount").html("");
    updatePricing();
}
$('.btn-plus, .btn-minus').click(function(e) {
    const isNegative = $(this).closest('.btn-minus').is('.btn-minus');
    const input = $(this).closest('.input-group').find('input');
    if (input.is('input')) {
        input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
    var isDesktop = (input.closest('.desktop').length > 0) ? true : false;
    var thisAcc = input.closest('.acc_group');
    updateAccTotals(thisAcc, isDesktop);
});
$(".quantity").keyup(function() {
    var isDesktop = ($(this).closest('.desktop').length > 0) ? true : false;
    var thisAcc = $(this).closest('.acc_group');
    ($(this).val() > $(this).attr("max")) ? $(this).val($(this).attr("max")): $(this).val();
    updateAccTotals(thisAcc, isDesktop);
});
$(".quantity").focusin(function() {
    $(this).select();
});

function gEvent(cat, act, lab) {
    if (typeof ga === "function") {
        ga('send', 'event', cat, act, lab);
    }
}
$('#fbShare').click(function() {
    gEvent("share", "fb", $(".savekey").text());
    var fbpopup = window.open("https://www.facebook.com/sharer/sharer.php?u=" + $(".savekey").text(), "pop", "width=600, height=400, scrollbars=no");
    return false;
});
$('#twitShare').click(function() {
    gEvent("share", "twit", $(".savekey").text());
    var twitpopup = window.open("https://twitter.com/intent/tweet?text=Check out my %23Wyrmwood Modular Gaming Table! %23MyWyrmwood&url=" + $(".savekey").text(), "pop", "width=600, height=400, scrollbars=no");
    return false;
});
$(".copy").click(function() {
    gEvent("share", "copy", $(".savekey").text());
    copyTextToClipboard($(".savekey").text());
    $(".savekey").addClass("copy_confirm");
    $(".savekey").toggleClass("copy_confirm2");
});
$(".accPageBut").click(function() {
    if (!$(this).hasClass("disabled")) {
        $(".accessories.active").click();
        var hex = $(".fabric-shape.dt").css("fill");
        $(".fabric-shape.acc").each(function() {
            $(this).css("fill", hex);
        });
        $(".tablePage").hide("slide", {
            direction: "left"
        }, 400, function() {
            $(".accPage").show("slide", {
                direction: "right"
            }, 400);
            $(".accPageBut").addClass("disabled");
            $(".tablePageBut").removeClass("disabled");
            $(".randomBut").hide();
            $(".collapse.show").removeClass("show");
            preloadAcc();
        });
        $(".mob_footer .accPageBut").hide("fade", 400, function() {
            $(".mob_footer .tablePageBut").show("fade", 400);
        });
    }
});
$(".tablePageBut").click(function() {
    if (!$(this).hasClass("disabled")) {
        $(".accPage").hide("slide", {
            direction: "right"
        }, 400, function() {
            $(".tablePage").show("slide", {
                direction: "left"
            }, 400);
            $(".tablePageBut").addClass("disabled");
            $(".accPageBut").removeClass("disabled");
        });
        $(".mob_footer .tablePageBut").hide("fade", 400, function() {
            $(".mob_footer .accPageBut").show("fade", 400);
        });
        $(".randomBut").show("fade", 500);
        $(".collapse.show").removeClass("show");
    }
});
$(".unit-toggle").click(function() {
    var unit = $("div", ".unit-toggle");
    $("div", this).removeClass("hovering");
    if ($(unit).hasClass("imperial")) {
        $(".imperialNumbers").hide();
        $(".metricNumbers").show();
        unit.addClass("metric");
        unit.removeClass("imperial");
    } else {
        $(".metricNumbers").hide();
        $(".imperialNumbers").show();
        unit.addClass("imperial");
        unit.removeClass("metric");
    };
});
$(".unit-toggle").mouseenter(function() {
    $("div", this).addClass("hovering");
}).mouseleave(function() {
    $("div", this).removeClass("hovering");
});
$(".carousel-item img, .gallery_thumb img").on("error", function() {
    $(this).attr("src", "/tools/visualiser/IMAGES/comingsoon.png");
});
$(".tablePage .desktop .wood_type, .tablePage .mobile .wood_type").closest(".collapse").on("show.bs.collapse", function() {
    var tableSize = $(".desktop .dimensions").index($(".desktop .dimensions.active"));
    var topperWoodName = $(".desktop .topper_wood_type.active").attr("data");
    var tempImgTable = [];
    var tempImgTopper = [];
    var tempImgAcc = [];
    $(this).find(".wood_type").each(function() {
        var woodName = $(this).attr("data");
        $(".table_image").each(function(x) {
            tempImgTable[x] = new Image();
            if ($(this).attr("data") == "closeup") {
                tempImgTable[x].src = "/tools/visualiser/IMAGES/tables/frontlogos/table-" + woodName + ".jpg";
            } else {
                tempImgTable[x].src = "/tools/visualiser/IMAGES/tables/" + woodName + "/" + tableSize + "-" + woodName + "-" + $(this).attr("data");
            }
        });
        if (topperWoodName == "notopper") {
            $(".dining_topper_image").each(function(z) {
                tempImgTopper[z] = new Image();
                if ($(this).attr("data") == "closeup") {
                    tempImgTopper[z].src = "/tools/visualiser/IMAGES/tables/frontlogos/topper-" + woodName + ".png";
                } else {
                    tempImgTopper[z].src = "/tools/visualiser/IMAGES/toppers/" + woodName + "/" + tableSize + "-" + woodName + "-" + $(this).attr("data");
                }
            });
        }
    });
});
$(".tablePage .desktop .topper_wood_type, .tablePage .mobile .topper_wood_type").closest(".collapse").on("show.bs.collapse", function() {
    var tableSize = $(".desktop .dimensions").index($(".desktop .dimensions.active"));
    var tempImgTopper = [];
    $(this).find(".topper_wood_type").each(function() {
        var topperWoodName = $(this).attr("data");
        if (topperWoodName != "notopper") {
            $(".topper_image, .dining_topper_image").each(function(x) {
                tempImgTopper[x] = new Image();
                if ($(this).attr("data") == "closeup") {
                    tempImgTopper[x].src = "/tools/visualiser/IMAGES/tables/frontlogos/topper-" + topperWoodName + ".png";
                } else {
                    tempImgTopper[x].src = "/tools/visualiser/IMAGES/toppers/" + topperWoodName + "/" + tableSize + "-" + topperWoodName + "-" + $(this).attr("data");
                }
            });
        }
    });
});
$(".tablePage .desktop .dimensions, .tablePage .mobile .dimensions").closest(".collapse").on("show.bs.collapse", function() {
    var woodName = $(".desktop .wood_type.active").attr("data");
    var topperWoodName = $(".desktop .topper_wood_type.active").attr("data");
    var tempImgTable = [];
    var tempImgTopper = [];
    var tempImgAcc = [];
    var which = $(this);
    which.find(".dimensions").each(function(index) {
        var tableSize = index;
        $(".table_image").each(function(x) {
            tempImgTable[x] = new Image();
            if ($(this).attr("data") == "closeup") {
                tempImgTable[x].src = "/tools/visualiser/IMAGES/tables/frontlogos/table-" + woodName + ".jpg";
            } else {
                tempImgTable[x].src = "/tools/visualiser/IMAGES/tables/" + woodName + "/" + tableSize + "-" + woodName + "-" + $(this).attr("data");
            }
        });
        if (topperWoodName != "notopper") {
            $(".topper_image, .dining_topper_image").each(function(z) {
                tempImgTopper[z] = new Image();
                if ($(this).attr("data") == "closeup") {
                    tempImgTopper[z].src = "/tools/visualiser/IMAGES/tables/frontlogos/topper-" + topperWoodName + ".png";
                } else {
                    tempImgTopper[z].src = "/tools/visualiser/IMAGES/toppers/" + topperWoodName + "/" + tableSize + "-" + topperWoodName + "-" + $(this).attr("data");
                }
            });
        }
    });
});
$(".accPage .desktop .accessories, .accPage .mobile .accessories").closest(".collapse").on("shown.bs.collapse", function() {
    var accGroup = $(this).closest(".acc_group");
    var accName = accGroup.attr("data-acc");
    var imageData = acc_images[accName];
    var numImages = imageData[0].length;
    var tableWoodName = $(".desktop .wood_type.active").attr("data");
    var tableSize = $(".desktop .dimensions").index($(".desktop .dimensions.active"));
    var tempImgAcc = [];
    var tempImgTable = [];
    $(this).find(".accessories").eq(0).click();
    if (accName == "grid" || accName == "acrylic") {} else if (accName == "felt") {} else if (accName == "block") {
        $(this).find(".accessory_wood_swatch").each(function(wIndex) {
            var accWoodName = $(this).attr("data");
            var topperWoodName = ($(".desktop .topper_wood_type.active").attr("data") == "notopper") ? accWoodName : $(".desktop .topper_wood_type.active").attr("data");
            tempImgAcc[wIndex] = [];
            tempImgTable[wIndex] = [];
            imageData[0].forEach(function(item, index) {
                var tableType = imageData[0][index];
                var accType = imageData[1][index];
                if (accType != "none") {
                    tempImgAcc[wIndex][index] = new Image();
                    (accType == "close") ? tempImgAcc[wIndex][index].src = "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + accWoodName + "-" + accType + ".png": tempImgAcc[wIndex][index].src = "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + topperWoodName + "-" + accType + ".png";
                }
                if (tableType != "none" && tableType != "video") {
                    tempImgTable[wIndex][index] = new Image();
                    (accType == "close") ? tempImgTable[wIndex][index].src = "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + topperWoodName + "-" + tableType + ".jpg": tempImgTable[wIndex][index].src = "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + accWoodName + "-" + tableType + ".jpg";
                }
            });
        });
    } else {
        $(this).find(".accessory_wood_swatch").each(function(wIndex) {
            var accWoodName = $(this).attr("data");
            tempImgAcc[wIndex] = [];
            tempImgTable[wIndex] = [];
            imageData[0].forEach(function(item, index) {
                var tableType = imageData[0][index];
                var accType = imageData[1][index];
                if (accType != "none") {
                    tempImgAcc[wIndex][index] = new Image();
                    tempImgAcc[wIndex][index].src = "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + accWoodName + "-" + accType + ".png";
                }
                if (tableType != "none" && tableType != "video") {
                    tempImgTable[wIndex][index] = new Image();
                    tempImgTable[wIndex][index].src = "/tools/visualiser/IMAGES/accessories/base/accessory-base-" + tableWoodName + "-" + tableType + ".jpg"
                }
            });
        });
    }
});

function preloadAcc() {
    $(".acc_group").each(function(aindex) {
        var accGroup = $(this);
        var accName = accGroup.attr("data-acc");
        var imageData = acc_images[accName];
        var numImages = imageData[0].length;
        var tableWoodName = $(".desktop .wood_type.active").attr("data");
        var tableSize = $(".desktop .dimensions").index($(".desktop .dimensions.active"));
        var tempImgAcc = [];
        var tempImgTable = [];
        var tempThumb = [];
        tempThumb[aindex] = new Image();
        tempThumb[aindex].src = "/tools/visualiser/IMAGES/accessories/videos/" + accName + ".jpg";
        var firstAcc = accGroup.find(".accessories").eq(0);
        if (accName == "grid" || accName == "acrylic") {
            imageData[0].forEach(function(item, index) {
                var tableType = imageData[0][index];
                var accType = imageData[1][index];
                if (accType != "none") {
                    tempImgAcc[index] = new Image();
                    (accName == "acrylic") ? tempImgAcc[index].src = "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + tableWoodName + "-" + accType + ".png": tempImgAcc[index].src = "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + accType + ".png";
                }
                if (tableType != "none" && tableType != "video") {
                    tempImgTable[index] = new Image();
                    tempImgTable[index].src = "/tools/visualiser/IMAGES/accessories/base/accessory-base-" + tableWoodName + "-" + tableType + ".jpg"
                }
            });
        } else if (accName == "block") {
            var firstWood = firstAcc.find(".accessory_wood_swatch");
            var accWoodName = firstWood.attr("data");
            var topperWoodName = ($(".desktop .topper_wood_type.active").attr("data") == "notopper") ? accWoodName : $(".desktop .topper_wood_type.active").attr("data");
            imageData[0].forEach(function(item, index) {
                var tableType = imageData[0][index];
                var accType = imageData[1][index];
                if (accType != "none") {
                    tempImgAcc[index] = new Image();
                    (accType == "close") ? tempImgAcc[index].src = "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + accWoodName + "-" + accType + ".png": tempImgAcc[index].src = "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + topperWoodName + "-" + accType + ".png";
                }
                if (tableType != "none" && tableType != "video") {
                    tempImgTable[index] = new Image();
                    (accType == "close") ? tempImgTable[index].src = "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + topperWoodName + "-" + tableType + ".jpg": tempImgTable[index].src = "/tools/visualiser/IMAGES/accessories/block/accessory-block-" + accWoodName + "-" + tableType + ".jpg";
                }
            });
        } else if (accName == "felt") {} else {
            var firstWood = firstAcc.find(".accessory_wood_swatch");
            var accWoodName = firstWood.attr("data");
            imageData[0].forEach(function(item, index) {
                var tableType = imageData[0][index];
                var accType = imageData[1][index];
                if (accType != "none") {
                    tempImgAcc[index] = new Image();
                    tempImgAcc[index].src = "/tools/visualiser/IMAGES/accessories/" + accName + "/accessory-" + accName + "-" + accWoodName + "-" + accType + ".png";
                }
                if (tableType != "none" && tableType != "video") {
                    tempImgTable[index] = new Image();
                    tempImgTable[index].src = "/tools/visualiser/IMAGES/accessories/base/accessory-base-" + tableWoodName + "-" + tableType + ".jpg"
                }
            });
        }
    });
}

function checkKS() {
    fetch('https://cors.methrend.app/' + ksURL).then(response => response.json()).then(function(data) {
        var resp = data.card;
        var pledge = $(resp).attr("data-project_pledged");
        $(".ks_stretch").each(function() {
            var myUnlock = $(this).attr("data-ks-val");
            if (+pledge >= +myUnlock) {
                $(this).removeClass("locked_tag").addClass("unlocked_tag");
            }
        });
    });
}
$(window).on('load', function() {
    $('[data-toggle="popover"]').popover()
    $('.popover-dismiss').popover({
        trigger: 'focus'
    });
    $('[data-toggle="popover"]').on('inserted.bs.popover', function() {
        $('.popover').addClass("in");
    })
    loadAccPrices();
    loadShare();
    updatePricing();
});