function firstTodoCtrl($scope) {

  $scope.todos = [];

  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };

  $scope.getTotalCompleted = function () {
    return _.size(_.filter($scope.todos, function(todo){return todo.done}));
  };


  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };

  $scope.clearCompleted = function () {
    $scope.todos = _.filter($scope.todos, function(todo){
      return !todo.done;
    });
  };
}
