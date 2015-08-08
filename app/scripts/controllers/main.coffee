'use strict'

angular.module('slick')
  .controller 'MainCtrl', ($scope, $timeout, $cookies, $cookieStore) ->
    $scope.profile = {
          countPosts: 4,
          countLikes: 1,
          countComments: 4
          }
    $timeout(() ->
      x = $cookieStore.get('test')
      console.log(x)
      if x != undefined
        $scope.awesomeThings = x
      else
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
    ,1000)


    $scope.breakpoints = [
      breakpoint: 768
      settings:
        slidesToShow: 2
        slidesToScroll: 2
    ,
      breakpoint: 480
      settings:
        slidesToShow: 1
        slidesToScroll: 1
    ]

    $scope.addLikes = ->
      $scope.profile.countLikes++
