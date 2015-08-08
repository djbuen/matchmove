'use strict'

###*
 # @ngdoc function
 # @name angularSlickApp.controller:PostCtrl
 # @description
 # # PostCtrl
 # Controller of the angularSlickApp
###
angular.module('slick')
  .controller 'PostCtrl', ($scope, $cookies, $cookieStore, $routeParams) ->
    console.log($routeParams)
    $scope.post_id = $routeParams.id
    $scope.post_body = ""
    $scope.comment_body = ""
    $scope.awesomeThings = [{
          "id": 1,
          "body": "Geppetto, a poor old wood carver, was making a puppet from a tree branch. “You shall be my little boy,” he said to the puppet, “and I shall call you ‘Pinocchio’.” He worked for hours, carefully carving each detail. When he reached the mouth, the puppet started making faces at Geppetto. “Stop that, you naughty boy,” Geppetto scolded, “Stop that at once !” “I won’t stop !” cried Pinocchio.",
          "comments": [
            {
              "id": 1,
              "comment": "Ohh poor boy pinocchio...."
            }
          ]
        },
        {
          "id": 2,
          "body": "“Of course I can, silly,” said the puppet. “You’ve given me a mouth to talk with.” Pinocchio rose to his feet and danced on the table top. “Look what I can do !” he squealed.",
          "comments": [
            {
              "id": 1,
              "comment": "Pinocchio tries to rationalize"
            }
          ]
        },
        {
          "id": 3,
          "body": "“Pinocchio, this is not the time to dance,” Geppetto explained. “You must get a good night’s rest. Tomorrow you will start going to school with the real boys. You will learn many things, including how to behave.”",
          "comments": [
            {
              "id": 1,
              "comment": "That's right!"
            }
          ]
        },
        {
          "id": 4,
          "body": "“Get off my stage,” roared the Puppet Master. Then he noticed how much the crowd liked Pinocchio. He did not say anything and let Pinocchio stay. “Here, you’ve earned five copper coins,” the Puppet Master told Pinocchio.",
          "comments": [
            {
              "id": 1,
              "comment": "Earned it!"
            }
          ]
        }
      ]

      $scope.posts = {}
      i=0
      while i < $scope.awesomeThings.length
        $scope.posts[$scope.awesomeThings[i].id] = $scope.awesomeThings[i]
        i++
      console.log($scope.posts)
      $scope.addPost = (body)->
        last = $scope.awesomeThings.length
        console.log($scope.awesomeThings[last-1].id)
        $scope.awesomeThings.push({post_id: $scope.awesomeThings[last-1].id + 1, body: body, comments: []})
        $cookieStore.put('test', $scope.awesomeThings);
        x = $cookieStore.get('test')
        console.log(x)

      $scope.addComment = (comments) ->
        console.log(comments)
        console.log($scope.comment_body)
        comments.push({comment: $scope.comment_body})
    
      
