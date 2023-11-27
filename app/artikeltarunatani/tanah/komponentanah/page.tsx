import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/perantani-3.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Komponen Tanah</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Tanah terdiri dari berbagai komponen yang bekerja bersama-sama untuk
            membentuk lingkungan yang mendukung pertumbuhan tanaman dan
            aktivitas organisme hidup. Komponen-komponen utama tanah meliputi:
            A. Mineral Tanah: Pasir: Partikel kasar yang lebih besar,
            memungkinkan drainase cepat tetapi kurang mampu menyimpan air dan
            nutrisi. 2. Lumpur: Partikel halus yang cenderung mengikat air
            dengan baik tetapi memiliki drainase yang lebih lambat. 3. Debu:
            Partikel sangat halus yang memberikan tekstur tanah. B. Bahan
            Organik: Humus: Sisa-sisa organisme hidup yang telah membusuk. Humus
            meningkatkan kesuburan tanah, memperbaiki struktur tanah, dan
            menyediakan nutrisi penting bagi tanaman. C. Air: Air Tanah:
            Memengaruhi ketersediaan nutrisi bagi tanaman dan berperan dalam
            proses kimia dalam tanah. D. Udara: Rongga Udara: Ruang di antara
            partikel tanah yang memungkinkan pertukaran udara antara tanah dan
            lingkungan luar. Udara dalam tanah penting untuk pertumbuhan akar
            tanaman dan aktivitas mikroorganisme. E. Organisme Hidup:
            Mikroorganisme: Bakteri, fungi, dan lainnya yang memainkan peran
            penting dalam dekomposisi bahan organik dan siklus nutrisi tanaman.
            Fauna Tanah: Termasuk cacing tanah, serangga, dan makhluk hidup
            lainnya yang mengubah struktur tanah dan membantu dalam proses
            pencernaan bahan organik. F. Mineral: Bahan-bahan Mineral dari
            Batuan Asal: Mineral yang terurai dari batuan induk memberikan
            komposisi mineral tertentu pada tanah yang dapat memengaruhi
            ketersediaan nutrisi bagi tanaman. Komponen-komponen ini bekerja
            bersama-sama untuk membentuk struktur tanah yang berbeda-beda, yang
            mempengaruhi sifat-sifat tanah seperti tekstur, ketersediaan air,
            drainase, serta ketersediaan nutrisi bagi tanaman. Kombinasi dan
            proporsi dari setiap komponen ini dapat sangat bervariasi tergantung
            pada faktor-faktor geografis, iklim, waktu, dan aktivitas manusia
            yang memengaruhi pembentukan tanah.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
