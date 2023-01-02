import DateUtils from '../../../../utils/DateUtils';

const CommentItem = ({ comment }) => {
  return (
    <li>
      <div>{DateUtils.convert(comment.date)}</div>
      <div>{comment.comment}</div>
    </li>
  );
};

export default CommentItem;
