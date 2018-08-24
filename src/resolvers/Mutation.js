const addLearning = (_, args, { db }, info) => (
  db.mutation.createLearning({
    data: {
      ...args,
    },
  }, info)
);

export default {
  addLearning,
};
