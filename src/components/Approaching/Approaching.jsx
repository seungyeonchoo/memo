import ApproachingList from './components/ApproachingList';
import ApproachingTitle from './components/ApproachingTitle';

const Approaching = ({ user }) => {
  return (
    <div>
      <ApproachingTitle />
      <ApproachingList user={user} />
    </div>
  );
};

export default Approaching;
