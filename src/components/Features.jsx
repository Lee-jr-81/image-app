import React from "react";

export default function Banner() {
  return (
    <section class="features-container"id="features">


 
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <h2 class="fw-light mt-5 text-white">Why Minify?</h2>
          <p class="lead text-white-50">Use the best compression tool for all your websites and apps!</p>
        </div>
      </div>
    </div>
  
  


      <div class="features-wrapper">
        <h1 class="features-title">
         Features 
        </h1>
      </div>
     
     <div class="feat-row">
        
        <div class="feat-text">
            <h3 class=""><b>Compressed</b> images mean <b>Quicker</b> websites</h3><p class="lead text-white">Image compression improves your site’s performance with faster page loading times. This is essential for a good overall User Experience (UX).</p>
        </div>
        
        <div class="feat-img">
            <span class=""></span><img alt="" class="" data-src="/example.svg" width="230" height="230" src="src/assets/speedometer.png"></img>
        </div>

     </div>

     <div class="feat-row">

     <div class="feat-img-mid">
            <span class=""></span><img alt="" class="" data-src="/example.svg" width="230" height="230" src="src/assets/seo.png"></img>
        </div>
        
        <div class="feat-text">
            <h3 class=""><b>Smaller</b> images are important for <b>SEO</b></h3><p class="lead text-white">One of Google’s key ranking factors is optimized images when determining where to place your content on its search engine results pages.</p>
        </div>
        
     </div>

     <div class="feat-row">
        
        <div class="feat-text">
            <h3 class=""><b>Lossy</b> and <b>Lossless</b> compression</h3><p class="lead text-white">Lossless compression can reduce file sizes without affecting their quality.</p>
        </div>
        
        <div class="feat-img">
            <span class=""></span><img alt="" class="" data-src="/example.svg" width="230" height="230" src="src/assets/secure.png"></img>
        </div>

     </div>
      
      

    </section>
  );
}
