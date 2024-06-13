        var modal = document.getElementById("myModal");

        // Get the video element and source element
        var video = document.getElementById("myVideo");
        
        var videoSource = document.getElementById("videoSource");

        // Get the message element
        var messageDiv = document.getElementById("message");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // Get all buttons with class "myBtn"
        var btns = document.getElementsByClassName("btn-0");

        // Loop through the buttons and add the onclick event to each
        for (var i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                var videoSrc = this.getAttribute("data-video");
                var message = this.getAttribute("data-message");
                videoSource.src = videoSrc;
                messageDiv.textContent = message;
                video.load();
                modal.style.display = "block";
                video.play();
            }
        }

        // When the user clicks on <span> (x), close the modal and pause the video
        span.onclick = function() {
            modal.style.display = "none";
            video.pause();
            video.currentTime = 0; // Optional: Reset video to the beginning
        }

        // When the user clicks anywhere outside of the modal, close it and pause the video
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                video.pause();
                video.currentTime = 0; // Optional: Reset video to the beginning
            }
        }
                                    