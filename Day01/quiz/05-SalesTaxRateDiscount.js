 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

 function getSalesDiscount(price,tax,discount){
     if (isNaN(price) && isNaN(tax) && isNaN(discount)) {
         return "Price, Tax & Discount harus dalam angkaa"
     }
     else if (isNaN(price) && (tax) && (discount)) {
         return "Price harus dalam angka"
     }
     else if ((price) && isNaN(tax) && (discount)) {
         return "Pajak harus dalam angka"
     }
     else {
        //  priceAfterDiscount = price - discount
        //  totalPayment = priceAfterDiscount + tax
         const discon = (price * discount) / 100;
         const priceAfterDiscount = (price - discon);
         const pajak = (priceAfterDiscount * tax) / 100;
         const totalPayment = (priceAfterDiscount + pajak)

         return "Total Sales         : " + "Rp." + price +
         "\nDiscount            : " + "Rp." + discon +
         "\nPriceAfterDiscount  : " + "Rp." + priceAfterDiscount +
         "\nPajak               : " + "Rp." + pajak +
         "\n-----------------------------------" +
         "\nTotalPayment        : " + "Rp." + totalPayment
     }
 }

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */