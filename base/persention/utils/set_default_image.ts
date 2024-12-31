export function setDefaultImage(event: Event, defaultImage: string = '~/src/assets/images/5907.jpg') {
    if (event.target instanceof HTMLImageElement) event.target.src = defaultImage
}