import { user_id } from '../../../../utils/Storage';

const GroupList = ({ group }) => {
  return <div>{group?.filter(el => el.users?.includes(user_id)).map(el => el.name)}</div>;
};

export default GroupList;
