const CertificateTwo = () => {
  return (
    <section className='certificate-two py-120 position-relative z-1 mash-bg-main mash-bg-main-two mash-reverse'>
      <div className='section-heading text-center'>
        <h2 className='mb-24 wow bounceIn'>
          Laporan Assessment yang Siap Digunakan
        </h2>
        <p className=' wow bounceInUp'>
          Hasil penilaian disajikan dalam format yang jelas, ringkas, dan dapat langsung digunakan untuk keperluan rekrutmen, evaluasi, atau pengembangan.
        </p>
      </div>
      <div className='position-relative'>
        <div className='container'>
          <div className='row align-items-center gy-4'>
            <div className='col-lg-6 pe-lg-5'>
              <div
                className='certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='flex-align gap-20 mb-12'>
                  <span className='w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl'>
                    <i className='animate__wobble ph-bold ph-medal' />
                  </span>
                  <h5 className='mb-0'>Disusun oleh Praktisi & Psikolog Industri</h5>
                </div>
                <p className='text-neutral-700 text-line-2'>
                  Instrumen dirancang dengan metodologi psikometri sehingga hasil memiliki akurasi dan objektivitas yang kuat.
                </p>
              </div>
              <div
                className='certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28'
                data-aos='fade-up'
                data-aos-duration={400}
              >
                <div className='flex-align gap-20 mb-12'>
                  <span className='w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl'>
                    <i className='animate__wobble ph-bold ph-clock' />
                  </span>
                  <h5 className='mb-0'>Dapat Dikerjakan Online Kapan Saja</h5>
                </div>
                <p className='text-neutral-700 text-line-2'>
                  Assessment dapat diakses melalui perangkat apapun tanpa batasan lokasi dan waktu.
                </p>
              </div>
              <div
                className='certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <div className='flex-align gap-20 mb-12'>
                  <span className='w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl'>
                    <i className='animate__wobble ph-bold ph-star' />
                  </span>
                  <h5 className='mb-0'>Tanpa Biaya Tambahan untuk Administrasi</h5>
                </div>
                <p className='text-neutral-700 text-line-2'>
                  Tidak perlu biaya setup, training, atau instalasi semua berjalan secara mandiri.
                </p>
              </div>
              <div
                className='certificate-two-item animation-item'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <div className='flex-align gap-20 mb-12'>
                  <span className='w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl'>
                    <i className='animate__wobble ph-bold ph-chart-line-up' />
                  </span>
                  <h5 className='mb-0'>Berbasis Kompetensi & Evidence-Based</h5>
                </div>
                <p className='text-neutral-700 text-line-2'>
                 Menampilkan hasil yang benar-benar terkait kemampuan dan potensi, bukan hanya opini atau asumsi.
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='certificate-two__thumb'>
                <img
                  src='assets/images/thumbs/about-image2.png'
                  alt=''
                  data-tilt=''
                  data-tilt-max={10}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-full-page-listening=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateTwo;
