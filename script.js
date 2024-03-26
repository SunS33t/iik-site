function onDirectionItemClick(event) {
    const currentTarget = event.currentTarget.parentElement;
    const details = currentTarget.getElementsByClassName('direction-details')[0];
    if (details.classList.contains('d-none')) {
        details.classList.remove('d-none');
    } else {
        details.classList.add('d-none');
    }
    const btn = currentTarget.getElementsByClassName('btn-icon')[0];
    if (btn.classList.contains('btn-icon--reverted')) {
        btn.classList.remove('btn-icon--reverted');
    } else {
        btn.classList.add('btn-icon--reverted');
    }

    const circleContainer = currentTarget.getElementsByClassName('circles')[0];

    let circles = currentTarget.getElementsByClassName('circle');

    if (circleContainer.getAttribute("isExpanded") === "true") {
        circles = [...circles];
        circleContainer.setAttribute("isExpanded", "false");
    }
    else {
        circles = [...circles].reverse();
        circleContainer.setAttribute("isExpanded", "true");
    }

    circles.forEach(function(circle, i){
        setTimeout(function(){
            changeCircleOpacity(circle);
        }, 50 * ++i)
     });
}

function changeCircleOpacity(circle){
    if (circle.classList.contains('opacity-1')) {
        circle.classList.remove('opacity-1');
        circle.classList.add('opacity-0');
    } else {
        circle.classList.remove('opacity-0');
        circle.classList.add('opacity-1');
    }
}


function selectEvent() {
    const selectEvent = document.getElementById('select-event');
    var e = new MouseEvent("mousedown");
    selectEvent.dispatchEvent(e);
    console.log(selectEvent);
}
