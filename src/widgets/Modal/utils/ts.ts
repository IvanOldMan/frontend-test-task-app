export const getModalRootNode = () => {
  let rootNode = document.getElementById('modal');

  if (!rootNode) {
    rootNode = document.createElement('div');
    rootNode.id = 'modal';

    document.body.appendChild(rootNode);
  }

  return rootNode;
};
