
 // Update the label based on the selected search type
 document.getElementById('search_type').addEventListener('change', function() {
    const label = document.querySelector('label[for="search_number"]');
    if (this.value === 'policy_no') {
        label.textContent = 'ເລກທີ່ສັນຍາປະກັນໄພ';
    } else if (this.value === 'qr_no') {
        label.textContent = 'ເລກ QR';
    } else {
        label.textContent = 'ເລກທີ່ສັນຍາປະກັນໄພ ຫລື ເລກ QR';
    }
});


// Upload Image Limit on 10 Image 
document.getElementById('upload_image').addEventListener('change', function () {
    if (this.files.length > 10) {
        alert("ກະລຸນາເລືອກຮູບພາບບໍ່ເກີນ 10 ຮູບ");
        this.value = ""; // reset input
    }
});