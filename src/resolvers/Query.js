const status = () => ({
  statusCode: 200,
  working: true,
});


const learnings = (parent, args, context, info) => {
  const { db } = context;
  return db.query.learnings({}, info);
};


export default {
  status,
  learnings,
};
