(function(window){var svgSprite='<svg><symbol id="icon-bofang" viewBox="0 0 1024 1024"><path d="M512 947.106726c-239.915162 0-435.106726-195.191564-435.106726-435.106726S272.084838 76.893274 512 76.893274s435.106726 195.191564 435.106726 435.106726S751.915162 947.106726 512 947.106726zM512 111.019513c-221.1027 0-400.980487 179.877787-400.980487 400.980487s179.877787 400.980487 400.980487 400.980487 400.980487-179.877787 400.980487-400.980487S733.1027 111.019513 512 111.019513z"  ></path><path d="M452.278827 723.638141c-2.558265 0-5.526877-0.566912-7.910157-1.749854-5.840008-2.866281-9.942443-8.798387-9.942443-15.313777l0-356.673375c0-6.515391 4.102435-12.447497 9.942443-15.313777 5.840008-2.899026 13.011338-2.149966 18.160615 1.816369l230.449579 178.328501c4.174066 3.232624 6.664793 8.215102 6.664793 13.497409 0 5.282307-2.416026 10.264784-6.590092 13.497409L462.714504 720.071919C459.665051 722.42143 455.987289 723.638141 452.278827 723.638141zM468.195332 384.693546l0 287.088554 185.41899-143.552463L468.195332 384.693546z"  ></path></symbol><symbol id="icon-order" viewBox="0 0 1024 1024"><path d="M343.844697 622.805642c-6.580882 0-13.18837-2.64627-19.097964-7.627724l-93.915973-76.538187c-9.736758-8.232498-14.369266-20.467147-12.274558-32.098046 1.826602-10.206456 8.823969-18.425651 18.708084-21.998013l117.566626-42.425252c11.510148-4.136204 24.267706-0.537236 32.258705 9.025561 6.580882 7.869225 9.414417 18.721387 7.574512 29.021987l-24.388457 117.123534C367.50763 612.640118 357.112885 622.805642 343.844697 622.805642zM364.741633 467.850477l-118.130468 42.559305c-0.859577 0.309038-0.899486 0.523933-0.980327 0.99363-0.295735 1.611707 0.563842 4.203742 2.76702 6.070252l93.90267 76.524884c0.134053 0.119727 0.268106 0.228197 0.388856 0.321318 0.214894-0.591471 0.429789-1.342578 0.591471-2.282996l24.388457-117.095905c0.416486-2.430352-0.618077-4.888334-1.664919-6.137791C365.426225 468.106304 364.929922 467.850477 364.741633 467.850477z"  ></path><path d="M496.113683 918.253584c-246.320035 0-446.709995-200.38996-446.709995-446.696692 0-246.320035 200.388936-446.708971 446.709995-446.708971 246.320035 0 446.708971 200.388936 446.708971 446.708971C942.823678 717.863624 742.433718 918.253584 496.113683 918.253584zM496.113683 79.856769c-215.982076 0-391.700123 175.718047-391.700123 391.700123 0 215.982076 175.718047 391.68682 391.700123 391.68682 215.981053 0 391.6991-175.704744 391.6991-391.68682C887.813806 255.57584 712.095759 79.856769 496.113683 79.856769z"  ></path><path d="M496.113683 687.874613c-7.602142 0-13.752212-6.151094-13.752212-13.752212s6.151094-13.751189 13.752212-13.751189c104.122429 0 188.825576-84.703147 188.825576-188.813297 0-104.122429-84.703147-188.825576-188.825576-188.825576-104.123452 0-188.8266 84.703147-188.8266 188.825576 0 7.602142-6.151094 13.752212-13.752212 13.752212s-13.752212-6.151094-13.752212-13.752212c0-119.284757 97.045243-216.33 216.331024-216.33 119.284757 0 216.33 97.045243 216.33 216.33C712.444706 590.82937 615.399463 687.874613 496.113683 687.874613z"  ></path><path d="M828.21236 485.310128c-7.602142 0-13.752212-6.151094-13.752212-13.752212 0-143.123698-96.306416-269.405823-234.192833-307.104423-7.333012-2.000564-11.644201-9.561773-9.642614-16.894785 2.01489-7.333012 9.656941-11.589966 16.895809-9.642614 149.811004 40.961924 254.444063 178.149423 254.444063 333.641823C841.963549 479.159034 835.812455 485.310128 828.21236 485.310128z"  ></path><path d="M514.660084 153.708777c-0.254803 0-0.509606 0-0.765433-0.026606-5.89629-0.322341-11.831466-0.484024-17.780969-0.484024-7.602142 0-13.752212-6.151094-13.752212-13.752212s6.151094-13.752212 13.752212-13.752212c6.459109 0 12.879332 0.188288 19.286252 0.537236 7.586792 0.403183 13.388938 6.888897 12.973476 14.477736C527.983531 148.027381 521.913279 153.708777 514.660084 153.708777z"  ></path></symbol><symbol id="icon-fold" viewBox="0 0 1024 1024"><path d="M512 42.666667C251.733333 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333c258.133333 0 469.333333-209.066667 469.333333-469.333333S770.133333 42.666667 512 42.666667zM512 938.666667C277.333333 938.666667 85.333333 746.666667 85.333333 512S277.333333 85.333333 512 85.333333c234.666667 0 426.666667 192 426.666667 426.666667S746.666667 938.666667 512 938.666667zM746.666667 426.666667c-6.4 0-10.666667 2.133333-14.933333 6.4L512 633.6l-219.733333-200.533333C288 428.8 283.733333 426.666667 277.333333 426.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 6.4 2.133333 10.666667 6.4 14.933333l234.666667 213.333333c4.266667 4.266667 8.533333 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933333-6.4l234.666667-213.333333c4.266667-4.266667 6.4-8.533333 6.4-14.933333C768 435.2 759.466667 426.666667 746.666667 426.666667z"  ></path></symbol><symbol id="icon-random" viewBox="0 0 1024 1024"><path d="M63.839469 734.681662c0-7.621585 6.167466-13.790074 13.790074-13.790074l170.093956 0c20.010753 0 38.836517-8.29492 52.989865-22.461571l389.285121-389.802914c19.378349-19.365046 45.125757-29.006637 72.488964-29.006637l150.593833 0-72.987315-74.010621c-5.386684-5.386684-5.386684-15.136745 0-20.522406 5.387707-5.386684 14.113439-5.386684 19.500123 0l96.512101 96.526427c2.505054 2.491751 4.054339 5.952572 4.054339 9.776667s-1.549286 7.312546-4.054339 9.803273l-96.512101 96.567359c-2.693342 2.693342-6.221702 4.175089-9.749038 4.175089-3.52836 0-7.05672-1.090844-9.750061-3.784186-5.386684-5.386684-5.386684-13.601786 0-18.987447l72.987315-71.950705L762.486426 307.213917c-19.99745 0-38.823214 7.284917-52.989865 21.424962L320.211441 717.418486c-19.378349 19.364023-45.112454 31.05325-72.488964 31.05325L77.62852 748.471736C70.006935 748.471736 63.839469 742.30427 63.839469 734.681662zM77.62852 307.213917l165.379585 0c22.717398 0 44.950771 8.187473 61.029982 24.25338l108.578927 108.053971c2.693342 2.693342 6.221702 3.784186 9.749038 3.784186 3.52836 0 7.05672-1.480724 9.749038-4.160763 5.387707-5.399987 5.387707-14.193257 0-19.579941L323.538209 311.994804c-21.519106-21.505803-50.121538-32.373315-80.529081-32.373315L77.62852 279.621489c-7.621585 0-13.790074 6.181793-13.790074 13.803377C63.839469 301.033148 70.006935 307.213917 77.62852 307.213917zM840.092945 838.911538c2.693342 2.693342 6.221702 4.040013 9.750061 4.040013 3.527336 0 7.05672-1.346671 9.749038-4.040013l96.512101-96.526427c2.505054-2.477424 4.054339-5.951549 4.054339-9.749038 0-3.824095-1.549286-7.271614-4.054339-9.776667l-96.512101-96.500844c-5.386684-5.386684-14.112416-5.386684-19.500123 0-5.386684 5.387707-5.386684 15.136745 0 20.523429l72.987315 74.010621L767.200798 720.892611c-23.054065 0-44.721551-10.019191-61.029982-26.313296L597.590865 585.502038c-5.386684-5.386684-14.112416-5.655813-19.4991-0.270153-5.387707 5.386684-5.387707 13.978363 0 19.365046l108.577904 109.561301c21.506826 21.4925 50.109258 34.31248 80.529081 34.31248l145.880485 0-72.987315 71.964008C834.706261 825.822428 834.706261 833.524854 840.092945 838.911538z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M909.892465 331.781731c-21.798121-51.476314-52.909055-97.631021-92.514092-137.236058-39.605037-39.605037-85.862083-70.818309-137.236058-92.514092-53.21607-22.514491-109.809314-33.976414-168.142315-33.976414S397.176094 79.414751 343.857685 102.031581c-51.476314 21.798121-97.631021 52.909055-137.236058 92.514092s-70.818309 85.862083-92.514092 137.236058c-22.514491 53.21607-33.976414 109.809314-33.976414 168.142315s11.461923 114.823906 33.976414 168.142315c21.798121 51.476314 52.909055 97.631021 92.514092 137.236058 39.605037 39.605037 85.862083 70.818309 137.236058 92.514092 53.21607 22.514491 109.809314 33.976414 168.142315 33.976414s114.823906-11.461923 168.142315-33.976414c51.476314-21.798121 97.631021-52.909055 137.236058-92.514092 39.605037-39.605037 70.818309-85.862083 92.514092-137.236058 22.514491-53.21607 33.976414-109.809314 33.976414-168.142315S932.509294 385.10014 909.892465 331.781731zM512 886.763942c-213.273636 0-386.839896-173.56626-386.839896-386.839896s173.56626-386.839896 386.839896-386.839896 386.839896 173.56626 386.839896 386.839896S725.273636 886.763942 512 886.763942z"  ></path><path d="M440.055966 369.442335c-12.485309 0-22.514491 10.029182-22.514491 22.514491l0 248.68279c0 12.485309 10.029182 22.514491 22.514491 22.514491s22.514491-10.029182 22.514491-22.514491L462.570458 391.956826C462.570458 379.471517 452.541275 369.442335 440.055966 369.442335z"  ></path><path d="M570.025984 369.442335c-12.485309 0-22.514491 10.029182-22.514491 22.514491l0 248.68279c0 12.485309 10.029182 22.514491 22.514491 22.514491s22.514491-10.029182 22.514491-22.514491L592.540476 391.956826C592.540476 379.471517 582.511293 369.442335 570.025984 369.442335z"  ></path></symbol><symbol id="icon-repeat" viewBox="0 0 1024 1024"><path d="M146.14528 313.7536a436.51072 436.51072 0 0 0-72.66304 241.8688c0 146.55488 72.4992 280.94464 191.20128 362.16832 24.1664 16.50688 49.84832 30.55616 76.8 41.94304a20.48 20.48 0 1 0 15.9744-37.72416 396.65664 396.65664 0 0 1-69.632-38.05184 397.02528 397.02528 0 0 1-173.38368-328.33536c0-79.09376 23.1424-154.70592 65.86368-219.21792a20.48 20.48 0 1 0-34.16064-22.60992z m248.79104 664.53504a435.6096 435.6096 0 0 0 117.06368 15.81056 439.0912 439.0912 0 0 0 182.272-39.5264c30.43328-13.9264 59.1872-31.3344 85.64736-51.8144a437.73952 437.73952 0 0 0 170.5984-347.136 436.55168 436.55168 0 0 0-124.96896-306.5856 20.48 20.48 0 0 0-29.2864 28.672 395.59168 395.59168 0 0 1 113.29536 277.9136 396.77952 396.77952 0 0 1-154.66496 314.73664 397.43488 397.43488 0 0 1-140.0832 69.38624 400.34304 400.34304 0 0 1-208.97792-0.90112 20.48 20.48 0 1 0-10.89536 39.44448zM781.06624 209.3056a438.43584 438.43584 0 0 0-111.04256-62.8736 20.48 20.48 0 1 0-14.7456 38.21568A394.93632 394.93632 0 0 1 755.9168 241.664a20.48 20.48 0 0 0 25.14944-32.3584zM512 117.1456a436.51072 436.51072 0 0 0-304.45568 122.88 20.48 20.48 0 1 0 28.4672 29.4912 395.55072 395.55072 0 0 1 275.98848-111.4112 20.48 20.48 0 1 0 0-40.96z"  ></path><path d="M477.02016 177.31584a20.48 20.48 0 0 0 28.99968 28.95872l48.04608-48.08704a30.14656 30.14656 0 0 0 0-42.68032l-48.04608-48.08704a20.48 20.48 0 0 0-28.99968 28.99968l40.46848 40.42752-40.46848 40.46848zM550.83008 728.43264h-41.7792v-318.50496H450.56L476.11904 368.64h74.71104z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M40.96 512A471.04 471.04 0 1 0 512 40.96 471.04 471.04 0 0 0 40.96 512z m40.96 0a430.08 430.08 0 1 1 430.08 430.08A430.08 430.08 0 0 1 81.92 512z"  ></path><path d="M593.92 389.12h40.96v327.68h-40.96zM593.92 307.2h40.96v40.96h-40.96z"  ></path><path d="M327.68 307.2v409.6l286.72-204.8z m40.96 327.68V389.12l184.32 122.88z"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M512 40.96a471.04 471.04 0 1 0 471.04 471.04A471.04 471.04 0 0 0 512 40.96z m0 901.12a430.08 430.08 0 1 1 430.08-430.08 430.08 430.08 0 0 1-430.08 430.08z"  ></path><path d="M389.12 389.12h40.96v327.68h-40.96zM389.12 307.2h40.96v40.96h-40.96z"  ></path><path d="M409.6 512l286.72 204.8V307.2z m61.44 0l184.32-122.88v245.76z"  ></path></symbol><symbol id="icon-list" viewBox="0 0 1024 1024"><path d="M808.96 312.32H294.4c-12.8 0-20.48-10.24-20.48-20.48 0-12.8 10.24-20.48 20.48-20.48h514.56c12.8 0 20.48 10.24 20.48 20.48s-7.68 20.48-20.48 20.48zM204.8 312.32h-5.12c-12.8 0-20.48-10.24-20.48-20.48 0-12.8 10.24-20.48 20.48-20.48H204.8c12.8 0 20.48 10.24 20.48 20.48s-7.68 20.48-20.48 20.48zM207.36 558.08h-5.12c-12.8 0-20.48-10.24-20.48-20.48 0-12.8 10.24-20.48 20.48-20.48h5.12c12.8 0 20.48 10.24 20.48 20.48 0 12.8-10.24 20.48-20.48 20.48zM209.92 806.4H204.8c-12.8 0-20.48-10.24-20.48-20.48 0-12.8 10.24-20.48 20.48-20.48h5.12c12.8 0 20.48 10.24 20.48 20.48s-10.24 20.48-20.48 20.48zM808.96 558.08H294.4c-12.8 0-20.48-10.24-20.48-20.48 0-12.8 10.24-20.48 20.48-20.48h514.56c12.8 0 20.48 10.24 20.48 20.48 0 12.8-7.68 20.48-20.48 20.48zM808.96 806.4H294.4c-12.8 0-20.48-10.24-20.48-20.48 0-12.8 10.24-20.48 20.48-20.48h514.56c12.8 0 20.48 10.24 20.48 20.48s-7.68 20.48-20.48 20.48z" fill="#333333" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)