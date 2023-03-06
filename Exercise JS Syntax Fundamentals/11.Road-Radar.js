function radar(speed, limit) {
    let status;

    switch (limit) {
        case 'motorway':
            if (speed > 130) {
                if (speed - 130 <= 20) {
                    status = 'speeding';
                } else if (speed - 130 <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                let sp = speed - 130;
                console.log(`The speed is ${sp} km/h faster than the allowed speed of 130 - ${status}`);
            }else{
                console.log(`Driving ${speed} km/h in a 130 zone`);
            }
            break;
        case 'interstate':
            if (speed > 90) {
                if (speed - 90 <= 20) {
                    status = 'speeding';
                } else if (speed - 90 <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                let sp = speed - 90;
                console.log(`The speed is ${sp} km/h faster than the allowed speed of 90 - ${status}`);
            }else{
                console.log(`Driving ${speed} km/h in a 90 zone`);
            }
            break;
        case 'city':
            if (speed > 50) {
                if (speed - 50 <= 20) {
                    status = 'speeding';
                } else if (speed - 50 <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                let sp = speed - 50;
                console.log(`The speed is ${sp} km/h faster than the allowed speed of 50 - ${status}`);
            }else{
                console.log(`Driving ${speed} km/h in a 50 zone`);
            }
            break;
            case 'residential':
            if (speed > 20) {
                if (speed - 20 <= 20) {
                    status = 'speeding';
                } else if (speed - 20 <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                let sp = speed - 20;
                console.log(`The speed is ${sp} km/h faster than the allowed speed of 20 - ${status}`);
            }else{
                console.log(`Driving ${speed} km/h in a 20 zone`);
            }
            break;
    }
}



// radar(200, 'motorway');

radar(21, 'residential');