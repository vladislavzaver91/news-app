import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';
import ScrollTopButton from '../../components/ScrollTopButton/ScrollTopButton';

const Main = () => {
    return (
        <main className='main'>
            <LatestNews />
            <NewsByFilters />
            <ScrollTopButton />
        </main>
    );
};

export default Main;