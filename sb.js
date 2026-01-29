const sb = document.getElementById('sb');
const tgb = document.getElementById('tgb');
const cBtn = document.getElementById('c');

tgb.addEventListener('click', () => {
    if (sb.style.transform === 'translateX(0px)') {
        sb.style.transform = 'translateX(250px)';
        tgb.style.display = 'none';
    } else {
        sb.style.transform = 'translateX(0)';
        tgb.style.display = 'none';
    }
});

cBtn.addEventListener('click', () => {
    sb.style.transform = 'translateX(250px)';
    tgb.style.display = 'block'
});

// =================== SHOW/HIDE COMMENT ====================== //
const hidek = document.getElementById('hidek');
const showk = document.getElementById('showk');
const hidehandle = document.getElementById('hidehandle');

hidek.addEventListener('click', () => {
    hidehandle.style.display = 'none';
    hidek.style.display = 'none';
    showk.style.display = '';
});

showk.addEventListener('click', () => {
    hidehandle.style.display = '';
    hidek.style.display = '';
    showk.style.display = 'none';
})


// ==================== HANDLE COPY =========================== //
const alley = [1, 2, 3, 4, 5, 6];
alley.forEach(all => {
    const n = all;;

    const cbtn = document.getElementById(`cbtn${n}`);
    const ttc = document.getElementById(`ttc${n}`).innerText;

    cbtn.addEventListener('click', () => {
        navigator.clipboard.writeText(ttc)
            .then(() => {
                cbtn.innerHTML = "Copied! ✅";
                cbtn.classList.add('centang');
            })
            .catch(err => {
                console.error('Gagal menyalin teks:', err);
            });
    });
});