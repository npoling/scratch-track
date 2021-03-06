app.controller('NoteCtrl', ['$scope', '$state', 'Note', 'Project', 'Resource',
 function($scope, $state, Note, Project, Resource) {

  var projectId = $state.params.id;

  $scope.sort = Resource.sort;

  $scope.notes = $scope.notes || [];

  $scope.newNote = {
    name: '',
    text: '',
    project_id: projectId
  }

  $scope.noteEdits = {
    name: '',
    text: '',
    project_id: projectId
  }

  console.log('HIT NOTES', $state.current.name);

  $scope.public = true;
  if ($state.current.authenticate) {
    console.log('hereerere')
    $scope.public = false;
  }

  //Note Methods:
  $scope.formatDate = function(date) {
    return Resource.formatDate(date);
  };

  $scope.sortBy = function(field){
    Resource.sortBy(field);
  };

  $scope.autoExpand = function(e) {
    Resource.autoExpand(e);    
  };
  
  $scope.submit = function(){
    $scope.submitted = true;
  };

  $scope.closeAccordion = function(){
    Resource.closeAccordion();
  };
  
  $scope.getAll = function (projectId) {
    Project.getProjectNotes(projectId)
    .then(function(notes){
      console.log(notes.data);
      $scope.notes = notes.data;
    });
  }

  $scope.addNote = function (newNote) {
    return Note.create(newNote)
    .then(function(){
      $scope.resetForm();
      $scope.getAll(projectId);
    });
  }

  $scope.deleteNote = function (noteId) {
    return Note.del(noteId)
    .then(function(){
      $scope.getAll(projectId);
    });
  }

  $scope.editToggle = false;

  $scope.editNote = function (noteId) {
    $scope.editToggle = true;
    var textId = '#note-text' + noteId;
    var text = $(textId);
    text.removeAttr('readonly');
  }

  $scope.confirmEdit = function (noteId, value, name) {
    $scope.editToggle = false;
    var textId = '#note-text' + noteId;
    var text = $(textId);
    text.attr('readonly', 'true ');

    var data = {
      text: value,
      name: name
    }

    return Note.editBody(noteId, data)
    .then(function(){
      $scope.getAll(projectId);
    });
  }

  $scope.resetForm = function () {
    $scope.newNote = {};
    $scope.hasBeenReset = true;
  }

  var init = function () {
    console.log('here we go');
    $scope.getAll(projectId);
  }
  init();

}]);
