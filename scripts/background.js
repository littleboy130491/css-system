/*
Usage:

  <section data-bg="/images/hero.jpg"></section>

  <section
    data-bg="/videos/hero.mp4"
    data-bg-type="video"
    data-bg-poster="/images/hero-poster.jpg">
  </section>

Lazy loading is on by default.
Disable it with:

  data-bg-lazy="false"

Optional attributes:

  data-bg-type="image|video"
  data-bg-fit="cover|contain|fill"
  data-bg-position="center center"
  data-bg-poster="/path/poster.jpg"
*/

(function () {
  var SELECTOR = "[data-bg]";
  var PROCESSED_ATTR = "data-bg-mounted";
  var VIDEO_EXTENSIONS = /\.(mp4|webm|ogg|ogv|mov|m4v)(\?.*)?$/i;

  function inferType(source, explicitType) {
    if (explicitType === "video" || explicitType === "image") {
      return explicitType;
    }

    return VIDEO_EXTENSIONS.test(source) ? "video" : "image";
  }

  function isLazy(element) {
    return element.dataset.bgLazy !== "false";
  }

  function ensureHostStyles(element) {
    var computed = window.getComputedStyle(element);

    if (computed.position === "static") {
      element.style.position = "relative";
    }

    if (computed.overflow === "visible") {
      element.style.overflow = "hidden";
    }

    if (computed.isolation === "auto") {
      element.style.isolation = "isolate";
    }
  }

  function createLayer(element) {
    var layer = document.createElement("div");

    layer.setAttribute("aria-hidden", "true");
    layer.className = "bg-media";
    layer.style.position = "absolute";
    layer.style.inset = "0";
    layer.style.zIndex = "-1";
    layer.style.pointerEvents = "none";
    layer.style.overflow = "hidden";

    element.prepend(layer);

    return layer;
  }

  function applyMediaStyles(media, element) {
    media.style.width = "100%";
    media.style.height = "100%";
    media.style.objectFit = element.dataset.bgFit || "cover";
    media.style.objectPosition = element.dataset.bgPosition || "center center";
    media.style.display = "block";
  }

  function mountImage(layer, element, source, lazy) {
    var image = document.createElement("img");

    applyMediaStyles(image, element);
    image.alt = "";
    image.decoding = "async";
    image.loading = lazy ? "lazy" : "eager";
    image.src = source;

    layer.appendChild(image);
  }

  function mountVideo(layer, element, source, lazy) {
    var video = document.createElement("video");

    applyMediaStyles(video, element);
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = lazy ? "none" : "metadata";

    if (element.dataset.bgPoster) {
      video.poster = element.dataset.bgPoster;
    }

    video.src = source;
    layer.appendChild(video);
  }

  function mountBackground(element) {
    if (element.hasAttribute(PROCESSED_ATTR)) {
      return;
    }

    var source = element.dataset.bg;

    if (!source) {
      return;
    }

    var type = inferType(source, element.dataset.bgType);
    var lazy = isLazy(element);

    ensureHostStyles(element);

    var load = function () {
      if (element.hasAttribute(PROCESSED_ATTR)) {
        return;
      }

      var layer = createLayer(element);

      if (type === "video") {
        mountVideo(layer, element, source, lazy);
      } else {
        mountImage(layer, element, source, lazy);
      }

      element.setAttribute(PROCESSED_ATTR, "true");
    };

    if (!lazy || !("IntersectionObserver" in window)) {
      load();
      return;
    }

    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        load();
        currentObserver.unobserve(entry.target);
      });
    }, {
      rootMargin: "200px 0px"
    });

    observer.observe(element);
  }

  function initBackgrounds(root) {
    var scope = root || document;
    var elements = scope.querySelectorAll(SELECTOR);

    elements.forEach(mountBackground);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initBackgrounds();
    });
  } else {
    initBackgrounds();
  }

  window.initBackgrounds = initBackgrounds;
})();
