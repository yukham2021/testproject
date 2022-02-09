var action = document.getElementById('fromcurrency');
var box2 = document.getElementById('box2');
var box1 = document.getElementById('box1');

action.addEventListener('change', function () {

    var from_value = box1.value;
    var value1 = action.options[action.selectedIndex].value;

    if (value1 == "myanmar") {
        var select = document.getElementById('tocurrency');
        var value = select.options[select.selectedIndex].value;
        if (value == "tai") {
            var to_value = from_value / 30;
        } else if (value == "china") {
            var to_value = from_value / 150;
        } else if (value == "us") {
            var to_value = from_value / 1500;
        } else if (value == "singapore") {
            var to_value = from_value / 1200;
        } else {
            var to_value = from_value;
        }
        box2.value = to_value;
    }

    if (value1 == "tai") {
        var select = document.getElementById('tocurrency');
        var value = select.options[select.selectedIndex].value;
        if (value == "myanmar") {
            var to_value = from_value * 30;
        } else if (value == "china") {
            var to_value = from_value / 5;
        } else if (value == "us") {
            var to_value = from_value / 50;
        } else if (value == "singapore") {
            var to_value = from_value / 40;
        } else {
            var to_value = from_value;
        }
        box2.value = to_value;
    }

    if (value1 == "china") {
        var select = document.getElementById('tocurrency');
        var value = select.options[select.selectedIndex].value;
        if (value == "myanmar") {
            var to_value = from_value * 150;
        } else if (value == "tai") {
            var to_value = from_value * 5;
        } else if (value == "us") {
            var to_value = from_value / 10;
        } else if (value == "singapore") {
            var to_value = from_value / 8;
        } else {
            var to_value = from_value;
        }
        box2.value = to_value;
    }

    if (value1 == "singapore") {
        var select = document.getElementById('tocurrency');
        var value = select.options[select.selectedIndex].value;
        if (value == "myanmar") {
            var to_value = from_value * 1200;
        } else if (value == "china") {
            var to_value = from_value * 8;
        } else if (value == "us") {
            var to_value = from_value * 0.8;
        } else if (value == "tai") {
            var to_value = from_value * 40;
        } else {
            var to_value = from_value;
        }
        box2.value = to_value;
    }

    if (value1 == "us") {
        var select = document.getElementById('tocurrency');
        var value = select.options[select.selectedIndex].value;

        if (value == "myanmar") {
            var to_value = from_value * 1500;
        } else if (value == "china") {
            var to_value = from_value * 10;
        } else if (value == "tai") {
            var to_value = from_value * 50;
        } else if (value == "singapore") {
            var to_value = from_value / 0.8;
        } else {
            var to_value = from_value;
        }
        box2.value = to_value;
    }
})

var select = document.getElementById('tocurrency');

select.addEventListener('change', function () {

    var box2_value = box2.value;
    var value2 = select.options[select.selectedIndex].value;

    if (value2 == "myanmar") {
        var action = document.getElementById('fromcurrency');
        var value = action.options[action.selectedIndex].value;

        if (value == "tai") {
            var box1_value = box2_value / 30;
        } else if (value == "china") {
            var box1_value = box2_value / 150;
        } else if (value == "us") {
            var box1_value = box2_value / 1500;
        } else if (value == "singapore") {
            var box1_value = box2_value / 1200;
        } else {
            var box1_value = box2_value;
        }
        box1.value = box1_value;
    }

    if (value2 == "tai") {
        var action = document.getElementById('fromcurrency');
        var value = action.options[action.selectedIndex].value;

        if (value == "myanmar") {
            var box1_value = box2_value * 30;
        } else if (value == "china") {
            var box1_value = box2_value / 5;
        } else if (value == "us") {
            var box1_value = box2_value / 50;
        } else if (value == "singapore") {
            var box1_value = box2_value / 40;
        } else {
            var box1_value = box2_value;
        }
        box1.value = box1_value;
    }

    if (value2 == "china") {
        var action = document.getElementById('fromcurrency');
        var value = action.options[action.selectedIndex].value;

        if (value == "tai") {
            var box1_value = box2_value * 150;
        } else if (value == "myanmar") {
            var box1_value = box2_value * 5;
        } else if (value == "us") {
            var box1_value = box2_value / 10;
        } else if (value == "singapore") {
            var box1_value = box2_value / 8;
        } else {
            var box1_value = box2_value;
        }
        box1.value = box1_value;
    }

    if (value2 == "singapore") {
        var action = document.getElementById('fromcurrency');
        var value = action.options[action.selectedIndex].value;

        if (value == "tai") {
            var box1_value = box2_value * 1200;
        } else if (value == "china") {
            var box1_value = box2_value * 8;
        } else if (value == "us") {
            var box1_value = box2_value * 0.8;
        } else if (value == "myanmar") {
            var box1_value = box2_value * 40;
        } else {
            var box1_value = box2_value;
        }
        box1.value = box1_value;
    }

    if (value2 == "us") {
        var action = document.getElementById('fromcurrency');
        var value = action.options[action.selectedIndex].value;

        if (value == "tai") {
            var box1_value = box2_value * 1500;
        } else if (value == "china") {
            var box1_value = box2_value * 10;
        } else if (value == "myanmar") {
            var box1_value = box2_value * 50;
        } else if (value == "singapore") {
            var box1_value = box2_value / 0.8;
        } else {
            var box1_value = box2_value;
        }
        box1.value = box1_value;
    }
})

