var color1 = ["#ff000000", "#ff4000", "#ff0000", "#ffbf00", "#C4CFFF", "#FFFB85", "#FFA6C1", "#A866FF", "#4D52FF", "#40FFBC", "#40FFBC", "#F8F9FA",
    "#E9ECEF",
    "#DEE2E6",
    "#CED4DA",
    "#ADB5BD",
    "#6C757D",
    "#495057",
    "#343A40",
    "#212529",
    "#007BFF",
    "#6C757D",
    "#28A745",
    "#DC3545",
    "#FFC107",
    "#17A2B8",
    "#F8F9FA",
    "#E9ECEF",
    "#DEE2E6",
    "#CED4DA",
    "#ADB5BD",
    "#6C757D",
    "#495057",
    "#343A40",
    "#212529",
    "#007BFF",
    "#6C757D",
    "#28A745",
    "#DC3545",
    "#FFC107",
    "#17A2B8",
    "#F8F9FA",
    "#E9ECEF",
    "#DEE2E6",
    "#CED4DA",
    "#ADB5BD",
    "#6C757D",
    "#495057",
    "#343A40",
    "#212529",
    "#007BFF",
    "#6C757D",
    "#28A745",
    "#DC3545",
    "#FFC107",
    "#17A2B8",
    "#F8F9FA",
    "#E9ECEF",
    "#DEE2E6",
    "#CED4DA",
    "#ADB5BD",
];
var bool = false;
// var color2=[]


var num = Math.floor(Math.random() * color1.length);
var num2 = Math.floor(Math.random() * color1.length);
setTimeout(function () {
    $("body").css("background", "linear-gradient(to right," + color1[num] + "," + color1[num2] + ")");
    $(".col1").css("background-color", color1[num])
    $(".col2").css("background-color", color1[num2])
    $("p").text("background:linear-gradient(to right,   " + color1[num] + " , " + color1[num2] + ")")

}, 100);







