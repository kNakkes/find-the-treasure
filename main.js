var getRandomNumber = function (size){
            return Math.floor(Math.random() * size);
        };
        var getDistance = function(event, target) {
            var diffX=event.offsetX - target.x;
            var diffY=event.offsetY - target.y;
            return Math.sqrt((diffX*diffX)+(diffY*diffY))
        };
        var getDistanceHint = function(distance){
            if(distance < 30){
                return "Get burned!"
            }else if(distance < 50){
                return "Very hot!"
            }else if(distance < 80){
                return "Hot!"
            }else if (distance < 160){
                return "Warm"
            }else if (distance < 320){
                return "Cold"
            }else if (distance < 480){
                return "Very cold"
            }else{
                return "Freeze"
            }
        };
        var width = 600;
        var height = 600;
        var clicks = 0;
        var target = {
            x: getRandomNumber(width),
            y: getRandomNumber(height),
        };
        $("#map").click(function(event){
            clicks++;
            var distance = getDistance(event,target);
            var distanceHint = getDistanceHint(distance);
            $("#distance").text(distanceHint);
            if(distance < 8) {
                alert('Клайд найден! Сделано кликов: ' + clicks)
            }
        });
