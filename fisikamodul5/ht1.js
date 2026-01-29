addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});

const pp = document.getElementById("pp");
const overlay = document.getElementById("overlay");
const htbtn = document.getElementById("btn1");
const exitBtn = document.getElementById("btn2");

htbtn.addEventListener("click", bijiNgitung);
exitBtn.addEventListener("click", sp);

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

const lteori = 0.000000632;

function ht1() {
    const rows = [
        { id: 1, l: 0.5, d: 0.05 },
        { id: 2, l: 1, d: 0.05 },
        { id: 3, l: 0.5, d: 0.1 },
        { id: 4, l: 1, d: 0.1 },
        { id: 5, l: 0.5, d: 0.2 },
        { id: 6, l: 1, d: 0.2 }
    ];

    rows.forEach(row => {
        const n = row.id;
        const l = row.l;
        const d = row.d;

        const y1 = parseFloat(document.getElementById(`y${n}1`).value) || 0;
        const y2 = parseFloat(document.getElementById(`y${n}2`).value) || 0;
        const y3 = parseFloat(document.getElementById(`y${n}3`).value) || 0;

        const lambda1 = (d * y1) / (l * 1);
        const lambda2 = (d * y2) / (l * 2);
        const lambda3 = (d * y3) / (l * 3);

        document.getElementById(`l${n}1`).innerText = lambda1.toExponential(2);
        document.getElementById(`l${n}2`).innerText = lambda2.toExponential(2);
        document.getElementById(`l${n}3`).innerText = lambda3.toExponential(2);
        
        const rata = (lambda1 + lambda2 + lambda3) / 3;
        document.getElementById(`la${n}`).innerText = rata.toExponential(2);

        const ksr1 = ((lambda1 - lteori) / lteori) / 100;
        const ksr2 = ((lambda2 - lteori) / lteori) / 100;
        const ksr3 = ((lambda3 - lteori) / lteori) / 100;
        const ksr4 = ((rata - lteori) / lteori) / 100;
        document.getElementById(`k0${n}1`).innerText = ksr1.toFixed(2) + "%";
        document.getElementById(`k0${n}2`).innerText = ksr2.toFixed(2) + "%";
        document.getElementById(`k0${n}3`).innerText = ksr3.toFixed(2) + "%";
        document.getElementById(`k0${n}4`).innerText = ksr4.toFixed(2) + "%";
    });
}

function ht2() {
    const rows = [
        { id: 1, l: 0.5, d: 0.05 },
        { id: 2, l: 1, d: 0.05 },
        { id: 3, l: 0.5, d: 0.1 },
        { id: 4, l: 1, d: 0.1 },
        { id: 5, l: 0.5, d: 0.2 },
        { id: 6, l: 1, d: 0.2 }
    ];

    rows.forEach(row => {
        const n = row.id;
        const l = row.l;
        const d = row.d;

        const y1 = parseFloat(document.getElementById(`2y${n}1`).value) || 0;
        const y2 = parseFloat(document.getElementById(`2y${n}2`).value) || 0;
        const y3 = parseFloat(document.getElementById(`2y${n}3`).value) || 0;

        const lambda1 = (d * y1) / (l * 1);
        const lambda2 = (d * y2) / (l * 2);
        const lambda3 = (d * y3) / (l * 3);

        document.getElementById(`2l${n}1`).innerText = lambda1.toExponential(2);
        document.getElementById(`2l${n}2`).innerText = lambda2.toExponential(2);
        document.getElementById(`2l${n}3`).innerText = lambda3.toExponential(2);
        
        const rata = (lambda1 + lambda2 + lambda3) / 3;
        document.getElementById(`2la${n}`).innerText = rata.toExponential(2);

        const ksr1 = ((lambda1 - lteori) / lteori) / 100;
        const ksr2 = ((lambda2 - lteori) / lteori) / 100;
        const ksr3 = ((lambda3 - lteori) / lteori) / 100;
        const ksr4 = ((rata - lteori) / lteori) / 100;
        document.getElementById(`2k0${n}1`).innerText = ksr1.toFixed(2) + "%";
        document.getElementById(`2k0${n}2`).innerText = ksr2.toFixed(2) + "%";
        document.getElementById(`2k0${n}3`).innerText = ksr3.toFixed(2) + "%";
        document.getElementById(`2k0${n}4`).innerText = ksr4.toFixed(2) + "%";
    });
}

function ht3() {
    const rows = [
        { id: 1, l: 0.5, d: 0.05 },
        { id: 2, l: 1, d: 0.05 },
    ];

    rows.forEach(row => {
        const n = row.id;
        const l = row.l;
        const d = row.d;

        const y1 = parseFloat(document.getElementById(`3y${n}1`).value) || 0;
        const y2 = parseFloat(document.getElementById(`3y${n}2`).value) || 0;
        const y3 = parseFloat(document.getElementById(`3y${n}3`).value) || 0;

        const lambda1 = (d * y1) / (l * 1);
        const lambda2 = (d * y2) / (l * 2);
        const lambda3 = (d * y3) / (l * 3);

        document.getElementById(`3l${n}1`).innerText = lambda1.toExponential(2);
        document.getElementById(`3l${n}2`).innerText = lambda2.toExponential(2);
        document.getElementById(`3l${n}3`).innerText = lambda3.toExponential(2);
        
        const rata = (lambda1 + lambda2 + lambda3) / 3;
        document.getElementById(`3la${n}`).innerText = rata.toExponential(2);

        const ksr1 = ((lambda1 - lteori) / lteori) / 100;
        const ksr2 = ((lambda2 - lteori) / lteori) / 100;
        const ksr3 = ((lambda3 - lteori) / lteori) / 100;
        const ksr4 = ((rata - lteori) / lteori) / 100;
        document.getElementById(`3k0${n}1`).innerText = ksr1.toFixed(2) + "%";
        document.getElementById(`3k0${n}2`).innerText = ksr2.toFixed(2) + "%";
        document.getElementById(`3k0${n}3`).innerText = ksr3.toFixed(2) + "%";
        document.getElementById(`3k0${n}4`).innerText = ksr4.toFixed(2) + "%";
    });
}


function bijiNgitung() {
    ht1();
    ht2();
    ht3();
}