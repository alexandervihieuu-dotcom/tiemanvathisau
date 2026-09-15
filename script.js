// ===== DỮ LIỆU SẢN PHẨM =====
const products = [
  // TRÀ TRÁI CÂY
  { id: 1,  name: 'Trà trái cây',    desc: 'Trà trái cây tươi mát, thơm ngon',    price: 25000, image: 'images/tra-trai-cay.jpg',    cat: 'drink', badge: ''    },
  { id: 2,  name: 'Trà dâu tằm',    desc: 'Dâu tằm tươi, vị chua ngọt dịu',        price: 25000, image: 'images/tra-dau-tam.jpg',    cat: 'drink', badge: ''    },
  { id: 3,  name: 'Trà xoài',       desc: 'Xoài chín thơm, mát lạnh giải khát',     price: 25000, image: 'images/tra-xoai.jpg',       cat: 'drink', badge: 'hot' },
  { id: 4,  name: 'Trà mãng cầu',    desc: 'Mãng cầu tươi, thanh mát đặc biệt',     price: 25000, image: 'images/tra-mang-cau.jpg',   cat: 'drink', badge: ''    },
  { id: 5,  name: 'Trà dưa lưới',    desc: 'Dưa lưới ngọt thơm, uống cực đã',       price: 28000, image: 'images/tra-dua-luoi.jpg',   cat: 'drink', badge: 'new' },
  { id: 23, name: 'Trà trái cây nhiệt đới', desc: 'Hỗn hợp trái cây nhiệt đới tươi mát', price: 25000, image: 'images/tra-trai-cay-nhiet-doi.jpg', cat: 'drink', badge: '' },
  { id: 24, name: 'Trà ổi hồng',    desc: 'Ổi hồng tươi, vị ngọt thanh dễ uống',    price: 25000, image: 'images/tra-oi-hong.jpg',    cat: 'drink', badge: '' },
  { id: 24, name: 'Trà thơm ',    desc: 'thơm tươi, vị ngọt thanh dễ uống',    price: 25000, image: 'images/tra-thom.jpg',    cat: 'drink', badge: '' },
  // SODA
  { id: 26, name: 'Soda dâu',       desc: 'Soda mát lạnh vị dâu tươi',              price: 15000, image: 'images/soda-dau.jpg',       cat: 'soda',  badge: '' },
  { id: 27, name: 'Soda việt quất', desc: 'Soda mát lạnh vị việt quất',             price: 15000, image: 'images/soda-viet-quat.jpg', cat: 'soda',  badge: '' },

  // SỮA CHUA
  { id: 6,  name: 'Sữa chua việt quất', desc: 'Sữa chua mịn, việt quất tươi chua ngọt', price: 28000, image: 'images/sua-chua-viet-quat.jpg', cat: 'snack', badge: 'hot' },
  { id: 7,  name: 'Sữa chua xoài',     desc: 'Xoài chín vàng, béo mịn thơm lừng',      price: 28000, image: 'images/sua-chua-xoai.jpg',      cat: 'snack', badge: ''    },
  { id: 8,  name: 'Sữa chua dâu',      desc: 'Dâu tây tươi, chua ngọt hài hòa',         price: 28000, image: 'images/sua-chua-dau.jpg',       cat: 'snack', badge: ''    },
  { id: 9,  name: 'Sữa chua chanh leo',desc: 'Chanh leo chua thanh, sữa chua mát lạnh',  price: 28000, image: 'images/sua-chua-chanh-leo.jpg', cat: 'snack', badge: ''    },
  { id: 10, name: 'Sữa chua dưa lưới', desc: 'Dưa lưới ngọt thơm kết hợp sữa chua',    price: 28000, image: 'images/sua-chua-dua-luoi.jpg',  cat: 'snack', badge: ''    },
  { id: 25, name: 'Sữa chua dâu tằm',  desc: 'Dâu tằm tươi kết hợp sữa chua béo mịn',  price: 28000, image: 'images/sua-chua-dau-tam.jpg',   cat: 'snack', badge: ''    },

  // ĂN VẶT
  { id: 11, name: 'Bánh tráng trộn',   desc: 'Bánh tráng trộn đặc biệt, cay ngon',      price: 35000, image: 'images/banh-trang-tron.jpg',   cat: 'snack', badge: 'hot' },
  { id: 12, name: 'Bánh tráng cuộn',   desc: 'Cuộn giòn nhân thơm, ăn là ghiền',        price: 25000, image: 'images/banh-trang-cuon.jpg',   cat: 'snack', badge: ''    },
  { id: 13, name: 'Xoài kí',           desc: 'Xoài tươi nguyên kí, ngọt giòn',           price: 17000, image: 'images/xoai-ki.jpg',           cat: 'snack', badge: ''    },
  { id: 14, name: 'Xoài cắt hộp',      desc: 'Xoài cắt sẵn tiện lợi, ăn ngay',          price: 25000, image: 'images/xoai-cat-hop.jpg',      cat: 'snack', badge: ''    },
  { id: 15, name: 'Xoài lắc mắm thái', desc: 'Xoài xanh lắc mắm thái chua cay đặc biệt',price: 30000, image: 'images/xoai-lac-mam-thai.jpg', cat: 'snack', badge: 'new' },
  { id: 16, name: 'Bánh tráng siêu cay', desc: 'Bánh tráng trộn vị siêu cay đặc biệt', price: 30000, image: 'images/banh-trang-sieu-cay.jpg', cat: 'snack', badge: 'new' },
  { id: 17, name: 'Mì cay trộn khô',   desc: 'Mì cay trộn khô đậm đà, kèm trứng',       price: 35000, image: 'images/mi-cay-tron-kho.jpg',    cat: 'snack', badge: ''    },
  { id: 18, name: 'Bánh tráng trộn phơi sương tóp mỡ', desc: 'Bánh tráng phơi sương trộn tóp mỡ giòn béo', price: 35000, image: 'images/banh-trang-tron-phoi-suong-top-mo.jpg', cat: 'snack', badge: '' },
  { id: 19, name: 'Cá viên sốt mắm',   desc: 'Cá viên chiên giòn, sốt mắm đậm vị',      price: 30000, image: 'images/ca-vien-sot-mam.jpg',    cat: 'snack', badge: ''    },
  { id: 20, name: 'Cá viên chiên',     desc: 'Cá viên chiên giòn nóng hổi',              price: 20000, image: 'images/ca-vien-chien.jpg',      cat: 'snack', badge: ''    },
  { id: 21, name: 'Xúc xích',          desc: 'Xúc xích chiên giòn (2 cây/phần)',        price: 20000, image: 'images/xuc-xich.jpg',           cat: 'snack', badge: ''    },
  { id: 22, name: 'Bánh tráng sate tôm hành', desc: 'Bánh tráng nướng sate tôm hành thơm lừng (1 bịch)', price: 10000, image: 'images/banh-trang-sate-tom-hanh.jpg', cat: 'snack', badge: '' },
];
// ===== STATE GIỎ HÀNG VÀ STATE CHỌN SIZE =====
let cart = [];
let currentSelectedProduct = null;
let currentSelectedSize = 'S';
let currentSizeSurplus = 0; 
let currentModalQty = 1;
 
