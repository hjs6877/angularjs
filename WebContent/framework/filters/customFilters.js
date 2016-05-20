angular.module("customFilters", [])

.filter("unique", function(){                   // factory 함수
    return function(data, propertyName){        // filter 함수
        if(angular.isArray(data) && angular.isString(propertyName)){
            var results = [];
            var keys = {};
            for(var i=0; i < data.length; i++){
                var val = data[i][propertyName];
                if(angular.isUndefined(keys[val])){     // val이 keys 객체에 존재하지 않는다면 results 배열에 유일한 값으로 push 한다.
                    keys[val] = true;                   // keys[val]을 true로 할당함으로써 이미 존재하는 값으로 정의.
                    results.push(val);
                }
            }
            return results;
        }else{
            return data;
        }
    }
});
