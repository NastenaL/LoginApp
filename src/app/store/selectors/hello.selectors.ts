function selectFeature(store) {
  return store.hello;
}

function selectText(store) {
  const feature = selectFeature(store);

  return feature.text;
}

export const HelloSelectors = {
  selectText,
};
