// import { useState } from 'react';
// import styles from './styles.module.css';
// import LatestNews from '../LatestNews/LatestNews';
// import WeatherSection from '../WeatherSection/WeatherSection';
// import ExchangeRateSection from '../ExchangeRateSection/ExchangeRateSection';

// type TypeSection = 'Latest News' | 'Weather' | 'Exchange Rate';

// const InteractiveSection = () => {
//     const [selectedSection, setSelectedSection] = useState<TypeSection>('Latest News');

//     const handleSelectClick = (section: TypeSection) => {
//         setSelectedSection(section);
//     };

//     return (
//         <section className={styles.section}>
//             <div className={styles.btnWrapper}>
//                 <div>
//                 <button type='submit' onClick={() => handleSelectClick('Latest News')}>Latest News</button>
//             </div>
//             <div>
//                 <button type='submit' onClick={() => handleSelectClick('Weather')}>Weather</button>
//             </div>
//             <div>
//                 <button type='submit' onClick={() => handleSelectClick('Exchange Rate')}>Exchange Rate</button>
//             </div>
//             </div>

//             {selectedSection === 'Latest News' && (
//                 <LatestNews/>
//             )}
//             {selectedSection === 'Weather' && (
//                 <WeatherSection />
//             )}
//             {selectedSection === 'Exchange Rate' && (
//                 <ExchangeRateSection />
//             )}
//         </section>
//     );
// };

// export default InteractiveSection;
