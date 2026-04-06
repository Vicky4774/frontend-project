function showTime() {
            let date = new Date();

            let hr = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();

            let format = hr >= 12 ? "PM" : "AM";

            hr = hr % 12;
            hr = hr === 0 ? 12 : hr;

            hr = hr < 10 ? "0" + hr : hr;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;

            document.getElementById("time").innerText =
                hr + ":" + min + ":" + sec;

            document.getElementById("format").innerText = format;
        }

        showTime();
        setInterval(showTime, 1000);