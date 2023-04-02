class Product {
    constructor(id, photo, discount, name, price, priceDiscount) {
        this.id = id,
            this.photo = photo,
            this.discount = discount,
            this.name = name,
            this.priceDiscount = priceDiscount,
            this.price = price
    }
}

let clothes = [
    new Product(1, "source/1920x2880cFOYVLeT0AmK71cZhAM3eMRGaBuXLvE5Abqh8eGQ.jpeg", "20%", "1 | TÚI HỘP ĐEO CHÉO DA XÁM | + 2 MÀU", 1599000 - (1599000 * 0.2), 1599000),
    new Product(2, "source/1920x2880kTmpkWBWoQwq3Teb9PfcGrdtkRrpN3fOc8Ama3Q8.jpeg", "20%", "2 | TÚI HỘP ĐEO CHÉO DA ĐEN", 1599000 - (1599000 * 0.2), 1599000),
    new Product(3, "source/1920x2880souYxL2DYpuLez0jIN0Mi2iw3GxVaPvkhcHS1Bew.jpeg", "20%", "3 | TÚI HỘP THƯ ĐEO CHÉO DA NÂU", 1999000 - (1999000 * 0.2), 1999000),
    new Product(4, "source/1920x2880YAZegbFO8vkDp84hoeKLXe2yEEJoaj7zVw8BrEdD.jpeg", "20%", "4 | TÚI HỘP THƯ ĐEO CHÉO DA ĐEN", 1999000 - (1999000 * 0.2), 1999000),
    new Product(5, "source/1920x2880mtfgm5ZhYpw5oAwLRU3YsaDRug47hwfg1z6jZJ73.jpeg", "20%", "5 | TÚI XÁCH DA ĐEN/ XÁM", 3499000 - (3499000 * 0.2), 3499000),
    new Product(6, "source/1920x2880MHYc8tlzVNPMRaWKlIwagUbHeiAyIC7CurLNBGht.jpeg", "20%", "6 | BALO DÂY RÚT DA TRẮNG/ĐEN", 3499000 - (3499000 * 0.2), 3499000),
    new Product(7, "source/1920x2880pHiDODMh6GpNdGTZmCfJvgwL6TrCZ8CzrAKtbn7z.png", "20%", "7 | ÁO THUN TAY NGẮN SS4 G3 TRẮNG | +3 MÀU", 479000 - (479000 * 0.2), 479000),
    new Product(8, "source/1920x2880miYVrfusRPIkZgEnEe3GemFmTz8U3TT68JpK3XaD.png", "20%", "8 | ÁO THUN TAY NGẮN SS4 G3 XÁM | +3 MÀU", 479000 - (479000 * 0.2), 479000),
    new Product(9, "source/1920x2880YDQwNuO2m4N4sV91dJcVenNlaxGuxY1ZPLL5A46L.jpeg", "20%", "9 | ÁO THUN CÓ CỔ G2 NÂU | +4 MÀU", 609000 - (609000 * 0.2), 609000),
    new Product(10, "source/1920x2880MO31wkvNCC9taVULd2DpZPEkMWnxAM0H5xhZXNry.jpeg", "20%", "10 | QUẦN JEAN XANH | SLIM FIT", 889000 - (889000 * 0.2), 889000),
    new Product(11, "source/1920x2880QMMbQmamnto9GQonzATBg17dR7xzVJfQZ3wvbeTv.jpeg", "20%", "11 | ÁO THUN CÓ CỔ G2 XANH BERY | +4 MÀU", 609000 - (609000 * 0.2), 609000),
    new Product(12, "source/1920x2880TBcTpJLAfvVnfwetnaLtSXl7akNw6gqFDG42SRQk.jpeg", "20%", "12 | ÁO THUN CÓ CỔ G2 TÍM | +4 MÀU", 609000 - (609000 * 0.2), 609000),
]

