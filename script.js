function tambahAnggota() {
  let nama = document.getElementById("nama").value;
  let jk = document.getElementById("jk").value;
  let statusAnggota = document.getElementById("statusAnggota").value;
  let code = document.getElementById("code").value;
  let hp = document.getElementById("hp").value;
  let divisi = document.getElementById("divisi").value;
  let onoff = document.getElementById("onoff").value;

  if (!nama || !jk || !statusAnggota || !hp || !divisi || !onoff) {
    alert("Data wajib diisi!");
    return;
  }

  // AUTO CODE kalau kosong
  if (!code) {
    code = "AGT-" + Math.floor(Math.random() * 10000);
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
        <button onclick="editAnggota(${index})">Edit</button>
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

// SEARCH (FIXED)
function searchAnggota() {
  let keyword = document.getElementById("search").value.toLowerCase();
  let data = JSON.parse(localStorage.getItem("anggota")) || [];
  let list = document.getElementById("listAnggota");

  if (!list) return;

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

// EDIT ANGGOTA
function editAnggota(index) {
  let data = JSON.parse(localStorage.getItem("anggota")) || [];
  let item = data[index];

  document.getElementById("nama").value = item.nama;
  document.getElementById("jk").value = item.jk;
  document.getElementById("statusAnggota").value = item.statusAnggota;
  document.getElementById("code").value = item.code;
  document.getElementById("hp").value = item.hp;
  document.getElementById("divisi").value = item.divisi;
  document.getElementById("onoff").value = item.onoff;

  // hapus data lama
  data.splice(index, 1);
  localStorage.setItem("anggota", JSON.stringify(data));

  tampilkanAnggota();
  updateTotal();
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