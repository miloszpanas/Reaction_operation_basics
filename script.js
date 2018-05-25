
var movies = [
    {   
        id: 1,
        title: 'Equilibrium',
        desc: 'An excellent movie about a world devoid of emotions',
        imgURL: 'https://ia.media-imdb.com/images/M/MV5BMTkzMzA1OTI3N15BMl5BanBnXkFtZTYwMzUyMDg5._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {   
        id: 2,
        title: 'The Void',
        desc: 'A great horror movie with an awesome 80\' vibe to it',
        imgURL: 'http://www.asset1.net/tv/pictures/160/237/movie/the-void-2016/The-Void-KA-1.jpg'
    },
    {
        id: 3,
        title: 'Forrest Gump',
        desc: 'One of the best movies ever filmed',
        imgURL: 'https://images-na.ssl-images-amazon.com/images/I/61sDuFUszfL._SY445_.jpg'
    },
    {
        id: 4,
        title: 'Lord of the Rings',
        desc: 'Movie adaption of Tolkien\'s book series',
        imgURL: 'http://ecsmedia.pl/c/wladca-pierscieni-dwie-wieze-wydanie-dwuplytowe-w-iext39346721.jpg'
    }

];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img',{src: movie.imgURL})        
    );
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));