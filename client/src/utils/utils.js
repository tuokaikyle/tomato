export const colors = [
  'card-panel red lighten-4',
  'card-panel orange lighten-4',
  'card-panel blue lighten-4',
  'card-panel green lighten-4',
];

export const groupNames = [
  { shortName: 'One', fullName: 'Important and Urgent' },
  { shortName: 'Two', fullName: 'Less Important but Urgent' },
  { shortName: 'Three', fullName: 'Important but Not Urgent' },
  { shortName: 'Four', fullName: 'Less important Not Urgent' },
];

export const getGroupName = (shortName) => {
  const r = groupNames.filter((i) => i.shortName === shortName);
  return r[0].fullName;
};
