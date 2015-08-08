'use strict';
angular.module('slick', [
  'ngRoute',
  'ngCookies'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/post', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]);
'use strict';
/**
 # @ngdoc function
 # @name angularSlickApp.controller:PostCtrl
 # @description
 # # PostCtrl
 # Controller of the angularSlickApp
*/
angular.module('slick').controller('PostCtrl', [
  '$scope',
  '$cookies',
  '$cookieStore',
  function ($scope, $cookies, $cookieStore) {
    $scope.post_body = '';
    $scope.awesomeThings = [
      {
        'id': 1,
        'body': 'Geppetto, a poor old wood carver, was making a puppet from a tree branch. \u201cYou shall be my little boy,\u201d he said to the puppet, \u201cand I shall call you \u2018Pinocchio\u2019.\u201d He worked for hours, carefully carving each detail. When he reached the mouth, the puppet started making faces at Geppetto. \u201cStop that, you naughty boy,\u201d Geppetto scolded, \u201cStop that at once !\u201d \u201cI won\u2019t stop !\u201d cried Pinocchio.',
        'comments': [{
            'id': 1,
            'comment': 'Ohh poor boy pinocchio....'
          }]
      },
      {
        'id': 2,
        'body': '\u201cOf course I can, silly,\u201d said the puppet. \u201cYou\u2019ve given me a mouth to talk with.\u201d Pinocchio rose to his feet and danced on the table top. \u201cLook what I can do !\u201d he squealed.',
        'comments': [{
            'id': 1,
            'comment': 'Pinocchio tries to rationalize'
          }]
      },
      {
        'id': 3,
        'body': '\u201cPinocchio, this is not the time to dance,\u201d Geppetto explained. \u201cYou must get a good night\u2019s rest. Tomorrow you will start going to school with the real boys. You will learn many things, including how to behave.\u201d',
        'comments': [{
            'id': 1,
            'comment': 'That\'s right!'
          }]
      },
      {
        'id': 4,
        'body': '\u201cGet off my stage,\u201d roared the Puppet Master. Then he noticed how much the crowd liked Pinocchio. He did not say anything and let Pinocchio stay. \u201cHere, you\u2019ve earned five copper coins,\u201d the Puppet Master told Pinocchio.',
        'comments': [{
            'id': 1,
            'comment': 'Earned it!'
          }]
      }
    ];
    return $scope.addPost = function (body) {
      var last, x;
      last = $scope.awesomeThings.length;
      console.log($scope.awesomeThings[last - 1].id);
      $scope.awesomeThings.push({
        post_id: $scope.awesomeThings[last - 1].id + 1,
        body: body,
        comments: []
      });
      $cookieStore.put('test', $scope.awesomeThings);
      x = $cookieStore.get('test');
      return console.log(x);
    };
  }
]);
'use strict';
/**
 # @ngdoc directive
 # @name angularSlickApp.directive:slick
 # @description
 # # slick
*/
angular.module('slick', []).directive('slick', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'AEC',
      scope: {
        initOnload: '@',
        data: '=',
        currentIndex: '=',
        accessibility: '@',
        adaptiveHeight: '@',
        arrows: '@',
        asNavFor: '@',
        appendArrows: '@',
        appendDots: '@',
        autoplay: '@',
        autoplaySpeed: '@',
        centerMode: '@',
        centerPadding: '@',
        cssEase: '@',
        customPaging: '&',
        dots: '@',
        draggable: '@',
        easing: '@',
        fade: '@',
        focusOnSelect: '@',
        infinite: '@',
        initialSlide: '@',
        lazyLoad: '@',
        onBeforeChange: '&',
        onAfterChange: '&',
        onInit: '&',
        onReInit: '&',
        onSetPosition: '&',
        pauseOnHover: '@',
        pauseOnDotsHover: '@',
        responsive: '=',
        rtl: '@',
        slide: '@',
        slidesToShow: '@',
        slidesToScroll: '@',
        speed: '@',
        swipe: '@',
        swipeToSlide: '@',
        touchMove: '@',
        touchThreshold: '@',
        useCSS: '@',
        variableWidth: '@',
        vertical: '@',
        prevArrow: '@',
        nextArrow: '@',
        slickApply: '='
      },
      link: function (scope, element, attrs) {
        var destroySlick, initializeSlick, isInitialized, slickApply;
        destroySlick = function () {
          return $timeout(function () {
            var slider;
            slider = $(element);
            slider.slick('unslick');
            slider.find('.slick-list').remove();
            return slider;
          });
        };
        slickApply = function () {
          var slider;
          slider = $(element);
          if (isInitialized) {
            slider.unslick();
          }
          apply();
          return initializeSlick();
        };
        initializeSlick = function () {
          return $timeout(function () {
            var currentIndex, customPaging, slider;
            slider = $(element);
            if (scope.currentIndex != null) {
              currentIndex = scope.currentIndex;
            }
            customPaging = function (slick, index) {
              return scope.customPaging({
                slick: slick,
                index: index
              });
            };
            slider.slick({
              accessibility: scope.accessibility !== 'false',
              adaptiveHeight: scope.adaptiveHeight === 'true',
              arrows: scope.arrows !== 'false',
              asNavFor: scope.asNavFor ? scope.asNavFor : void 0,
              appendArrows: scope.appendArrows ? $(scope.appendArrows) : $(element),
              appendDots: scope.appendDots ? $(scope.appendDots) : $(element),
              autoplay: scope.autoplay === 'true',
              autoplaySpeed: scope.autoplaySpeed != null ? parseInt(scope.autoplaySpeed, 10) : 3000,
              centerMode: scope.centerMode === 'true',
              centerPadding: scope.centerPadding || '50px',
              cssEase: scope.cssEase || 'ease',
              customPaging: attrs.customPaging ? customPaging : void 0,
              dots: scope.dots === 'true',
              draggable: scope.draggable !== 'false',
              easing: scope.easing || 'linear',
              fade: scope.fade === 'true',
              focusOnSelect: scope.focusOnSelect === 'true',
              infinite: scope.infinite !== 'false',
              initialSlide: scope.initialSlide || 0,
              lazyLoad: scope.lazyLoad || 'ondemand',
              beforeChange: attrs.onBeforeChange ? scope.onBeforeChange : void 0,
              onReInit: attrs.onReInit ? scope.onReInit : void 0,
              onSetPosition: attrs.onSetPosition ? scope.onSetPosition : void 0,
              pauseOnHover: scope.pauseOnHover !== 'false',
              responsive: scope.responsive || void 0,
              rtl: scope.rtl === 'true',
              slide: scope.slide || 'div',
              slidesToShow: scope.slidesToShow != null ? parseInt(scope.slidesToShow, 10) : 1,
              slidesToScroll: scope.slidesToScroll != null ? parseInt(scope.slidesToScroll, 10) : 1,
              speed: scope.speed != null ? parseInt(scope.speed, 10) : 300,
              swipe: scope.swipe !== 'false',
              swipeToSlide: scope.swipeToSlide === 'true',
              touchMove: scope.touchMove !== 'false',
              touchThreshold: scope.touchThreshold ? parseInt(scope.touchThreshold, 10) : 5,
              useCSS: scope.useCSS !== 'false',
              variableWidth: scope.variableWidth === 'true',
              vertical: scope.vertical === 'true',
              prevArrow: scope.prevArrow ? $(scope.prevArrow) : void 0,
              nextArrow: scope.nextArrow ? $(scope.nextArrow) : void 0
            });
            slider.on('init', function (sl) {
              if (attrs.onInit) {
                scope.onInit();
              }
              if (currentIndex != null) {
                return sl.slideHandler(currentIndex);
              }
            });
            slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
              if (scope.onAfterChange) {
                scope.onAfterChange();
              }
              if (currentIndex != null) {
                return scope.$apply(function () {
                  currentIndex = currentSlide;
                  return scope.currentIndex = currentSlide;
                });
              }
            });
            return scope.$watch('currentIndex', function (newVal, oldVal) {
              if (currentIndex != null && newVal != null && newVal !== currentIndex) {
                return slider.slick('slickGoTo', newVal);
              }
            });
          });
        };
        if (scope.initOnload) {
          isInitialized = false;
          return scope.$watch('data', function (newVal, oldVal) {
            if (newVal != null) {
              if (isInitialized) {
                destroySlick();
              }
              initializeSlick();
              return isInitialized = true;
            }
          });
        } else {
          return initializeSlick();
        }
      }
    };
  }
]);