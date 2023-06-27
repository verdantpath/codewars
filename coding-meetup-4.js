const getFirstPython = list => {
  let pyDev = list.find(el => el.language == "Python")
  return pyDev ? `${pyDev.firstName}, ${pyDev.country}` : 'There will be no Python developers';
}