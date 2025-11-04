const InfoSectionOne = () => {
  return (
    <section className='info py-20 bg-main-600'>
      <div className='container'>
        <div className='row gy-4'>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='info-item animation-item flex-align gap-20'>
              <span className='w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0'>
                <i className='animate__heartBeat ph-bold ph-video-camera' />
              </span>
              <div className='flex-grow-1'>
                <h5 className='mb-8 text-white fw-medium'>
                  Beragam Jenis Assessment
                </h5>
                <span className='text-sm text-white'>
                  Tes kepribadian, kognitif, kompetensi, dan potensi karier
                </span>
              </div>
            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='info-item animation-item flex-align gap-20'>
              <span className='w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0'>
                <i className='animate__heartBeat ph-bold ph-users' />
              </span>
              <div className='flex-grow-1'>
                <h5 className='mb-8 text-white fw-medium'>
                  Berbasis Psikometri
                </h5>
                <span className='text-sm text-white'>
                  Disusun oleh praktisi dan mengikuti standar validitas ilmiah
                </span>
              </div>
            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='info-item animation-item flex-align gap-20'>
              <span className='w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0'>
                <i className='animate__heartBeat ph-bold ph-clock' />
              </span>
              <div className='flex-grow-1'>
                <h5 className='mb-8 text-white fw-medium'>Hasil Instan & Terstruktur</h5>
                <span className='text-sm text-white'>
                  Laporan langsung muncul lengkap dengan interpretasi
                </span>
              </div>
            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={800}
          >
            <div className='info-item animation-item flex-align gap-20'>
              <span className='w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0'>
                <i className='animate__heartBeat ph-bold ph-certificate' />
              </span>
              <div className='flex-grow-1'>
                <h5 className='mb-8 text-white fw-medium'>Akses Fleksibel</h5>
                <span className='text-sm text-white'>
                  Dapat dikerjakan kapan saja dari perangkat apapun
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSectionOne;
