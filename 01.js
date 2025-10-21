class Buku {
  constructor(judul, pengarang) {
    this.judul = judul;
    this.pengarang = pengarang;
  }
  info() {
    return `Buku "${this.judul}" ditulis oleh ${this.pengarang}.`;
  }
}
const buku1 = new Buku("Laskar Pelangi", "Andrea Hirata");
console.log(buku1.info());
