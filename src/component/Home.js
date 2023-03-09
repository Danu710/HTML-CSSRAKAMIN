import React from "react";

const Home = () => {
  return (
    <section className="flex flex-wrap items-center justify-center md:flex-wrap lg:flex-col mx-auto max-w-screen-xl py-32">
      <div className="flex items-center justify-center">
        <h1 className="font-sans font-medium text-black sm:text-sm md:text-2xl lg:text-2xl">
          Gallery Foto
        </h1>
      </div>
      <div className="container px-5 py-2 mx-auto  lg:pt-12">
        <div className="grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <a href="#" className="group relative block bg-black ">
            <img
              alt="Malang"
              src="https://anekatempatwisata.com/wp-content/uploads/2014/09/Kampung-Warna-Warni-Jodipan-Malang-jejakkrismon.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                Malang
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Kampung Warna-Warni Jodipan
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Kalau butuh spot foto yang estetik, bisa jadi salah satu
                    tempat yang dikunjungi saat liburan ke Malang. Para
                    wisatawan dapat melihat mulai dari rumah hingga jalanan
                    dicat dan dihiasi dengan pernak-pernik warna-warni.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black ">
            <img
              alt="Developer"
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1595985797/blog/jxhiizi3fa4ryicdymob.webp"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Malang
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Gunung Bromo{" "}
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Ya, tak lengkap rasanya kalau tidak ke Gunung Bromo jika
                    bertandang ke Malang. Gunung ini selalu menarik banyak
                    perhatian para pecinta alam karena pemandangan yang sangat
                    indah serta memukau. Kamu bisa mengakses Gunung Bromo dengan
                    kendaraan roda dua dan empat, namun perlu diketahui kalau
                    kamu akan memerlukan sewa jeep untuk bisa sampai ke kaki
                    gunung Bromo.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black ">
            <img
              alt="Developer"
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1624852864/blog/srpsao0lxvd7gr2xys3a.webp"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">
                Malang
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Kampung Biru Arema
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Setelah Kampung Warna-Warni Jodipan, kota Malang juga
                    mempunyai destinasi perumahan unik lainnya, yaitu Kampung
                    Biru Arema. Di sini, ada ratusan rumah warga yang dicat
                    biru, warna kebesaran Arema, klub sepakbolanya orang Malang.
                    Selain itu, berswafoto dengan latar mural juga enggak kalah
                    seru.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black ">
            <img
              alt="Developer"
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1612412070/blog/r3y0re67mcgwl98shbu0.webp"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                Lombok
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Gili Trawangan
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Enggak berlebihan rasanya kalau menyebut sebagai tempat
                    wisata di Lombok yang paling populer, baik bagi wisatawan
                    nusantara maupun wisatawan internasional. Merupakan salah
                    satu dari gugusan Tiga Gili (tiga pulau) yang terpopuler di
                    sebelah barat Lombok, Gili Trawangan memang punya fasilitas
                    wisata yang lebih lengkap dari gili lainnya. Enggak heran
                    kalau atmosfer wisata di Gili Trawangan pun beda dengan dua
                    gili lainnya, Gili Meno dan Gili Air. Kalau kamu lebih suka
                    area wisata pantai yang ramai turis dan punya pilihan
                    restoran atau bar yang lebih lengkap, Gili Trawangan adalah
                    destinasi yang tepat buat kamu.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black ">
            <img
              alt="Developer"
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1612411901/blog/s4gqdqpeq104d2y2knen.webp"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Lombok
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Gili Meno
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Gili Meno bisa dibilang merupakan yang paling damai di
                    antara ketiga Gili. Dengan jumlah resort maupun restoran dan
                    bar yang lebih sedikit daripada Gili Trawangan dan Gili Air,
                    Gili Meno menawarkan wisata pulau yang lebih tenang dan
                    "lebih alam". Makanya, enggak heran kalau Gili Meno sering
                    dipilih sebagai tempat untuk bulan madu oleh pasangan baru!
                    Oya, kalau kamu penyuka diving, Gili Meno juga punya Gili
                    Meno Wall, lho, salah satu spot diving paling terkenal di
                    Lombok. Jadi pastikan kamu juga mencoba diving di sini ya.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black ">
            <img
              alt="Developer"
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/Senggigi_Beach_-_Tempat_Wisata_di_Lombok_-_Rizknas_on_Unsplash_rv4pn2.webp"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">
                Lombok
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Sengigi
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Seperti Gili Trawangan, Pantai Senggigi juga merupakan salah
                    satu area wisata paling populer bagi turis di Lombok, meski
                    mungkin saat ini popularitasnya kalah dibanding Trawangan
                    atau Kuta Mandalika di selatan. Meski begitu, Senggigi tetap
                    layak buat kamu kunjungi kok, apalagi kalau kamu baru
                    pertama kali liburan ke Lombok! Sedikit mengingatkan kita
                    pada Kuta di Bali, Senggigi penuh dengan hotel besar, klub
                    dan bar untuk para penyuka kehidupan malam, dan
                    pantai-pantai yang bisa digunakan untuk surfing. Beberapa
                    tempat wisata terkenal di area ini adalah Pantai Senggigi,
                    Pantai Kerandangan, dan juga Pura Batu Bolong.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black ">
            <img
              alt="Developer"
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/Baling-baling-min_fjv6jj.webp"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                Jakarta
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Dunia Fantasi Ancol
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    di Ancol adalah salah satu tempat wisata terbesar di Jakarta
                    yang tetap buka saat ini. Tentu saja masih dengan protokol
                    kesehatan yang sudah diaplikasikan sejak PSBB Transisi
                    periode sebelumnya, yang bisa kamu baca di sini: Salah satu
                    protokol kesehatan yang diaplikasikan adalah tidak ada
                    pembelian tiket offline langsung di loket, jadi kamu harus
                    membeli tiket masuk Dufan secara online. Kamu bisa membeli
                    untuk mendapatkan harga terbaik.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black ">
            <img
              alt="Developer"
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1602662560/blog/mrs0bex9dhrllljmjiej.webp"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Jakarta
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Sea World Ancol
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Seperti juga Dufan, juga sudah dibuka kembali mulai 12
                    Oktober 2020 lalu. Masih menerapkan protokol kesehatan yang
                    berlaku di area Ancol juga, jadi kamu pun harus membeli
                    tiketnya secara online. Kamu bisa membelinya di Klook dengan
                    menekan tombol ini: Oh ya, perlu diketahui kalau orang tua
                    di atas usia 60 tahun belum boleh masuk ke Dufan, Sea World,
                    atau tempat wisata lainnya di Ancol ya. Baru hanya boleh
                    berolahraga di Pantai Ancol atau Allianz Ecopark.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black ">
            <img
              alt="Developer"
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1602662518/blog/xu28v4vip4eoqxii89fw.webp"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">
                Jakarta
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Ocean Dream Samudra
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    di Ancol juga sudah buka kembali, dan bisa kamu kunjungi
                    lagi untuk refreshing melihat satwa-satwa laut bermain.
                    Seperti dua tempat wisata di Dufan lainnya, kamu harus
                    membeli tiketnya secara online. Agar lebih hemat, Klook juga
                    menyarankan kamu untuk membeli , yang pastinya lebih murah
                    daripada beli satu-satu. Apalagi, Ocean Dream Samudra dan
                    Sea World memang cocok banget dikunjungi di satu hari yang
                    sama! Pengalaman kamu melihat dan bermain dengan satwa air
                    pun akan maksimal jika bisa pergi ke kedua tempat ini.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
