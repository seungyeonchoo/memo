import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { goalInputChange } from '../store/slices/inputSlice';
import { createGoalToggleChange, editGoalToggleChange } from '../store/slices/toggleSlice';
import { UserStorage } from '../utils/Storage';

const useGoal = goal_id => {
  const dispatch = useDispatch();
  const user_id = Number(new UserStorage().getId());
  const { goalInput } = useSelector(state => state.input);
  const { sortParams, filterParams } = useSelector(state => state.param);
  const queryClient = useQueryClient();
  const currDate = new Date();

  // handle goal input
  const isValid = goalInput.due_date && goalInput.goal_name && goalInput.description;
  const handleGoalInput = e => {
    const { name, value } = e.target;
    const default_input = { ...goalInput, userId: user_id, date: currDate };
    dispatch(goalInputChange({ ...default_input, [name]: value }));
  };

  // fetch user goal data
  const fetchUserGoals = new Http('goals');
  const { data: goalData, refetch: refetchGoals } = useQuery(['goals'], () =>
    fetchUserGoals.get({ ...sortParams, ...filterParams, userId: user_id, _embed: 'todos' })
  );

  // mutation server state

  // 1. add new user goal
  const goal_post = new Http('goals').post;
  const { mutate: create_goal } = useMutation(goal_post);

  const handleCreateGoal = () => {
    create_goal(goalInput, {
      onSuccess: () => {
        dispatch(createGoalToggleChange());
        queryClient.invalidateQueries('goals');
        queryClient.invalidateQueries('user');
      },
    });
  };

  // 2. update is_complete of goal
  const patchIsComplete = new Http(`goals/${Number(goal_id)}`).patch;
  const { mutate: complete_goal } = useMutation(patchIsComplete);
  const handleIsComplete = e => {
    const { checked } = e.target;

    if (checked) {
      complete_goal(
        { is_complete: true },
        {
          onSuccess: () => {
            queryClient.invalidateQueries('goals');
            queryClient.invalidateQueries('user');
          },
        }
      );
    } else {
      complete_goal(
        { is_complete: false },
        {
          onSuccess: () => {
            queryClient.invalidateQueries('goals');
            queryClient.invalidateQueries('user');
          },
        }
      );
    }
  };

  // 3. delete goals
  const deleteGoal = new Http(`goals/${Number(goal_id)}`).delete;
  const { mutate: removeGoal } = useMutation(deleteGoal);
  const handleDelete = () => {
    removeGoal(Number(goal_id), {
      onSuccess: () => {
        queryClient.invalidateQueries('goals');
        queryClient.invalidateQueries('user');
      },
    });
  };

  // 4. update goals
  const patchUpdates = new Http(`goals/${goalInput.id}`).patch;
  const { mutate: update_goal } = useMutation(patchUpdates);
  const handleUpdates = () => {
    update_goal(goalInput, {
      onSuccess: () => {
        dispatch(editGoalToggleChange());
        queryClient.invalidateQueries('goals');
        queryClient.invalidateQueries('user');
      },
    });
  };

  return {
    goalData,
    goalInput,
    isValid,
    refetchGoals,
    handleCreateGoal,
    handleIsComplete,
    handleGoalInput,
    handleDelete,
    handleUpdates,
  };
};

export default useGoal;
