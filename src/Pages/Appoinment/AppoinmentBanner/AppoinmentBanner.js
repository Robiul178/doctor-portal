
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        {/* <p>You have selected date :{format(selectedDate, 'PP')}</p> */}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </header>
    );
};

export default AppoinmentBanner;