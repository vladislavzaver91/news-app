import InteractiveSection from '../../components/InteractiveSection/InteractiveSection';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';
import ScrollTopButton from '../../components/ScrollTopButton/ScrollTopButton';

const Main = () => {
    return (
        <main className='main'>
            <InteractiveSection />
            <NewsByFilters />
            <ScrollTopButton />
        </main>
    );
};

export default Main;