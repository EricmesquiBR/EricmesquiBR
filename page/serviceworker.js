var staticCacheName = "pwa_dice"

const filesToCache = [
    "./index.html",
    "./css/main.css",
    "./img/descending1.jpg",
    "./img/descending2.jpg",
    "./img/icon.jpg"
]

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            // return cache.addAll(["/"]);
            console.log("ios")
            return cache.addAll(filesToCache)
        })
    )
})

self.addEventListener("fetch", function (event) {
    console.log(event.request.url)

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request)
        })
    )
})
