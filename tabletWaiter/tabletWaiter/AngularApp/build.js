tabletWaiter.controller("addCategoryController",["$scope","dataService",function(a,b){a.categoryName,a.addCategory=function(){b.addCategory(a.categoryName).then(function(b){swal("Buen trabajo","El elemento ha sido introducido correctamente","success"),a.categoryName=""})}}]),tabletWaiter.controller("addItemController",["$scope","dataService",function(a,b){a.itemName,a.itemDescription,a.categories,a.categoriesSelected=[],a.base64Image,b.getCategories().then(function(b){a.categories=b.data}),a.addItem=function(){b.addItem(a.itemName,a.categoriesSelected.toString(),a.base64Image,a.itemDescription).then(function(a){swal("Buen trabajo","El elemento ha sido introducido correctamente","success"),c()})},a.fileNameChanged=function(){var b=document.getElementById("myFileInput"),c=b.files,d=c[0];if(c&&d){var e=new FileReader;e.onload=function(b){var c=b.target.result;a.base64Image="data:image/png;base64,"+btoa(c),$("#preview").attr("src",a.base64Image)},e.readAsBinaryString(d)}},a.clickFileUpload=function(){$("#myFileInput").click()};var c=function(){a.itemName="",a.itemDescription="",a.categoriesSelected=[],$("input[type=checkbox]").prop("checked",!1),a.base64Image=""}}]),tabletWaiter.controller("categoryListController",["$scope","$routeParams","$location","dataService",function(a,b,c,d){a.categories,a.itemsCount,a.loading=!0,d.getCategories().then(function(b){a.categories=b.data,a.itemsCount=b.data.length,a.loading=!1}),a.deleteCategory=function(b){swal({title:"¿Estás seguro?",text:"Vas a borrar permanentemente la categoría",type:"warning",showCancelButton:!0,confirButtonColor:"#DD6B55",confirmButtonText:"Sí, ¡borralo!",closeOnConfirm:!1},function(){d.deleteCategory(b).then(function(b){var c=b.data;f(a.categories,e(a.categories,c)),a.itemsCount--,swal("Buen trabajo","El elemento ha sido borrado correctamente","success")})})},a.goTo=function(a){c.path(a)};var e=function(a,b){for(var c=0;c<a.length;c++)if(a[c].Id==b)return c;return!1},f=function(a,b){null!=b&&a.splice(b,1)}}]),tabletWaiter.controller("editItemController",["$scope","$routeParams","dataService",function(a,b,c){a.item;var d=b.id;c.getItem(d).then(function(b){a.item=b.data}),a.editItem=function(){c.editItem(a.item).then(function(a){swal("Buen trabajo","El elemento ha sido editado correctamente","success")})}}]),tabletWaiter.controller("indexController",["$scope","dataService",function(a,b){}]),tabletWaiter.controller("itemListController",["$scope","$location","dataService",function(a,b,c){a.items;var d;a.itemsCount,a.categories,a.loading=!0,c.getCategories().then(function(b){a.categories=b.data}),c.getAllItems().then(function(b){a.items=b.data,d=b.data,a.itemsCount=b.data.length,a.loading=!1}),a.deleteItem=function(b){swal({title:"¿Estás seguro?",text:"Vas a borrar permanentemente el plato",type:"warning",showCancelButton:!0,confirButtonColor:"#DD6B55",confirmButtonText:"Sí, ¡borralo!",closeOnConfirm:!1},function(){c.deleteItem(b).then(function(b){var c=b.data;f(a.items,e(a.items,c)),a.itemsCount--,swal("Buen trabajo","El elemento ha sido borrado correctamente","success")})})},a.editItem=function(a){b.path("/editItem/"+a)},a.filterCategory=function(b){return a.loading=!0,a.items=[],-1==b?(a.items=d,a.itemsCount=a.items.length,void(a.loading=!1)):(angular.forEach(d,function(c){c.Categories&&c.Categories.match(b)&&a.items.push(c)}),a.itemsCount=a.items.length,void(a.loading=!1))};var e=function(a,b){for(var c=0;c<a.length;c++)if(a[c].Id==b)return c;return!1},f=function(a,b){null!=b&&a.splice(b,1)}}]);