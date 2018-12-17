const PassageSchema = {
  name: 'Passage',
  primaryKey: 'id',
  properties: {
    id: 'string',
    content: 'string',
    book: 'string',
    chapter: 'int',
    verse: 'int',
    type: 'string',
  },
};

export default {
  PassageSchema,
};
