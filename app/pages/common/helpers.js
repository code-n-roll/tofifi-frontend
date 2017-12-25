export const processGroupsReact = (groups, currentUser) => (
  groups.map((group) => (
    group.adminId === currentUser.id ? {...group, isOwner: true} : group
  ))
);
