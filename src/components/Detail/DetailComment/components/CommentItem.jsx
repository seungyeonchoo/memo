import CalcDate from '../../../../utils/CalcDate';

const CommentItem = ({ comment }) => {
  return (
    <li>
      <div>{CalcDate.convert(comment.date)}</div>
      <div>{comment.comment}</div>
    </li>
  );
};

export default CommentItem;