function productClothes() {
    for (let i = 0; i < clothes.length; i++) {
        document.querySelector('.bodymrsimple').innerHTML +=
            ` <div class="mrsimple-product">
                <div class="mrsimple-photo">
                    <img class="mrsimple-photo1" src="${clothes[i].photo}" alt="">
                    <span class="icon1"><i class="fa-regular fa-heart"></i></span>
                    <span class="icon2">-20%</span>
                </div>
                <div class="mrsimple-info">
                    <p class="name">${clothes[i].name}</p>
                    <P>${formatNumber(clothes[i].price)}</P>
                    <p><del>${formatNumber(clothes[i].priceDiscount)}</del></p>
                </div>
            </div>
            ` ;
    }
}
function formatNumber(number) {
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
productClothes();

function showForm() {
    document.querySelector(".footmrsimple").style.display = "block";
}
function hideForm() {
    document.querySelector(".footmrsimple").style.display = "none";
}
class Bill {
    constructor(id, item, quantity, price) {
        this.id = id;
        this.item = item;
        this.quantity = quantity;
        this.price = price;
        this.amount = this.quantity * this.price;
    }
}


let invoices = [];

let invoices_key = "data";

function init() {
    if( localStorage.getItem(invoices_key) == null ) {
        invoices = [
            new Bill( 1 , "1 | TÚI HỘP ĐEO CHÉO DA XÁM " , 2 , 1279200),
            new Bill( 2 , "6 | BALO DÂY RÚT DA TRẮNG/ĐEN" , 2 , 2799200)
        ];
        localStorage.setItem(invoices_key , JSON.stringify(invoices));
    }
    else {
        invoices = JSON.parse(localStorage.getItem(invoices_key));
    }
}
init();

function renderBill() {
    document.getElementById("table-body-invoice").innerHTML = "";
    let total = 0;
    for (let i = 0; i < invoices.length; i++) {
        document.getElementById("table-body-invoice").innerHTML +=
            `<tr>
                <td>${invoices[i].id}</td>
                <td>${invoices[i].item}</td>
                <td>${invoices[i].quantity}</td>
                <td>${formatNumber(invoices[i].price)}</td>
                <td>${formatNumber(invoices[i].amount)}</td>
                <td>
                    <i onclick="editInvoice(${invoices[i].id})" class="fa-solid fa-pen"></i>
                    <i onclick="deleteInvoice(${invoices[i].id})" class="fa-solid fa-trash"></i>
                </td>
            </tr>
            `;
        total += invoices[i].amount;
    }
    document.getElementById('total').innerHTML = formatNumber(total);
}
function resetClothes() {
    document.getElementById('item').value = "";
    document.getElementById('quantity').value = "";
    document.getElementById('price').value = "";
}

function addClothes() {
    let item = document.getElementById('item').value;
    let quantity = Number(document.getElementById('quantity').value);
    let price = Number(document.getElementById('price').value);

    if (item == '' || quantity == '' || price == 0) {
        alert('Vui lòng nhập đầy đủ thông tin')
    }
    else {
        let number = findMaxId() + 1;
        let newbill = new Bill(number, item, quantity, price);
        invoices.push(newbill);
        localStorage.setItem(invoices_key , JSON.stringify(invoices));
        renderBill();
        resetClothes()
    }
}

function findMaxId() {
    let maxid = 0;
    for (let i = 0; i < invoices.length; i++) {
        if (maxid < invoices[i].id) {
            maxid = invoices[i].id;
        }
    }
    return maxid;
}

function editInvoice(id) {
    let bill = findInvoiceById(id);

    document.getElementById('item').value = bill.item;
    document.getElementById('quantity').value = bill.quantity;
    document.getElementById('price').value = bill.price;
    document.getElementById('invoiceId').value = bill.id;

    document.querySelector('.btn-editClothes-save').style.display = "block";
    document.querySelector('.btn-editClothes-cancle').style.display = "block";
    document.querySelector('.btn-addClothes').style.display = "none";
    document.querySelector('.btn-resetClothes').style.display = "none";
}

function findInvoiceById(id) {
    for (let i = 0; i < invoices.length; i++) {
        if (invoices[i].id == id) {
            return invoices[i];
        }
    }
    return null;
}

function saveEdit() {
    let id = Number(document.getElementById('invoiceId').value);
    let item = document.getElementById('item').value;
    let quantity = Number(document.getElementById('quantity').value);
    let price = Number(document.getElementById('price').value);
    let amount = this.quantity * this.price;

    let bNew = new Bill(id, item, quantity, price, amount);
    updateBillById(id, bNew);
    localStorage.setItem(invoices_key , JSON.stringify(invoices));
    renderBill();
    resetClothes();
    document.querySelector('.btn-addClothes').style.display = "block";
    document.querySelector('.btn-resetClothes').style.display = "block";
    document.querySelector('.btn-editClothes-save').style.display = "none";
    document.querySelector('.btn-editClothes-cancle').style.display = "none";
}

function updateBillById(id, newBill) {
    for (let i = 0; i < invoices.length; i++) {
        if (invoices[i].id == id) {
            invoices[i].item = newBill.item;
            invoices[i].quantity = newBill.quantity;
            invoices[i].price = newBill.price;
            invoices[i].amount = newBill.amount;
        }
    }
}

function cancleEdit() {
    document.querySelector('.btn-addClothes').style.display = "block";
    document.querySelector('.btn-resetClothes').style.display = "block";
    document.querySelector('.btn-editClothes-save').style.display = "none";
    document.querySelector('.btn-editClothes-cancle').style.display = "none";
}

function deleteInvoice(id) {
    let deleteInvoice = confirm("Bạn có chắc chắn muốn xóa không?");
    // let bill = findInvoiceById(id);
    if (deleteInvoice == true) {
        for (let i in invoices) {
            if (invoices[i].id == id) {
                invoices.splice(i, 1);
                localStorage.setItem(invoices_key , JSON.stringify(invoices));
                renderBill();
            }
        }
    }

    // let newbill = new Bill ( findMaxId() - 1 , invoices.splice(bill.item , 1) , invoices.splice(bill.quantity , 1) , invoices.splice(bill.price , 1) , invoices.splice(bill.amount) , 1);
    // invoices.push(newbill);
    // findMaxId() - 1 ;
}

