import Date from './components/Date';
import Imminent from './components/Imminent';
import Table from './components/Table';

const Status = ({ data }) => {
  return (
    <>
      <Date data={data} />
      <Table data={data} />
      <Imminent />
    </>
  );
};

export default Status;
