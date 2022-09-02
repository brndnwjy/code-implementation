const voucherCheck = (price, voucher) => {
  let discount = 0;

  switch (voucher.toUpperCase()) {
    case "PIJARFOOD5":
      if (price >= 50000) {
        discount = price * 0.5;
        return discount > 50000 ? (discount = 50000) : discount;
      } else {
        console.log("note : minimum pembelian tidak tercapai");
        return discount;
      }
    case "DITRAKTIRPIJAR":
      if (price >= 25000) {
        discount = price * 0.6;
        return discount > 30000 ? (discount = 30000) : discount;
      } else {
        console.log("note : minimum pembelian tidak tercapai");
        return discount;
      }
    default:
      console.log("note : voucher tidak berlaku");
      return discount;
  }
};

const deliveryFee = (dist) => {
  let delivery = 0;
  if (dist > 2) {
    return (delivery = (dist - 2) * 3000 + 5000);
  }
  return (delivery = 5000);
};

const taxDeduction = (price) => {
  return price * 0.05;
};

const pijarFood = (price, voucher, dist, tax) => {
  let discount = 0;
  let delivery = 0;
  let taxCharge = 0;

  if (voucher && typeof voucher == "string") {
    discount = voucherCheck(price, voucher);
  } else if (voucher === false) {
    console.log("note : voucher tidak digunakan");
  } else {
    return console.log("alert : voucher tidak valid");
  }

  if (dist && typeof dist == "number" && dist > 0) {
    dist = Math.round(dist);
    delivery = deliveryFee(dist);
  } else {
    return console.log("alert : jarak tidak valid");
  }

  if (tax) {
    taxCharge = taxDeduction(price);
    console.log("note : dikenakan pajak 5%");
  } else console.log("note : pesanan bebas pajak");

  const subtotal = price - discount + delivery + taxCharge;

  return console.log(`Harga       : ${price}
Potongan    : ${discount}
Biaya Antar : ${delivery}
Pajak       : ${taxCharge}
Subtotal    : ${subtotal}`);
};

pijarFood(50000, "ditraktirpijar", 2.4, true);
