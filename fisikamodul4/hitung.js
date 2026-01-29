let c1 = Math.pow(1, 2);
let c2 = Math.pow(0.9397, 2);
let c3 = Math.pow(0.7660, 2);
let c4 = Math.pow(0.5, 2);
let c5 = Math.pow(0.1736, 2);
let c6 = Math.pow(-0.1736, 2);
let c7 = Math.pow(-0.5, 2);
let c8 = Math.pow(-0.7760, 2);
let c9 = Math.pow(-0.9397, 2);
let c0 = Math.pow(-1, 2);


addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});


function bijisegalanya() {
    //in1 nin1
    const arr = [
        { i: "in", o: "nin", v: "s" },
        { i: "din", o: "dndin", v: "d" },
        { i: "tin", o: "dntin", v: "t" },
        { i: "emp", o: "dnemp", v: "e" }
    ]

    arr.forEach(al => {
        const i = al.i;
        const o = al.o;
        const v = al.v;

        const v1 = +document.getElementById(`${i}1`).value;
        const v2 = +document.getElementById(`${i}2`).value;
        const v3 = +document.getElementById(`${i}3`).value;
        const v4 = +document.getElementById(`${i}4`).value;
        const v5 = +document.getElementById(`${i}5`).value;
        const v6 = +document.getElementById(`${i}6`).value;
        const v7 = +document.getElementById(`${i}7`).value;
        const v8 = +document.getElementById(`${i}8`).value;
        const v9 = +document.getElementById(`${i}9`).value;
        const v0 = +document.getElementById(`${i}0`).value;

        let h1 = v1 * c1;
        let h2 = v2 * c2;
        let h3 = v3 * c3;
        let h4 = v4 * c4;
        let h5 = v5 * c5;
        let h6 = v6 * c6;
        let h7 = v7 * c7;
        let h8 = v8 * c8;
        let h9 = v9 * c9;
        let h0 = v0 * c0;

        document.getElementById(`${o}1`).value = h1.toFixed(3);
        document.getElementById(`${o}2`).value = h2.toFixed(3);
        document.getElementById(`${o}3`).value = h3.toFixed(3);
        document.getElementById(`${o}4`).value = h4.toFixed(3);
        document.getElementById(`${o}5`).value = h5.toFixed(3);
        document.getElementById(`${o}6`).value = h6.toFixed(3);
        document.getElementById(`${o}7`).value = h7.toFixed(3);
        document.getElementById(`${o}8`).value = h8.toFixed(3);
        document.getElementById(`${o}9`).value = h9.toFixed(3);
        document.getElementById(`${o}0`).value = h0.toFixed(3);

        const all1 = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v0];
        const all2 = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h0];

        function hrt(dat) {
            const total = dat.reduce((sum, val) => sum + val, 0);
            return total / 10;
        }

        function hsd(dat, rt) {
            const n = dat.length;
            const varians = dat.reduce((sum, val) => sum + Math.pow(val - rt, 2), 0) / (n * (n - 1));
            return Math.sqrt(varians);
        }

        function hkt(delI, rt) {
            return (1 - (delI / rt)) * 100;
        }

        //rlm rlo s k
        document.getElementById(`${v}rlm`).value = hrt(all1).toFixed(3);
        document.getElementById(`${v}rlo`).value = hrt(all2).toFixed(3);

        document.getElementById(`${v}slm`).value = hsd(all1, (hrt(all1))).toFixed(3);
        document.getElementById(`${v}slo`).value = hsd(all2, (hrt(all2))).toFixed(3);

        document.getElementById(`${v}klm`).value = hkt((hsd(all1, (hrt(all1)))), (hrt(all1))).toFixed(3) + '%';
        document.getElementById(`${v}klo`).value = hkt((hsd(all2, (hrt(all2)))), (hrt(all2))).toFixed(3) + '%';

    })

}