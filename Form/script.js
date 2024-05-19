document.getElementById('send').addEventListener('click', function(event) {
    event.preventDefault();

    // Validasi Nama
    var inputNama = document.getElementById('nama').value;
    var popupname = document.getElementById('popup-name');
    
    var isValid = true;
    if (inputNama.trim() === '') {
        document.getElementById('nama').style.borderColor = 'red';
        popupname.classList.add('show');
        isValid = false;
    } else {
        this.style.borderColor = 'blue';
        popupname.classList.remove('show');
    }

    // Validasi Tanggal Lahir
    var inputTanggal = document.getElementById('tanggal').value;
    var popuptanggal = document.getElementById('popup-tanggal');
    var umurPop = document.getElementById('umur');
    var maxUmurPop = document.getElementById('max-umur');
    var tanggalInput = new Date(inputTanggal);
    var today = new Date();
    
    var selisihTahun = today.getFullYear() - tanggalInput.getFullYear();
    var selisihBulan = today.getMonth() - tanggalInput.getMonth();
    var selisihHari = today.getDate() - tanggalInput.getDate();
    
    if (inputTanggal.trim() === '') {
        document.getElementById('tanggal').style.borderColor = 'red';
        popuptanggal.classList.add('show');
        umurPop.classList.remove('show');
        maxUmurPop.classList.remove('show');
        isValid = false;
    } else if (selisihTahun < 17 || (selisihTahun === 17 && selisihBulan < 0) || (selisihTahun === 17 && selisihBulan === 0 && selisihHari < 0)) {
        document.getElementById('tanggal').style.borderColor = 'red';
        document.getElementById('umur').classList.add('show');
        popuptanggal.classList.remove('show');
        umurPop.classList.add('show');
        maxUmurPop.classList.remove('show');
        isValid = false;
    } else if (selisihTahun > 100) {
        document.getElementById('tanggal').style.borderColor = 'red';
        document.getElementById('umur').classList.remove('show');
        popuptanggal.classList.remove('show');
        umurPop.classList.remove('show');
        maxUmurPop.classList.add('show');
        isValid = false;
    } else {
        document.getElementById('tanggal').style.borderColor = '';
        popuptanggal.classList.remove('show');
        document.getElementById('umur').classList.remove('show');
        maxUmurPop.classList.remove('show');
    }
    

    // Validasi tempat
    var inputTempat = document.getElementById('tempat').value;
    var popuptempat = document.getElementById('popup-tempat');

    if (inputTempat.trim() === '') {
        document.getElementById('tempat').style.borderColor = 'red';
        popuptempat.classList.add('show');
        isValid = false;
    } else {
        document.getElementById('tempat').style.borderColor = '';
        popuptempat.classList.remove('show');
    }

    // Validasi Jenis Kelamin
    var maleRadio = document.getElementById('male');
    var femaleRadio = document.getElementById('female');
    var popupKelamin = document.getElementById('popup-kelamin');

    if (!maleRadio.checked && !femaleRadio.checked) {
        popupKelamin.classList.add('show');
        document.getElementsByClassName('labell:before').style.borderColor = 'red';
        isValid = false;
    } else {
        popupKelamin.classList.remove('show');
    }

    if(isValid) {
        step1.style.display = 'none';
        step2.style.display = 'block';
        step3.style.display = 'none';
        back.style.display = 'none';
        moon1.style.display = 'block';

        stepp1.style.display = 'none';
        stepp2.style.display = 'block';
        stepp3.style.display = 'none';

        document.getElementById('rocket').classList.add('rocket-animation');
    }
});

// Event listener untuk input Nama
document.getElementById('nama').addEventListener('input', function() {
    var inputNama = this.value.trim();
    var popupname = document.getElementById('popup-name');

    if (inputNama === '') {
        this.style.borderColor = 'red';
        popupname.classList.add('show');
    } else {
        this.style.borderColor = '';
        popupname.classList.remove('show');
    }
});

// Event listener untuk input Tanggal Lahir
document.getElementById('tanggal').addEventListener('input', function() {
    var inputTanggal = this.value.trim();
    var popuptanggal = document.getElementById('popup-tanggal');
    var umurPop = document.getElementById('umur');
    var maxUmurPop = document.getElementById('max-umur');

    if (inputTanggal === '') {
        this.style.borderColor = 'red';
        popuptanggal.classList.add('show');
    } else {
        this.style.borderColor = '';
        popuptanggal.classList.remove('show');
    }

    // Validasi umur
    var tanggalInput = new Date(inputTanggal);
    var today = new Date();
    var selisihTahun = today.getFullYear() - tanggalInput.getFullYear();
    var selisihBulan = today.getMonth() - tanggalInput.getMonth();
    var selisihHari = today.getDate() - tanggalInput.getDate();

    if (selisihTahun < 17 || (selisihTahun === 17 && selisihBulan < 0) || (selisihTahun === 17 && selisihBulan === 0 && selisihHari < 0)) {
        umurPop.classList.add('show');
        maxUmurPop.classList.remove('show');
        this.style.borderColor = 'red';
    } else if (selisihTahun > 100 ) {
        umurPop.classList.remove('show');
        maxUmurPop.classList.add('show');
        this.style.borderColor = 'red';
    } else {
        umurPop.classList.remove('show');
        maxUmurPop.classList.remove('show');
        this.style.borderColor = '';
    }
});

// Event listener untuk input Tempat Lahir
document.getElementById('tempat').addEventListener('input', function() {
    var inputTempat = this.value.trim();
    var popuptempat = document.getElementById('popup-tempat');

    if (inputTempat === '') {
        this.style.borderColor = 'red';
        popuptempat.classList.add('show');
    } else {
        this.style.borderColor = '';
        popuptempat.classList.remove('show');
    }
});

// Event listener untuk input Jenis Kelamin
document.getElementById('male').addEventListener('change', checkKelamin);
document.getElementById('female').addEventListener('change', checkKelamin);

function checkKelamin() {
    var popinkelamin = document.getElementById('popup-kelamin');

    if (!document.getElementById('male').checked && !document.getElementById('female').checked) {
        popinkelamin.classList.add('show');
    } else {
        popinkelamin.classList.remove('show');
    }
}