// ===== UTILS =====
function fmt(price) {
  return price.toLocaleString('vi-VN') + '₫';
}
 
// ===== RENDER SẢN PHẨM TRANG CHỦ =====
function renderProducts(cat) {
  const list = cat === 'all' ? products : products.filter(p => p.cat === cat);
 
  document.getElementById('productGrid').innerHTML = list.map(p => `
    <div class="product-card">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.badge === 'hot' ? '<span class="badge-hot">🔥 HOT</span>' : ''}
        ${p.badge === 'new' ? '<span class="badge-new">✨ MỚI</span>' : ''}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <span class="product-price">${fmt(p.price)}</span>
          <button class="add-btn" onclick="openSizeModal(${p.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');
}
 
function filterCat(btn, cat) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat);
}

// ===== ĐIỀU KHIỂN MODAL CHỌN SIZE & SỐ LƯỢNG =====
function openSizeModal(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;

  currentSelectedProduct = prod;
  currentSelectedSize = 'S';
  currentSizeSurplus = 0;
  currentModalQty = 1;

  document.getElementById('modalProdName').textContent = prod.name;
  
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
  const firstSizeBtn = document.querySelector('.size-btn');
  if(firstSizeBtn) firstSizeBtn.classList.add('active');

  updateSizeModalPriceUI();
  
  document.getElementById('sizeModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSizeModal() {
  document.getElementById('sizeModal').classList.remove('open');
  document.body.style.overflow = '';
}

function selectSize(element, sizeName, surplusPrice) {
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  currentSelectedSize = sizeName;
  currentSizeSurplus = surplusPrice;
  updateSizeModalPriceUI();
}

function changeModalQty(delta) {
  currentModalQty += delta;
  if (currentModalQty < 1) currentModalQty = 1; 
  updateSizeModalPriceUI();
}

function updateSizeModalPriceUI() {
  if (!currentSelectedProduct) return;
  document.getElementById('modalQtyNum').textContent = currentModalQty;
  const singlePrice = currentSelectedProduct.price + currentSizeSurplus;
  const totalPrice = singlePrice * currentModalQty;
  document.getElementById('modalTotalPrice').textContent = fmt(totalPrice);
}

// ===== XÁC NHẬN THÊM VÀO GIỎ =====
function confirmAddToCart() {
  const finalPrice = currentSelectedProduct.price + currentSizeSurplus;
  const existing = cart.find(c => c.id === currentSelectedProduct.id && c.size === currentSelectedSize);

  if (existing) {
    existing.qty += currentModalQty;
  } else {
    cart.push({
      ...currentSelectedProduct,
      price: finalPrice, 
      size: currentSelectedSize,
      qty: currentModalQty
    });
  }

  updateCartUI();
  closeSizeModal();
  showToast(`🛒 Đã thêm x${currentModalQty} ${currentSelectedProduct.name} (Size ${currentSelectedSize})!`);
}
 
// ===== ĐIỀU CHỈNH SỐ LƯỢNG TRONG GIỎ HÀNG =====
function changeQty(id, size, delta) {
  const item = cart.find(c => c.id === id && c.size === size);
  if (!item) return;
 
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => !(c.id === id && c.size === size));
 
  updateCartUI();
}
 
// ===== CẬP NHẬT GIAO DIỆN GIỎ HÀNG =====
function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const count = cart.reduce((s, c) => s + c.qty, 0);
 
  document.getElementById('cartCount').textContent = count;
 
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
 
  if (!cart.length) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="big">🛒</div>
        <p>Giỏ hàng trống!</p>
        <p class="cart-empty-sub">Thêm món ngon vào nhé 😋</p>
      </div>`;
    footerEl.style.display = 'none';
    return;
  }
 
  itemsEl.innerHTML = cart.map(c => `
    <div class="cart-item">
      <img class="cart-item-img" src="${c.image}" alt="${c.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name} <span class="cart-item-size">[Size ${c.size}]</span></div>
        <div class="cart-item-price">${fmt(c.price)}</div>
      </div>
      <div class="qty-control">
        <button class="qty-btn" onclick="changeQty(${c.id}, '${c.size}', -1)">−</button>
        <span class="qty-num">${c.qty}</span>
        <button class="qty-btn" onclick="changeQty(${c.id}, '${c.size}', 1)">+</button>
      </div>
    </div>
  `).join('');
 
  document.getElementById('cartTotal').textContent = fmt(total);
  footerEl.style.display = 'block';
}
 
