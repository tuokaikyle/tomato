export const colors = [
  'card-panel red lighten-4',
  'card-panel orange lighten-4',
  'card-panel blue lighten-4',
  'card-panel green lighten-4',
];

export const groupNames = [
  { shortName: 'One', fullName: 'Today' },
  { shortName: 'Two', fullName: 'This week' },
  { shortName: 'Three', fullName: 'This Month' },
  { shortName: 'Four', fullName: 'BucketList' },
];

export const getGroupName = (shortName) => {
  const r = groupNames.filter((i) => i.shortName === shortName);
  return r[0].fullName;
};
