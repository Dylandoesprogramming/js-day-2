function scrollDown() {
   window.scrollTo(0, parseInt(window.scrollY / window.innerHeight) * window.innerHeight + window.innerHeight)
}
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to next buttons
    var nextButtons = document.querySelectorAll(".next-button")
    for (var i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', function(event) {
            console.log("Clicked")
            scrollDown()
        })
    }

    // Array Practice with Songs
    var songInput = document.getElementById("song-input")
    var addSongsButton = document.getElementById("add-songs")
    addSongsButton.addEventListener('click', function(event) {
        eval(songInput.value)
        if (songs) {
            var songList = document.getElementById("song-list")
            while (songList.firstChild) {
                songList.removeChild(songList.firstChild)
            }
            songs.forEach((song, index) => {
                var li = document.createElement("li")
                li.innerText = index + 1 + ". " + song;
                songList.appendChild(li)
            })
        }
    })

    // Object Practice with Profiles
    var profileInput = document.getElementById("profile-input")
    var addProfileButton = document.getElementById("add-profile")
    addProfileButton.addEventListener('click', function(event) {
        eval(profileInput.value)
        if (profile) {
            var profileList = document.getElementById("profile-list")
            while (profileList.firstChild) {
                profileList.removeChild(profileList.firstChild)
            }
            for (var key in profile) {
                var li = document.createElement("li")
                li.innerText = key + ": " + profile[key];
                profileList.appendChild(li)
            }
        }
    })
})

function sampleDebugging() {
    debugger;
    var count = 0;
    var nums = [1, 2, 3, 4, 5, 6];
    for (var i = 0; i < nums.length - 1; i++) {
        count++;
        nums[i] = nums[i] + nums[i + 1]
    }
}
// Uncomment the line below to see the debugger in action.
// sampleDebugging()