// ===== MỞ / ĐÓNG GIỎ HÀNG =====
function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
  document.body.style.overflow = '';
}
 
// ===== MODAL XÁC NHẬN ĐƠN HÀNG =====
function openOrderModal() {
  closeCart();
 
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  let lines = cart.map(c =>
    `<div class="order-line">
      <span>📸 ${c.name} (Size ${c.size}) x${c.qty}</span>
      <span>${fmt(c.price * c.qty)}</span>
    </div>`
  ).join('');
  lines += `<div class="order-line total"><span>Tổng cộng</span><span>${fmt(total)}</span></div>`;
 
  document.getElementById('modalSummary').innerHTML =
    `<div class="order-summary-title">🧾 Đơn hàng của bạn</div>${lines}`;
 
  document.getElementById('orderModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function closeOrderModal() {
  document.getElementById('orderModal').classList.remove('open');
  document.body.style.overflow = '';
  openCart();
}
 
// ===== GỬI ĐƠN HÀNG LÊN FIREBASE & BẮN THÔNG BÁO TELEGRAM (BẢN TỐI ƯU 100%) =====
function submitOrder() {
  const name    = document.getElementById('cusName').value.trim();
  const phone   = document.getElementById('cusPhone').value.trim();
  const address = document.getElementById('cusAddress').value.trim();
  const note    = document.getElementById('cusNote').value.trim();
 
  if (!name || !phone || !address) {
    showToast('⚠️ Vui lòng điền đủ thông tin bắt buộc!');
    return;
  }
 
  const payment = document.getElementById('cusPayment').value;
  const payText = { cod: 'Tiền mặt COD', banking: 'Chuyển khoản', momo: 'MoMo', zalo: 'ZaloPay' }[payment];
  const total   = cart.reduce((s, c) => s + c.price * c.qty, 0);

  const danhSachMonAn = cart.map(c => `${c.name} [Size ${c.size}] (x${c.qty})`).join(', ');
  const thoiGianHienTai = new Date().toLocaleString('vi-VN');

  if (typeof database === 'undefined') {
    alert('Lỗi: Hệ thống Firebase chưa được tải thành công!');
    return;
  }

  // Khóa nút đặt hàng để chặn spam đơn bấm liên tục
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Đang xử lý đơn hàng...';
  }

  // 1. Đẩy dữ liệu lên Firebase Realtime Database
  database.ref('don_hang').push({
    tenKhachhang: name,
    soDienThoai: phone,
    diaChi: address,
    phuongThucTT: payText,
    ghiChu: note || "Không có",
    monAn: danhSachMonAn,
    gia: fmt(total),
    thoiGian: thoiGianHienTai,
    trangThai: "Chờ xử lý"
  })
  .then(() => {
    // 2. BẮN TELEGRAM ĐỘC LẬP (Firebase thành công là chạy ngay)
    try {
      const TOKEN_BOT = "8626165001:AAGkRnfpDXHP1QAm2cc52Vfg8HnYV3lCME"; //
      const CHAT_ID = "7994959261"; //

      const noiDungTinNhan = `
🔔 <b>CÓ ĐƠN HÀNG MỚI - TIỆM HAI SÁU</b>  
━━━━━━━━━━━━━━━━━━
👤 <b>Khách hàng:</b> ${name}
📞 <b>Số điện thoại:</b> ${phone}
📍 <b>Địa chỉ giao:</b> ${address}
🛒 <b>Món đặt:</b> ${danhSachMonAn}
💰 <b>Tổng tiền:</b> ${fmt(total)}
💳 <b>Thanh toán:</b> ${payText}
📝 <b>Ghi chú:</b> ${note || "Không có"}
⏰ <b>Thời gian:</b> ${thoiGianHienTai}
━━━━━━━━━━━━━━━━━━
👉 <i>Vui lòng chuẩn bị món ăn cho khách ngay nhé!</i>
`;

      fetch(`https://api.telegram.org/bot${TOKEN_BOT}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text: noiDungTinNhan, parse_mode: "HTML" })
      })
      .then(res => console.log("Gửi API Telegram hoàn tất!"))
      .catch(err => console.error("Lỗi mạng khi gọi Telegram:", err));

    } catch (teleErr) {
      console.error("Lỗi xử lý tin nhắn Telegram:", teleErr);
    }

    // 3. Đóng form hiển thị thành công cho khách hàng
    document.getElementById('orderModal').classList.remove('open');
    document.getElementById('successMsg').innerHTML =
      `Cảm ơn <strong>${name}</strong>!<br>
       Đơn hàng <strong>${fmt(total)}</strong> đã được ghi nhận hệ thống.<br>
       Thanh toán: ${payText}<br>
       Giao đến: <em>${address}</em> 🚀`;
    
    document.getElementById('successModal').classList.add('open');
    
    // Reset trạng thái giỏ hàng sạch sẽ
    cart = [];
    updateCartUI();
    ['cusName', 'cusPhone', 'cusAddress', 'cusNote'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  })
  .catch((error) => {
    console.error("Lỗi gửi đơn hàng lên Firebase: ", error);
    showToast('❌ Gửi đơn hàng thất bại, vui lòng thử lại!');
  })
  .finally(() => {
    // Khôi phục nút bấm về ban đầu
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '✅ Xác nhận đặt hàng';
    }
  });
}
 
// ===== MODAL THÀNH CÔNG =====
function closeSuccess() {
  document.getElementById('successModal').classList.remove('open');
  document.body.style.overflow = '';
}
 
// ===== TOAST THÔNG BÁO =====
function showToast(msg) {
  const t = document.getElementById('toast');
  if(t) {
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
  }
}
 
// ===== KHỞI CHẠY =====
renderProducts('all');
// Lấy tất cả các phần tử menu có class là 'menu-item'
const menuItems = document.querySelectorAll('.menu-item');

// Lặp qua từng mục menu để lắng nghe sự kiện click
menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // e.preventDefault(); // Bỏ dấu // ở đầu dòng này nếu bạn đang dùng trang đơn (SPA) và không muốn trình duyệt load lại trang
        
        // Bước 1: Xóa class 'active' khỏi tất cả các mục menu
        menuItems.forEach(nav => nav.classList.remove('active'));

        // Bước 2: Thêm class 'active' vào mục vừa được click
        this.classList.add('active');
    });
});
function submitOrder() {
    // 1. Lấy thông tin khách hàng từ form nhập
    const name = document.getElementById('cusName').value.trim();
    const phone = document.getElementById('cusPhone').value.trim();
    const address = document.getElementById('cusAddress').value.trim();
    const payment = document.getElementById('cusPayment').value;
    const note = document.getElementById('cusNote').value.trim();

    // Kiểm tra dữ liệu bắt buộc
    if (!name || !phone || !address) {
        alert('Vui lòng điền đầy đủ họ tên, số điện thoại và địa chỉ giao hàng nhé!');
        return;
    }

    // 2. Lấy danh sách món trong giỏ hàng (giả sử giỏ hàng lưu trong mảng cart)
    let itemsText = "";
    let totalPrice = 0;
    
    // Kiểm tra nếu biến cart của bạn có tồn tại
    if (typeof cart !== 'undefined' && cart.length > 0) {
        cart.forEach((item, index) => {
            let itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            itemsText += `- ${item.name} (${item.size || 'S'}) x${item.quantity}: ${itemTotal.toLocaleString()}₫\n`;
        });
    } else {
        itemsText = "Khách đặt hàng nhanh qua web\n";
    }

    // 3. Soạn nội dung tin nhắn gửi qua Zalo
    const message = `🚨 ĐƠN HÀNG MỚI - TIỆM HAI SÁU 🥭\n\n` +
                    `👤 Khách hàng: ${name}\n` +
                    `📞 Số điện thoại: ${phone}\n` +
                    `📍 Địa chỉ: ${address}\n` +
                    `💳 Hình thức thanh toán: ${payment}\n` +
                    `📝 Ghi chú: ${note || 'Không có'}\n\n` +
                    `🛒 Chi tiết món:\n${itemsText}\n` +
                    `💰 Tổng tiền: ${totalPrice.toLocaleString()}₫`;

    // 4. Số điện thoại Zalo nhận đơn của quán (Thay số '0326650638' bằng số Zalo của bạn)
    const zaloPhone = '0326650638'; 

    // Tạo đường dẫn Zalo Me (hỗ trợ cả trên điện thoại và máy tính)
    const zaloUrl = `https://zalo.me/${zaloPhone}?text=${encodeURIComponent(message)}`;

    // 5. Đóng form đặt hàng, làm sạch giỏ hàng (nếu muốn) và mở Zalo
    closeOrderModal();
    
    // Hiển thị thông báo thành công ngắn gọn trước khi chuyển qua Zalo
    alert('Đơn hàng đã được ghi nhận! Hệ thống đang chuyển sang Zalo để gửi đơn cho quán...');

    // Mở link Zalo trong cửa sổ/tab mới
    window.open(zaloUrl, '_blank');
}