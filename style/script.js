var calendar = document.getElementById("calendar")

document.getElementById("btn_1").addEventListener("click",

    function() {
        console.log(document.getElementById("activity_1").value)

        localStorage.setItem("activity_1", document.getElementById("activity_1").value)
    });

    function loadData(activity_num) {
        var activity = localStorage.getItem('activity_' + activity_num)
        document.getElementById('activity_' + activity_num).value = activity;
    }

    loadData(1)