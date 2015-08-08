'use strict'

describe 'Directive: slick', ->

  # load the directive's module
  beforeEach module 'angularSlickApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<slick></slick>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the slick directive'
