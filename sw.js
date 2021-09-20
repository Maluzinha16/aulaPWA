var cacheName = 'NomeApp-v';
var filesToCache = [
  './aranhaindex.html',
  './login.html',
  './cssfaleconosco.htnl',
  './estilo.css',
  './estiloaranha.css',
  './estilofale.css',
  './estiloindex.css',
  './imagem',
  './index.html',
  './manifest.json'
];
self.addEventListener('lnstal', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('fetch',function(e){
  e.respondWith(
    cache.match(e.request).then(function(response){
      return response || fetch(e.request);
    })
  );
});