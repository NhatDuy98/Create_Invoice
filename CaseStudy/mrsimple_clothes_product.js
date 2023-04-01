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
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}
productClothes();

// function addClothes() {
//     let shopCart = [];
//     let id = Number(document.getElementsByClassName("footmrsimple-input-name")[0].value);
//     let quantity = Number(document.getElementById("footmrsimple-input-name")[1].value);

//     for (let i = 0 ; i < clothes.length ; i++) {
//         if ( id == clothes.id[i]) {
//             shopCart.push(clothes.id[i]);
//             shopCart.push(clothes.name[i]);
//             shopCart.push(clothes.price[i]);
//         }
//         else {
//             alert("Vui lòng nhập lại ID sản phẩm");
//         }
//     }
// }

class Bill {
    constructor(id , item , quantity , price) {
        this.id = id ;
        this.item = item ;
        this.quantity = quantity ;
        this.price = price ;
        this.amount = this.quantity * this.price;
    }
}

let invoices = [];

function renderBill() {
    for( let i = 0 ; i < invoices.length ; i++) {
        document.querySelector(".table-body-invoice").innerHTML += 
            `<tr>
                <td>1</td>
                <td>TÚI HỘP ĐEO CHÉO DA XÁM | + 2 MÀU</td>
                <td>1</td>
                <td>1279200Đ</td>
                <td>1279200Đ</td>
                <td>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                </td>
            </tr>
            `;
    }
}
renderBill();