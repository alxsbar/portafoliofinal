function moveToSelected(direction) {
    let current = $("#carousel .selected");
    let next;
    
    if (direction === "next") {
        next = current.next().length ? current.next() : $("#carousel div").first();
    } else {
        next = current.prev().length ? current.prev() : $("#carousel div").last();
    }
    
    current.removeClass("selected");
    next.addClass("selected");
}


$(document).ready(function() {
    // Eventos de clic en los botones
    $('#prev').click(function() {
        moveToSelected('prev');
    });

    $('#next').click(function() {
        moveToSelected('next');
    });
});