box1.addEventListener('keyup', function () {

    var from_value = box1.value;
    var value1 = action.options[action.selectedIndex].value;

    if (value1 == "myanmar") {
        var select = document.getElementById('tocurrency');
        var value = select.options[select.selectedIndex].value;
        if (value == "tai") {
            var to_value = from_value / 30;
        } else if (value == "china") {
            var to_value = from_value / 150;
        } else if (value == "us") {
            var to_value = from_value / 1500;
        } else if (value == "singapore") {
            var to_value = from_value / 1200;
        } else {
            var to_value = from_value;
        }
        box2.value = to_value;
    }

    if (value1 == "tai") {
        var select = document.getElementById('tocurrency');
        var value = select.options[select.selectedIndex].value;
        if (value == "myanmar") {
            var to_value = from_value * 30;
        } else if (value == "china") {
            var to_value = from_value / 5;
        } else if (value == "us") {
            var to_value = from_value / 50;
        } else if (value == "singapore") {
            var to_value = from_value / 40;
        } else {
            var to_value = from_value;
        }
        box2.value = to_value;
    }

    if (value1 == "china") {
        var select = document.getElementById('tocurrency');
        var value = select.options[select.selectedIndex].value;
        if (value == "myanmar") {
            var to_value = from_value * 150;
        } else if (value == "tai") {
            var to_value = from_value * 5;
        } else if (value == "us") {
            var to_value = from_value / 10;
        } else if (value == "singapore") {
            var to_value = from_value / 8;
        } else {
            var to_value = from_value;
        }
        box2.value = to_value;
    }

    if (value1 == "singapore") {
        var select = document.getElementById('tocurrency');
        var value = select.options[select.selectedIndex].value;
        if (value == "myanmar") {
            var to_value = from_value * 1200;
        } else if (value == "china") {
            var to_value = from_value * 8;
        } else if (value == "us") {
            var to_value = from_value * 0.8;
        } else if (value == "tai") {
            var to_value = from_value * 40;
        } else {
            var to_value = from_value;
        }
        box2.value = to_value;
    }

    if (value1 == "us") {
        var select = document.getElementById('tocurrency');
        var value = select.options[select.selectedIndex].value;

        if (value == "myanmar") {
            var to_value = from_value * 1500;
        } else if (value == "china") {
            var to_value = from_value * 10;
        } else if (value == "tai") {
            var to_value = from_value * 50;
        } else if (value == "singapore") {
            var to_value = from_value / 0.8;
        } else {
            var to_value = from_value;
        }
        box2.value = to_value;
    }
})

box2.addEventListener('keyup',function(){

    var box2_value = box2.value;
    var value2 = select.options[select.selectedIndex].value;

    if (value2 == "myanmar") {
        var action = document.getElementById('fromcurrency');
        var value = action.options[action.selectedIndex].value;

        if (value == "tai") {
            var box1_value = box2_value / 30;
        } else if (value == "china") {
            var box1_value = box2_value / 150;
        } else if (value == "us") {
            var box1_value = box2_value / 1500;
        } else if (value == "singapore") {
            var box1_value = box2_value / 1200;
        } else {
            var box1_value = box2_value;
        }
        box1.value = box1_value;
    }

    if (value2 == "tai") {
        var action = document.getElementById('fromcurrency');
        var value = action.options[action.selectedIndex].value;

        if (value == "myanmar") {
            var box1_value = box2_value * 30;
        } else if (value == "china") {
            var box1_value = box2_value / 5;
        } else if (value == "us") {
            var box1_value = box2_value / 50;
        } else if (value == "singapore") {
            var box1_value = box2_value / 40;
        } else {
            var box1_value = box2_value;
        }
        box1.value = box1_value;
    }

    if (value2 == "china") {
        var action = document.getElementById('fromcurrency');
        var value = action.options[action.selectedIndex].value;

        if (value == "tai") {
            var box1_value = box2_value * 150;
        } else if (value == "myanmar") {
            var box1_value = box2_value * 5;
        } else if (value == "us") {
            var box1_value = box2_value / 10;
        } else if (value == "singapore") {
            var box1_value = box2_value / 8;
        } else {
            var box1_value = box2_value;
        }
        box1.value = box1_value;
    }

    if (value2 == "singapore") {
        var action = document.getElementById('fromcurrency');
        var value = action.options[action.selectedIndex].value;

        if (value == "tai") {
            var box1_value = box2_value * 1200;
        } else if (value == "china") {
            var box1_value = box2_value * 8;
        } else if (value == "us") {
            var box1_value = box2_value * 0.8;
        } else if (value == "myanmar") {
            var box1_value = box2_value * 40;
        } else {
            var box1_value = box2_value;
        }
        box1.value = box1_value;
    }

    if (value2 == "us") {
        var action = document.getElementById('fromcurrency');
        var value = action.options[action.selectedIndex].value;

        if (value == "tai") {
            var box1_value = box2_value * 1500;
        } else if (value == "china") {
            var box1_value = box2_value * 10;
        } else if (value == "myanmar") {
            var box1_value = box2_value * 50;
        } else if (value == "singapore") {
            var box1_value = box2_value / 0.8;
        } else {
            var box1_value = box2_value;
        }
        box1.value = box1_value;
    }  
})
