;(function() {

    var collapsibleToggle = document.querySelectorAll('.collapsible-heading');

    for (var i = 0; i < collapsibleToggle.length; i++) {
        collapsibleToggle[i].addEventListener('click', function(){

            var bodyHeight = this.nextElementSibling.scrollHeight;
            var eleParent = this.parentNode;
            var eleSibling = this.nextElementSibling;

            if (document.querySelector('.selected-panel')) {
                var currentSelected = document.querySelector('.selected-panel');

                if (!eleParent.classList.contains('selected-panel')) {
                    currentSelected.firstElementChild.nextElementSibling.removeAttribute('style');
                    currentSelected.classList.remove('selected-panel');
                }
            }
            if (eleParent.classList.contains('selected-panel')) {
                eleParent.classList.remove('selected-panel');
                eleSibling.removeAttribute('style');
            } else {
                eleParent.classList.add('selected-panel');
                eleSibling.style.maxHeight = bodyHeight + "px";
            }

        }, false);
    }

})();
