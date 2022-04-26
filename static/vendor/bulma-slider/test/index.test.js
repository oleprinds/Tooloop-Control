'use strict';

const bulmaSlider = require('../src/js/index').default;

describe('bulmaSlider', () => {
  test('Should throw exception if instanciate with no/wrong selector', () => {
    expect(() => {
      new bulmaSlider();
    }).toThrow('An invalid selector or non-DOM node has been provided.');
  });

  test('Should return an array', () => {
    var instances = bulmaSlider.attach('.selector');
    expect(Array.isArray(instances)).toBe(true);
  });

  test('Should return an array of bulmaSlider instances', () => {
    var instances = bulmaSlider.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaSlider));
  });

  test('Should return an array of bulmaSlider instances with options', () => {
    var instances = bulmaSlider.attach('[type="date"]', {
      minDate: '2018-01-01',
      maxDate: '2018-12-31',
      dateFormat: 'yyyy-mm-dd',
    });
    instances.every(i => expect(i).toBeInstanceOf(bulmaSlider));
  });
});
