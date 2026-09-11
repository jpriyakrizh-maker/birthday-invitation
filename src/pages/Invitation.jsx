import BirthdayHeader from '../components/BirthdayHeader';
import BabyGallery from '../components/BabyGallery';
import EventDetails from '../components/EventDetails';
import Decorations from '../components/Decorations';

export default function Invitation() {
  return (
    <div className="card-wrapper">
      <BirthdayHeader />
      <BabyGallery />
      <EventDetails />
      <Decorations />
    </div>
  );
}