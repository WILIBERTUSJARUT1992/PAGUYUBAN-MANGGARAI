function tambahAnggota() {
  let nama = document.getElementById("nama").value;
  let jk = document.getElementById("jk").value;
  let statusAnggota = document.getElementById("statusAnggota").value;
  let code = document.getElementById("code").value;
  let hp = document.getElementById("hp").value;
  let divisi = document.getElementById("divisi").value;
  let onoff = document.getElementById("onoff").value;

  if (!nama || !jk || !statusAnggota || !code || !hp || !divisi || !onoff) {
    alert("Semua data harus diisi!");
    return;
  }

  let data = JSON.parse(localStorage.getItem("anggota")) || [];

  data.push({
    nama,
    jk,
    statusAnggota,
    code,
    hp,
    divisi,
    onoff
  });

  localStorage.setItem("anggota", JSON.stringify(data));

  clearForm();
  tampilkanAnggota();
  updateTotal();
}

// TAMPIL DATA
function tampilkanAnggota() {
  let data = JSON.parse(localStorage.getItem("anggota")) || [];
  let list = document.getElementById("listAnggota");

  if (!list) return;

  list.innerHTML = "";

  data.forEach((item, index) => {
    list.innerHTML += `
      <li style="border:1px solid #00ff66; padding:10px; margin:10px 0;">
        👤 ${item.nama}<br>
        ⚧ ${item.jk}<br>
        📌 ${item.statusAnggota}<br>
        🆔 ${item.code}<br>
        📱 ${item.hp}<br>
        🏢 ${item.divisi}<br>
        🔘 ${item.onoff}<br><br>

        <button onclick="hapusAnggota(${index})">Hapus</button>
      </li>
    `;
  });
}

// HAPUS 1
function hapusAnggota(index) {
  let data = JSON.parse(localStorage.getItem("anggota")) || [];
  data.splice(index, 1);
  localStorage.setItem("anggota", JSON.stringify(data));

  tampilkanAnggota();
  updateTotal();
}

// HAPUS SEMUA
function hapusSemua() {
  localStorage.removeItem("anggota");

  tampilkanAnggota();
  updateTotal();
}

// SEARCH
function searchAnggota() {
  let keyword = document.getElementById("search").value.toLowerCase();
  let data = JSON.parse(localStorage.getItem("anggota")) || [];
  let list = document.getElementById("listAnggota");

  list.innerHTML = "";

  data
    .filter(item => item.nama.toLowerCase().includes(keyword))
    .forEach((item, index) => {
      list.innerHTML += `
        <li style="border:1px solid #00ff66; padding:10px; margin:10px 0;">
          👤 ${item.nama} - ${item.divisi}
        </li>
      `;
    });
}

// TOTAL ANGGOTA
function updateTotal() {
  let data = JSON.parse(localStorage.getItem("anggota")) || [];
  let total = document.getElementById("totalAnggota");

  if (total) {
    total.innerText = data.length + " User";
  }
}

// CLEAR FORM
function clearForm() {
  document.getElementById("nama").value = "";
  document.getElementById("jk").value = "";
  document.getElementById("statusAnggota").value = "";
  document.getElementById("code").value = "";
  document.getElementById("hp").value = "";
  document.getElementById("divisi").value = "";
  document.getElementById("onoff").value = "";
}