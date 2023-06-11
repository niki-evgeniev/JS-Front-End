function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));
    let userInfo = document.getElementById('user1HiddenFields');
    buttons.forEach((b) => {
        b.addEventListener('click', ess);
    });


    function ess(e) {
        let btn = e.currentTarget;
        let parent = btn.parentElement;
        let childrens = Array.from(parent.children);
        let isCheck = childrens[4];
        let displey = childrens[9];
        if (isCheck.checked) {
            if (btn.textContent === 'Show more') {
                displey.style.display = 'block';
                btn.textContent = 'Hide it'
            } else if (btn.textContent === 'Hide it') {
                displey.style.display = 'none';
                btn.textContent = 'Show more'
            }
        }
    }
}