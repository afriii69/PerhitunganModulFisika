addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});

const pp = document.getElementById("pp");
const overlay = document.getElementById("overlay");
const exitBtn = document.getElementById("btn2");
const htbtn = document.getElementById("btn1");

exitBtn.addEventListener("click", sp);
htbtn.addEventListener("click", bijiNgitung);

function sp() {
    pp.style.display = "block";
    overlay.style.display = "block";
}

function resN() {
    pp.style.display = "none";
    overlay.style.display = "none";
}

function resY() {
    location.reload();
}



// =========================== DATA CAL ======================== //
const mo = 4 * 3.1415926535897 * 0.0000001;

function cal1() {
    const rows = [7, 6, 5];

    rows.forEach(row => {
        const n = row;
        const t = 1; //tabel 

        const tl = parseFloat(document.getElementById(`tl${t}`).value);
        const vtab = parseFloat(document.getElementById(`vt${t}`).value) || 0;


        const i1 = parseFloat(document.getElementById(`${t}I${n}1`).value) || 0;
        const i2 = parseFloat(document.getElementById(`${t}I${n}2`).value) || 0;
        const i3 = parseFloat(document.getElementById(`${t}I${n}3`).value) || 0;
        const i4 = parseFloat(document.getElementById(`${t}I${n}4`).value) || 0;
        const i5 = parseFloat(document.getElementById(`${t}I${n}5`).value) || 0;

        const all1 = [i1, i2, i3, i4, i5];

        function suma(dat) {
            const sum = dat.reduce((acc, cur) => acc + cur, 0);
            return sum;
        }

        const kalisep3 = (suma(all1) * 0.001);

        document.getElementById(`${t}i${n}x`).innerText = (kalisep3).toExponential(3);
        document.getElementById(`${t}i${n}r`).innerText = (kalisep3 / all1.length).toExponential(3);

        // jl: jumlah lilitan; dat: data percobaan
        function forb(jl, dat) {
            const total = mo * jl * dat / vtab;
            return total;
        }

        document.getElementById(`${t}b${n}1`).innerText = forb(tl, (i1 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}2`).innerText = forb(tl, (i2 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}3`).innerText = forb(tl, (i3 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}4`).innerText = forb(tl, (i4 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}5`).innerText = forb(tl, (i5 * 0.001)).toExponential(3);
    })
}

function cal2() {
    const rows = [7, 6, 5];

    rows.forEach(row => {
        const n = row;
        const t = 2; //tabel 

        const tl = parseFloat(document.getElementById(`tl${t}`).value);
        const vtab = parseFloat(document.getElementById(`vt${t}`).value) || 0;


        const i1 = parseFloat(document.getElementById(`${t}I${n}1`).value) || 0;
        const i2 = parseFloat(document.getElementById(`${t}I${n}2`).value) || 0;
        const i3 = parseFloat(document.getElementById(`${t}I${n}3`).value) || 0;
        const i4 = parseFloat(document.getElementById(`${t}I${n}4`).value) || 0;
        const i5 = parseFloat(document.getElementById(`${t}I${n}5`).value) || 0;

        const all1 = [i1, i2, i3, i4, i5];

        function suma(dat) {
            const sum = dat.reduce((acc, cur) => acc + cur, 0);
            return sum;
        }

        const kalisep3 = (suma(all1) * 0.001);

        document.getElementById(`${t}i${n}x`).innerText = (kalisep3).toExponential(3);
        document.getElementById(`${t}i${n}r`).innerText = (kalisep3 / all1.length).toExponential(3);

        // jl: jumlah lilitan; dat: data percobaan
        function forb(jl, dat) {
            const total = mo * jl * dat / vtab;
            return total;
        }

        document.getElementById(`${t}b${n}1`).innerText = forb(tl, (i1 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}2`).innerText = forb(tl, (i2 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}3`).innerText = forb(tl, (i3 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}4`).innerText = forb(tl, (i4 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}5`).innerText = forb(tl, (i5 * 0.001)).toExponential(3);
    })
}

function cal3() {
    const rows = [7, 6, 5];

    rows.forEach(row => {
        const n = row;
        const t = 3; //tabel 

        const tl = parseFloat(document.getElementById(`tl${t}`).value);
        const vtab = parseFloat(document.getElementById(`vt${t}`).value) || 0;

        const i1 = parseFloat(document.getElementById(`${t}I${n}1`).value) || 0;
        const i2 = parseFloat(document.getElementById(`${t}I${n}2`).value) || 0;
        const i3 = parseFloat(document.getElementById(`${t}I${n}3`).value) || 0;
        const i4 = parseFloat(document.getElementById(`${t}I${n}4`).value) || 0;
        const i5 = parseFloat(document.getElementById(`${t}I${n}5`).value) || 0;

        const all1 = [i1, i2, i3, i4, i5];

        function suma(dat) {
            const sum = dat.reduce((acc, cur) => acc + cur, 0);
            return sum;
        }

        const kalisep3 = (suma(all1) * 0.001);

        document.getElementById(`${t}i${n}x`).innerText = (kalisep3).toExponential(3);
        document.getElementById(`${t}i${n}r`).innerText = (kalisep3 / all1.length).toExponential(3);

        // jl: jumlah lilitan; dat: data percobaan
        function forb(jl, dat) {
            const total = mo * jl * dat / vtab;
            return total;
        }

        document.getElementById(`${t}b${n}1`).innerText = forb(tl, (i1 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}2`).innerText = forb(tl, (i2 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}3`).innerText = forb(tl, (i3 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}4`).innerText = forb(tl, (i4 * 0.001)).toExponential(3);
        document.getElementById(`${t}b${n}5`).innerText = forb(tl, (i5 * 0.001)).toExponential(3);
    })
}


function bijiNgitung() {
    cal1();
    cal2();
    cal3();
}
