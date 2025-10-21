class Buku {
  #stok; // Properti private
  #harga; // Properti private
  
  constructor(judul, stokAwal, harga) {
    this.judul = judul;
    this.#stok = stokAwal;
    this.#harga = harga;
  }
  
  getInfo() {
    return `Buku: ${this.judul}\nStok: ${this.#stok}\nHarga: Rp${this.#harga}`;
  }
  
  beli(jumlah, uangDibayar) {
    const total = this.#harga * jumlah;
    
    if (uangDibayar < total) {
      return `Uang kurang Rp${total - uangDibayar}`;
    }
    
    this.#stok -= jumlah;
    const kembalian = uangDibayar - total;
    return `Pembelian berhasil! Kembalian: Rp${kembalian}`;
  }
}

const buku1 = new Buku("Laskar Pelangi", 10, 50000);
console.log(buku1.getInfo());

console.log("\n" + buku1.beli(2, 150000));
console.log("\n" + buku1.getInfo());

// console.log(buku1.#stok); // Error: properti private
