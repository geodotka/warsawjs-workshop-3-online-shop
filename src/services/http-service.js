
export default function HTTPService($http) {    // angular rozpozna tę zmienną, bo trzyma w jakiejś liście takie nazwy zaczynające się od $
    return {
        //    $get: (url) => {
        $get(url) {  // to nam zamieni na $get: function(){
            return $http.get(url);  // $http jest wewnętrzny w angualrze
        }
    };
}
