import DogImage from 'views/containers/DogImage';
import DogList from 'views/containers/DogList';

export default [
    {
        component: DogList,
        path: '/'
    },
    {
        component: DogImage,
        path: '/image/:breed'
    }
];
