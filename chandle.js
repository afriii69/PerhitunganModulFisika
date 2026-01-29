
const scok = document.getElementById('blyatman');

scok.addEventListener('click', () => {
    sco();
});

fetch('./unable/i.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Config gagal dimuat');
        }
        return response.json();
    })
    .then(val => {
        const ini = val.ideaO.data; 
        const bUrl = val.idea0.ur; 
        const kptol = val.kasar; 

        async function lCom() {
            try {
                const res = await fetch(bUrl + ini);
                const data = await res.json();

                const ct = document.getElementById("kCon");
                ct.innerHTML = '';

                data.forEach(item => {
                    const div = document.createElement("div");
                    div.className = "komclass";
                    div.innerHTML = `
                        <strong>${item.nme || "MahaSigma"}</strong>
                        &nbsp;
                        <small style="color:gray;">
                            (${item.wk || "waktu tidak diketahui"})
                        </small><br>
                        ${item.cmn || ""}
                    `;
                    ct.appendChild(div);
                });
            } catch (err) {
                console.error("Gagal memuat Komen:", err);
            }
        }

        window.sco = async function sCom() {
            const nme = document.getElementById("nme").value || "MahaSigma";
            const cmn = document.getElementById("cmn").value.trim();
            if (!cmn) return alert("Komentar ga boleh kosong");

            // filter kata kasar (tetap!)
            const lower = cmn.toLowerCase();
            const toxic = kptol.some(k => lower.includes(k));
            if (toxic) return alert("Bahasanya tolong dijaga");

            const wk = new Date().toLocaleString('id-ID', {
                dateStyle: 'short',
                timeStyle: 'short'
            });

            try {
                await fetch(bUrl + ini, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nme, cmn, wk })
                });

                document.getElementById("cmn").value = "";
                lCom();
            } catch (err) {
                alert("Gagal kirim komentar");
                console.error(err);
            }
        };

        lCom();
    })
    .catch(err => {
        console.error("Terjadi kesalahan:", err);
    });
