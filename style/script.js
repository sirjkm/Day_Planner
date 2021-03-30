var calendar = document.getElementById("calendar")

var btnElements = document.getElementsByClassName("btn")

document.getElementById("btn_1").addEventListener("click",

    function() {
        console.log(document.getElementById("activity_1").value)

        localStorage.setItem("activity_1", document.getElementById("activity_1").value)
    });

    function loadData(activity_num) {
        var activity = localStorage.getItem('activity_' + activity_num)
        document.getElementById('activity_' + activity_num).value = activity;
    }

    for(var i = 0; i < btnElements.length; i++) {
        loadData(i+1)
        addSaveHandler(btnElements[i], i+1)
    }

    function addSaveHandler(btnElements, num) {
        btnElements.addEventListener("click", function() {
            localStorage.setItem("activity_" + num, document.getElementById("activity_" + num).value)
        })
    }