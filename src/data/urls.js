export const urls = {
  id: 1,
  vIni: 'https://gateway.marvel.com:443/v1/public/characters?apikey=30e79de77bacad0698466f506b2a8a15',
  start: 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=',
  end: '&limit=100&apikey=30e79de77bacad0698466f506b2a8a15',
  vIniComic:
    'https://gateway.marvel.com:443/v1/public/comics?characters=1011334&apikey=30e79de77bacad0698466f506b2a8a15',
  comicStart: 'https://gateway.marvel.com:443/v1/public/comics?characters=',
  comicEnd: '&limit=100&apikey=30e79de77bacad0698466f506b2a8a15',
  vIniSerie:
    'https://gateway.marvel.com:443/v1/public/series?characters=1011334&limit=100&apikey=30e79de77bacad0698466f506b2a8a15',
  serieStart: 'https://gateway.marvel.com:443/v1/public/series?characters=',
  serieEnd: '&limit=100&apikey=30e79de77bacad0698466f506b2a8a15',
  vIniEvent:
    'https://gateway.marvel.com:443/v1/public/events?characters=1011334&apikey=30e79de77bacad0698466f506b2a8a15',
  eventStart: 'https://gateway.marvel.com:443/v1/public/events?characters=%',
  eventEnd: '&limit=100&apikey=30e79de77bacad0698466f506b2a8a15',
}
export default urls
