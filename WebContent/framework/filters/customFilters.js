angular.module("customFilters", [])

.filter("unique", function(){                   // factory �Լ�
    return function(data, propertyName){        // filter �Լ�
        if(angular.isArray(data) && angular.isString(propertyName)){
            var results = [];
            var keys = {};
            for(var i=0; i < data.length; i++){
                var val = data[i][propertyName];
                if(angular.isUndefined(keys[val])){     // val�� keys ��ü�� �������� �ʴ´ٸ� results �迭�� ������ ������ push �Ѵ�.
                    keys[val] = true;                   // keys[val]�� true�� �Ҵ������ν� �̹� �����ϴ� ������ ����.
                    results.push(val);
                }
            }
            return results;
        }else{
            return data;
        }
    }
});
