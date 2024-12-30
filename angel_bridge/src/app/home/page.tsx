import { grayScale, purple } from '@/style/theme.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Contents from './components/Contents';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div className={[grayScale, purple].join(' ')}>
            <Header />
            <Banner />
            <Contents />
            <Footer />
        </div>
    );
}
