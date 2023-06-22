function sortByLanguage(list) {
  let sortedLanguageList = list.sort(function(a, b) {
    var languageA = a.language.toUpperCase(); // ignore upper and lowercase
    var languageB = b.language.toUpperCase(); // ignore upper and lowercase
    if (languageA < languageB) {
      return -1;
    }
    if (languageA > languageB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  let sortedList = sortedLanguageList.sort(function(a, b) {
    if (a.language == b.language) {
      var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    }
  });
  return sortedList;
}


List of developers:  [
  {"firstName":"Kseniya","lastName":"A.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},
  {"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},
  {"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":59,"language":"C"},
  {"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":60,"language":"C"},
  {"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby"},
  {"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":98,"language":"PHP"},
  {"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"JavaScript"}]

  List of developers:  [{"firstName":"Kseniya","lastName":"A.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":59,"language":"C"},{"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":60,"language":"C"},{"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby"},{"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":98,"language":"PHP"},{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"JavaScript"}]
List of developers:  [{"firstName":"Paulo","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"}]
List of developers:  [{"firstName":"Nikau","lastName":"R.","country":"New Zealand","continent":"Oceania","age":39,"language":"Ruby"},{"firstName":"Precious","lastName":"G.","country":"South Africa","continent":"Africa","age":22,"language":"JavaScript"},{"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":30,"language":"C"},{"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":19,"language":"JavaScript"}]
List of developers:  [{"firstName":"Nikau","lastName":"R.","country":"New Zealand","continent":"Oceania","age":39,"language":"Ruby"},{"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":30,"language":"C"},{"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":19,"language":"JavaScript"}]
Random test #1
List of developers: [
{"firstName":"Agustino","lastName":"V.","country":"Uruguay","continent":"Americas","age":19,"language":"JavaScript"},
{"firstName":"Gabrielio","lastName":"T.","country":"Luxembourg","continent":"Europe","age":28,"language":"Java"},
{"firstName":"Sofja","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},
{"firstName":"Annah","lastName":"R.","country":"Liechtenstein","continent":"Europe","age":32,"language":"JavaScript"},
{"firstName":"Mohamedio","lastName":"F.","country":"Morocco","continent":"Africa","age":40,"language":"Ruby"},
{"firstName":"Marian","lastName":"N.","country":"Colombia","continent":"Americas","age":55,"language":"Python"},
{"firstName":"Jakubik","lastName":"I.","country":"Slovakia","continent":"Europe","age":28,"language":"Java"},
{"firstName":"Mehdi","lastName":"H.","country":"Tunisia","continent":"Africa","age":42,"language":"Python"},
{"firstName":"Aleksander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"Java"},
{"firstName":"George","lastName":"B.","country":"England","continent":"Europe","age":21,"language":"C"},
{"firstName":"Ramonio","lastName":"R.","country":"Paraguay","continent":"Americas","age":29,"language":"Ruby"},
{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"},
{"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"},
{"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"Python"},
{"firstName":"William","lastName":"L.","country":"Sweden","continent":"Europe","age":32,"language":"Java"},
{"firstName":"Kaia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"},
{"firstName":"Liam","lastName":"D.","country":"Faroe Islands","continent":"Europe","age":28,"language":"Python"},
{"firstName":"Luke","lastName":"V.","country":"Malta","continent":"Europe","age":29,"language":"PHP"},
{"firstName":"Daniela","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"JavaScript"},
{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"}]